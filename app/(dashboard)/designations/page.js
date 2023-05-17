'use client';
import Alert from "@/components/alert";
import Button from "@/components/button"
import Card from "@/components/card"
import Container from "@/components/container"
import FormField from "@/components/form";
import Modal from "@/components/modal"
import Table from "@/components/table"
import Link from "next/link"
import { useEffect, useState } from "react";

export const metadata = {
    title: 'Designations - Employee Mananager',
    description: 'Employee Manangement application',
}

const dummy = [
    { 'id': 11, 'name': 'Software Developer', },
    { 'id': 12, 'name': 'UI/UX Designer', },
    { 'id': 13, 'name': 'Frontend Developer', },
    { 'id': 14, 'name': 'Project Manager', },
    { 'id': 15, 'name': 'React Developer', },
]

const tableHeads = ['SI.No', 'Name', 'Action']

export default function Designation() {

    const [designations, setDesignations] = useState(dummy);
    const [modal, setModal] = useState(false);
    const [toast, setToast] = useState(false);
    const [editDesignation, setEditDesignation] = useState("");
    const [deleteModal, setDeleteModal] = useState(false);
    const [deleteDesignation, setDeleteDesignation] = useState("");

    const openEditModal = (designation) => {
        setEditDesignation(designation);
        setModal(true);
    }

    const handleInput = (e) => {
        const { name, value, } = e.target;
        setEditDesignation({ ...editDesignation, [name]: value });
    }

    const handleEdit = (e) => {
        e.preventDefault();
        const newDesignations = designations.map((designation) => {
            if (designation.id === editDesignation.id) {
                return editDesignation;
            } else {
                return designation;
            }
        })
        setDesignations(newDesignations)
        closeEditModal();
        setToast(true);
        setTimeout(() => {
            setToast(false);
        }, 3000);
    }

    useEffect(() => { console.log(designations) }, [designations])

    const closeEditModal = () => {
        setModal(false);
        setEditDesignation("");
    };


    const openDeleteModal = (designation) => {
        console.log(designation, 'deleteee');
        setDeleteModal(true);
        setDeleteDesignation(designation);
    }

    const handleDelete = () => {
        const newDesignations = designations.filter((designation) => designation.id !== deleteDesignation?.id);
        setDesignations(newDesignations)
        closeDeleteModal();
        setToast(true);
        setTimeout(() => {
            setToast(false);
        }, 3000);
    }

    const closeDeleteModal = () => {
        setDeleteModal(false);
        setDeleteDesignation('');
    };

    return (
        <>
            <Container>
                {/* table */}
                <Card className="px-3">
                    <Card.Header className="bg-white border-none grid grid-cols-7 gap-0">
                        <Card.Title>Designations</Card.Title>
                        <Card.SubTitle>Total {designations.length} designations</Card.SubTitle>
                        <Card.Action>
                            <Link href="/designations/create">
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
                            {designations?.length > 0 && designations?.map((designation, index) => (
                                <Table.Body key={index}>
                                    <Table.Row>{index + 1}</Table.Row>
                                    <Table.Row>{designation?.name}</Table.Row>
                                    <Table.Row>
                                        <div className="flex">
                                            <Button
                                                variant="icon-primary"
                                                className="rounded p-1 rounded-r-none"
                                                title="Edit Designation"
                                                onClick={() => openEditModal(designation)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>
                                            </Button>
                                            <Button
                                                variant="icon-danger"
                                                className="rounded p-1 rounded-l-none"
                                                title="Remove Designation"
                                                onClick={() => openDeleteModal(designation)}
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

                {/* edit modal */}
                <Modal show={modal} onClose={setModal}>
                    <form>
                        <Modal.Content>
                            <Modal.Header className="">Edit Designation</Modal.Header>
                            <Modal.Body className="">
                                <FormField>
                                    <FormField.Label htmlFor="name" className="me-1">Designation Name</FormField.Label>
                                    <FormField.Input type="text" id="name" name="name" defaultValue={editDesignation?.name} onChange={handleInput} required />
                                </FormField>
                            </Modal.Body>
                        </Modal.Content>
                        <Modal.Footer>
                            <Button variant="primary"
                                type="submit"
                                onClick={handleEdit}
                            >
                                Update
                            </Button>
                            <Button variant="secondary"
                                type="button"
                                onClick={closeEditModal}
                            >
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>

                {/* delete modal */}
                <Modal show={deleteModal} onClose={setDeleteModal}>
                    <Modal.Content>
                        <Modal.Header className="text-red-500">Warning</Modal.Header>
                        <Modal.Body className="text-gray-900">Do you really want to delete {deleteDesignation?.name} ?</Modal.Body>
                    </Modal.Content>
                    <Modal.Footer>
                        <Button variant="danger"
                            type="button"
                            onClick={handleDelete}
                        >
                            Delete
                        </Button>
                        <Button variant="secondary"
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