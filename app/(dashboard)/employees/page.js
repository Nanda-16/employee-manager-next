'use client';
import Button from "@/components/button"
import Card from "@/components/card"
import Container from "@/components/container"
import Link from "next/link"
import user from '../../../public/images/user.png'
import Image from "next/image"
import Table from "@/components/table"
import { useState } from "react";
import Modal from "@/components/modal";
import Alert from "@/components/alert";

export const metadata = {
  title: 'Employees - Employee Mananager',
  description: 'Employee Manangement application',
}

const dummy = [
  { 'id': 11, 'name': 'Raisal', 'dob': 'Dec 01,1990', 'joining_date': 'Dec 19,2012', 'gender': 'Male', 'designation': 'Software Developer', 'email': 'raisal@gmail.com' },
  { 'id': 12, 'name': 'Diya', 'dob': 'Jan 12,1991', 'joining_date': 'Dec 20,2012', 'gender': 'Female', 'designation': 'UI/UX Designer', 'email': 'diya@gmail.com' },
  { 'id': 13, 'name': 'John', 'dob': 'Jun 21,1995', 'joining_date': 'Jan 09,2013', 'gender': 'Male', 'designation': 'Frontend Developer', 'email': 'john@gmail.com' },
  { 'id': 14, 'name': 'Mathew', 'dob': 'Aug 30,1993', 'joining_date': 'Jan 15,2013', 'gender': 'Male', 'designation': 'Project Manager', 'email': 'mathew@gmail.com' },
  { 'id': 15, 'name': 'Nisha', 'dob': 'May 07,1997', 'joining_date': 'Jan 19,2013', 'gender': 'Female', 'designation': 'React Developer', 'email': 'nisha@gmail.com' },
]

const tableHeads = ['SI.No', 'Profile Pic', 'Name', 'Join Date', 'DOB', 'Gender', 'Designation', 'Email Address', 'Action']

export default function Employee() {

  const [employees, setEmployees] = useState(dummy);
  const [deleteModal, setDeleteModal] = useState(false);
  const [toast, setToast] = useState(false);
  const [deleteEmployee, setDeleteEmployee] = useState("");

  const openDeleteModal = (employee) => {
    console.log(employee, 'deleteee');
    setDeleteModal(true);
    setDeleteEmployee(employee);
  }

  const handleDelete = () => {
    const newEmployees = employees.filter((employee) => employee.id !== deleteEmployee?.id);
    setEmployees(newEmployees)
    closeDeleteModal();
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 3000);
  }

  const closeDeleteModal = () => {
    setDeleteModal(false);
    setDeleteEmployee('');
  };


  return (
    <>
      <Container  >
        <Card className="px-3 pt-2 mt-4">
          <Card.Header className="bg-white   border-none grid grid-cols-7 gap-0">
            <Card.Title  >Employees</Card.Title>
            <Card.SubTitle  >Total {employees.length} employees</Card.SubTitle>
            <Card.Action  >
              <Link href="/employees/create">
                <Button variant="outline-primary" size="sm">
                  + Add
                </Button>
              </Link>
              {toast && (
                <div>
                  <Alert variant="success" title="Success" message="Operation successful" close />
                </div>
              )}
            </Card.Action>
          </Card.Header>
          <Card.Body>
            <Table columnHeads={tableHeads}>
              {employees?.length > 0 && employees?.map((employee, index) => (
                <Table.Body key={index}>
                  <Table.Row>{index + 1}</Table.Row>
                  <Table.Row>
                    <Image src={user} alt="user profile" height={35} />
                  </Table.Row>
                  <Table.Row>{employee?.name}</Table.Row>
                  <Table.Row>{employee?.joining_date}</Table.Row>
                  <Table.Row>{employee?.dob}</Table.Row>
                  <Table.Row>{employee?.gender}</Table.Row>
                  <Table.Row>{employee?.designation}</Table.Row>
                  <Table.Row>{employee?.email}</Table.Row>
                  <Table.Row>
                    <div className="flex">
                      <Link href={`/employees/${employee?.id}/edit`} className="m-0 p-0">
                        <Button variant="icon-primary" className="rounded p-1 rounded-r-none" title="Edit Employee">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                          </svg>
                        </Button>
                      </Link>
                      <Button
                        variant="icon-danger"
                        className="rounded p-1 rounded-l-none"
                        title="Remove Employee"
                        onClick={() => openDeleteModal(employee)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </Button>
                    </div>
                  </Table.Row>
                </Table.Body>
              ))}
            </Table>
          </Card.Body>
        </Card>

        {/* delete modal */}
        <Modal show={deleteModal} onClose={setDeleteModal}>
          <Modal.Content>
            <Modal.Header className="text-red-500">Warning</Modal.Header>
            <Modal.Body className="text-gray-900">Do you really want to delete {deleteEmployee?.name} ?</Modal.Body>
          </Modal.Content>
          <Modal.Footer>
            <Button
              variant="danger"
              type="button"
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button
              variant="secondary"
              type="button"
              onClick={closeDeleteModal}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  )
}