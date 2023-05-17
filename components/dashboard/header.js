'use client';
import { Navbar, NavbarCollapse, NavbarHead, NavbarItem, NavbarLink, NavbarNav, NavbarToggler } from '../navbar';

export default function Header() {

    const home = [
        { name: 'Home', href: '/home' },
        { name: 'Employees', href: '/employees' },
        { name: 'Designation', href: '/designations' },
    ]

    const logout = [
        { name: 'Logout', href: '#logout' },
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
                        <NavbarItem>Welcome User Name</NavbarItem>
                    </NavbarNav>
                    <NavbarNav orientation="end">
                        <NavbarLink navLinks={logout} />
                    </NavbarNav>
                </NavbarCollapse>
            </Navbar>
        </>
    )
}