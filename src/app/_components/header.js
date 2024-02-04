import Image from "next/image";
import logo from "./Logo.svg"
import Link from "next/link";

export default function Header() {

    return (
        <header className={"px-10 py-4"}>
            <nav className={"flex flex-row justify-between items-center"}>
                <Link href={"/"}>
                    <Image className={"w-20"} src={logo} alt={"Logo"}/>
                </Link>
                <div>Bienvenue sur mon blog !</div>
                <Link href={"/"}>
                    <Image className={"w-20"} src={logo} alt={"Logo"}/>
                </Link>
            </nav>
        </header>
    )
}