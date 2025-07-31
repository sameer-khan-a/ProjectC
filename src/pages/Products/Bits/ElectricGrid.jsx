import { useRef, useEffect } from "react";
import { Renderer, Program, Triangle, Mesh } from "ogl";
import "./ElectricGrid.css";

const ElectricGrid = ({ color = "#00ffff", speed = 1.0, className = "" }) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const rendererRef = useRef(null);

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [
          parseInt(result[1], 16) / 255,
          parseInt(result[2], 16) / 255,
          parseInt(result[3], 16) / 255,
        ]
      : [0, 1, 1]; // default to cyan
  };

  useEffect(() => {
    const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 2), alpha: true });
    const gl = renderer.gl;
    rendererRef.current = renderer;

    gl.canvas.style.width = "100%";
    gl.canvas.style.height = "100%";
    containerRef.current.appendChild(gl.canvas);

    const vertex = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = position * 0.5 + 0.5;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fragment = `
      precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec3 gridColor;
      uniform float speed;
      varying vec2 vUv;

      void main() {
        vec2 uv = gl_FragCoord.xy / iResolution.xy;
        vec2 grid = fract(uv * 20.0);
        float line = min(grid.x, grid.y);
        float pulse = abs(sin(iTime * speed + uv.x * 10.0));
        float glow = smoothstep(0.02, 0.0, line) * pulse;

        vec3 color = mix(vec3(0.02), gridColor, glow);
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // ✅ All uniforms declared before program init
    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: [1, 1] },
      gridColor: { value: hexToRgb(color) },
      speed: { value: speed },
    };

    const geometry = new Triangle(gl);
    const program = new Program(gl, { vertex, fragment, uniforms });
    const mesh = new Mesh(gl, { geometry, program });

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = containerRef.current;
      renderer.setSize(w, h);
      uniforms.iResolution.value = [w * renderer.dpr, h * renderer.dpr];
    };

    const loop = (t) => {
      uniforms.iTime.value = t * 0.001;
      renderer.render({ scene: mesh });
      animationRef.current = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    animationRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      const canvas = renderer.gl.canvas;
      if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
    };
  }, [color, speed]);

  return <div ref={containerRef} className={`electric-grid ${className}`} />;
};

export default ElectricGrid;
