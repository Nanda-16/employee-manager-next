'use client';
import Button from "@/components/button";
import Card from "@/components/card";
import Container from "@/components/container";
import { FormField, FormInput, FormLabel, FormTextArea } from "@/components/form";
import Link from "next/link";

export const metadata = {
    title: 'Create Employee - Employee Mananager',
    description: 'Employee Manangement application',
}

export default function Create() {
    return (
        <>
            <Container className="">
                <Card className="px-3 pt-2 mt-4 w-2/3">
                    <Card.Header className="bg-white border-none grid grid-cols-7 gap-0">
                        <Card.Title className="">Add Employee</Card.Title>
                    </Card.Header>
                    <Card.Body className="px-4">
                        <form>
                            <FormField>
                                <FormLabel htmlFor="employeeFullName" className="">Full Name</FormLabel>
                                <FormInput type="text" id="employeeFullName" required />
                            </FormField>
                            <FormField>
                                <FormLabel htmlFor="employeeJoiningDate">
                                    Joining Date
                                </FormLabel>
                                <FormInput id="employeeJoiningDate" type="date" />
                            </FormField>
                            <FormField>
                                <FormLabel htmlFor="employeeDateOfBirth">
                                    Date of Birth
                                </FormLabel>
                                <FormInput id="employeeDateOfBirth" type="date" />
                            </FormField>
                            <FormField>
                                <FormLabel htmlFor="employeeDesignation">
                                    Designation
                                </FormLabel>
                                <FormInput id="employeeDesignation" type="text" />
                            </FormField>
                            <FormField>
                                <FormLabel htmlFor="gender">
                                    Gender
                                </FormLabel>
                                <FormInput type="radio" id="employeeMale" name="gender" />
                                <FormLabel htmlFor="employeeMale">
                                    Male
                                </FormLabel>
                                <FormInput type="radio" id="employeeFemale" name="gender" />
                                <FormLabel htmlFor="employeeFemale">
                                    Female
                                </FormLabel>
                            </FormField>
                            <FormField>
                                <FormLabel htmlFor="employeeMobileNumber">
                                    Mobile Number
                                </FormLabel>
                                <FormInput id="employeeMobileNumber" type="text" />
                            </FormField>
                            <FormField>
                                <FormLabel htmlFor="employeeLandline">
                                    Landline
                                </FormLabel>
                                <FormInput id="employeeLandline" type="text" />
                            </FormField>
                            <FormField>
                                <FormLabel htmlFor="employeeEmail">
                                    Email Address
                                </FormLabel>
                                <FormInput id="employeeEmail" type="email" />
                            </FormField>
                            <FormField>
                                <FormLabel htmlFor="employeePresentAddress">
                                    Present Address
                                </FormLabel>
                                <FormTextArea id="employeePresentAddress" rows={5}></FormTextArea>
                            </FormField>
                            <FormField>
                                <FormLabel></FormLabel>
                                <div className="md:w-2/3 flex">
                                    <FormInput type="checkbox" id="sameAddress" name="gender" />
                                    <label htmlFor="sameAddress" className="text-sm font-semibold ms-1 cursor-pointer">
                                        Same as present address
                                    </label>
                                </div>
                            </FormField>
                            <FormField>
                                <FormLabel htmlFor="employeePermanentAddress">
                                    Permanent Address
                                </FormLabel>
                                <FormTextArea id="employeePermanentAddress" rows={5}></FormTextArea>
                            </FormField>
                            <FormField>
                                <FormLabel>
                                    Profile Pic
                                </FormLabel>
                                <input id="employeeProfilePic" type="file" className='hidden' />
                                <FormLabel htmlFor="employeeProfilePic" className='cursor-pointer'>choose image</FormLabel>
                            </FormField>
                            <FormField>
                                <FormLabel htmlFor="employeeResume">
                                    Resume
                                </FormLabel>
                                <FormInput id="employeeResume" type="file" />
                            </FormField>
                            <Button type="submit">Register new Employee</Button>
                            <Link href='/home/employees'>
                                <Button type="button" variant='secondary'>Cancel</Button>
                            </Link>
                        </form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}