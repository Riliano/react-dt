import Link from "next/link";

function Header() {
    return (
        <div className="header ">
            <header>
                <nav>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/Hello"}>Hello</Link>
                </nav>
            </header>
        </div>
    );
}

export default Header
