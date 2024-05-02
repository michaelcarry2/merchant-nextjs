'use client'
import { useState, useEffect } from 'react';
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const no_option = () => {

  return (
    <div className="px-10 max-md:px-2">
      
      <div className="w-full border-b flex-wrap flex items-center justify-between py-3">
        <h2 className="text-md font-bold">No Option</h2>
      </div>
      <div className="flex flex-wrap max-md:justify-center gap-6 mt-5 py-5">
            <div>
              <Card className="w-[400px] max-md:w-[300px]">
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4 pt-10 pb-5">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Name of your project" />
                      </div>
                      <div className="grid w-full gap-1.5">
                        <Label htmlFor="message">Description</Label>
                        <Textarea placeholder="Description" id="message" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Preview</Label>
                        <Input
                          id="name"
                          placeholder="Choose File No File chosen"
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Stoke</Label>
                        <Input id="name" placeholder="Stoke" />
                      </div>
                      <div className="flex justify-between ">
                        <div className=" w-full">
                          <Label htmlFor="name">Price</Label>
                          <Input id="name" placeholder="Price" />
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="  ">
              <Card className="w-[400px] max-md:w-[300px] ">
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4 mt-5 mb-5">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">category</Label>
                      </div>
                      <div>
                        <Button
                          className="justify-between w-full"
                          variant="outline"
                        >
                          1
                          <div className="">

                          </div>
                        </Button>
                      </div>
                      <div>
                        <Button
                          className="justify-between w-full"
                          variant="outline"
                        >
                          2
                          <div className="">

                          </div>
                        </Button>
                      </div>
                      <div>
                      <Select>
                      <SelectTrigger className="">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                      </div>
                    </div>
                    
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
    </div>
  );
};

export default no_option;
