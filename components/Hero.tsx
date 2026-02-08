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

        let traces: Trace[] = [];
        let vias: Via[] = [];
        let solderPoints: SolderPoint[] = [];
        let cpuSize = 0;
        let centerX = 0;
        let centerY = 0;

        const generatePCB = () => {
            traces = [];
            vias = [];
            solderPoints = [];

            centerX = canvas.width / 2;
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

                    // Extend trace to edge with turns
                    const maxDistance = Math.max(canvas.width, canvas.height) * 0.6;
                    const segments = 3 + Math.floor(Math.random() * 3);

                    for (let s = 0; s < segments; s++) {
                        const segmentLength = maxDistance / segments * (0.6 + Math.random() * 0.8);

                        if (s === 0) {
                            // First segment: straight out from CPU
                            currentX += dirX * segmentLength;
                            currentY += dirY * segmentLength;
                        } else {
                            // Turn 90 degrees
                            const turnChance = Math.random();
                            if (side === "top" || side === "bottom") {
                                // Was going vertical, now go horizontal
                                const horizontalDir = ((i % 2 === 0) ? 1 : -1) * (turnChance > 0.3 ? 1 : -1);
                                currentX += horizontalDir * segmentLength * (0.4 + Math.random() * 0.6);
                            } else {
                                // Was going horizontal, now go vertical
                                const verticalDir = ((i % 2 === 0) ? 1 : -1) * (turnChance > 0.3 ? 1 : -1);
                                currentY += verticalDir * segmentLength * (0.4 + Math.random() * 0.6);
                            }
                        }
                        points.push({ x: currentX, y: currentY });

                        // Add via at turn points
                        if (s > 0 && Math.random() > 0.6) {
                            vias.push({ x: currentX, y: currentY, size: 4 + Math.random() * 3 });
                        }
                    }

                    // Add solder points along traces
                    if (Math.random() > 0.7) {
                        const midIdx = Math.floor(points.length / 2);
                        if (points[midIdx]) {
                            solderPoints.push({
                                x: points[midIdx].x,
                                y: points[midIdx].y,
                                size: 6 + Math.random() * 4,
                            });
                        }
                    }

                    traces.push({
                        points,
                        width: 1.5 + Math.random() * 2,
                        pulsePos: 0,
                        pulseSpeed: 0.004 + Math.random() * 0.006,
                        pulseActive: Math.random() > 0.4,
                        pulseDelay: Math.random() * 150,
                        layer: Math.random() > 0.5 ? 1 : 0,
                        isGold: i % 2 === 0, // Alternate between gold and blue
                    });

                    // Add parallel return traces for some
                    if (Math.random() > 0.6) {
                        const offset = 6 + Math.random() * 4;
                        const returnPoints = points.map((p) => {
                            if (side === "top" || side === "bottom") {
                                return { x: p.x + offset, y: p.y };
                            } else {
                                return { x: p.x, y: p.y + offset };
                            }
                        });

                        traces.push({
                            points: returnPoints.reverse(),
                            width: 1 + Math.random() * 1.5,
                            pulsePos: 0,
                            pulseSpeed: 0.003 + Math.random() * 0.005,
                            pulseActive: Math.random() > 0.5,
                            pulseDelay: Math.random() * 150 + 50,
                            layer: Math.random() > 0.5 ? 1 : 0,
                            isGold: i % 2 !== 0, // Opposite of main trace
                        });
                    }
                }
            });

            // Add extra traces connecting different areas (bus traces)
            for (let i = 0; i < 20; i++) {
                const startEdge = Math.floor(Math.random() * 4);
                let startX, startY, endX, endY;

                // Start from edges
                if (startEdge === 0) { // top
                    startX = Math.random() * canvas.width;
                    startY = 0;
                    endX = Math.random() * canvas.width;
                    endY = canvas.height;
                } else if (startEdge === 1) { // bottom
                    startX = Math.random() * canvas.width;
                    startY = canvas.height;
                    endX = Math.random() * canvas.width;
                    endY = 0;
                } else if (startEdge === 2) { // left
                    startX = 0;
                    startY = Math.random() * canvas.height;
                    endX = canvas.width;
                    endY = Math.random() * canvas.height;
                } else { // right
                    startX = canvas.width;
                    startY = Math.random() * canvas.height;
                    endX = 0;
                    endY = Math.random() * canvas.height;
                }

                // Create path with 90° turns
                const points = [{ x: startX, y: startY }];
                const midX = (startX + endX) / 2 + (Math.random() - 0.5) * 200;
                const midY = (startY + endY) / 2 + (Math.random() - 0.5) * 200;

                // First turn
                if (startEdge < 2) {
                    points.push({ x: startX, y: midY });
                    points.push({ x: midX, y: midY });
                    points.push({ x: midX, y: endY });
                } else {
                    points.push({ x: midX, y: startY });
                    points.push({ x: midX, y: midY });
                    points.push({ x: endX, y: midY });
                }
                points.push({ x: endX, y: endY });

                traces.push({
                    points,
                    width: 1 + Math.random() * 1.5,
                    pulsePos: Math.random(),
                    pulseSpeed: 0.002 + Math.random() * 0.004,
                    pulseActive: Math.random() > 0.5,
                    pulseDelay: Math.random() * 100,
                    layer: 0,
                    isGold: i % 3 === 0, // Some gold bus traces
                });
            }
        };

        const drawTrace = (trace: Trace) => {
            if (trace.points.length < 2) return;

            ctx.beginPath();
            ctx.moveTo(trace.points[0].x, trace.points[0].y);
            for (let i = 1; i < trace.points.length; i++) {
                ctx.lineTo(trace.points[i].x, trace.points[i].y);
            }
            // Use gold or blue based on trace type
            if (trace.isGold) {
                ctx.strokeStyle = trace.layer === 1 ? colors.traceGoldHighlight : colors.traceGold;
            } else {
                ctx.strokeStyle = trace.layer === 1 ? colors.traceHighlight : colors.trace;
            }
            ctx.lineWidth = trace.width;
            ctx.lineCap = "square";
            ctx.stroke();
        };

        const drawVia = (via: Via, index: number) => {
            // Outer ring - alternate between gold and blue
            ctx.beginPath();
            ctx.arc(via.x, via.y, via.size, 0, Math.PI * 2);
            ctx.fillStyle = index % 2 === 0 ? colors.viaRing : colors.viaRingBlue;
            ctx.fill();

            // Inner hole
            ctx.beginPath();
            ctx.arc(via.x, via.y, via.size * 0.5, 0, Math.PI * 2);
            ctx.fillStyle = colors.viaHole;
            ctx.fill();
        };

        const drawSolderPoint = (point: SolderPoint) => {
            // Outer pad
            ctx.beginPath();
            ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
            ctx.fillStyle = colors.solder;
            ctx.fill();

            // Highlight
            ctx.beginPath();
            ctx.arc(point.x - point.size * 0.2, point.y - point.size * 0.2, point.size * 0.3, 0, Math.PI * 2);
            ctx.fillStyle = colors.solderHighlight;
            ctx.fill();
        };

        const drawPulse = (trace: Trace, frameCount: number) => {
            if (!trace.pulseActive || frameCount < trace.pulseDelay) return;

            const points = trace.points;
            let totalLength = 0;
            const segments: number[] = [0];

            for (let i = 1; i < points.length; i++) {
                const segLength = Math.hypot(
                    points[i].x - points[i - 1].x,
                    points[i].y - points[i - 1].y
                );
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

                    // Pulse glow
                    const glowSize = 15;
                    const pulseGradient = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, glowSize);
                    pulseGradient.addColorStop(0, "rgba(0, 212, 255, 0.8)");
                    pulseGradient.addColorStop(0.4, "rgba(0, 168, 204, 0.4)");
                    pulseGradient.addColorStop(1, "rgba(0, 168, 204, 0)");

                    ctx.beginPath();
                    ctx.arc(pulseX, pulseY, glowSize, 0, Math.PI * 2);
                    ctx.fillStyle = pulseGradient;
                    ctx.fill();

                    // Pulse core
                    ctx.beginPath();
                    ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
                    ctx.fillStyle = "#ffffff";
                    ctx.fill();

                    break;
                }
            }
        };

        const drawCPU = (time: number) => {
            // CPU body
            const gradient = ctx.createLinearGradient(
                centerX - cpuSize / 2,
                centerY - cpuSize / 2,
                centerX + cpuSize / 2,
                centerY + cpuSize / 2
            );
            gradient.addColorStop(0, "#0f1a2e");
            gradient.addColorStop(0.5, "#1a2a4e");
            gradient.addColorStop(1, "#0f1a2e");

            ctx.fillStyle = gradient;
            ctx.fillRect(centerX - cpuSize / 2, centerY - cpuSize / 2, cpuSize, cpuSize);

            // Glowing border (gold accent with cyan pulse)
            const glowIntensity = 0.5 + Math.sin(time * 0.002) * 0.3;
            ctx.strokeStyle = `rgba(201, 148, 58, ${glowIntensity})`;
            ctx.lineWidth = 3;
            ctx.strokeRect(centerX - cpuSize / 2, centerY - cpuSize / 2, cpuSize, cpuSize);

            // Inner cyan glow
            ctx.strokeStyle = `rgba(0, 212, 255, ${glowIntensity * 0.5})`;
            ctx.lineWidth = 1;
            ctx.strokeRect(centerX - cpuSize / 2 + 4, centerY - cpuSize / 2 + 4, cpuSize - 8, cpuSize - 8);

            // Inner die grid
            ctx.strokeStyle = "#2a3a5c";
            ctx.lineWidth = 0.5;
            const padding = cpuSize * 0.12;
            const innerSize = cpuSize - padding * 2;
            const gridCount = 6;

            for (let i = 0; i <= gridCount; i++) {
                const pos = (innerSize / gridCount) * i;
                ctx.beginPath();
                ctx.moveTo(centerX - cpuSize / 2 + padding + pos, centerY - cpuSize / 2 + padding);
                ctx.lineTo(centerX - cpuSize / 2 + padding + pos, centerY + cpuSize / 2 - padding);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(centerX - cpuSize / 2 + padding, centerY - cpuSize / 2 + padding + pos);
                ctx.lineTo(centerX + cpuSize / 2 - padding, centerY - cpuSize / 2 + padding + pos);
                ctx.stroke();
            }

            // CPU text - SOLVIX branding
            ctx.fillStyle = colors.silkscreen;
            ctx.font = `bold ${cpuSize * 0.14}px monospace`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("SOLVIX", centerX, centerY - cpuSize * 0.08);

            ctx.font = `${cpuSize * 0.09}px monospace`;
            ctx.fillStyle = "#6a8ab0";
            ctx.fillText("AI CORE", centerX, centerY + cpuSize * 0.12);

            // Center activity glow
            const centerGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, cpuSize * 0.4);
            centerGlow.addColorStop(0, `rgba(201, 148, 58, ${0.1 + Math.sin(time * 0.005) * 0.05})`);
            centerGlow.addColorStop(1, "rgba(201, 148, 58, 0)");
            ctx.fillStyle = centerGlow;
            ctx.fillRect(centerX - cpuSize / 2, centerY - cpuSize / 2, cpuSize, cpuSize);

            // Pins on all sides (gold colored)
            const pinCount = 24;
            const pinSpacing = cpuSize / (pinCount + 1);
            const pinLength = 12;
            const pinWidth = 3;

            ctx.fillStyle = colors.traceGold;

            for (let i = 1; i <= pinCount; i++) {
                const offset = pinSpacing * i;
                // Top
                ctx.fillRect(centerX - cpuSize / 2 + offset - pinWidth / 2, centerY - cpuSize / 2 - pinLength, pinWidth, pinLength);
                // Bottom
                ctx.fillRect(centerX - cpuSize / 2 + offset - pinWidth / 2, centerY + cpuSize / 2, pinWidth, pinLength);
                // Left
                ctx.fillRect(centerX - cpuSize / 2 - pinLength, centerY - cpuSize / 2 + offset - pinWidth / 2, pinLength, pinWidth);
                // Right
                ctx.fillRect(centerX + cpuSize / 2, centerY - cpuSize / 2 + offset - pinWidth / 2, pinLength, pinWidth);
            }
        };

        let animationId: number;
        let frameCount = 0;

        const animate = (time: number) => {
            frameCount++;

            // Clear with substrate color
            ctx.fillStyle = colors.substrate;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Subtle grid texture
            ctx.strokeStyle = "#111a27";
            ctx.lineWidth = 0.3;
            const gridSize = 30;
            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            // Draw bottom layer traces first
            traces.filter(t => t.layer === 0).forEach(drawTrace);

            // Draw vias
            vias.forEach((via, index) => drawVia(via, index));

            // Draw solder points
            solderPoints.forEach(drawSolderPoint);

            // Draw top layer traces
            traces.filter(t => t.layer === 1).forEach(drawTrace);

            // Draw pulses
            traces.forEach((trace) => {
                drawPulse(trace, frameCount);
                if (trace.pulseActive && frameCount >= trace.pulseDelay) {
                    trace.pulsePos += trace.pulseSpeed;
                    if (trace.pulsePos > 1) {
                        trace.pulsePos = 0;
                        trace.pulseDelay = frameCount + Math.random() * 80;
                    }
                }
            });

            // Draw CPU on top
            drawCPU(time);

            // Vignette
            const vignette = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                0,
                canvas.width / 2,
                canvas.height / 2,
                Math.max(canvas.width, canvas.height) * 0.75
            );
            vignette.addColorStop(0, "transparent");
            vignette.addColorStop(1, "rgba(0, 0, 0, 0.5)");
            ctx.fillStyle = vignette;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            animationId = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight - 96;
            generatePCB();
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        animationId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <div className="relative w-full bg-[#0a1628]" style={{ height: "calc(100vh - 96px)" }}>
            <canvas
                ref={canvasRef}
                className="absolute top-0 left-0 block"
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
}
