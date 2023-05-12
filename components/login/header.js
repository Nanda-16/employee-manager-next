import { Navbar, NavbarHead } from "../navbar";

export default function Header() {
    return (
        <>
            <Navbar className="bg-violet-600 text-white">
                <NavbarHead href="/">Employee Manager</NavbarHead>
            </Navbar>
        </>
    )
}