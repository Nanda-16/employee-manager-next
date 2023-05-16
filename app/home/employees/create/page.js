'use client';
import Button from "@/components/button";
import Card from "@/components/card";
import Container from "@/components/container";
import FormField from "@/components/form";
import Link from "next/link";
import { useState } from "react";

export default function CreateEmployee() {

    const [data, setData] = useState({});
    const [sameAddress, setSameAddress] = useState(false);
    const [profile, setProfile] = useState('');
    const [resume, setResume] = useState('');

    const handleInput = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox" && checked) {
            const present_address = document.getElementById("present_address_id");
            const permanent_address = document.getElementById("permanent_address_id");
            permanent_address.value = present_address.value;
        }
        if (name === 'profile_pic') {
            setData({ ...data, [name]: e.target.files[0] });
            setProfile(e.target.files[0]);
        } else if (name === 'resume') {
            setData({ ...data, [name]: e.target.files[0] });
            setResume(e.target.files[0]);
        } else if (name === 'present_address') {
            setSameAddress(false);
            setData({ ...data, [name]: value });
        } else {
            setData({ ...data, [name]: value });
        }
        console.log(data, data?.gender, ":dataaaa");
    }
    return (
        <>
            <Container  >
                <Card className="px-3 sm:px-8 pt-2 mt-4 w-2/3">
                    <Card.Header className="bg-white border-none grid grid-cols-7 gap-0">
                        <Card.Title  >Add Employee</Card.Title>
                    </Card.Header>
                    <form>
                        <Card.Body className="px-4">
                            <FormField>
                                <FormField.Label htmlFor="employeeFullName">Full Name</FormField.Label>
                                <FormField.Input type="text" id="employeeFullName" name="full_name" onChange={handleInput} required />
                            </FormField>
                            <FormField>
                                <FormField.Label htmlFor="employeeJoiningDate">
                                    Joining Date
                                </FormField.Label>
                                <FormField.Input id="employeeJoiningDate" type="date" name="joining_date" onChange={handleInput} required />
                            </FormField>
                            <FormField>
                                <FormField.Label htmlFor="employeeDateOfBirth">
                                    Date of Birth
                                </FormField.Label>
                                <FormField.Input id="employeeDateOfBirth" type="date" name="dob" onChange={handleInput} required />
                            </FormField>
                            <FormField>
                                <FormField.Label htmlFor="employeeDesignation">
                                    Designation
                                </FormField.Label>
                                <FormField.Select id="employeeDesignation" name="designation" onChange={handleInput} required >
                                    <FormField.Option>first</FormField.Option>
                                    <FormField.Option>second</FormField.Option>
                                    <FormField.Option>third</FormField.Option>
                                </FormField.Select>
                            </FormField>
                            <FormField>
                                <FormField.Label htmlFor="gender">
                                    Gender
                                </FormField.Label>
                                <div className="flex">
                                    <FormField.Input type="radio" id="employeeMale" name="gender" value="MALE" onChange={handleInput} />
                                    <FormField.Label htmlFor="employeeMale">
                                        Male
                                    </FormField.Label>
                                </div>
                                <div className="flex">
                                    <FormField.Input type="radio" id="employeeFemale" name="gender" value="FEMALE" onChange={handleInput} />
                                    <FormField.Label htmlFor="employeeFemale">
                                        Female
                                    </FormField.Label>
                                </div>
                            </FormField>
                            <FormField>
                                <FormField.Label htmlFor="employeeMobileNumber">
                                    Mobile Number
                                </FormField.Label>
                                <FormField.Input id="employeeMobileNumber" type="text" name="mobile_number" onChange={handleInput} required />
                            </FormField>
                            <FormField>
                                <FormField.Label htmlFor="employeeLandline">
                                    Landline
                                </FormField.Label>
                                <FormField.Input id="employeeLandline" type="text" name="landline" onChange={handleInput} required />
                            </FormField>
                            <FormField>
                                <FormField.Label htmlFor="employeeEmail">
                                    Email Address
                                </FormField.Label>
                                <FormField.Input id="employeeEmail" type="email" name="email" onChange={handleInput} required />
                            </FormField>
                            <FormField>
                                <FormField.Label htmlFor="present_address_id">
                                    Present Address
                                </FormField.Label>
                                <FormField.Textarea id="present_address_id" name="present_address" rows={5} onChange={handleInput} required></FormField.Textarea>
                            </FormField>
                            <FormField>
                                <FormField.Label></FormField.Label>
                                <div className="md:w-2/3 flex">
                                    <FormField.Input type="checkbox" id="sameAddress" checked={sameAddress} onChange={(e) => { handleInput(e); setSameAddress(e.currentTarget.checked); }} />
                                    <label htmlFor="sameAddress" className="text-sm font-semibold ms-1 cursor-pointer">
                                        Same as present address
                                    </label>
                                </div>
                            </FormField>
                            <FormField>
                                <FormField.Label htmlFor="permanent_address_id">
                                    Permanent Address
                                </FormField.Label>
                                <FormField.Textarea id="permanent_address_id" name="permanent_address" rows={5} onChange={handleInput} required></FormField.Textarea>
                            </FormField>
                            <FormField>
                                <FormField.Label>
                                    Profile Pic
                                </FormField.Label>
                                <input id="employeeProfilePic" type="file" className='hidden' accept=".jpg, .png, .jpeg" name="profile_pic" onChange={handleInput} required />
                                <label htmlFor="employeeProfilePic" className='cursor-pointer flex'>
                                    <div className="flex bg-neutral-400  text-white rounded p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 me-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                        </svg>
                                        choose Image
                                    </div>
                                    <span className="text-sm font-semibold m-1">
                                        {profile?.name}
                                    </span>
                                </label>
                            </FormField>
                            <FormField>
                                <FormField.Label>
                                    Resume
                                </FormField.Label>
                                <input id="employeeResume" type="file" className='hidden' accept=".doc, .pdf" name="resume" onChange={handleInput} required />
                                <label htmlFor="employeeResume" className='cursor-pointer flex md:w-3/4'>
                                    <div className="flex bg-neutral-400  text-white rounded p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 me-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                                        </svg>
                                        choose File
                                    </div>
                                    <span className="text-sm font-semibold m-1">
                                        {resume?.name}
                                    </span>
                                </label>
                            </FormField>
                        </Card.Body>
                        <Card.Footer>
                            <Button type="submit">Register new Employee</Button>
                            <Link href='/home/employees'>
                                <Button type="button" variant='secondary'>Cancel</Button>
                            </Link>
                        </Card.Footer>
                    </form>
                </Card>
            </Container>
        </>
    )
}