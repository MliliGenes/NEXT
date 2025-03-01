import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#c3c3c3] flex justify-center items-center text-black">
      <div className="flex flex-col">
        <img src="next.svg" alt="" className="w-xl" />
        <p className="text-lg uppercase font-thin">the next journey</p>
      </div>
    </div>
  );
}
