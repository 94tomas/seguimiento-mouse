import React from 'react';
import { Physics, RigidBody } from '@react-three/rapier';

const PhysicsScene: React.FC = () => {
    return (
        <Physics>
            {/* Piso */}
            <RigidBody type="fixed">
                <mesh position={[0, -3, 0]}>
                <boxGeometry args={[10, 1, 10]} />
                <meshStandardMaterial color="green" />
                </mesh>
            </RigidBody>

            {/* Cubo con gravedad */}
            <RigidBody>
                <mesh position={[0, 2, 0]}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="orange" />
                </mesh>
            </RigidBody>
        </Physics>
    );
};

export default PhysicsScene;