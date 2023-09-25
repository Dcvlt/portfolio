import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, FXAA } from '@react-three/postprocessing';
import { useContext } from 'react';
import { useTransform, useScroll, useTime } from 'framer-motion';
import { degreesToRadians } from 'popmotion';
import ThemeContext from '../contexts/themeContext';
import { CONTAINER, DARK } from '../constants/constants';

const getColor = () => {
    const { theme } = useContext(ThemeContext);
    return theme === DARK ? '#fcba03' : '#242424';
};

const Icosahedron = () => (
    <mesh rotation-x={0.35}>
        <icosahedronGeometry args={[2, 0]} />
        <meshBasicMaterial wireframe color={getColor()} />
    </mesh>
);

const Scene = () => {
    const { scrollYProgress } = useScroll();
    const yAngle = useTransform(scrollYProgress, [0, 1], [0.001, degreesToRadians(180)]);
    const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
    const time = useTime();

    useFrame(({ camera }) => {
        camera.position.setFromSphericalCoords(distance.get(), yAngle.get(), time.get() * 0.0005);
        camera.updateProjectionMatrix();
        camera.lookAt(0, 0, 0);
    });

    return <Icosahedron />;
};

export const Geoform = () => {
    return (
        <div className={`${CONTAINER} geoContainer`}>
            <Canvas gl={{ antialias: false }}>
                <Scene />
                <EffectComposer multisampling={2}>
                    <FXAA />
                </EffectComposer>
            </Canvas>
        </div>
    );
};
