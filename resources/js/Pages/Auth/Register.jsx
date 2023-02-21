import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: '',
        lastname: '',
        gender: 'male',
        religion: '',
        race: '',
        phone: '',
        email: '',
        ic_no: '',
        nationality: '',
        instagram: '',
        facebook: '',
        linkedin: '',
        twitter: '',
        password: '',
        password_confirmation: '',
        start:''
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel forInput="firstname" value="First Name" />

                    <TextInput
                        id="firstname"
                        name="firstname"
                        value={data.firstname}
                        className="mt-1 block w-full"
                        autoComplete="firstname"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.firstname} className="mt-2" />
                </div>
                <div>
                    <InputLabel forInput="lastname" value="Last Name" />

                    <TextInput
                        id="lastname"
                        name="lastname"
                        value={data.lastname}
                        className="mt-1 block w-full"
                        autoComplete="lastname"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.lastname} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel forInput="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel forInput="phone" value="Phone" />

                    <TextInput
                        id="phone"
                        type="phone"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="phone"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.phone} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="ic_no" value="IC Number" />

                    <TextInput
                        id="ic_no"
                        name="ic_no"
                        value={data.ic_no}
                        className="mt-1 block w-full"
                        autoComplete="ic_no"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.ic_no} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="nationality" value="Nationality" />

                    <TextInput
                        id="nationality"
                        name="nationality"
                        value={data.nationality}
                        className="mt-1 block w-full"
                        autoComplete="nationality"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.lastname} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="gender" value="Gender" />

                    <select id="gender" name="gender" className="mt-1 block w-full">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <InputError message={errors.lastname} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="race" value="Race" />

                    <TextInput
                        id="race"
                        name="race"
                        value={data.race}
                        className="mt-1 block w-full"
                        autoComplete="race"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.lastname} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="religion" value="Religion" />

                    <TextInput
                        id="religion"
                        name="religion"
                        value={data.religion}
                        className="mt-1 block w-full"
                        autoComplete="religion"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.lastname} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="facebook" value="Facebook" />

                    <TextInput
                        id="facebook"
                        name="facebook"
                        value={data.facebook}
                        className="mt-1 block w-full"
                        autoComplete="facebook"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.facebook} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="twitter" value="Twitter" />

                    <TextInput
                        id="twitter"
                        name="twitter"
                        value={data.twitter}
                        className="mt-1 block w-full"
                        autoComplete="twitter"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.twitter} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="instagram" value="Instagram" />

                    <TextInput
                        id="instagram"
                        name="instagram"
                        value={data.instagram}
                        className="mt-1 block w-full"
                        autoComplete="instagram"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.instagram} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="linkedin" value="Linkedin" />

                    <TextInput
                        id="linkedin"
                        name="linkedin"
                        value={data.linkedin}
                        className="mt-1 block w-full"
                        autoComplete="linkedin"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.lastname} className="mt-2" />
                </div>

                <div>
                    <InputLabel forInput="start" value="Start Date" />

                    <TextInput
                        id="start"
                        name="start"
                        type="date"
                        value={data.start}
                        className="mt-1 block w-full"
                        autoComplete="start"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.lastname} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel forInput="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" processing={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
