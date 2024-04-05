import Image from "next/image";
import Iphone from "./component/Iphone";
import Android from "./component/Android";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row">
        <div className="w-1/2 h-screen">
          <Iphone />
        </div>
        <div className="w-1/2 h-screen">
          <Android />
        </div>
      </div>
      <div className="flex flex-row">
        <Image alt="IOS image" src={"/code/ios.png"} sizes="100%" width={0} height={0} className="w-1/2 h-screen" />
        <Image alt="Android image" src={"/code/android.png"} sizes="100%" width={0} height={0} className="w-1/2 h-screen" />
      </div>
    </main>
  );
}
