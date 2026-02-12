import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FollowMouseBox: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const { mouse } = state;

        if (!meshRef.current) return;
        // movimiento suave
        meshRef.current.position.x += (mouse.x * 3 - meshRef.current.position.x) * 0.01;
        meshRef.current.position.y += (mouse.y * 3 - meshRef.current.position.y) * 0.01;

        // rotacion suave
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="hotpink" />
        </mesh>
    );
};

export default FollowMouseBox;