'use client'; // Indicates that this component is a client component. Ensure you're using Next.js 13 or later.

import Image from 'next/image'; // Importing Image component from Next.js for optimized image rendering.
import React from 'react'; // Importing React library for building the component.
import img1 from '/public/contact/1.jpg'; // Importing an image to be used in the component.
import { z } from 'zod'; // Importing Zod for schema validation.

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'; // Importing custom Select components (not used in the code but imported).

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

import { Button } from '../ui/button'; // Importing custom Button component.
import { useForm } from 'react-hook-form'; // Importing useForm hook from React Hook Form.
import { Input } from '../ui/input'; // Importing custom Input component.
import { Textarea } from '../ui/textarea'; // Importing custom Textarea component.

// Defining the validation schema using Zod
const formSchema = z.object({
    fName: z.string({ message: "Invalid Name" }).min(1, { message: "required" }), // First name validation
    lName: z.string({ message: "Invalid Name" }).min(1, { message: "required" }), // Last name validation
    comments: z.string({ message: "required" }).min(10, { message: "Min Chars Numbers is 10 Chars" }), // Comment validation
    phone: z.string().min(11, { message: "small number" }).max(11, { message: "max number" }).regex(/^01[0-9]{9}$/, { message: "invalid mobile number" }), // Phone number validation
    email: z.string().email({ message: "Invalid Email" }), // Email validation
});

// Main functional component
export default function FormSection() {
    const form = useForm({
        resolver: zodResolver(formSchema), // Integrating Zod with React Hook Form for validation
    });

    const Submit = (data) => {
        console.log(data); // Logging form data on submission. You may want to handle the data differently.
    };

    return (
        <div className='mb-16 lg:mb-44 container m-auto'> {/* Container for the form section */}
            <h3 className='text-2xl lg:text-6xl font-bold mb-20 text-black text-center'>
                <span className='text-primaryColor'>إرسال</span> رسالة للإدارة
            </h3>
            <div className="flex flex-col lg:flex-row gap-14">
                <div className="img-cont w-[400px] shrink-0 mx-auto aspect-[548/685] rounded-[40px] max-w-[100%] lg:max-w-[33%] relative pt-9">
                    <Image
                        src={img1}
                        alt="traveler" // Ensure alt text is descriptive for accessibility
                        className="aspect-[548/685] rounded-[40px] shadow-contact" // Applying styles
                    />
                </div>
                <div className="form w-[100%]">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(Submit)} // Handling form submission
                            className="w-full m-auto"
                        >
                            <div className="flex flex-col gap-4 lg:gap-14 w-[100%]">
                                <div className="flex gap-4 lg:gap-14 w-[100%] ">
                                    <FormField
                                        className="w-[100%]"
                                        control={form.control}
                                        name="fName"
                                        render={({ field }) => (
                                            <FormItem className="w-[100%]">
                                                <FormControl>
                                                    <Input {...field} placeholder='الإسم ...' className='shadow-none h-14 lg:h-20 w-[100%] bg-transparent border-2 border-[#B8B8B8] active:bottom-0' />
                                                </FormControl>
                                                <FormMessage className='text-center text-primaryColor font-medium text-xl' /> {/* Displaying validation messages */}
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        className="w-[100%]"
                                        name="lName"
                                        render={({ field }) => (
                                            <FormItem className="w-[100%]">
                                                <FormControl className="w-[100%]">
                                                    <Input {...field} placeholder='الاسم الاخير ...' className='shadow-none h-14 lg:h-20 w-[100%] bg-transparent border-2 border-[#B8B8B8] active:bottom-0' />
                                                </FormControl>
                                                <FormMessage className='text-center text-primaryColor font-medium text-xl' />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex gap-4 lg:gap-14 w-[100%] ">
                                    <FormField
                                        className="w-[100%]"
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem className="w-[100%]">
                                                <FormControl>
                                                    <Input {...field} placeholder='رقم الهاتف...' className='shadow-none h-14 lg:h-20 w-[100%] bg-transparent border-2 border-[#B8B8B8] active:bottom-0' />
                                                </FormControl>
                                                <FormMessage className='text-center text-primaryColor font-medium text-xl' />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        className="w-[100%]"
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="w-[100%]">
                                                <FormControl className="w-[100%]">
                                                    <Input {...field} placeholder=' البريد الاليكترونى...' className='shadow-none h-14 lg:h-20 w-[100%] bg-transparent border-2 border-[#B8B8B8] active:bottom-0' />
                                                </FormControl>
                                                <FormMessage className='text-center text-primaryColor font-medium text-xl' />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex gap-4 lg:gap-14 w-[100%] ">
                                    <FormField
                                        className="w-[100%]"
                                        control={form.control}
                                        name="comments"
                                        render={({ field }) => (
                                            <FormItem className="w-[100%]">
                                                <FormControl>
                                                    <Textarea type='textarea' {...field} placeholder='تعليقك ...' className='shadow-none h-40 lg:h-[296px] w-[100%] bg-transparent border-2 border-[#B8B8B8] active:bottom-0' />
                                                </FormControl>
                                                <FormMessage className='text-center text-primaryColor font-medium text-xl' />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex gap-4 lg:gap-14 w-[100%] ">
                                    <FormField
                                        className="w-[100%]"
                                        control={form.control}
                                        name="submit"
                                        render={({ field }) => (
                                            <FormItem className="w-[100%]">
                                                <FormControl>
                                                    <Button type='submit' className='px-14 h-14 lg:h-20 bg-primaryColor rounded-xl text-white'>إرسال</Button>
                                                </FormControl>
                                                <FormMessage className='text-center text-primaryColor font-medium text-xl' />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}
