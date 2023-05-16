import Button from "@/components/button"
import Card from "@/components/card"
import Container from "@/components/container"
import Table from "@/components/table"
import Link from "next/link"

export const metadata = {
    title: 'Designations - Employee Mananager',
    description: 'Employee Manangement application',
}

const designations = [
    { 'id': 11, 'name': 'Software Developer', },
    { 'id': 12, 'name': 'UI/UX Designer', },
    { 'id': 13, 'name': 'Frontend Developer', },
    { 'id': 14, 'name': 'Project Manager', },
    { 'id': 15, 'name': 'React Developer', },
]

const tableHeads = ['SI.No', 'Name', 'Action']

export default function Designation() {
    return (
        <>
            <Container>
                <Card className="px-3 pt-2 mt-4">
                    <Card.Header className="bg-white border-none grid grid-cols-7 gap-0">
                        <Card.Title>Designations</Card.Title>
                        <Card.SubTitle>Total {designations.length} designations</Card.SubTitle>
                        <Card.Action>
                            <Link href="home/designations/create">
                                <Button variant="outline-primary" size="sm">
                                    + Add
                                </Button>
                            </Link>
                        </Card.Action>
                    </Card.Header>
                    <Card.Body>
                        <Table columnHeads={tableHeads}>
                            {designations?.length > 0 && designations?.map((designation, index) => (
                                <Table.Body>
                                    <Table.Row>{index + 1}</Table.Row>
                                    <Table.Row>{designation?.name}</Table.Row>
                                    <Table.Row>
                                        <div className="flex">
                                            <Link href={"/home/designations/" + designation?.id + '/edit'}>
                                                <Button variant="icon" className="rounded p-1 rounded-r-none" title="Edit Employee">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                    </svg>
                                                </Button>
                                            </Link>
                                            <Link href={"/home/designations/" + designation?.id + '/edit'}>
                                                <Button variant="danger-icon" className="rounded p-1 rounded-l-none" title="Remove Employee">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                    </svg>
                                                </Button>
                                            </Link>
                                        </div>
                                    </Table.Row>
                                </Table.Body>
                            ))}
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}