import { Card, CardBody, CardHead } from "@/components/card";
import { Container } from "@/components/container";
import Image from "next/image";
import Link from "next/link";
export default function Register() {
    return (
        <>
            <Container className="flex flex-col justify-center items-center">
                <Card className="mx-3 sm:mx-auto sm:my-0">
                    <CardHead className="bg-white border-none pt-5 text-center text-xl md:text-2xl mt-20 sm:mt-10">
                        WELCOME
                    </CardHead>
                    <CardBody className="px-10 pb-5">
                        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                            <div className="mb-12 md:mb-0 md:w-9/12 lg:w-6/12 xl:w-6/12">
                                <form className="w-full max-w-md mt-3">
                                    <div className="md:flex md:items-center md:px-0 px-2 pt-2 mb-2">
                                        <div className="md:w-1/4">
                                            <label className="block font-semibold md:text-left mb-1 md:mb-0 pr-4" htmlFor="registerFullName">
                                                Full Name
                                            </label>
                                        </div>
                                        <div className="md:w-3/4">
                                            <input className="font-normal appearance-none border border-gray-300 w-full md:py-2 py-3 px-4 leading-tight focus:outline-none" id="registerFullName" type="text" required />
                                        </div>
                                    </div>
                                    <div className="md:flex md:items-center md:px-0 px-2 pt-2 mb-2">
                                        <div className="md:w-1/4">
                                            <label className="block font-semibold md:text-left mb-1 md:mb-0 pr-4" htmlFor="registerEmail">
                                                Email
                                            </label>
                                        </div>
                                        <div className="md:w-3/4">
                                            <input className="font-normal appearance-none border border-gray-300 w-full md:py-2 py-3 px-4 leading-tight focus:outline-none" id="registerEmail" type="email" required />
                                        </div>
                                    </div>
                                    <div className="md:flex md:items-center md:px-0 px-2 pt-2 mb-2">
                                        <div className="md:w-1/4">
                                            <label className="block font-semibold md:text-left mb-1 md:mb-0 pr-4" htmlFor="registerPassword">
                                                Password
                                            </label>
                                        </div>
                                        <div className="md:w-3/4">
                                            <input className="font-normal appearance-none border border-gray-300 w-full md:py-2 py-3 px-4 leading-tight focus:outline-none" id="registerPassword" type="password" required />
                                        </div>
                                    </div>
                                    <div className="text-center lg:text-right mt-3">
                                        <button
                                            type="submit"
                                            className="inline-block rounded bg-violet-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#7C3AED] transition duration-150 ease-in-out hover:bg-violet-600 hover:shadow-[0_8px_9px_-4px_rgba(124 58 237,0.3),0_4px_18px_0_rgba(124 58 237,0.2)] focus:bg-violet-600 focus:shadow-[0_8px_9px_-4px_rgba(124 58 237,0.3),0_4px_18px_0_rgba(124 58 237,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(124 58 237,0.3),0_4px_18px_0_rgba(124 58 237,0.2)]"
                                        >
                                            Register
                                        </button>
                                        <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                            TEMPHas an account?
                                            <Link
                                                href="/"
                                                className="text-red-600 transition duration-150 ease-in-out hover:text-red-600 focus:text-red-600 active:text-danger-700"
                                            >
                                                Login
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-8/12 md:shrink-0 lg:w-5/12 xl:w-5/12">
                                <Image src="/images/login.png" alt="login" width={300} height={10} />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}