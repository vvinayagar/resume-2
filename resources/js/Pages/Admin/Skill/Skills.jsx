import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Form, Table } from 'react-bootstrap';
import DeleteButton from '@/Components/DeleteButton';

export default function Skills(props) {


    const { data, setData, post, delete:destroy, errors, processing, recentlySuccessful } = useForm({
        id: 0,
        name: "",
        description: "",
        type: "",
        year: 0,
        level: 0,
        file: null
    });

    // const { del, setDel, destroy , delErrors, delProcessing, delRecentlySuccessful } = useForm({
    //     id: 0,
    // });

    function onSubmit(e) {
        e.preventDefault();

        post(route("admin.skill.store"));

        setData({
            name: "",
            description: "",
            type: "",
            year: 0,
            level: 0,
            file: null
        })
    }

    function onDelete(e){
       // debugger;
        setData({id: e});
        destroy(route("admin.skill.delete"));
    }

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Skills</h2>}>

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
                                <th>Year</th>
                                <th>Level</th>
                                <th>Logo</th>
                                <th>Controlls</th>
                                </tr>
                            </thead>
                            <tbody>
                            {props.skills.map((skills) => {
                                return <tr>
                                    <td>{skills.name}</td>
                                    <td>{skills.description}</td>
                                    <td>{skills.type}</td>
                                    <td>{skills.year}</td>
                                    <td>{skills.level}</td>
                                    <td>
                                        {skills.logo == null ? <></> :   <> <img src={ "/uploads/"+ skills.logo} className="img-fluid img-list" /> {skills.logo} </>}
                                        </td>

                                    <td>
                                        <ButtonGroup>
                                           <Button type="button" className="btn btn-danger"
                                            onClick={() => {onDelete(skills.id); }}
                                            >Delete</Button>
                                            {/* <DeleteButton id={skills.id} /> */}
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            })}
                            </tbody>
                        </Table>
                        <hr />

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
                                    <option value="Front End" selected={data.type == "Front End" ? true : false}  >Front End</option>
                                    <option value="Back End" selected={data.type == "Back End" ? true : false}>Back End</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="year">
                                <Form.Label>Year</Form.Label>
                                <Form.Control type="number" placeholder="Enter Year" value={data.year} onChange={(e) => {
                                    setData("year", e.target.value);
                                }} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="level">
                                <Form.Label>Level</Form.Label>
                                <Form.Select onChange={(e) => {
                                    setData("level", e.target.value);
                                }}>
                                    <option value={1} selected={data.level == 1 ? true : false} >Beginning</option>
                                    <option value={2} selected={data.level == 2 ? true : false}>Level 2</option>
                                    <option value={3} selected={data.level == 3 ? true : false}>Level 3</option>
                                    <option value={4} selected={data.level == 4 ? true : false}>Level 4</option>
                                    <option value={5} selected={data.level == 5 ? true : false}>Intermediate</option>
                                    <option value={6} selected={data.level == 6 ? true : false}>Above Intermediate</option>
                                    <option value={7} selected={data.level == 7 ? true : false}>Level 7</option>
                                    <option value={8} selected={data.level == 8 ? true : false}>Level 8</option>
                                    <option value={9} selected={data.level == 9 ? true : false}>Level 9</option>
                                    <option value={10} selected={data.level == 10 ? true : false}>Expert</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="year">
                                <Form.Label>Logo</Form.Label>
                                <Form.Control type="file" placeholder="Select a image file" onChange={(e) => {
                                     console.log(e.target.files);
                                     setData("file", e.target.files[0]);
                                     console.log('Image uploaded');
                                }} />
                            </Form.Group>

                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> */}
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
