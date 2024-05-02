"use client";
import * as React from "react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const profile = () => {
  return (
    <div className="px-10">
      <div className="w-full border-b flex-wrap flex items-center  justify-between  py-3">
        <h2 className="text-md font-bold">Setting</h2>
      </div>

      <div className="w-full flex p-8 gap-20 flex-wrap overflow-auto max-sm:justify-center max-md:justify-center max-lg:justify-center max-xl:justify-center">
        <div className="">
          <div className="w-[350px] border rounded-[8px]">
            <div className="w-full flex justify-center pt-8">
              <Avatar className="size-28">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="pt-8 flex justify-center">
              <p className="text-xl font-bold">Testname 1234</p>
            </div>
            <div className="flex justify-center pt-5">
              <Button className="bg-slate-900">Upload</Button>
            </div>
            <div className="py-8">
              <p className="flex justify-center text-gray-400 text-sm">
                File size does not exceed 1mb.
              </p>
              <p className="flex justify-center text-gray-400 text-sm">
                Supported files png, jpg
              </p>
            </div>
          </div>
        </div>

        <div className="max-sm:justify-center max-md:justify-center max-lg:justify-center max-xl:justify-center">
          <div className="w-full max-sm:justify-center max-md:justify-center max-lg:justify-center max-xl:justify-center">
            <div className="w-[450px] border rounded-[8px]">
              <div className="p-5 overflow-x-auto">
                <div className="px-3 pb-2">
                  <Label className="font-semibold" htmlFor="name">
                    Username
                  </Label>
                  <Input id="username" placeholder="Testname123" />
                </div>

                <div className="px-3 pb-2">
                  <Label className="font-semibold" htmlFor="email">
                    Email
                  </Label>
                  <Input id="email" placeholder="Testname@gmail.com" />
                </div>

                <div className="border-b py-1 px-3 ">
                  <p className="text-sm font-semibold">Address</p>
                </div>
                <div className="px-3 pb-2">
                  <Label htmlFor="message">Address</Label>
                  <Textarea id="address" placeholder="xxxxxxxxxx" />
                </div>

                <div className="flex justify-between px-3 pb-2 gap-3">
                  <div className="">
                    <Label className="font-semibold" htmlFor="name">
                      Province
                    </Label>
                    <Input id="message" placeholder="Province" />
                  </div>
                  <div className="">
                    <Label className="font-semibold" htmlFor="name">
                      District
                    </Label>
                    <Input id="message" placeholder="District" />
                  </div>
                  <div className="">
                    <Label className="font-semibold" htmlFor="name">
                      Sub district
                    </Label>
                    <Input id="message" placeholder="Sub district" />
                  </div>
                </div>

                <div className="flex justify-between px-3 pb-2 gap-3">
                  <div className="w-64">
                    <Label className="font-semibold" htmlFor="name">
                      Post Code
                    </Label>
                    <Input id="message" placeholder="Post Code" />
                  </div>

                  <div className="w-42">
                    <Label className="font-semibold" htmlFor="name">
                      Tel
                    </Label>
                    <Input id="message" placeholder="Tel" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end pt-36">
        <Button className="bg-slate-900">Save Changes</Button>
      </div>
    </div>
  );
};
export default profile;
