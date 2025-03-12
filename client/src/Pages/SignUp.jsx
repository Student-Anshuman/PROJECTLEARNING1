import { Button } from '@/components/ui/button';
import { Form,FormControl,  FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import { Link } from 'react-router-dom';


const SignUp = () => {
  const formSchema = z.object({
    user : z.string().name,
    email: z.string().email(),
    password: z
      .string()
      .min(8, "password should not be less than 8 character"),
    confirm_password: z.string().min(8, "password mismatched")
      
  });

  const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: " ",
          password: " ",
          confirm_password: " ",
          user: " "
        },
    });
  
  function onSubmit(values) {
    console.log(values);
  }
  return (
    <div className="flex justify-center  h-screen w-screen cursor-pointer bg-amber-50">
      <Form {...form}>
        <form
          className="bg-blue-200 m-20 p-4 rounded-2xl w-1/4 h-3/4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <h1 className="font-bold justify-center "> Create account</h1>
          <div className="mb-3 ">
            <FormField
              control={form.control}
              name="user"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
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
          <div className="mb-3 ">
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>confirm_password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter password again" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600">
            <Link to="/sign-up">Sign Up</Link>
            
          </Button>
          <h1>OR</h1>
          <h1>Login</h1>
          <Button className="w-full bg-blue-600">
            <Link to="/sign-in">Sign In</Link>
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default SignUp;
