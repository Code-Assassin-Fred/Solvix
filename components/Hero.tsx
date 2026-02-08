"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const bgColor = "#0a1628";
        const circuitColor = "#1a3a5c";

        interface CircuitPath {
            points: { x: number; y: number }[];
            currentPos: number;
            speed: number;
            direction: number;
            glowIntensity: number;
        }

        const gridSize = 60;
        let nodes: { x: number; y: number; size: number }[] = [];
        let paths: CircuitPath[] = [];

        const generateCircuit = () => {
            nodes = [];
            paths = [];

            const cols = Math.ceil(canvas.width / gridSize) + 2;
            const rows = Math.ceil(canvas.height / gridSize) + 2;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    if (Math.random() > 0.3) {
                        nodes.push({
                            x: i * gridSize + (Math.random() - 0.5) * 20,
                            y: j * gridSize + (Math.random() - 0.5) * 20,
                            size: Math.random() * 4 + 2,
                        });
                    }
                }
            }

            for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                const nearbyNodes = nodes.filter((n, idx) => {
                    if (idx === i) return false;
                    const dist = Math.hypot(n.x - node.x, n.y - node.y);
                    return dist < gridSize * 1.5 && dist > 20;
                });

                const connections = nearbyNodes.slice(0, Math.floor(Math.random() * 3) + 1);

                connections.forEach((target) => {
                    const points = [{ x: node.x, y: node.y }];

                    if (Math.random() > 0.5) {
                        if (Math.random() > 0.5) {
                            points.push({ x: target.x, y: node.y });
                        } else {
                            points.push({ x: node.x, y: target.y });
                        }
                    }

                    points.push({ x: target.x, y: target.y });

                    paths.push({
                        points,
                        currentPos: Math.random(),
                        speed: 0.002 + Math.random() * 0.004,
                        direction: Math.random() > 0.5 ? 1 : -1,
                        glowIntensity: 0.3 + Math.random() * 0.7,
                    });
                });
            }
        };

        const drawChip = () => {
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            const chipSize = Math.min(canvas.width, canvas.height) * 0.25;

            const gradient = ctx.createLinearGradient(
                centerX - chipSize / 2,
                centerY - chipSize / 2,
                centerX + chipSize / 2,
                centerY + chipSize / 2
            );
            gradient.addColorStop(0, "#0f2847");
            gradient.addColorStop(0.5, "#1a3a5c");
            gradient.addColorStop(1, "#0f2847");

            ctx.fillStyle = gradient;
            ctx.fillRect(centerX - chipSize / 2, centerY - chipSize / 2, chipSize, chipSize);

            ctx.strokeStyle = "#00d4ff33";
            ctx.lineWidth = 3;
            ctx.strokeRect(centerX - chipSize / 2, centerY - chipSize / 2, chipSize, chipSize);

            ctx.strokeStyle = "#1a3a5c";
            ctx.lineWidth = 1;
            const innerPadding = chipSize * 0.15;
            const innerSize = chipSize - innerPadding * 2;
            const gridLines = 8;

            for (let i = 0; i <= gridLines; i++) {
                const pos = (innerSize / gridLines) * i;
                ctx.beginPath();
                ctx.moveTo(centerX - chipSize / 2 + innerPadding + pos, centerY - chipSize / 2 + innerPadding);
                ctx.lineTo(centerX - chipSize / 2 + innerPadding + pos, centerY + chipSize / 2 - innerPadding);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(centerX - chipSize / 2 + innerPadding, centerY - chipSize / 2 + innerPadding + pos);
                ctx.lineTo(centerX + chipSize / 2 - innerPadding, centerY - chipSize / 2 + innerPadding + pos);
                ctx.stroke();
            }

            const pinCount = 12;
            const pinLength = 20;
            const pinWidth = 3;
            const pinSpacing = chipSize / (pinCount + 1);

            ctx.fillStyle = "#2a5a8c";

            for (let i = 1; i <= pinCount; i++) {
                const x = centerX - chipSize / 2 + pinSpacing * i;
                ctx.fillRect(x - pinWidth / 2, centerY - chipSize / 2 - pinLength, pinWidth, pinLength);
                ctx.fillRect(x - pinWidth / 2, centerY + chipSize / 2, pinWidth, pinLength);
            }

            for (let i = 1; i <= pinCount; i++) {
                const y = centerY - chipSize / 2 + pinSpacing * i;
                ctx.fillRect(centerX - chipSize / 2 - pinLength, y - pinWidth / 2, pinLength, pinWidth);
                ctx.fillRect(centerX + chipSize / 2, y - pinWidth / 2, pinLength, pinWidth);
            }
        };

        let animationId: number;

        const animate = () => {
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            paths.forEach((path) => {
                ctx.beginPath();
                ctx.moveTo(path.points[0].x, path.points[0].y);
                for (let i = 1; i < path.points.length; i++) {
                    ctx.lineTo(path.points[i].x, path.points[i].y);
                }
                ctx.strokeStyle = circuitColor;
                ctx.lineWidth = 2;
                ctx.stroke();

                let totalLength = 0;
                const segments: number[] = [0];
                for (let i = 1; i < path.points.length; i++) {
                    const segLength = Math.hypot(
                        path.points[i].x - path.points[i - 1].x,
                        path.points[i].y - path.points[i - 1].y
                    );
                    totalLength += segLength;
                    segments.push(totalLength);
                }

                const currentDistance = path.currentPos * totalLength;
                const pulseLength = 30;

                for (let i = 1; i < segments.length; i++) {
                    if (currentDistance <= segments[i]) {
                        const segmentStart = segments[i - 1];
                        const segmentLength = segments[i] - segments[i - 1];
                        const segmentProgress = (currentDistance - segmentStart) / segmentLength;

                        const startX = path.points[i - 1].x;
                        const startY = path.points[i - 1].y;
                        const endX = path.points[i].x;
                        const endY = path.points[i].y;

                        const pulseX = startX + (endX - startX) * segmentProgress;
                        const pulseY = startY + (endY - startY) * segmentProgress;

                        const pulseGradient = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, pulseLength);
                        pulseGradient.addColorStop(0, `rgba(0, 212, 255, ${path.glowIntensity})`);
                        pulseGradient.addColorStop(0.5, `rgba(0, 212, 255, ${path.glowIntensity * 0.3})`);
                        pulseGradient.addColorStop(1, "rgba(0, 212, 255, 0)");

                        ctx.beginPath();
                        ctx.arc(pulseX, pulseY, pulseLength, 0, Math.PI * 2);
                        ctx.fillStyle = pulseGradient;
                        ctx.fill();

                        ctx.beginPath();
                        ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
                        ctx.fillStyle = "#ffffff";
                        ctx.fill();

                        break;
                    }
                }

                path.currentPos += path.speed * path.direction;
                if (path.currentPos > 1) path.currentPos = 0;
                if (path.currentPos < 0) path.currentPos = 1;
            });

            nodes.forEach((node) => {
                const nodeGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 3);
                nodeGradient.addColorStop(0, "#00d4ff22");
                nodeGradient.addColorStop(1, "transparent");
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
                ctx.fillStyle = nodeGradient;
                ctx.fill();

                ctx.beginPath();
                ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
                ctx.fillStyle = "#0f2847";
                ctx.fill();
                ctx.strokeStyle = "#2a5a8c";
                ctx.lineWidth = 1;
                ctx.stroke();
            });

            drawChip();

            const vignette = ctx.createRadialGradient(
                canvas.width / 2,
                canvas.height / 2,
                0,
                canvas.width / 2,
                canvas.height / 2,
                Math.max(canvas.width, canvas.height) * 0.7
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
            generateCircuit();
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        animate();

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
