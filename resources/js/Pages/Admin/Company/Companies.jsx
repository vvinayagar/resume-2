import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import { Button, Form, Table, Container, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import SkillLink from './Components/SkillLink';

// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Companies(props) {

    const [showSkill, setShowSkill] = useState(false);
    const [skillID, setSkillID] = useState(0);
    const [company, setCompany] = useState();

    const { data, setData, post, delete:destroy, errors, processing, recentlySuccessful } = useForm({
        id: 0,
        name: "",
        description: "",
        type: "",
        start: "",
        end: "",
        position: "",
        file:null

    });

    function onSubmit(e){
        e.preventDefault();
        post(route("admin.company.store"));

        setData({
            id: 0,
            name: "",
            description: "",
            type: "",
            start: "",
            end: "",
            position: "",
            file: null
        });
    }

    function onDelete(e) {

    }

  return (


    <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Companies</h2>}>

            <Head title="Skills" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                        <Table striped={true} bordered hover>
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Type</th>
                                <th>Start</th>
                                <th>End</th>
                                <th>Position</th>
                                <th>Logo</th>
                                <th>Controlls</th>
                                </tr>
                            </thead>
                            <tbody>
                            {props.companies.map((company) => {
                                return <tr>
                                    <td>{company.name}</td>
                                    <td>{company.description}</td>
                                    <td>{company.type}</td>
                                    <td>{company.start}</td>
                                    <td>{company.end}</td>
                                    <td>{company.position}</td>
                                    <td> <img src={"/uploads/" + company.logo} className="w-full h-64 object-cover" /></td>
                                    <td>
                                        <ButtonGroup>
                                           <Button type="button" className="btn btn-danger"
                                            onClick={() => {onDelete(company.id); }}
                                            >Delete</Button>
                                            <Button type="button" className="btn btn-warning"
                                            onClick={() => {
                                                setCompany(company);
                                            }}
                                            >Link Skill</Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            })}
                            </tbody>
                        </Table>
                        <hr />
                        { showSkill?   <Container>
<SkillLink />
</Container> : <></> }

                        <hr/>

                        <Form onSubmit={onSubmit} className="p-3">
                            <Form.Group className="mb-3" controlId="namel">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" placeholder="Enter name" value={data.name} onChange={(e) => {
                                    setData("name", e.target.value);
                                }} />
                                {/* <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Description</Form.Label>
                                <textarea className="form-control" placeholder="Enter description" onChange={(e) => {
                                    setData("description", e.target.value);
                                }} >{data.description}</textarea>
                                {/* <Form.Control type="text" placeholder="Enter description" /> */}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="type">
                                <Form.Label>Type</Form.Label>
                                <Form.Select type="text" placeholder="Enter type" onChange={(e) => {
                                    setData("type", e.target.value);
                                }} >
                                    <option value="MNC" selected={data.type == "MNC" ? true : false}  >MNC</option>
                                    <option value="Small Company" selected={data.type == "Small Company" ? true : false}>Small Company</option>
                                    <option value="Freelance" selected={data.type == "Freelance" ? true : false}>Freelance</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="start">
                                <Form.Label>Start</Form.Label>
                                <Form.Control type="date" placeholder="Enter Start Date" value={data.start} onChange={(e) => {
                                    setData("start", e.target.value);
                                }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="end">
                                <Form.Label>End</Form.Label>
                                <Form.Control type="date" placeholder="Enter Start Date" value={data.end} onChange={(e) => {
                                    setData("end", e.target.value);
                                }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="level">
                                <Form.Label>Position</Form.Label>
                                <Form.Control type="text" placeholder="Enter Position" value={data.position} onChange={(e) => {
                                    setData("position", e.target.value);
                                }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="image">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" placeholder="Select Image" value={data.image} onChange={(e) => {
                                    setData("file", e.target.files[0]);
                                }} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
  )
}
