'use client';
import { usePathname } from 'next/navigation';
import { Navbar, NavbarCollapse, NavbarHead, NavbarItem, NavbarLink, NavbarNav, NavbarToggler } from "../navbar";

export default function Header() {
    const pathname = usePathname();
    return (
        <>
            <Navbar className="bg-violet-600 text-white">
                <NavbarHead href="/">Employee Manager</NavbarHead>
                <NavbarToggler />
                <NavbarCollapse>
                    <NavbarNav orientation="start">
                        <NavbarItem>
                            <NavbarLink href="/home" activeClass="underline" active={pathname === "/home"}>Home</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink href="/home/employees" activeClass="underline" active={pathname === "/home/employees"}>Employee</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink href="/home/designations" activeClass="underline" active={pathname === "/home/designations"}>Designation</NavbarLink>
                        </NavbarItem>
                    </NavbarNav>
                    <NavbarNav orientation="middle">
                        <NavbarItem>
                            <NavbarLink href="/home">Welcome User Name</NavbarLink>
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