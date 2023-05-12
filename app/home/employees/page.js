import { Card, CardAction, CardBody, CardHead, CardSubTitle, CardTitle } from "@/components/card"
import { Container } from "@/components/container"
import { Table, TableBody, TableRow } from "@/components/table"
import Link from "next/link"

export const metadata = {
  title: 'Employees - Employee Mananager',
  description: 'Employee Manangement application',
}

const employee = [
  { 'id': 11, 'name': 'Raisal', 'dob': 'Dec 01,1990', 'joining_date': 'Dec 19,2012', 'gender': 'Male', 'designation': 'Software Developer', 'email': 'raisal@gmail.com' },
  { 'id': 12, 'name': 'Raisal', 'dob': 'Dec 01,1990', 'joining_date': 'Dec 19,2012', 'gender': 'Male', 'designation': 'Software Developer', 'email': 'raisal@gmail.com' },
  { 'id': 13, 'name': 'Raisal', 'dob': 'Dec 01,1990', 'joining_date': 'Dec 19,2012', 'gender': 'Male', 'designation': 'Software Developer', 'email': 'raisal@gmail.com' },
  { 'id': 14, 'name': 'Raisal', 'dob': 'Dec 01,1990', 'joining_date': 'Dec 19,2012', 'gender': 'Male', 'designation': 'Software Developer', 'email': 'raisal@gmail.com' },
  { 'id': 15, 'name': 'Raisal', 'dob': 'Dec 01,1990', 'joining_date': 'Dec 19,2012', 'gender': 'Male', 'designation': 'Software Developer', 'email': 'raisal@gmail.com' },
  { 'id': 16, 'name': 'Raisal', 'dob': 'Dec 01,1990', 'joining_date': 'Dec 19,2012', 'gender': 'Male', 'designation': 'Software Developer', 'email': 'raisal@gmail.com' },
  { 'id': 17, 'name': 'Raisal', 'dob': 'Dec 01,1990', 'joining_date': 'Dec 19,2012', 'gender': 'Male', 'designation': 'Software Developer', 'email': 'raisal@gmail.com' }
]

const tableHeads = ['SI.No', 'Name', 'Join Date', 'DOB', 'Gender', 'Designation', 'Email Address', 'Profile Pic', 'Action']

function Employee() {
  return (
    <>
      <Container className="">
        <Card className="px-3">
          <CardHead className="bg-white border-none grid grid-cols-7 gap-0">
            <CardTitle className="">Employees</CardTitle>
            <CardSubTitle className="">Total 10 employees</CardSubTitle>
            <CardAction className="">
              <Link href="home/employees/create"
                className="inline-block rounded border border-violet-600 px-4 sm:px-8 py-1 font-medium uppercase leading-normal text-violet-600 transition duration-150 ease-in-out hover:bg-violet-100 hover:shadow-[0_8px_9px_-4px_rgba(124 58 237,0.3),0_4px_18px_0_rgba(124 58 237,0.2)] focus:bg-violet-100 focus:shadow-[0_8px_9px_-4px_rgba(124 58 237,0.3),0_4px_18px_0_rgba(124 58 237,0.2)] focus:outline-none focus:ring-0 active:bg-violet-100 active:shadow-[0_8px_9px_-4px_rgba(124 58 237,0.3),0_4px_18px_0_rgba(124 58 237,0.2)]"
              >
                + Add
              </Link>
            </CardAction>
          </CardHead>
          <CardBody>
            <Table columnHeads={tableHeads}>
              {employee?.length > 0 && employee?.map((employee, index) => (
                <TableBody>
                  <TableRow>{index + 1}</TableRow>
                  <TableRow>{employee?.name}</TableRow>
                  <TableRow>{employee?.joining_date}</TableRow>
                  <TableRow>{employee?.dob}</TableRow>
                  <TableRow>{employee?.gender}</TableRow>
                  <TableRow>{employee?.designation}</TableRow>
                  <TableRow>{employee?.email}</TableRow>
                  <TableRow></TableRow>
                  <TableRow>
                    <div className="flex justify-evenly">
                      ---
                    </div>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </CardBody>
        </Card>
      </Container>
    </>
  )
}

export default Employee