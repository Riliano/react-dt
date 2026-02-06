"use client";
import Link from "next/link"
import { usePathname } from 'next/navigation';

function Footer() {
	const currentRoute = usePathname();

	return <>
			<div className="footer">
				<footer>
					<nav>
						<Link className={currentRoute === "/" 
							? "NavButton-active" 
							: "NavButton-nonactive"} href={"/"}>Home</Link>
						<Link className={currentRoute === "/Wardrobe" 
							? "NavButton-active" 
							: "NavButton-nonactive"} href={"/Wardrobe"}>Wardrobe</Link>
						<Link className={currentRoute === "/Add" 
							? "NavButton-active" 
							: "NavButton-nonactive"} href={"/Add"}>Add</Link>
					</nav>
				</footer>
			</div>
		</>
};

export default Footer;
