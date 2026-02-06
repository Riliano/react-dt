import Link from "next/link";

function Header() {
    return (
        <div className="header">
            <header>
                <div className="AppTitle">
                    <h1>
                        <b>Wardrobe Forecast</b>
                    </h1>
                </div>
                <div className="Profile">
                <nav>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/Hello"}>Hello</Link>
                </nav>
                </div>
            </header>
        </div>
    );
}

export default Header
