'use client';
import Button from "@/components/button";
import Card from "@/components/card";
import Container from "@/components/container";
import FormField from "@/components/form";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function EditDesignation({ params }) {

    const { id } = params;
    const [data, setData] = useState({});

    useEffect(() => {
        console.log(id, ':idddddd')
    }, []);

    const handleInput = (e) => {
        const { name, value, } = e.target;
        setData({ ...data, [name]: value });
        console.log(data, ":dataaaa");
    }

    return (
        <>
            <Container>
                <Card className="px-3 sm:px-8 pt-2 mt-4 w-2/3">
                    <Card.Header className="bg-white border-none grid grid-cols-7 gap-0">
                        <Card.Title>Edit Designation</Card.Title>
                    </Card.Header>
                    <form>
                        <Card.Body className="px-4">
                            <FormField>
                                <FormField.Label htmlFor="name">Name</FormField.Label>
                                <FormField.Input type="text" id="name" name="name" onChange={handleInput} required />
                            </FormField>
                        </Card.Body>
                        <Card.Footer>
                            <Button type="submit" variant="primary">Update Designation</Button>
                            <Link href='/home/designations'>
                                <Button type="button" variant='secondary'>Cancel</Button>
                            </Link>
                        </Card.Footer>
                    </form>
                </Card>
            </Container>
        </>
    )
}