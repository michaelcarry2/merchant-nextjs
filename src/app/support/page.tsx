import React from "react";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";

const support = () => {
  return (
    <div className="px-10">
      <div className="w-full border-b flex-wrap flex items-center  justify-between  py-3">
        <h2 className="text-md font-bold">Support</h2>
      </div>
      <div>
        <CardHeader>
          <CardTitle>Support</CardTitle>
          <CardDescription>
            Do you have a question or problem? The support ticket system allows us to repond to your inquiries.
          </CardDescription>
        </CardHeader>
      </div>
      <div className="w-[600px] max-md:w-full ">
        <div className="w-auto">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="pt-5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="pt-5">
          <Label htmlFor="message">Your message</Label>
          <Textarea placeholder="Type your message here." id="message" />
        </div>
        <div className="pt-5 gap-4">
          <Label htmlFor="picture">Image</Label>
          <Input id="picture" type="file" />
          <Button className="mt-5">Button</Button>
        </div>
      </div>
    </div>
  );
};
export default support;