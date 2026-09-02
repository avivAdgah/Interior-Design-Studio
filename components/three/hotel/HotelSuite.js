import { useHotelMaterials } from "@/components/three/hotel/materials";
import Architecture from "@/components/three/hotel/Architecture";
import EntranceHall from "@/components/three/hotel/EntranceHall";
import Bathroom from "@/components/three/hotel/Bathroom";
import Bedroom from "@/components/three/hotel/Bedroom";
import Lounge from "@/components/three/hotel/Lounge";
import Balcony from "@/components/three/hotel/Balcony";
import Exterior from "@/components/three/hotel/Exterior";

export default function HotelSuite() {
  const mat = useHotelMaterials();

  return (
    <group>
      <Architecture mat={mat} />
      <EntranceHall mat={mat} />
      <Bathroom mat={mat} />
      <Bedroom mat={mat} />
      <Lounge mat={mat} />
      <Balcony mat={mat} />
      <Exterior mat={mat} />
    </group>
  );
}
