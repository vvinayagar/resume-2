import { useForm } from '@inertiajs/react';
import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function DeleteButton({id}) {

    const { data, setData, delete:destroy, errors, processing, recentlySuccessful } = useForm({
        id: id,

    });

    function onSubmit(e){
        e.preventDefault();
        delete(route("admin.skill.delete"));

    }

  return (
    <Form onSubmit={onSubmit} >
        <Button type='submit' className='btn btn-danger'>Delete</Button>
    </Form>
  )
}
