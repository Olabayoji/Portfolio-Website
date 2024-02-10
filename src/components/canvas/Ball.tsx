import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  Text,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { Vector3 } from "three";

type Props = {
  imgUrl: string;
  description: string;
};

const Ball: React.FC<Props> = ({ imgUrl, description }) => {
  const [decal] = useTexture([imgUrl]);
  const [isHovered, setIsHovered] = useState(false);

  const tooltipPosition = [0, 0, 2];

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.15} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        castShadow
        receiveShadow
        scale={2.75}
        onPointerOver={() => setIsHovered(true)}
        onPointerOut={() => setIsHovered(false)}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={"#fff8eb"}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          // flatShading
        />
      </mesh>
      {isHovered && <Tooltip position={tooltipPosition} text={description} />}
    </Float>
  );
};

type BallCanvasProps = {
  icon: string;
  description: string;
};
const BallCanvas: React.FC<BallCanvasProps> = ({ icon, description }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball description={description} imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

const Tooltip: React.FC<{ position: number[]; text: string }> = ({
  position,
  text,
}) => {
  return (
    <mesh position={new Vector3(position[0], position[1], position[2])}>
      <boxGeometry args={[text.length * 0.2, 0.5, 0.8]} />
      <meshStandardMaterial color="#777390" />
      <Text
        position={[0, -1.7, 0.5]}
        fontSize={0.6}
        color="white"
        anchorX="center"
        anchorY="top-baseline"
      >
        {text}
      </Text>
    </mesh>
  );
};
export { Tooltip };
