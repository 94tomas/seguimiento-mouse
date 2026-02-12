import React from 'react';
import Scene from './Scene';
import FollowMouseBox from './FollowMouseBox';
import PhysicsScene from './PhysicsScene';
import Ogre from './Ogre';

const ThreeDTracking: React.FC = () => {
    return (
        <section className='h-screen relative'>
            <div className='w-full max-w-7xl mx-auto px-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-6'>
                        <h1 className='text-4xl font-bold'>Hola Mundo</h1>
                        <p className='text-lg'>La pintura es poesía muda; la poesía pintura ciega</p>
                    </div>
                </div>
            </div>

            <div className='h-screen w-full absolute top-0 left-0 '>
                <Scene>
                    <Ogre />
                </Scene>
            </div>

            <div className='absolute bottom-5 left-1/2 -translate-x-1/2 text-sm'>
                Desarrollado por <a href="https://www.linkedin.com/in/edsonarando/" target="_blank" className='text-gray-500'>Edson Arando</a>
            </div>
        </section>
    );
};

export default ThreeDTracking;