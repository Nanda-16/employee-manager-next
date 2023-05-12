import { Navbar, NavbarCollapse, NavbarHead, NavbarItem, NavbarLink, NavbarNav, NavbarToggler } from "../navbar";

export default function Header() {
    return (
        <>
            <Navbar className="bg-violet-600 text-white">
                <NavbarHead href="/">Employee Manager</NavbarHead>
                <NavbarToggler />
                <NavbarCollapse>
                    <NavbarNav orientation="start">
                        <NavbarItem>
                            <NavbarLink href="/home">Home</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink href="/home/employees">Employee</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink href="/home/designations">Designation</NavbarLink>
                        </NavbarItem>
                    </NavbarNav>
                    <NavbarNav orientation="middle">
                        <NavbarItem>
                            <NavbarLink href="#">Welcome User Name</NavbarLink>
                        </NavbarItem>
                    </NavbarNav>
                    <NavbarNav orientation="end">
                        <NavbarItem>
                            <NavbarLink href="/">Logout</NavbarLink>
                        </NavbarItem>
                    </NavbarNav>
                </NavbarCollapse>
            </Navbar>
        </>
    )
}