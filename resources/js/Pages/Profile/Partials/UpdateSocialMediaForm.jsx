import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';

export default function UpdateSocialMedia({ mustVerifyEmail, status, className }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        firstname: user.firstname,
        lastname: user.lastname,
        gender: user.gender,
        ic_no: user.ic_no,
        email: user.email,
        race: user.race,
        religion: user.religion,
        phone: user.phone,
        nationality: user.nationality,
    });

    const [chGender, setChGender] = useState(data.gender);

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel for="firstname" value="First Name" />

                    <TextInput
                        id="firstname"
                        className="mt-1 block w-full"
                        value={data.firstname}
                        handleChange={(e) => setData('firstname', e.target.value)}
                        required
                        isFocused
                        autoComplete="firstname"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel for="lastname" value="Last Name" />

                    <TextInput
                        id="lastname"
                        className="mt-1 block w-full"
                        value={data.lastname}
                        handleChange={(e) => setData('lastname', e.target.value)}
                        required
                        isFocused
                        autoComplete="lastname"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel for="ic_no" value="IC Number" />

                    <TextInput
                        id="ic_no"
                        className="mt-1 block w-full"
                        value={data.ic_no}
                        handleChange={(e) => setData('ic_no', e.target.value)}
                        required
                        isFocused
                        autoComplete="ic_no"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel for="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        handleChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div>
                    <InputLabel for="gender" value="Gender" />
                    <select className="form-control mt-1 block w-full" placeholder='Select a Gender'
                        onChange={(e) => {
                            setData('gender', e.target.value);
                        }}
                    >
                        <option value="Male" selected={data.gender.toLowerCase() === 'male'}>Male</option>
                        <option value="Female" selected={data.gender.toLowerCase() === 'female'}>Female</option>
                    </select>
                    <InputError className="mt-2" message={errors.gender} />
                </div>

                <div>
                    <InputLabel for="race" value="Race" />

                    <TextInput
                        id="race"
                        className="mt-1 block w-full"
                        value={data.race}
                        handleChange={(e) => setData('race', e.target.value)}
                        required
                        isFocused
                        autoComplete="race"
                    />

                    <InputError className="mt-2" message={errors.race} />
                </div>

                <div>
                    <InputLabel for="religion" value="Religion" />

                    <TextInput
                        id="religion"
                        className="mt-1 block w-full"
                        value={data.religion}
                        handleChange={(e) => setData('religion', e.target.value)}
                        required
                        isFocused
                        autoComplete="religion"
                    />

                    <InputError className="mt-2" message={errors.religion} />
                </div>

                <div>
                    <InputLabel for="nationality" value="Nationality" />

                    <TextInput
                        id="nationality"
                        className="mt-1 block w-full"
                        value={data.nationality}
                        handleChange={(e) => setData('nationality', e.target.value)}
                        required
                        isFocused
                        autoComplete="nationality"
                    />

                    <InputError className="mt-2" message={errors.nationality} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton processing={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
