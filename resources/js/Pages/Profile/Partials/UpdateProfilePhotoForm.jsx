import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export default function UpdateProfilePhoto({ photos, className }) {
    const user = usePage().props.auth.user;
    const message = usePage().props.message;
    const images = usePage().props.images;
    console.log("Images:");
    console.log(images);
    //debugger;
    const { data, setData, post, errors, processing, recentlySuccessful } = useForm({
        file: null
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('profile.photo.add'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Photo</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile photos.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6" encType="multipart/form-data">
                <div>
                    <InputLabel for="photo" value="Photo" />

                    {/* <TextInput
                        id="image"
                        name="image"
                        type="file"
                        className="mt-1 block w-full"
                        value={data.image}
                        handleChange={(e) =>
                            setData("image", e.target.images[0])
                        }
                        required
                        isFocused
                        autoComplete="image"
                    /> */}
                    <input type='file' id="file"
                        name="file" className="mt-1 block w-full"
                        onChange={(e) => {
                            console.log(e.target.files);
                            setData("file", e.target.files[0]);
                            console.log('Image uploaded');

                        }

                        } />

                    <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {/* <img src="image1.jpg" class="w-full h-64 sm:h-32 md:h-48 object-cover" />
  <img src="image2.jpg" class="w-full h-64 sm:h-32 md:h-48 object-cover" />
  <img src="image3.jpg" class="w-full h-64 sm:h-32 md:h-48 object-cover" /> */}
                        {images.map((img) => {
                            return <div class="relative">
                                <img src={"/uploads/" + img.filename} class="w-full h-64 object-cover" />
                                <div class="absolute bottom-0 right-0 flex">
                                    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
                                        Default
                                    </button>
                                    <button class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                                        Delete
                                    </button>
                                </div>
                            </div>
                            //<img src={"/uploads/" + img.filename} class="w-full h-64 sm:h-32 md:h-48 object-cover" />;
                        })}
                    </div>

                    {message != undefined ? <div class="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">{message}</strong>
                        <span class="block sm:inline">{message}</span>
                        <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                            <svg class="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                        </span>
                    </div> : <></>}


                    <InputError className="mt-2" message={errors.name} />
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
