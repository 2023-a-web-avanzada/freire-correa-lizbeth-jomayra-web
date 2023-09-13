import Link from "next/link";
export default function Navbar() {
    return(
        <nav className = "flex justify-between items-center bg-slate-800 px-8 py-3 shadow-md ">
            <Link className=" font-bold shadow-md rounded-lg bg-white p-2" href={"/"}>Universidades</Link>
            <Link className="bg-white font-bold p-2 shadow-md rounded-lg" href={"/addTopic"}>Agregar</Link>

        </nav>
    )
}