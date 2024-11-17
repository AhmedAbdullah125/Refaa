'use client'
import React from 'react'
import vector from '/public/Vector.png'
import Image from 'next/image'
import { z } from 'zod';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { Input } from '../ui/input';

const formSchema = z.object({
    email: z.string().email({ message: "Invalid Email" })
});


export default function Contact() {
    const form = useForm({
        resolver: zodResolver(formSchema),
    });
    const Submit = (data) => {
        console.log(data);
    };
    return (
        <div className="flex flex-col items-center justify-center pt-28 pb-20 bg-[#FFF6F6] relative" id='contact'>
            <p className="max-w-[695px] font-bold text-[34px] lg:text-[58px] text-center mb-6">إشترك ليصلك كل جديد
                مباشرة إلي <span className="text-primaryColor">بريدك الإلكتروني</span></p>
            <span className='font-normal text-sm lg:text-lg text-black/50 mb-24'>من فضلك قم بإدخال بريدك الإلكتروني ليصلك كل جديد</span>

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(Submit)}
                    className="w-full m-auto"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem >
                                <FormControl>
                                    <div className="input-cont p-3 border lg:gap-10 gap-3 rounded-3xl flex flex-row items-center m-auto border-primaryColor w-[90%] max-w-[936px]">
                                        <Button type='submit' className='px-14 h-14 lg:h-20 bg-primaryColor rounded-xl text-white'>إشتراك</Button>
                                        <Input {...field} placeholder='كتابة البريد الإلكتروني' className='shadow-none h-14 lg:h-20 w-[100%] bg-transparent border-none outline-none active:bottom-0' />
                                    </div>
                                </FormControl>
                                <FormMessage className='text-center text-primaryColor font-medium text-xl'/>
                            </FormItem>)}
                    />
                </form>
            </Form>
            <Image src={vector} className='lg:w-52 w-32 absolute inset-10  lg:top-[50%] top-4 lg:translate-y-[-50%] h-auto' alt='vector'></Image>
            <Image src={vector} className='lg:w-52 w-32 absolute inset-[80%] rotate-[150deg] top-[70%] lg:top-[50%] lg:*:translate-y-[-50%] h-auto' alt='vector'></Image>
        </div>
    )
}
