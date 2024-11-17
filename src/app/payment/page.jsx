/**
 * @author Sameh Mohamed
 * date : 19-oct-2024
 * created the page of the payment
 * @page
 * @returns {JSX.Element} The rendered Payment Page
 */
'use client';
import googlePay from '/public/paymentLogos/googlePay.png';
import mada from '/public/paymentLogos/mada.png';
import masterCard from '/public/paymentLogos/masterCard.png';
import stc from '/public/paymentLogos/stc.png';
import visa from '/public/paymentLogos/visa.png';
const paymentMethods = [
  {
    imageSrc: googlePay,
    name: 'جوجل باي',
  },
  {
    imageSrc: mada,
    name: 'مدي',
  },
  {
    imageSrc: masterCard,
    name: 'ماستر كارد',
  },
  {
    imageSrc: stc,
    name: 'STC PAY',
  },
  {
    imageSrc: visa,
    name: 'فيزا',
  },
];
import { House } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';

import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
/**
 * this is the form validation
 * @param {string} -name
 * @param {string} -cardNumber
 * @param {string} -cardPassword
 * @param {string} -endDate
 * @param {string} - paymentType
 */
const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'this field is required' })
    .regex(/^[A-Za-z]+([ '-][A-Za-z]+)*$/, {
      message: 'please enter a valid name',
    }),
  cardNumber: z
    .string()
    .length(16, { message: 'card number must be of length 16' })
    .regex(/^\d+$/, { message: 'please enter a valid number' }),
  cardPassword: z
    .string()
    .length(4, { message: 'password must be of length 4' })
    .regex(/^\d+$/, { message: 'please enter a valid number' }),
  endDate: z.string(),
  type: z.string(),
});
export default function Payment() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      cardPassword: '',
      endDate: '',
      cardNumber: '',
      type: 'bank',
    },
  });
  const Submit = (data) => {
    console.log(data);
  };
  return (
    <div className="container mx-auto mb-10">
      {/* header */}
      <div className="bg-PaymentHead bg-center bg-cover h-[25.5rem] p-5 rounded-t-2xl">
        <div className="flex items-center gap-3">
          <Link href="/">
            <button className="bg-white py-2 px-3 rounded-lg hover:bg-secColor text-primaryColor hover:text-white transition ease-in-out duration-500">
              <House />
            </button>
          </Link>
          <Link href="#">
            <button className="bg-primaryColor text-white py-2 px-3 rounded-lg hover:bg-secColor">
              رحلاتنا
            </button>
          </Link>
        </div>
        <div className="text-white font-bold text-[3.5rem] flex justify-center items-center h-2/3">
          الحجز والدفع
        </div>
      </div>

      {/* content */}
      <div className="">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(Submit)}
            className="w-full relative flex flex-col items-center justify-between lg:gap-32 md:gap-20 gap-10 border-2 rounded-b-2xl p-10 pb-20"
          >
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  {/* <FormLabel>Notify me about...</FormLabel> */}
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-row-reverse gap-14"
                    >
                      <FormItem className="flex flex-row-reverse items-center gap-5 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="bank"
                            className="size-6 text-primaryColor border-primaryColor"
                          />
                        </FormControl>
                        <FormLabel className="font-semibold md:text-[1.5rem] text-[1rem]">
                          دفع بنكي
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex flex-row-reverse items-center gap-5 space-y-0">
                        <FormControl>
                          <RadioGroupItem
                            value="f2f"
                            className="size-6 text-primaryColor border-primaryColor"
                          />
                        </FormControl>
                        <FormLabel className="font-semibold md:text-[1.5rem] text-[1rem]">
                          دفع نقدي
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center flex-wrap justify-center gap-5">
              {paymentMethods.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="hover:-translate-y-3 shadow-2xl flex flex-col items-center justify-center size-[8rem] md:size-[12rem] rounded-3xl"
                  >
                    <div className="md:size-20 size-16 rounded-lg shadow-xl p-5 flex justify-center items-center">
                      <Image
                        src={item.imageSrc}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="object-contain"
                      />
                    </div>
                    <div className="font-semibold md:text-[1rem] text-[0.8rem] mt-3">
                      {item.name}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-5 w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="الإسم كامل..."
                        {...field}
                        className="customInput"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="رقم حامل الكارد..."
                        {...field}
                        className="customInput"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cardPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="الرقم السري..."
                        {...field}
                        className="customInput"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="تاريح إنتهاء الكارد..."
                        {...field}
                        className="customInput"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="bg-primaryColor absolute -bottom-8 z-50 text-[1.5rem] rounded-lg shadow-2xl hover:bg-secColor py-8 px-3 mt-10 md:px-10 font-semibold"
            >
              إستكمال الدفع
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
