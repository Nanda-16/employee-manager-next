import Image from "next/image";
import Link from "next/link";
import { Container } from "../container";
import { Card, CardBody, CardHead } from "../card";
export default function LoginForm() {
    return (
        <>
            <Container className="flex flex-col justify-center items-center">
                <Card className="mx-3 sm:mx-auto sm:my-0">
                    <CardHead className="bg-white border-none pt-5 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mt-20 sm:mt-28 md:mt-10">
                        WELCOME BACK
                    </CardHead>
                    <CardBody className="px-10 pb-5">
                        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-8/12 md:shrink-0 lg:w-5/12 xl:w-5/12">
                                <Image src="/images/login.png" alt="login" width={300} height={10} />
                            </div>
                            <div className="mb-12 md:mb-0 md:w-9/12 lg:w-6/12 xl:w-6/12">
                                <form className="w-full max-w-md mt-3">
                                    <div className="md:flex md:items-center md:px-0 px-2 pt-2 mb-2">
                                        <div className="md:w-1/4">
                                            <label className="block font-semibold md:text-left mb-1 md:mb-0 pr-4" htmlFor="loginEmail">
                                                Email
                                            </label>
                                        </div>
                                        <div className="md:w-3/4">
                                            <input className="font-normal appearance-none border border-gray-300 w-full md:py-2 py-3 px-4 leading-tight focus:outline-none" id="loginEmail" type="email" required />
                                        </div>
                                    </div>
                                    <div className="md:flex md:items-center md:px-0 px-2 pt-2 mb-2">
                                        <div className="md:w-1/4">
                                            <label className="block font-semibold md:text-left mb-1 md:mb-0 pr-4" htmlFor="loginPassword">
                                                Password
                                            </label>
                                        </div>
                                        <div className="md:w-3/4">
                                            <input className="font-normal appearance-none border border-gray-300 w-full md:py-2 py-3 px-4 leading-tight focus:outline-none" minLength={8} id="loginPassword" type="password" required />
                                        </div>
                                    </div>
                                    <div className="mb-6 flex items-center justify-end">
                                        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                            <input
                                                className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-violet-600 checked:bg-violet-600 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                                                type="checkbox" value="" id="exampleCheck2" />
                                            <label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="exampleCheck2">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="text-center lg:text-left">
                                        <button
                                            type="submit"
                                            className="inline-block rounded bg-violet-600 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-violet-600 hover:shadow-[0_8px_9px_-4px_rgba(124 58 237,0.3),0_4px_18px_0_rgba(124 58 237,0.2)] focus:bg-violet-600 focus:shadow-[0_8px_9px_-4px_rgba(124 58 237,0.3),0_4px_18px_0_rgba(124 58 237,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(124 58 237,0.3),0_4px_18px_0_rgba(124 58 237,0.2)]"
                                        >
                                            Login
                                        </button>
                                        <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                            Dont TEMPhas an account?
                                            <Link
                                                href="/register"
                                                className="text-red-600 transition duration-150 ease-in-out hover:text-red-600 focus:text-red-600 active:text-danger-700"
                                            >
                                                Register
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}