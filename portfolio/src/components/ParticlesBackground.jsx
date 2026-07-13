import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const Particles = () => {
    const meshRef = useRef();
    const { viewport } = useThree();

    const countX = 100;
    const countY = 55;
    const count = countX * countY;

    // Use a simple plane geometry for the pill shape. We will stretch it in the shader.
    const geometry = useMemo(() => new THREE.PlaneGeometry(1, 1), []);

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
    }), []);

    const material = useMemo(() => new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: `
            uniform float uTime;
            uniform vec2 uMouse;
            varying vec2 vUv;
            varying float vSize;
            varying vec2 vPos;
            
            attribute vec3 aOffset; 
            attribute float aRandom;

            #define PI 3.14159265359

            // Simple pseudo-noise for organic motion
            float hash(vec2 p) {
                return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
            }
            float noise(vec2 p) {
                vec2 i = floor(p);
                vec2 f = fract(p);
                f = f * f * (3.0 - 2.0 * f);
                
                float a = hash(i);
                float b = hash(i + vec2(1.0, 0.0));
                float c = hash(i + vec2(0.0, 1.0));
                float d = hash(i + vec2(1.0, 1.0));
                
                return mix( mix(a, b, f.x), mix(c, d, f.x), f.y);
            }

            mat2 rotate2d(float _angle){
                return mat2(cos(_angle), sin(_angle),
                            -sin(_angle), cos(_angle));
            }

            void main() {
                vUv = uv;
                
                // --- 1. ALIVE FLOW (Base layer) ---
                vec3 pos = aOffset;
                
                // Slow continuous current to make the field feel like water/air
                float driftSpeed = uTime * 0.15;
                
                float dx = sin(driftSpeed + pos.y * 0.5) + sin(driftSpeed * 0.5 + pos.y * 2.0);
                float dy = cos(driftSpeed + pos.x * 0.5) + cos(driftSpeed * 0.5 + pos.x * 2.0);
                
                pos.x += dx * 0.25; 
                pos.y += dy * 0.25;

                // --- 2. THE JELLYFISH HALO (Interaction radius) ---
                vec2 relToMouse = pos.xy - uMouse;
                float distFromMouse = length(relToMouse);
                float angleToMouse = atan(relToMouse.y, relToMouse.x);
                
                // Slowly evolving noise to warp the halo circle organically
                float shapeFactor = noise(vec2(angleToMouse * 2.0, uTime * 0.1));
                
                // Slow breathing cycle (expansion/contraction of halo)
                float breathCycle = sin(uTime * 0.8);
                
                // Halo radius breathes between 1.9 and 2.5, warped by noise
                float currentRadius = 2.2 + breathCycle * 0.3 + (shapeFactor * 0.5);
                
                // Calculate region of influence (rimWidth controls soft edges)
                float rimWidth = 1.8;
                float rimInfluence = smoothstep(rimWidth, 0.0, abs(distFromMouse - currentRadius));
                
                // --- 3. RADIAL DISPLACEMENT ---
                vec2 pushDir = normalize(relToMouse + vec2(0.0001, 0.0));
                
                // Push particles outwards when near the halo rim
                float pushAmt = (breathCycle * 0.5 + 0.5) * 0.5; // 0 to 0.5
                pos.xy += pushDir * pushAmt * rimInfluence;
                
                // Subtle Z float (3D ripple depth)
                pos.z += rimInfluence * 0.3 * sin(uTime);

                // --- 4. SCALE & DEFORMATION ---
                // Base size fluctuates slightly
                float baseSize = 0.012 + (sin(uTime + pos.x) * 0.003);
                
                // Scale up when under influence of the halo
                float activeSize = 0.055; 
                float currentScale = baseSize + (rimInfluence * activeSize);
                
                // Radial stretch along rotation axis
                float stretch = rimInfluence * 0.02;
                
                vec3 transformed = position;
                transformed.x *= (currentScale + stretch);
                transformed.y *= currentScale * 0.85; 
                
                vSize = rimInfluence;
                vPos = pos.xy;
                
                // --- 5. RADIAL ALIGNMENT (Point towards/away from cursor) ---
                float targetAngle = angleToMouse; 
                transformed.xy = rotate2d(targetAngle) * transformed.xy;
                
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos + transformed, 1.0);
            }
        `,
        fragmentShader: `
            uniform float uTime;
            varying vec2 vUv;
            varying float vSize;
            varying vec2 vPos;

            void main() {
                // Procedural Pill shape: Superellipse (Lame Curve) Math
                vec2 center = vec2(0.5);
                vec2 pos = abs(vUv - center) * 2.0; 
                
                // Exponent 2.6 creates a squircle (pill)
                float d = pow(pow(pos.x, 2.6) + pow(pos.y, 2.6), 1.0 / 2.6);
                float alpha = 1.0 - smoothstep(0.8, 1.0, d);
                
                if (alpha < 0.01) discard;

                // Color definition for Dark Mode (Option A)
                vec3 idleColor = vec3(0.3, 0.3, 0.35);      // Subtle grey-white
                vec3 cPurple = vec3(0.62, 0.12, 0.94);     // Portfolio Purple
                vec3 cIndigo = vec3(0.29, 0.18, 0.74);     // Portfolio Indigo
                vec3 cCyan = vec3(0.05, 0.64, 0.82);       // Portfolio Cyan
                
                // Dynamic shifting based on wave interference
                float t = uTime * 1.2;
                float p1 = sin(vPos.x * 0.8 + t);
                float p2 = sin(vPos.y * 0.8 + t * 0.8 + p1);
                
                // Mix active colors
                vec3 activeColor = mix(cPurple, cIndigo, p1 * 0.5 + 0.5);
                activeColor = mix(activeColor, cCyan, p2 * 0.5 + 0.5);
                
                // Interpolate final color and opacity from idle to active
                vec3 finalColor = mix(idleColor, activeColor, smoothstep(0.1, 0.8, vSize));
                float finalAlpha = alpha * mix(0.12, 0.85, vSize);

                gl_FragColor = vec4(finalColor, finalAlpha);
            }
        `,
        transparent: true,
        depthWrite: false,
    }), [uniforms]);

    // Local state tracking for global mouse movements
    const mouseRef = useRef(new THREE.Vector2(0, 0));

    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = -(event.clientY / window.innerHeight) * 2 + 1;
            mouseRef.current.set(x, y);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        if (!meshRef.current) return;

        const offsets = new Float32Array(count * 3);
        const randoms = new Float32Array(count);

        const gridWidth = 40;
        const gridHeight = 22;
        const jitter = 0.25; // Subtle offset for organic feel

        let i = 0;
        for (let y = 0; y < countY; y++) {
            for (let x = 0; x < countX; x++) {
                const u = x / (countX - 1);
                const v = y / (countY - 1);

                let px = (u - 0.5) * gridWidth;
                let py = (v - 0.5) * gridHeight;

                px += (Math.random() - 0.5) * jitter;
                py += (Math.random() - 0.5) * jitter;

                offsets[i * 3] = px;
                offsets[i * 3 + 1] = py;
                offsets[i * 3 + 2] = 0;

                randoms[i] = Math.random();
                i++;
            }
        }

        meshRef.current.geometry.setAttribute('aOffset', new THREE.InstancedBufferAttribute(offsets, 3));
        meshRef.current.geometry.setAttribute('aRandom', new THREE.InstancedBufferAttribute(randoms, 1));
    }, [count, countX, countY]);

    useFrame((state) => {
        const { clock } = state;
        material.uniforms.uTime.value = clock.getElapsedTime();

        // Softly ease uMouse coordinates to create heavy, viscous lag
        let targetX = (mouseRef.current.x * viewport.width) / 2;
        let targetY = (mouseRef.current.y * viewport.height) / 2;

        const current = material.uniforms.uMouse.value;
        const dragFactor = 0.055;
        
        current.x += (targetX - current.x) * dragFactor;
        current.y += (targetY - current.y) * dragFactor;
    });

    return (
        <instancedMesh
            ref={meshRef}
            args={[geometry, material, count]}
        />
    );
};

export default function ParticlesBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#0a0a0a]">
            <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
                <Particles />
            </Canvas>
        </div>
    );
}
