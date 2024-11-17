'use client';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { format } from 'date-fns';

import { Calendar } from '@/components/ui/calendar';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
const formSchema = z.object({
  location: z.string().min(1, { message: 'You have to choose a location' }),
  date: z.date(),
  price: z.string().min(1, { message: 'price must be greater than zero' }),
});
export default function LocationForm() {
  const [date, setDate] = useState(new Date());
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: 'mansoura',
      price: '1',
      date: date,
    },
  });
  const Submit = (data) => {
    console.log(data);
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(Submit)}
          className="flex justify-between items-center w-full flex-col flex-wrap gap-5 md:flex-row-reverse"
        >
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="border md:border-none p-2 rounded-md w-4/6 md:w-auto">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full border-none text-lg">
                      <FormLabel className="text-lg font-semibold">
                        السعر
                      </FormLabel>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>السعر</SelectLabel>
                      <SelectItem value="1">2000$</SelectItem>
                      <SelectItem value="2">1000$</SelectItem>
                      <SelectItem value="3">5000$</SelectItem>
                      <SelectItem value="4">1$</SelectItem>
                      <SelectItem value="5">2$</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                  <SelectValue placeholder="2000$" />
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="border md:border-none p-2 rounded-md w-4/6 md:w-auto">
                <Select defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full border-none text-lg">
                      <FormLabel className="text-lg font-semibold">
                        التاريخ
                      </FormLabel>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      onDayClick={field.onChange}
                      initialFocus
                      disabled={{ before: new Date() }}
                    />
                  </SelectContent>
                  <div>{format(date, 'PPP')} </div>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="border md:border-none p-2 rounded-md w-4/6 md:w-auto">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-full border-none text-lg">
                      <FormLabel className="text-lg font-semibold">
                        الموقع
                      </FormLabel>
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>الموقع</SelectLabel>
                      <SelectItem value="mansoura">المنصورة</SelectItem>
                      <SelectItem value="hhyh">المنصورة</SelectItem>
                      <SelectItem value="gg">jjj</SelectItem>
                      <SelectItem value="ss">المنصورة</SelectItem>
                      <SelectItem value="hh">المنصورة</SelectItem>
                      <SelectItem value="bb">المنصورة</SelectItem>
                      <SelectItem value="tt">المنصورة</SelectItem>
                      <SelectItem value="kk">المنصورة</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                  <SelectValue placeholder="المنصورة" />
                </Select>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-primaryColor md:size-14 w-4/6 rounded-md hover:bg-secColor"
          >
            <Search />
          </Button>
        </form>
      </Form>
    </>
  );
}
