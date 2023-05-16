import Image from "next/image";
import Link from "next/link";
import Container from "../container";
import Card from "../card";
import Button from "../button";
import FormField from "../form";

export default function LoginForm() {
    return (
        <>
            <Container className="flex flex-col justify-center items-center">
                <Card className="mx-3 sm:mx-auto sm:my-0">
                    <Card.Header className="bg-white border-none pt-5 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mt-20 sm:mt-28 md:mt-10">
                        WELCOME BACK
                    </Card.Header>
                    <Card.Body className="px-8 pb-5">
                        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-8/12 md:shrink-0 lg:w-5/12 xl:w-5/12">
                                <Image src="/images/login.png" alt="login" width={300} height={10} />
                            </div>
                            <div className="mb-12 md:mb-0 md:w-9/12 lg:w-6/12 xl:w-6/12">
                                <form className="w-full max-w-md mt-3">
                                    <FormField>
                                        <FormField.Label htmlFor="loginEmail">
                                            Email
                                        </FormField.Label>
                                        <FormField.Input id="loginEmail" type="email" required />
                                    </FormField>
                                    <FormField>
                                        <FormField.Label htmlFor="loginPassword">
                                            Password
                                        </FormField.Label>
                                        <FormField.Input minLength={8} id="loginPassword" type="password" required />
                                    </FormField>
                                    <div className="mb-6 flex items-center justify-end">
                                        <div className="flex">
                                            <FormField.Input className="mt-1 me-1" type="checkbox" id="exampleCheck2" />
                                            <label className="hover:cursor-pointer" htmlFor="exampleCheck2">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="text-center lg:text-left">
                                        <Button type="submit" size="md">Login</Button>
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
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}