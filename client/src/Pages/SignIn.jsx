import { Button } from '@/components/ui/button';
import { Form,FormControl,  FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Link } from 'react-router-dom';


const SignIn = () => {
  const formSchema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, "password should not be less than 8 character")
      
  });

  const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: " ",
          password: " ",
        },
    });
  
  function onSubmit() {
    console.log();
  }

  return (
    <div className="flex justify-center  h-screen w-screen cursor-pointer bg-amber-200">
      <Form {...form}>
        <form
          className="bg-blue-200 m-40 p-4 border-2 w-1/4 h-2/4 rounded-2xl"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <h1 className="font-bold justify-center ">Already created account</h1>
          <div className="mb-3 ">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mb-3">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600">
            <Link to="/sign-in">Sign In</Link>
          </Button>
          <h1>OR</h1>
          <h1>Create Account</h1>
          <Button className="w-full bg-blue-600">
            <Link to="/sign-up">Sign Up</Link>
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default SignIn
