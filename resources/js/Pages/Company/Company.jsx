import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Company(props) {
  return (
    <AuthenticatedLayout
    auth={props.auth}
    errors={props.errors}
    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Company</h2>}
>
    <Head title="Company" />

    <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">You're logged in!</div>
            </div>
        </div>
    </div>
</AuthenticatedLayout>
  )
}
