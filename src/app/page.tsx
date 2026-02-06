import Image from "next/image";

export default function Home() {
  return (
    <div  className="flex flex-grow items-center justify-center">
      <Image
        src="/homepage.png"
        width={500}
        height={500}
        alt="Image of the homepage"
      />
    </div>
  );
}
