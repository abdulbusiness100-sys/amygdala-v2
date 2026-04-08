import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

// --- City data ---
const CITIES = [
  { name: "Manchester", lat: 53.4808, lng: -2.2426 },
  { name: "London", lat: 51.5074, lng: -0.1278 },
  { name: "Dubai", lat: 25.2048, lng: 55.2708 },
  { name: "New York", lat: 40.7128, lng: -74.006 },
  { name: "Tokyo", lat: 35.6762, lng: 139.6503 },
  { name: "Sydney", lat: -33.8688, lng: 151.2093 },
  { name: "Singapore", lat: 1.3521, lng: 103.8198 },
  { name: "Berlin", lat: 52.52, lng: 13.405 },
  { name: "Toronto", lat: 43.6532, lng: -79.3832 },
  { name: "Mumbai", lat: 19.076, lng: 72.8777 },
  { name: "Lagos", lat: 6.5244, lng: 3.3792 },
  { name: "São Paulo", lat: -23.5505, lng: -46.6333 },
  { name: "Seoul", lat: 37.5665, lng: 126.978 },
];

// Arcs: Manchester → London, Manchester → Dubai
const ARCS = [
  { from: 0, to: 1 },
  { from: 0, to: 2 },
];

const GOLD = 0xc4a052;
const RADIUS = 2;

function latLngToVec3(lat: number, lng: number, r: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

function createArcCurve(
  from: THREE.Vector3,
  to: THREE.Vector3,
  altitude: number
): THREE.CatmullRomCurve3 {
  const mid = new THREE.Vector3()
    .addVectors(from, to)
    .multiplyScalar(0.5)
    .normalize()
    .multiplyScalar(RADIUS + altitude);
  return new THREE.CatmullRomCurve3([from, mid, to], false, "catmullrom", 0.5);
}

interface GlobeHeroProps {
  className?: string;
}

export default function GlobeHero({ className }: GlobeHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;

    try {
      // --- Scene setup ---
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        100
      );
      camera.position.set(0, 0, 5);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      // --- Wireframe sphere ---
      const sphereGeo = new THREE.SphereGeometry(RADIUS, 48, 48);
      const wireframeMat = new THREE.MeshBasicMaterial({
        color: GOLD,
        wireframe: true,
        transparent: true,
        opacity: 0.12,
      });
      const sphere = new THREE.Mesh(sphereGeo, wireframeMat);
      scene.add(sphere);

      // --- City dots ---
      const dotGeo = new THREE.SphereGeometry(0.025, 8, 8);
      const dotMat = new THREE.MeshBasicMaterial({
        color: GOLD,
        transparent: true,
        opacity: 0.9,
      });

      const cityPositions: THREE.Vector3[] = [];
      CITIES.forEach((city) => {
        const pos = latLngToVec3(city.lat, city.lng, RADIUS);
        cityPositions.push(pos);
        const dot = new THREE.Mesh(dotGeo, dotMat);
        dot.position.copy(pos);
        scene.add(dot);
      });

      // --- Arcs ---
      const arcLines: THREE.Line[] = [];
      ARCS.forEach(({ from, to }) => {
        const curve = createArcCurve(
          cityPositions[from],
          cityPositions[to],
          0.4
        );
        const points = curve.getPoints(50);
        const arcGeo = new THREE.BufferGeometry().setFromPoints(points);
        const arcMat = new THREE.LineBasicMaterial({
          color: GOLD,
          transparent: true,
          opacity: 0.6,
        });
        const line = new THREE.Line(arcGeo, arcMat);
        scene.add(line);
        arcLines.push(line);
      });

      // --- Lighting ---
      const ambient = new THREE.AmbientLight(0xffffff, 0.3);
      scene.add(ambient);
      const pointLight = new THREE.PointLight(GOLD, 0.5, 20);
      pointLight.position.set(3, 3, 5);
      scene.add(pointLight);

      // --- Group for rotation ---
      const group = new THREE.Group();
      group.add(sphere);
      CITIES.forEach((_, i) => {
        // Dots are already in scene, move to group
      });
      scene.add(group);
      // Move everything into the group
      scene.remove(sphere);
      group.add(sphere);
      arcLines.forEach((line) => {
        scene.remove(line);
        group.add(line);
      });
      // Move dots into group
      scene.children
        .filter(
          (c) => c instanceof THREE.Mesh && c.geometry === dotGeo
        )
        .forEach((dot) => {
          scene.remove(dot);
          group.add(dot);
        });

      // --- Animate ---
      let time = 0;
      function animate() {
        animationId = requestAnimationFrame(animate);
        time += 0.005;

        group.rotation.y += 0.002;

        // Pulse arc opacity
        arcLines.forEach((line, i) => {
          const mat = line.material as THREE.LineBasicMaterial;
          mat.opacity = 0.3 + 0.35 * Math.sin(time * 2 + i * Math.PI);
        });

        renderer.render(scene, camera);
      }
      animate();

      // --- Resize ---
      const onResize = () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };
      window.addEventListener("resize", onResize);

      // --- Cleanup ---
      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        sphereGeo.dispose();
        wireframeMat.dispose();
        dotGeo.dispose();
        dotMat.dispose();
        arcLines.forEach((l) => {
          l.geometry.dispose();
          (l.material as THREE.LineBasicMaterial).dispose();
        });
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };
    } catch (e) {
      console.warn("Globe WebGL error:", e);
      setError(true);
    }
  }, []);

  if (error) {
    return (
      <div className={className}>
        <div className="flex items-center justify-center h-full text-charcoal-medium/40 text-sm">
          Globe visualization requires WebGL
        </div>
      </div>
    );
  }

  return <div ref={containerRef} className={className} />;
}
