import Link from "next/link";
import Image from "next/image";
const Navbar = () =>{
return (
    <nav>
        <div className="logo">
           <Image layout="outfill" width={128} height={77} src='/logo.png'/>
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/ninjas">Ninja Listing</Link>
    </nav>
)
}

export default Navbar