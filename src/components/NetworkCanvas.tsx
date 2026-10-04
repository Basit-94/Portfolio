import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  pulsePhase: number;
}

interface Packet {
  sourceIndex: number;
  targetIndex: number;
  progress: number;
  speed: number;
  color: string;
}

interface NetworkCanvasProps {
  theme?: 'dark' | 'light';
}

export const NetworkCanvas: React.FC<NetworkCanvasProps> = ({ theme = 'dark' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    const mouse = { x: -1000, y: -1000, radius: 160 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const particles: Particle[] = [];
    const packets: Packet[] = [];
    const nodeCount = Math.min(Math.floor((width * height) / 20000), 50);

    const darkColors = ['#00f2fe', '#38bdf8', '#818cf8', '#34d399'];
    const lightColors = ['#0284c7', '#2563eb', '#7c3aed', '#059669'];
    const activeColors = theme === 'dark' ? darkColors : lightColors;

    function initNodes() {
      particles.length = 0;
      for (let i = 0; i < nodeCount; i++) {
        const radius = Math.random() * 2 + 1.8;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius,
          baseRadius: radius,
          color: activeColors[Math.floor(Math.random() * activeColors.length)],
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    }

    initNodes();

    const packetInterval = setInterval(() => {
      if (particles.length > 2 && packets.length < 14) {
        const sourceIndex = Math.floor(Math.random() * particles.length);
        let targetIndex = Math.floor(Math.random() * particles.length);
        while (targetIndex === sourceIndex) {
          targetIndex = Math.floor(Math.random() * particles.length);
        }
        packets.push({
          sourceIndex,
          targetIndex,
          progress: 0,
          speed: 0.01 + Math.random() * 0.012,
          color: theme === 'dark' ? '#00f2fe' : '#0284c7',
        });
      }
    }, 600);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update & Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.pulsePhase += 0.03;
        const currentRadius = p.baseRadius + Math.sin(p.pulsePhase) * 0.6;

        // Mouse interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 2.5;
          p.y -= (dy / dist) * force * 2.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        if (theme === 'dark') {
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distSq = (p.x - p2.x) ** 2 + (p.y - p2.y) ** 2;
          const maxDist = 130;

          if (distSq < maxDist * maxDist) {
            const alpha = 1 - Math.sqrt(distSq) / maxDist;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle =
              theme === 'dark'
                ? `rgba(56, 189, 248, ${alpha * 0.18})`
                : `rgba(2, 132, 199, ${alpha * 0.12})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw active packet trails
      for (let k = packets.length - 1; k >= 0; k--) {
        const pkt = packets[k];
        const src = particles[pkt.sourceIndex];
        const tgt = particles[pkt.targetIndex];

        if (!src || !tgt) {
          packets.splice(k, 1);
          continue;
        }

        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(k, 1);
          continue;
        }

        const currX = src.x + (tgt.x - src.x) * pkt.progress;
        const currY = src.y + (tgt.y - src.y) * pkt.progress;

        ctx.beginPath();
        ctx.arc(currX, currY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(packetInterval);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 transition-opacity duration-500 ${
        theme === 'dark' ? 'opacity-35 mix-blend-screen' : 'opacity-30'
      }`}
    />
  );
};
