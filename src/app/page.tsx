import Image from "next/image";

import Hello from "@/components/Hello";
import Header from "@/components/Header";

export default function Home() {
  return (
	  <div  className="flex flex-grow items-center justify-center">
		<Image
		  src="/homepage.png"
		  width={500}
		  height={500}
		  alt="Picture of the author"
		/>
		</div>
  );
}
