'use client';
import { usePathname } from 'next/router';
import { useRouter } from 'next/navigation';
import { Navbar, NavbarCollapse, NavbarHead, NavbarLink, NavbarNav, NavbarToggler } from '../navbar';

export default function Header() {
    // const router = useRouter();
    // console.log(router, "fgfgfgfgf");
    // const pathname = "/home"

    const home = [
        { name: 'Home', href: '/home' },
        { name: 'Employees', href: '/home/employees' },
        { name: 'Designation', href: '/home/designations' },
    ]

    const user = [
        { name: 'Welcome User Name', href: '/home' },
    ]

    const logout = [
        { name: 'Logout', href: '/' },
    ]

    return (
        <>
            <Navbar className="bg-violet-600 text-white">
                <NavbarHead href="/">Employee Manager</NavbarHead>
                <NavbarToggler />
                <NavbarCollapse>
                    <NavbarNav orientation="start">
                        <NavbarLink navLinks={home} />
                    </NavbarNav>
                    <NavbarNav orientation="middle">
                        <NavbarLink navLinks={user} />
                    </NavbarNav>
                    <NavbarNav orientation="end">
                        <NavbarLink navLinks={logout} />
                    </NavbarNav>
                </NavbarCollapse>
            </Navbar>
        </>
    )
}