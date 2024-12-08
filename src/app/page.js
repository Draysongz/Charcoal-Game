import Image from "next/image";
import Landing from "./landingPage/page";
import CreatureSuccess from "./creatureSuccess/page";

export default function Home() {
  return (
    <div className="overflow-hidden overflow-x-hidden overflow-y-hidden">

      {/* <Landing /> */}
      <CreatureSuccess />
    </div>
  );
}
