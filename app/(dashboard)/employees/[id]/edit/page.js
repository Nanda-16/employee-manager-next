'use client';
import Card from "@/components/card";
import Container from "@/components/container";
import EditEmployeeForm from "@/components/employee/editForm";

export default function EditEmployee({ params }) {

    const { id } = params;
    console.log(id, ':employee id')

    const handleSubmit = (data) => {
        console.log(data, 'employee edit submit form')
    }

    return (
        <>
            <Container>
                <Card className="px-3 sm:px-8 pt-2 mt-4 w-2/3">
                    <Card.Header className="bg-white border-none grid grid-cols-7 gap-0">
                        <Card.Title>Edit Employee</Card.Title>
                    </Card.Header>
                    <EditEmployeeForm onSubmit={handleSubmit} />
                </Card>
            </Container>
        </>
    )
}