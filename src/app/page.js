import Image from "next/image";
import Landing from "./landingPage/page";
import Slot from "./slot/page";

export default function Home() {
  return (
    <div className="overflow-hidden overflow-x-hidden overflow-y-hidden">

      <Landing />
      {/* <Slot /> */}
    </div>
  );
}
