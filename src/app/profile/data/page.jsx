'use client'; // Indicates that this component is a client component. Ensure you're using Next.js 13 or later.

import Image from 'next/image'; // Importing Image component from Next.js for optimized image rendering.
import React from 'react'; // Importing React library for building the component.
import img1 from '/public/contact/1.jpg'; // Importing an image to be used in the component.
import { object, z } from 'zod'; // Importing Zod for schema validation.
import { zodResolver } from '@hookform/resolvers/zod'; // Importing Zod resolver for React Hook Form.

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'; // Importing custom form components.

import { continents, countries, languages } from 'countries-list'; // Importing lists of continents, countries, and languages.
import {
    SelectGroup,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'; // Importing custom select components.

import PhnoeInput from 'react-phone-number-input'; // Importing a phone number input component.

import { useForm } from 'react-hook-form'; // Importing useForm hook from React Hook Form.
import { Button } from '@/components/ui/button'; // Importing a custom Button component.
import { Input } from '@/components/ui/input'; // Importing a custom Input component.
import { Select, SelectContent, SelectItem, SelectLabel } from '@/components/ui/select'; // Importing custom Select components.
import { useState } from 'react'; // Importing useState hook for managing component state.

let mainCountries = Object.values(countries); // Converting the countries object into an array for easy use.
console.log(mainCountries); // Logging the countries array to the console for debugging.

// Defining the validation schema using Zod
const formSchema = z.object({
    fName: z.string({ message: "Invalid Name" }).min(1, { message: "required" }), // First name validation
    lName: z.string({ message: "Invalid Name" }).min(1, { message: "required" }), // Last name validation
    password: z.string({ message: "Invalid Password" }).min(1, { message: "required" }), // Password validation
    comments: z.string({ message: "required" }).min(10, { message: "Min Chars Numbers is 10 Chars" }), // Comment validation
    phone: z.string().min(8, { message: "small number" }).max(16, { message: "max number" }), // Phone number validation
    email: z.string().email({ message: "Invalid Email" }), // Email validation
});

export default function Page() { // Define the main functional component
    const form = useForm({
        username: "", // Initialize form with username
        resolver: zodResolver(formSchema), // Integrating Zod with React Hook Form for validation
    });

    const { reset } = form; // Destructure reset method from form
    const Submit = (data) => { // Function to handle form submission
        console.log(data); // Logging form data on submission. You may want to handle the data differently.
        setEdit(false); // Set edit mode to false after submission
    };

    let [edit, setEdit] = useState(false); // State for toggling edit mode

    return (
        <div className='profile-form lg:px-9 w-full'> {/* Main container for the profile form */}
            <Form {...form}> {/* Passing the form object to the custom Form component */}
                <form
                    onSubmit={form.handleSubmit(Submit)} // Handling form submission
                    className="w-full m-auto" // Styling the form
                >
                    <div className="flex flex-col gap-4 lg:gap-10    w-full"> {/* Flexbox container for form fields */}
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 w-full ">
                            <FormField
                                className="w-full"
                                control={form.control}
                                name="fName" // Field for first name
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className='font-bold text-base text-[#083A50] mb-4'>الإسم</FormLabel> {/* Label for first name */}
                                        <FormControl>
                                            {edit ? // Conditional rendering based on edit state
                                                <Input {...field} placeholder='الإسم ...' className=' rounded-xl shadow-none h-11 w-full  border-2 bg-white border-[#CACED8] active:bottom-0' />
                                                :
                                                <Input {...field} placeholder='الإسم ...' value={`سمير حمد المغربي`} className=' rounded-xl shadow-none h-11 w-full  border-2 bg-[#fff7f7] border-primaryColor active:bottom-0' />
                                            }
                                        </FormControl>
                                        <FormMessage className='text-center text-primaryColor font-medium text-xl' /> {/* Displaying validation messages */}
                                    </FormItem>
                                )}
                            />
                            <FormField
                                className="w-full"
                                control={form.control}
                                name="email" // Field for email
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className='font-bold text-base text-[#083A50] mb-4'>البريد الإلكتروني</FormLabel> {/* Label for email */}
                                        <FormControl>
                                            {
                                                edit ?
                                                    <Input {...field} placeholder='البريد الإلكتروني ...' className='rounded-xl shadow-none h-11 w-full  border-2 bg-white border-[#CACED8] active:bottom-0' />
                                                    :
                                                    <Input {...field} placeholder='البريد الإلكتروني ...' value="name@mail.com" className='rounded-xl shadow-none h-11 w-full  border-2 bg-[#fff7f7] border-primaryColor active:bottom-0' />
                                            }
                                        </FormControl>
                                        <FormMessage className='text-center text-primaryColor font-medium text-xl' /> {/* Displaying validation messages */}
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 w-full ">
                            <FormField
                                className="w-full"
                                control={form.control}
                                name="phone" // Field for phone number
                                render={({ field }) => (
                                    <FormItem className={`w-full ${edit ? 'save' : "edit"}`}>
                                        <FormLabel className='font-bold text-base text-[#083A50] mb-4'>رقم الهاتف</FormLabel> {/* Label for phone number */}
                                        <FormControl className='flex flex-row-reverse'>
                                            {edit ?
                                                <PhnoeInput initialValueFormat="national"
                                                    international
                                                    countryCallingCodeEditable={false}
                                                    defaultCountry="EG" // Setting the default country to Egypt
                                                    className="overflow-hidden gap-2 flex shadow-none h-11 w-full rounded-xl border-none bg-white border-white active:bottom-0" onChange={field.onChange}
                                                />
                                                :
                                                <PhnoeInput initialValueFormat="national"
                                                    international
                                                    countryCallingCodeEditable={false}
                                                    defaultCountry="EG"
                                                    value="+20 01013633154" // Example phone number
                                                    className="overflow-hidden gap-2 flex shadow-none h-11 w-full rounded-xl border-none bg-[#fff7f7] border-primaryColor active:bottom-0" onChange={field.onChange}
                                                />
                                            }
                                        </FormControl>
                                        <FormMessage className='text-center text-primaryColor font-medium text-xl' /> {/* Displaying validation messages */}
                                    </FormItem>
                                )}
                            />
                            <FormField
                                className="w-full"
                                control={form.control}
                                name="password" // Field for password
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel className='font-bold text-base text-[#083A50] mb-4'>كلمة المرور</FormLabel> {/* Label for password */}
                                        <FormControl>
                                            {edit ?
                                                <Input {...field} type="password" placeholder='كلمة المرور  ...' className='rounded-xl shadow-none h-11 w-full  border-2 bg-white border-[#CACED8] active:bottom-0' />
                                                :
                                                <Input {...field} type="password" placeholder='كلمة المرور  ...' value="A@21444mag" className='rounded-xl shadow-none h-11 w-full  border-2 bg-[#fff7f7] border-primaryColor active:bottom-0' />
                                            }
                                        </FormControl>
                                        <FormMessage className='text-center text-primaryColor font-medium text-xl' /> {/* Displaying validation messages */}
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-14 w-full items-end ">
                            <div className="w-full">
                                <p className='font-bold text-base text-[#083A50] mb-4'>الدولة</p> {/* Label for country selection */}
                                <FormField
                                    className="w-full"
                                    control={form.control}
                                    name="country" // Field for country selection
                                    render={({ field }) => (
                                        <FormItem className={`rounded-xl shadow-none h-14 items-center flex w-full  border-2  ${!edit ? 'bg-[#fff7f7]' : 'bg-white'} ${!edit ? 'border-primaryColor' : 'border-[#CACED8]'} active:bottom-0`}>
                                            <Select
                                                onValueChange={field.onChange} // Updating field value on selection change
                                                defaultValue={field.value}
                                            >
                                                <FormControl className="">
                                                    <SelectTrigger className="w-full text-lg">
                                                        <FormLabel className="text-base font-normal text-[#083A50]">
                                                            <SelectValue className="text-base font-normal text-[#083A50]" placeholder="مصر" /> {/* Default placeholder for the select */}
                                                        </FormLabel>
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>الموقع</SelectLabel> {/* Group label for select options */}
                                                        <SelectItem value="mansoura">مصر</SelectItem> {/* Static option for Egypt */}
                                                        {mainCountries.map((cont) =>
                                                            <SelectItem value={cont.name} key={cont.name}>{cont.name}</SelectItem> // Dynamically rendering country options
                                                        )}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="w-full">
                                <FormField
                                    className="w-full"
                                    control={form.control}
                                    name="submit" // Field for submit button
                                    render={({ field }) => (
                                        <FormItem className="w-full">
                                            <FormControl>
                                                {edit ?
                                                    <Button type='submit' className='h-14 bg-primaryColor w-32 rounded-xl text-white text-base font-bold hover:bg-white hover:text-primaryColor hover:border-primaryColor hover:border'>حفظ</Button> 
                                                    :
                                                    <p type='submit' className='h-14 bg-white border border-primaryColor flex items-center justify-center w-32 rounded-xl text-primaryColor text-base font-bold hover:bg-primaryColor hover:text-white' onClick={() => setEdit(true)}>تعديل</p> 
                                                }
                                            </FormControl>
                                            <FormMessage className='text-center text-primaryColor font-medium text-xl' /> {/* Displaying validation messages */}
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </Form>
        </div>
    );
}
