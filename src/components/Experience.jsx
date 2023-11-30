import { OrbitControls, Point, Points } from "@react-three/drei";
import cities from "./cities.json"

const earth_rad = 10;
const coord = [];

console.log("total length:", cities.length)

for(let i = 0; i <cities.length; i++){
  const geoCoord = getCoordinatesFromLatLng(cities[i].lat, cities[i].lng, earth_rad)
  coord.push(
    geoCoord.x,
    geoCoord.y,
    geoCoord.z
  )
}

const positions = new Float32Array(coord)

function getCoordinatesFromLatLng(latitude, longitude, radiusEarth) {
  let latitude_rad = (latitude * Math.PI) / 180;
  let longitude_rad = (longitude * Math.PI) / 180;

  let xPos = radiusEarth * -Math.cos(latitude_rad) * Math.cos(longitude_rad);
  let zPos = radiusEarth * Math.cos(latitude_rad) * Math.sin(longitude_rad);
  let yPos = radiusEarth * Math.sin(latitude_rad);

  return { x: xPos, y: yPos, z: zPos };
}

export const Experience = () => {
  return (
    <>
      <OrbitControls autoRotate={true} autoRotateSpeed={0.85}/>
      <mesh>
      <sphereGeometry args={[(earth_rad-0.1), 32, 32]} />
      <meshPhongMaterial color="#666666" transparent={true} opacity={0.55} />
    </mesh>
      <points>
        <bufferGeometry attach={"geometry"}>
          <bufferAttribute 
            attach="attributes-position"
            array={positions}
            count={positions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          attach={"material"}
          size={0.01} 
          color={"#00ffd5"}/>
      </points>
    </>
  );
};
