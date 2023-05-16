'use client';
import Button from "@/components/button";
import Card from "@/components/card";
import Container from "@/components/container";
import FormField from "@/components/form";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const metadata = {
    title: 'Register - Employee Mananager',
    description: 'Employee Manangement application',
}

export default function Register() {

    const [data, setData] = useState({
        full_name: "",
        email: "",
        password: "",
    });

    const router = useRouter();

    const handleInput = (e) => {
        const { name, value, } = e.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data, 'register')
        if (data.full_name && data.email && data.password) {
            router.push('/home')
            setData({
                full_name: "",
                email: "",
                password: "",
            });
        }
    }

    return (
        <>
            <Container className="flex flex-col justify-center items-center">
                <Card className="mx-3 sm:mx-auto sm:my-0">
                    <Card.Header className="bg-white border-none pt-5 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mt-20 sm:mt-28 md:mt-10">
                        WELCOME
                    </Card.Header>
                    <Card.Body className="px-10 pb-5">
                        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                            <div className="mb-12 md:mb-0 md:w-9/12 lg:w-6/12 xl:w-6/12">
                                <form className="w-full max-w-md mt-3" onSubmit={handleSubmit}>
                                    <FormField>
                                        <FormField.Label htmlFor="registerFullName">
                                            Full Name
                                        </FormField.Label>
                                        <FormField.Input id="registerFullName" type="text" name="full_name" value={data?.full_name} onChange={handleInput} required />
                                    </FormField>
                                    <FormField>
                                        <FormField.Label htmlFor="registerEmail">
                                            Email
                                        </FormField.Label>
                                        <FormField.Input id="registerEmail" type="email" name="email" value={data?.email} onChange={handleInput} required />
                                    </FormField>
                                    <FormField>
                                        <FormField.Label htmlFor="registerPassword">
                                            Password
                                        </FormField.Label>
                                        <FormField.Input id="registerPassword" type="password" minLength={8} name="password" value={data?.password} onChange={handleInput} required />
                                    </FormField>
                                    <div className="text-center lg:text-right mt-3">
                                        <Button type="submit" variant="primary">Register</Button>
                                        <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                            TEMPHas an account?
                                            <Link
                                                href="/"
                                                className="text-red-600 transition duration-150 ease-in-out hover:text-red-400 focus:text-red-400 outline-none active:text-danger-700"
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
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}