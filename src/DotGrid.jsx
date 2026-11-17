import React, { useEffect, useRef } from "react";

const DotGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = 0;
    let height = 0;
    let animationId;

    const mouse = { x: -1000, y: -1000 };
    const dots = [];

    const spacing = 24;
    const radius = 1.2;
    const influenceRadius = 150;
    const pushStrength = 45;
    const spring = 0.08;
    const friction = 0.82;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots.length = 0;

      for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
          dots.push({
            x,
            y,
            baseX: x,
            baseY: y,
            vx: 0,
            vy: 0,
          });
        }
      }
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (const dot of dots) {
        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < influenceRadius && distance > 0) {
          const force =
            ((influenceRadius - distance) / influenceRadius) * pushStrength;

          dot.vx += (dx / distance) * force * 0.1;
          dot.vy += (dy / distance) * force * 0.1;
        }

        dot.vx += (dot.baseX - dot.x) * spring;
        dot.vy += (dot.baseY - dot.y) * spring;

        dot.vx *= friction;
        dot.vy *= friction;

        dot.x += dot.vx;
        dot.y += dot.vy;

        const proximity = Math.max(0, 1 - distance / influenceRadius);

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius + proximity * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(125, 170, 255, ${0.35 + proximity * 0.6})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 block h-full w-full"
    />
  );
};

export default DotGrid;
