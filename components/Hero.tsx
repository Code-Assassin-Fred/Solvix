"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // PCB Color Palette - Mixed blue and gold/copper
        const colors = {
            substrate: "#0a1628",       // Dark navy PCB base
            trace: "#1a3a5c",           // Blue circuit traces
            traceHighlight: "#2a5a8c",  // Brighter blue traces
            traceGold: "#c9943a",       // Gold/copper traces
            traceGoldDark: "#8a6420",   // Darker gold
            traceGoldHighlight: "#e8b84a", // Bright gold
            solder: "#b87333",          // Copper solder points
            solderHighlight: "#d4a84c", // Gold highlighted solder
            viaHole: "#060d14",         // Via holes (dark)
            viaRing: "#c9943a",         // Gold via hole rings
            viaRingBlue: "#4a6fa5",     // Blue via rings
            pulse: "#00d4ff",           // Current pulse color (cyan)
            pulseGlow: "#00a8cc",       // Pulse glow
            silkscreen: "#d4d4d4",      // White silkscreen text
            component: "#1a1a2e",       // Component body
            componentLead: "#c0c0c0",   // Component leads
        };

        interface Trace {
            points: { x: number; y: number }[];
            width: number;
            pulsePos: number;
            pulseSpeed: number;
            pulseActive: boolean;
            pulseDelay: number;
            layer: number; // 0 = bottom, 1 = top layer
            isGold: boolean; // Gold or blue colored trace
        }

        interface Via {
            x: number;
            y: number;
            size: number;
        }

        interface SolderPoint {
            x: number;
            y: number;
            size: number;
        }

        interface Component {
            x: number;
            y: number;
            width: number;
            height: number;
            type: "capacitor" | "resistor" | "vrm" | "chip";
            rotation: number;
        }

        let traces: Trace[] = [];
        let vias: Via[] = [];
        let solderPoints: SolderPoint[] = [];
        let components: Component[] = [];
        let cpuSize = 0;
        let centerX = 0;
        let centerY = 0;

        const generatePCB = () => {
            traces = [];
            vias = [];
            solderPoints = [];
            components = [];

            centerX = canvas.width / 3; // Positioned 1/3 from left
            centerY = canvas.height / 2;
            cpuSize = Math.min(canvas.width, canvas.height) * 0.15;

            // Generate traces radiating from CPU to all edges
            const pinCount = 24;
            const sides = ["top", "bottom", "left", "right"];

            sides.forEach((side) => {
                for (let i = 0; i < pinCount; i++) {
                    const pinSpacing = cpuSize / (pinCount + 1);
                    const pinOffset = pinSpacing * (i + 1) - cpuSize / 2;
                    let startX: number, startY: number;
                    let dirX: number, dirY: number;

                    if (side === "top") {
                        startX = centerX + pinOffset;
                        startY = centerY - cpuSize / 2;
                        dirX = 0; dirY = -1;
                    } else if (side === "bottom") {
                        startX = centerX + pinOffset;
                        startY = centerY + cpuSize / 2;
                        dirX = 0; dirY = 1;
                    } else if (side === "left") {
                        startX = centerX - cpuSize / 2;
                        startY = centerY + pinOffset;
                        dirX = -1; dirY = 0;
                    } else {
                        startX = centerX + cpuSize / 2;
                        startY = centerY + pinOffset;
                        dirX = 1; dirY = 0;
                    }

                    // Create main trace with PCB-style 90° routing
                    const points: { x: number; y: number }[] = [{ x: startX, y: startY }];
                    let currentX = startX;
                    let currentY = startY;

                    // Extend trace to edge (longer on the right side)
                    const sideMaxDist = side === "right" ? canvas.width * 0.8 : canvas.width * 0.5;
                    const segments = 3 + Math.floor(Math.random() * 3);

                    for (let s = 0; s < segments; s++) {
                        const segmentLength = sideMaxDist / segments * (0.6 + Math.random() * 0.8);

                        if (s === 0) {
                            currentX += dirX * segmentLength;
                            currentY += dirY * segmentLength;
                        } else {
                            const turnChance = Math.random();
                            if (side === "top" || side === "bottom") {
                                const horizontalDir = ((i % 2 === 0) ? 1 : -1) * (turnChance > 0.3 ? 1 : -1);
                                currentX += horizontalDir * segmentLength * (0.4 + Math.random() * 0.6);
                            } else {
                                const verticalDir = ((i % 2 === 0) ? 1 : -1) * (turnChance > 0.3 ? 1 : -1);
                                currentY += verticalDir * segmentLength * (0.4 + Math.random() * 0.6);
                            }
                        }
                        points.push({ x: currentX, y: currentY });

                        // Add solder pad at turn points
                        if (s > 0) {
                            solderPoints.push({ x: currentX, y: currentY, size: 4 + Math.random() * 2 });
                        }
                    }

                    // Solder pad at endpoint
                    solderPoints.push({ x: currentX, y: currentY, size: 5 + Math.random() * 2 });

                    traces.push({
                        points,
                        width: 4 + Math.random() * 4,
                        pulsePos: 0,
                        pulseSpeed: 0.004 + Math.random() * 0.006,
                        pulseActive: Math.random() > 0.4,
                        pulseDelay: Math.random() * 150,
                        layer: Math.random() > 0.5 ? 1 : 0,
                        isGold: i % 2 === 0,
                    });

                    // Parallel return traces
                    if (Math.random() > 0.6) {
                        const offset = 12 + Math.random() * 8;
                        const returnPoints = points.map((p) => {
                            if (side === "top" || side === "bottom") {
                                return { x: p.x + offset, y: p.y };
                            } else {
                                return { x: p.x, y: p.y + offset };
                            }
                        });

                        traces.push({
                            points: returnPoints.reverse(),
                            width: 3 + Math.random() * 3,
                            pulsePos: 0,
                            pulseSpeed: 0.003 + Math.random() * 0.005,
                            pulseActive: Math.random() > 0.5,
                            pulseDelay: Math.random() * 150 + 50,
                            layer: Math.random() > 0.5 ? 1 : 0,
                            isGold: i % 2 !== 0,
                        });
                    }
                }
            });

            // Add bus traces
            for (let i = 0; i < 20; i++) {
                const startEdge = Math.floor(Math.random() * 4);
                let startX, startY, endX, endY;

                if (startEdge === 0) { startX = Math.random() * canvas.width; startY = 0; endX = Math.random() * canvas.width; endY = canvas.height; }
                else if (startEdge === 1) { startX = Math.random() * canvas.width; startY = canvas.height; endX = Math.random() * canvas.width; endY = 0; }
                else if (startEdge === 2) { startX = 0; startY = Math.random() * canvas.height; endX = canvas.width; endY = Math.random() * canvas.height; }
                else { startX = canvas.width; startY = Math.random() * canvas.height; endX = 0; endY = Math.random() * canvas.height; }

                const points = [{ x: startX, y: startY }];
                const midX = (startX + endX) / 2 + (Math.random() - 0.5) * 200;
                const midY = (startY + endY) / 2 + (Math.random() - 0.5) * 200;

                if (startEdge < 2) { points.push({ x: startX, y: midY }); points.push({ x: midX, y: midY }); points.push({ x: midX, y: endY }); }
                else { points.push({ x: midX, y: startY }); points.push({ x: midX, y: midY }); points.push({ x: endX, y: midY }); }
                points.push({ x: endX, y: endY });

                traces.push({
                    points,
                    width: 3 + Math.random() * 3,
                    pulsePos: Math.random(),
                    pulseSpeed: 0.002 + Math.random() * 0.004,
                    pulseActive: Math.random() > 0.5,
                    pulseDelay: Math.random() * 100,
                    layer: 0,
                    isGold: i % 3 === 0,
                });
            }

            // Generate components around the CPU
            const componentPositions = [
                ...Array(6).fill(0).map((_, i) => ({ x: centerX - cpuSize + (i * cpuSize * 0.4), y: centerY - cpuSize - 25, type: "capacitor" as const, rotation: 0 })),
                ...Array(6).fill(0).map((_, i) => ({ x: centerX - cpuSize + (i * cpuSize * 0.4), y: centerY + cpuSize + 25, type: "capacitor" as const, rotation: 0 })),
                { x: centerX - cpuSize - 50, y: centerY - 30, type: "vrm" as const, rotation: 0 },
                { x: centerX - cpuSize - 50, y: centerY + 30, type: "vrm" as const, rotation: 0 },
                { x: centerX + cpuSize + 40, y: centerY - 30, type: "chip" as const, rotation: 0 },
            ];

            componentPositions.forEach((pos) => {
                let width = 12, height = 8;
                if (pos.type === "vrm") { width = 20; height = 30; }
                if (pos.type === "chip") { width = 25; height = 18; }
                components.push({ x: pos.x, y: pos.y, width, height, type: pos.type, rotation: pos.rotation });
            });
        };

        const drawTrace = (trace: Trace) => {
            if (trace.points.length < 2) return;
            ctx.beginPath();
            ctx.moveTo(trace.points[0].x, trace.points[0].y);
            for (let i = 1; i < trace.points.length; i++) { ctx.lineTo(trace.points[i].x, trace.points[i].y); }
            if (trace.isGold) ctx.strokeStyle = trace.layer === 1 ? colors.traceGoldHighlight : colors.traceGold;
            else ctx.strokeStyle = trace.layer === 1 ? colors.traceHighlight : colors.trace;
            ctx.lineWidth = trace.width;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.stroke();
        };

        const drawVia = (via: Via, index: number) => {
            ctx.beginPath();
            ctx.arc(via.x, via.y, via.size, 0, Math.PI * 2);
            ctx.fillStyle = index % 2 === 0 ? colors.viaRing : colors.viaRingBlue;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(via.x, via.y, via.size * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = colors.viaHole;
            ctx.fill();
        };

        const drawSolderPoint = (point: SolderPoint) => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
            ctx.fillStyle = colors.solder;
            ctx.fill();
            ctx.beginPath();
            ctx.arc(point.x - point.size * 0.2, point.y - point.size * 0.2, point.size * 0.3, 0, Math.PI * 2);
            ctx.fillStyle = colors.solderHighlight;
            ctx.fill();
        };

        const drawComponent = (comp: Component) => {
            ctx.save();
            ctx.translate(comp.x, comp.y);
            ctx.rotate(comp.rotation);
            if (comp.type === "capacitor" || comp.type === "resistor") {
                ctx.fillStyle = colors.component;
                ctx.fillRect(-comp.width / 2, -comp.height / 2, comp.width, comp.height);
                ctx.fillStyle = colors.componentLead;
                ctx.fillRect(-comp.width / 2 - 2, -comp.height / 2, 3, comp.height);
                ctx.fillRect(comp.width / 2 - 1, -comp.height / 2, 3, comp.height);
            } else if (comp.type === "vrm") {
                ctx.fillStyle = "#161616";
                ctx.fillRect(-comp.width / 2, -comp.height / 2, comp.width, comp.height);
                ctx.strokeStyle = "#333";
                ctx.lineWidth = 1;
                for (let i = 0; i < 4; i++) {
                    const y = -comp.height / 2 + (comp.height / 4) * i + 4;
                    ctx.beginPath(); ctx.moveTo(-comp.width / 2 + 2, y); ctx.lineTo(comp.width / 2 - 2, y); ctx.stroke();
                }
            } else if (comp.type === "chip") {
                ctx.fillStyle = "#161616";
                ctx.fillRect(-comp.width / 2, -comp.height / 2, comp.width, comp.height);
                ctx.fillStyle = colors.componentLead;
                for (let i = 0; i < 3; i++) {
                    const x = -comp.width / 2 + 4 + i * 8;
                    ctx.fillRect(x, -comp.height / 2 - 2, 2, 3);
                    ctx.fillRect(x, comp.height / 2 - 1, 2, 3);
                }
            }
            ctx.restore();
        };

        const drawPulse = (trace: Trace, frameCount: number) => {
            if (!trace.pulseActive || frameCount < trace.pulseDelay) return;
            const points = trace.points;
            let totalLength = 0;
            const segments: number[] = [0];
            for (let i = 1; i < points.length; i++) {
                const segLength = Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
                totalLength += segLength;
                segments.push(totalLength);
            }
            const currentDistance = trace.pulsePos * totalLength;
            for (let i = 1; i < segments.length; i++) {
                if (currentDistance <= segments[i]) {
                    const segmentStart = segments[i - 1];
                    const segmentLength = segments[i] - segments[i - 1];
                    const segmentProgress = (currentDistance - segmentStart) / segmentLength;
                    const pulseX = points[i - 1].x + (points[i].x - points[i - 1].x) * segmentProgress;
                    const pulseY = points[i - 1].y + (points[i].y - points[i - 1].y) * segmentProgress;
                    const glowSize = 15;
                    const pulseGradient = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, glowSize);
                    pulseGradient.addColorStop(0, "rgba(0, 212, 255, 0.8)");
                    pulseGradient.addColorStop(0.4, "rgba(0, 168, 204, 0.4)");
                    pulseGradient.addColorStop(1, "rgba(0, 168, 204, 0)");
                    ctx.beginPath(); ctx.arc(pulseX, pulseY, glowSize, 0, Math.PI * 2); ctx.fillStyle = pulseGradient; ctx.fill();
                    ctx.beginPath(); ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2); ctx.fillStyle = "#ffffff"; ctx.fill();
                    break;
                }
            }
        };

        const drawCPU = (time: number) => {
            const gradient = ctx.createLinearGradient(centerX - cpuSize / 2, centerY - cpuSize / 2, centerX + cpuSize / 2, centerY + cpuSize / 2);
            gradient.addColorStop(0, "#0f1a2e"); gradient.addColorStop(0.5, "#1a2a4e"); gradient.addColorStop(1, "#0f1a2e");
            ctx.fillStyle = gradient; ctx.fillRect(centerX - cpuSize / 2, centerY - cpuSize / 2, cpuSize, cpuSize);
            const glowIntensity = 0.5 + Math.sin(time * 0.002) * 0.3;
            ctx.strokeStyle = `rgba(201, 148, 58, ${glowIntensity})`; ctx.lineWidth = 3; ctx.strokeRect(centerX - cpuSize / 2, centerY - cpuSize / 2, cpuSize, cpuSize);
            ctx.strokeStyle = `rgba(0, 212, 255, ${glowIntensity * 0.5})`; ctx.lineWidth = 1; ctx.strokeRect(centerX - cpuSize / 2 + 4, centerY - cpuSize / 2 + 4, cpuSize - 8, cpuSize - 8);
            ctx.strokeStyle = "#2a3a5c"; ctx.lineWidth = 0.5;
            const padding = cpuSize * 0.12; const innerSize = cpuSize - padding * 2; const gridCount = 6;
            for (let i = 0; i <= gridCount; i++) {
                const pos = (innerSize / gridCount) * i;
                ctx.beginPath(); ctx.moveTo(centerX - cpuSize / 2 + padding + pos, centerY - cpuSize / 2 + padding); ctx.lineTo(centerX - cpuSize / 2 + padding + pos, centerY + cpuSize / 2 - padding); ctx.stroke();
                ctx.beginPath(); ctx.moveTo(centerX - cpuSize / 2 + padding, centerY - cpuSize / 2 + padding + pos); ctx.lineTo(centerX + cpuSize / 2 - padding, centerY - cpuSize / 2 + padding + pos); ctx.stroke();
            }
            ctx.fillStyle = colors.silkscreen; ctx.font = `bold ${cpuSize * 0.14}px monospace`; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText("SOLVIX", centerX, centerY - cpuSize * 0.08);
            ctx.font = `${cpuSize * 0.09}px monospace`; ctx.fillStyle = "#6a8ab0"; ctx.fillText("AI CORE", centerX, centerY + cpuSize * 0.12);
            const centerGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, cpuSize * 0.4);
            centerGlow.addColorStop(0, `rgba(201, 148, 58, ${0.1 + Math.sin(time * 0.005) * 0.05})`); centerGlow.addColorStop(1, "rgba(201, 148, 58, 0)");
            ctx.fillStyle = centerGlow; ctx.fillRect(centerX - cpuSize / 2, centerY - cpuSize / 2, cpuSize, cpuSize);
            const pinCount = 24; const pinSpacing = cpuSize / (pinCount + 1); const pinLength = 12; const pinWidth = 3;
            ctx.fillStyle = colors.traceGold;
            for (let i = 1; i <= pinCount; i++) {
                const offset = pinSpacing * i;
                ctx.fillRect(centerX - cpuSize / 2 + offset - pinWidth / 2, centerY - cpuSize / 2 - pinLength, pinWidth, pinLength);
                ctx.fillRect(centerX - cpuSize / 2 + offset - pinWidth / 2, centerY + cpuSize / 2, pinWidth, pinLength);
                ctx.fillRect(centerX - cpuSize / 2 - pinLength, centerY - cpuSize / 2 + offset - pinWidth / 2, pinLength, pinWidth);
                ctx.fillRect(centerX + cpuSize / 2, centerY - cpuSize / 2 + offset - pinWidth / 2, pinLength, pinWidth);
            }
        };

        let animationId: number;
        let frameCount = 0;

        const animate = (time: number) => {
            frameCount++;
            ctx.fillStyle = colors.substrate; ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = "#111a27"; ctx.lineWidth = 0.3; const gridSize = 30;
            for (let x = 0; x < canvas.width; x += gridSize) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke(); }
            for (let y = 0; y < canvas.height; y += gridSize) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke(); }
            traces.filter(t => t.layer === 0).forEach(drawTrace);
            vias.forEach((via, index) => drawVia(via, index));
            solderPoints.forEach(drawSolderPoint);
            components.forEach(drawComponent);
            traces.filter(t => t.layer === 1).forEach(drawTrace);
            traces.forEach((trace) => {
                drawPulse(trace, frameCount);
                if (trace.pulseActive && frameCount >= trace.pulseDelay) {
                    trace.pulsePos += trace.pulseSpeed;
                    if (trace.pulsePos > 1) { trace.pulsePos = 0; trace.pulseDelay = frameCount + Math.random() * 80; }
                }
            });
            drawCPU(time);
            const vignette = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) * 0.75);
            vignette.addColorStop(0, "transparent"); vignette.addColorStop(1, "rgba(0, 0, 0, 0.5)");
            ctx.fillStyle = vignette; ctx.fillRect(0, 0, canvas.width, canvas.height);
            animationId = requestAnimationFrame(animate);
        };

        const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight - 96; generatePCB(); };
        handleResize();
        window.addEventListener("resize", handleResize);
        animationId = requestAnimationFrame(animate);
        return () => { window.removeEventListener("resize", handleResize); cancelAnimationFrame(animationId); };
    }, []);

    return (
        <div className="relative w-full bg-[#0a1628] overflow-hidden" style={{ height: "calc(100vh - 96px)" }}>
            <canvas ref={canvasRef} className="absolute top-0 left-0 block" style={{ width: "100%", height: "100%" }} />

            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-[#0a1628]/60 z-1" />

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 select-none">
                <div className="mx-auto h-full max-w-7xl px-6 lg:px-8 flex flex-col justify-center text-left">
                    {/* Main Title */}
                    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-2xl mb-6 max-w-4xl">
                        Solvix: Where present-day business challenges meet <span className="text-[#FBDB6B]">intelligent solutions.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed drop-shadow-lg mb-10 font-medium">
                        Founded to deliver smarter, more efficient operations, Solvix leads with cutting-edge software and AI solutions, building lasting trust with organizations through transparent, forward-thinking collaboration.
                    </p>

                    {/* CTA Button */}
                    <div className="flex pointer-events-auto">
                        <button className="bg-[#FBDB6B] hover:bg-[#f5cf4a] text-[#0a1628] font-bold py-4 px-10 rounded-full text-lg md:text-xl transition-all hover:scale-105 active:scale-95 shadow-xl">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
