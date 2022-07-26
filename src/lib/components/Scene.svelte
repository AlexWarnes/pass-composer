<script>
  import {
    CircleBufferGeometry,
    MeshStandardMaterial,
    BoxBufferGeometry,
    DoubleSide,
MeshBasicMaterial,
BackSide,
Color
  } from "three";
  import {
    Canvas,
    DirectionalLight,
    AmbientLight,
    Mesh,
    OrbitControls,
    PerspectiveCamera
  } from "@threlte/core";
import PassTranslator from "./PassTranslator.svelte";
</script>

  <Canvas>
    <PerspectiveCamera position={{ y: 10, z: 10 }}>
      <OrbitControls autoRotate />
    </PerspectiveCamera>

    <DirectionalLight shadow color={'white'} position={{ x: -15, y: 45, z: 20 }} />
    <AmbientLight color={'white'} intensity={0.25} />

    <!-- BACKGROUND -->
    <Mesh 
      geometry={new BoxBufferGeometry(1, 1, 1)}
      material={new MeshBasicMaterial({color: 'royalblue', side: BackSide})}
      scale={100}
    />

    <Mesh
      castShadow
      geometry={new BoxBufferGeometry(1, 1, 1)}
      material={new MeshStandardMaterial({ color: new Color('#ff3e01').convertSRGBToLinear() })}
    />

    <Mesh
      receiveShadow
      position={{ y: -0.5 }}
      rotation={{ x: -90 * (Math.PI / 180) }}
      geometry={new CircleBufferGeometry(3, 72)}
      material={new MeshStandardMaterial({ side: DoubleSide, color: 'white' })}
    />

    <PassTranslator />
  </Canvas>
