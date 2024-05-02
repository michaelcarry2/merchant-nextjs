import * as React from "react";
import { LockOpen1Icon } from "@radix-ui/react-icons";
import { FaGoogle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft } from "lucide-react"

const forgetPassword = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white w-full">
    <div className="card">
    <Card className="card">
  <CardHeader className="space-y-1">
    <CardTitle className="text-3xl relative flex justify-center">Forgot Password</CardTitle>
    <CardDescription className="relative flex justify-center">
      Enter your email and we’ll send you a link to reset password. 
    </CardDescription>
  </CardHeader>
  <CardContent className="grid gap-4">
    <div className="grid gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="m@example.com" />
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full mb-1">Submit</Button>
  </CardFooter>
  <div className="flex items-center justify-center py-5">
    <ChevronLeft className="h-4 w-4"/>
    <Link href="/login" className="p-0" >Back to Login</Link> 
  </div>
</Card>
    </div>
</div>
  );
};

export default forgetPassword;
