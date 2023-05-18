'use client';
import Card from "@/components/card";
import Container from "@/components/container";
import EmployeeForm from "@/components/employee/employeeForm";

export default function CreateEmployee() {

    const handleSubmit = (data) => {
        console.log(data, 'employee submit form')
    }
    
    return (
        <>
            <Container>
                <Card className="px-3 sm:px-8 pt-2 mt-4 w-2/3">
                    <Card.Header className="bg-white border-none grid grid-cols-7 gap-0">
                        <Card.Title>Add Employee</Card.Title>
                    </Card.Header>
                    <EmployeeForm type="add" onSubmit={handleSubmit} />
                </Card>
            </Container>
        </>
    )
}