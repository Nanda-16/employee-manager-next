'use client';
import Card from "@/components/card";
import Container from "@/components/container";
import EmployeeForm from "@/components/employee/employeeForm";
import { useEffect, useState } from "react";

const dummy = [
    { 'id': '11', 'name': 'Raisal', 'dob': 'Dec 01,1990', 'joining_date': 'Dec 19,2012', 'gender': 'Male', 'designation': 'Software Developer', 'email': 'raisal@gmail.com' },
    { 'id': '12', 'name': 'Diya', 'dob': 'Jan 12,1991', 'joining_date': 'Dec 20,2012', 'gender': 'Female', 'designation': 'UI/UX Designer', 'email': 'diya@gmail.com' },
    { 'id': '13', 'name': 'John', 'dob': 'Jun 21,1995', 'joining_date': 'Jan 09,2013', 'gender': 'Male', 'designation': 'Frontend Developer', 'email': 'john@gmail.com' },
    { 'id': '14', 'name': 'Mathew', 'dob': 'Aug 30,1993', 'joining_date': 'Jan 15,2013', 'gender': 'Male', 'designation': 'Project Manager', 'email': 'mathew@gmail.com' },
    { 'id': '15', 'name': 'Nisha', 'dob': 'May 07,1997', 'joining_date': 'Jan 19,2013', 'gender': 'Female', 'designation': 'React Developer', 'email': 'nisha@gmail.com' },
]


export default function EditEmployee({ params }) {

    const { id } = params;

    const handleSubmit = (data) => {
        console.log(data, 'employee edit submit form')
    }

    const [employee, setEmployee] = useState();

    useEffect(() => {
        const editEmployee = dummy.filter((employee) => employee.id === id);
        if (editEmployee.length > 0) {
            setEmployee(editEmployee[0]);
        }
    }, []);

    return (
        <>
            <Container>
                <Card className="px-3 sm:px-8 pt-2 mt-4 w-2/3">
                    <Card.Header className="bg-white border-none grid grid-cols-7 gap-0">
                        <Card.Title>Edit Employee</Card.Title>
                    </Card.Header>
                    <EmployeeForm onSubmit={handleSubmit} type="edit" employee={employee} />
                </Card>
            </Container>
        </>
    )
}