import * as React from "react";
import { FaGoogle } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";



const register = () => {
    return(
        <div className="flex justify-center items-center h-screen">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-center font-bold">Register</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="Username" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="example@mail.com" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="password" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="confirmpassword">Confirm password</Label>
                  <Input id="confirmpassword" type="password" placeholder="Confirm password" />
                </div>
              </div>
            </form>
          </CardContent>
    
          <div className="flex justify-center  ">
            <Button className="w-[311px]">
              <MdAddBox className="mr-2 h-4 w-4" /> Register
            </Button>
          </div>
    
          <div className="flex justify-center my-5">
            <hr className="border-2" />
            <p className="text-sm font-bold text text-gray-400">OR CONTINUE WITH</p>
            <hr />
          </div>
    
          <div className="flex justify-center">
            <Button variant="secondary" className="w-[311px]">
              <FaGoogle className="mr-2 h-4 w-4" /> Google Account
            </Button>
          </div>
          <div className="flex justify-center my-5">
            <Button variant="link">
              <Link href="/register">Create an account</Link>
            </Button>
          </div>
        </Card>
      </div>
    )
};

export default register;
