'use client';
import { createContext, useContext, useState } from "react";
import { Dancing_Script } from 'next/font/google';
const dancingScript = Dancing_Script({ subsets: ['latin'] });

import { Inconsolata } from 'next/font/google'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

const style = {
    navbar: `px-4 py-2 mb-10 sm:mb-0 shadow w-full lg:flex lg:flex-row lg:items-center lg:justify-start fixed top-0`,
    head: `cursor-pointer font-bold inline-block mr-4 py-1.5 text-2xl md:text-3xl whitespace-nowrap hover:text-violet-200`,
    toggler: `block float-right text-4xl lg:hidden focus:outline-none focus:shadow`,
    item: `whitespace-pre cursor-pointer px-4 py-2 hover:underline`,
    collapse:
    {
        default: `border-t border-gray-400 fixed left-0 mt-2 shadow py-2 text-center lg:border-none lg:flex lg:flex-grow lg:items-center lg:mt-0 lg:py-0 lg:relative lg:shadow-none`,
        open: `h-auto visible transition-all duration-500 ease-out w-full opacity-100 lg:transition-none backdrop-brightness-75`,
        close: `h-auto invisible w-0 transition-all duration-300 ease-in lg:opacity-100 lg:transition-none lg:visible`,
    },
    nav:
    {
        start: `block mb-0 mr-auto pl-0 lg:flex lg:mb-0 lg:pl-0`,
        middle: `block mb-0 ml-auto pl-0 lg:flex lg:pl-0 lg:mb-0 lg:mx-auto`,
        end: `block pl-0 mb-0 ml-auto lg:flex lg:pl-0 lg:mb-0`,
    },
};

const navcontext = createContext({});

export const Navbar = ({ children, className }) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <navcontext.Provider value={{ open, toggle }}>
            <nav className={`${className} ${style.navbar}`}>
                {children}
            </nav>
        </navcontext.Provider>
    );
};

export const NavbarToggler = () => {
    const { toggle } = useContext(navcontext);
    return (
        <button
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className={style.toggler}
            onClick={toggle}
        >
            &#8801;
        </button>
    );
};

export const NavbarCollapse = ({ children }) => {
    const { open } = useContext(navcontext);
    return (
        <div
            style={{ backgroundColor: 'inherit' }}
            className={`${style.collapse.default}
              ${open ? style.collapse.open : style.collapse.close}`}
        >
            {children}
        </div>
    );
};


export const NavbarHead = ({ children, href }) => (
    <Link href={href} className={`${dancingScript.className} ${style.head}`}>
        <strong>{children}</strong>
    </Link>
)


export const NavbarNav = ({ children, orientation }) => (
    <ul className={style.nav[orientation]}>{children}</ul>
);

export const NavbarLink = ({ navLinks }) => {
    const pathname = usePathname();
    // console.log(pathname, ':pathname')
    return (
        <>
            {navLinks.map((link, index) => {
                const isActive = pathname.startsWith(link.href);

                return (
                    <li className={style.item} key={index + 1}>
                        <Link
                            className={isActive ? 'underline' : ''}
                            href={link.href}
                            key={link.name}
                        >
                            {link.name}
                        </Link>
                    </li>
                );
            })}
        </>
    );
}