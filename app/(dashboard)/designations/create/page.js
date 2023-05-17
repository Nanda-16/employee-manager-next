'use client';
import Alert from "@/components/alert";
import Button from "@/components/button";
import Card from "@/components/card";
import Container from "@/components/container";
import FormField from "@/components/form";
import Link from "next/link";
import { useState } from "react";

export default function CreateDesignation() {

    const [data, setData] = useState({
        name: "",
    });
    const [toast, setToast] = useState(false);

    const handleInput = (e) => {
        const { name, value, } = e.target;
        setData({ ...data, [name]: value });
        console.log(data, ":dataaaa");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setToast(true);
        setTimeout(() => {
            setToast(false);
        }, 3000);
        setData({ name: "" });
    }

    return (
        <>
            <Container>
                <Card className="px-3 sm:px-8 pt-2 mt-4 w-2/3">
                    <Card.Header className="bg-white border-none grid grid-cols-7 gap-0">
                        <Card.Title>Add Designation</Card.Title>
                        <Card.Action>
                            {toast &&
                                <div>
                                    <Alert variant="success" title="Success" message="Operation successful" close />
                                </div>
                            }
                        </Card.Action>
                    </Card.Header>
                    <form onSubmit={handleSubmit}>
                        <Card.Body className="px-4">
                            <FormField>
                                <FormField.Label htmlFor="name">Name</FormField.Label>
                                <FormField.Input type="text" id="name" name="name" onChange={handleInput} value={data?.name} required />
                            </FormField>
                        </Card.Body>
                        <Card.Footer>
                            <Button type="submit" variant="primary">Submit</Button>
                            <Link href='/designations'>
                                <Button type="button" variant='secondary'>Cancel</Button>
                            </Link>
                        </Card.Footer>
                    </form>
                </Card>
            </Container>
        </>
    )
}