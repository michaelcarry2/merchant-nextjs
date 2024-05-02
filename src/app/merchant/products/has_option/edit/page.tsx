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

const has_option_edit = () => {

  return (
    <div className="px-10 max-md:px-2">
      
      <div className="w-full border-b flex-wrap flex items-center justify-between py-3">
        <h2 className="text-md font-bold">Has option</h2>
      </div>
      <div className="w-full flex flex-wrap max gap-6 mt-5 py-5">
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
            <div >
            <div className=" border border-slate-200 rounded-md p-6 h-max ">
              <Card className="w-[400px] max-md:w-[300px]">
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4 mt-5 mb-5">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Group</Label>
                        <Input id="name" placeholder="layout" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Option</Label>
                        <Input id="name" placeholder="option" />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className=" flex justify-center">
                  <div className="flex justify-center w-full">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full">Manage</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle className="flex justify-center font-bold">
                            Manage group
                          </DialogTitle>
                          <DialogDescription></DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="flex flex-col space-y-1.5 mb-1">
                            <Label htmlFor="group" className="mb-1">
                              Group
                            </Label>
                            <Input
                              id="name"
                              className="col-span-3"
                              placeholder="Group"
                            />
                          </div>
                          <hr />
                          <div>
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="option" className="mb-1">
                                Option
                              </Label>
                              <Input
                                id="option"
                                className="col-span-3"
                                placeholder="Option"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name" className="mb-1">
                              Image
                            </Label>
                            <Input
                              type="file"
                              id="imageInput"
                              placeholder="Choose File No File Chosen"
                            />
                          </div>
                          <div className="flex flex-col space-y-1.5 mb-3">
                            <Label htmlFor="stock" className="mb-1">
                              Stock
                            </Label>
                            <Input
                              id="stock"
                              className="col-span-3"
                              placeholder="Stock"
                            />
                          </div>
                          <hr />
                        </div>
                        <DialogFooter>
                          <div className="w-full">
                            <div className="flex justify-center mb-5">
                              <Button className=" w-full bg-slate-900">
                                Add
                              </Button>
                            </div>
                            <div className="flex justify-center mb-5">
                              <Button className="w-full bg-slate-900">
                                Save Changes
                              </Button>
                            </div>
                          </div>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardFooter>
              </Card>
              <br />
              <Card className="w-[400px] max-md:w-[300px]">
                <CardContent>
                  <form>
                    <div className="grid w-full items-center gap-4 pt-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Group</Label>
                        <Input id="name" placeholder="layout" />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="framework">Option</Label>
                        <Input id="name" placeholder="option" />
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className=" flex justify-center">
                  <div className="flex justify-center w-full">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full">Manage</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle className="flex justify-center font-bold">
                            Manage group
                          </DialogTitle>
                          <DialogDescription></DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                          <div className="flex flex-col space-y-1.5 mb-1">
                            <Label htmlFor="group" className="mb-1">
                              Group
                            </Label>
                            <Input
                              id="name"
                              className="col-span-3"
                              placeholder="Group"
                            />
                          </div>
                          <hr />
                          <div>
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="option" className="mb-1">
                                Option
                              </Label>
                              <Input
                                id="option"
                                className="col-span-3"
                                placeholder="Option"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name" className="mb-1">
                              Image
                            </Label>
                            <Input
                              type="file"
                              id="imageInput"
                              placeholder="Choose File No File Chosen"
                            />
                          </div>
                          <div className="flex flex-col space-y-1.5 mb-3">
                            <Label htmlFor="stock" className="mb-1">
                              Stock
                            </Label>
                            <Input
                              id="stock"
                              className="col-span-3"
                              placeholder="Stock"
                            />
                          </div>
                          <hr />
                        </div>
                        <DialogFooter>
                          <div className="w-full">
                            <div className="flex justify-center mb-5">
                              <Button className=" w-full bg-slate-900">
                                Add
                              </Button>
                            </div>
                            <div className="flex justify-center mb-5">
                              <Button className="w-full bg-slate-900">
                                Save Changes
                              </Button>
                            </div>
                          </div>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardFooter>
              </Card>
              <div className="flex justify-center w-full mt-5">
                <Button className="w-60">Add Group</Button>
              </div>
            </div>
            </div>
            <div >
              <Card className="w-[400px] max-md:w-[300px]">
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

export default has_option_edit;
