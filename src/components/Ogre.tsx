import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Ogre: React.FC = () => {
    const ogre = useGLTF('/models/ogre-3d-model.glb');
    const ogreRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        const { mouse } = state;
        if (!ogreRef.current) return;
        // Rotación suave
        ogreRef.current.rotation.y +=
            (mouse.x * 0.5 - ogreRef.current.rotation.y) * 0.05 + 0.5

        ogreRef.current.rotation.x +=
            (-mouse.y * 0.3 - ogreRef.current.rotation.x) * 0.05
    });
    return (
        <primitive
            ref={ogreRef}
            object={ogre.scene}
            scale={5}
            position={[3, 0, 0]}
        />
    );
};

export default Ogre;