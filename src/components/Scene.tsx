import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Scene: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Canvas camera={{ position: [0, 0, 6] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            {/* <OrbitControls /> */}
            {children}
        </Canvas>
    );
};

export default Scene;