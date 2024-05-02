"use client";
import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const category = () => {
  const [position, setPosition] = useState("bottom");

  return (
    <div className="px-10 max-md:px-2">
      <div className="w-full border-b flex-wrap flex items-center justify-between py-3">
        <h2 className="text-md font-bold">Categories</h2>
      </div>
      <div className=" mx-auto ">
        <div>
          <div className=" max-md:w-full lg:w-90">
            <CardHeader>
              <h2 className="text-md font-bold">Add a Category</h2>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex items-center justify-between gap-x-4 gap-y-2 max-md:flex-wrap lg:flex-nowrap ">
                  <div className="flex max-md:w-full items-end flex-wrap gap-4 ">
                    <div className="flex flex-col max-md:w-full  space-y-1.5">
                      <Input id="name" placeholder="Category Name" />
                    </div>
                    <Button className="max-md:w-full">Save</Button>
                  </div>
                  <div className="flex gap-4 max-md:flex-wrap">
                    <Input type="search" placeholder="Search sites..." />
                    <Select>
                      <SelectTrigger className="w-[190px] max-md:w-full">
                        <SelectValue placeholder="Filter" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </form>
            </CardContent>
          </div>
          <div></div>
        </div>
      </div>
      <div className="overflow-x-auto ">
        <table className="table table-sm">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Create At</th>
              <th>Updater At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th>1</th>
              <td>Category Name</td>
              <td>12/6/2023 12:00 AM</td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-5 h-5 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          <FaEdit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                      </DialogTrigger>
                      <DialogContent>
                        <div className="w-9/12 flex-wrap flex items-center  justify-center z-10 ">
                          <div>
                            <h3 className="font-bold text-lg">
                              Edit a Category
                            </h3>
                            <div className=" mx-auto mt-12">
                              <div>
                                <div className=" max-md:w-full lg:w-90">
                                  <form>
                                    <div className="flex max-md:w-full items-end flex-wrap gap-4 justify-between ">
                                      <div className="flex flex-col max-md:w-full  space-y-1.5">
                                        <Input
                                          id="name"
                                          placeholder="Category Name"
                                        />
                                      </div>
                                      <Button className="max-md:w-full">
                                        Save
                                      </Button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <DropdownMenuItem>
                      <FaTrash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Category Name</td>
              <td>12/6/2023 12:00 AM</td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-5 h-5 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          <FaEdit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                      </DialogTrigger>
                      <DialogContent>
                        <div className="w-9/12 flex-wrap flex items-center  justify-center z-10 ">
                          <div>
                            <h3 className="font-bold text-lg">
                              Edit a Category
                            </h3>
                            <div className=" mx-auto mt-12">
                              <div>
                                <div className=" max-md:w-full lg:w-90">
                                  <form>
                                    <div className="flex max-md:w-full items-end flex-wrap gap-4 justify-between ">
                                      <div className="flex flex-col max-md:w-full  space-y-1.5">
                                        <Input
                                          id="name"
                                          placeholder="Category Name"
                                        />
                                      </div>
                                      <Button className="max-md:w-full">
                                        Save
                                      </Button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <DropdownMenuItem>
                      <FaTrash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
              <th>3</th>
              <td>Category Name</td>
              <td>12/6/2023 12:00 AM</td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-5 h-5 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          <FaEdit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                      </DialogTrigger>
                      <DialogContent>
                        <div className="w-9/12 flex-wrap flex items-center  justify-center z-10 ">
                          <div>
                            <h3 className="font-bold text-lg">
                              Edit a Category
                            </h3>
                            <div className=" mx-auto mt-12">
                              <div>
                                <div className=" max-md:w-full lg:w-90">
                                  <form>
                                    <div className="flex max-md:w-full items-end flex-wrap gap-4 justify-between ">
                                      <div className="flex flex-col max-md:w-full  space-y-1.5">
                                        <Input
                                          id="name"
                                          placeholder="Category Name"
                                        />
                                      </div>
                                      <Button className="max-md:w-full">
                                        Save
                                      </Button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <DropdownMenuItem>
                      <FaTrash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
            {/* row 4 */}
            <tr className="hover">
              <th>4</th>
              <td>Category Name</td>
              <td>12/6/2023 12:00 AM</td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-5 h-5 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          <FaEdit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                      </DialogTrigger>
                      <DialogContent>
                        <div className="w-9/12 flex-wrap flex items-center  justify-center z-10 ">
                          <div>
                            <h3 className="font-bold text-lg">
                              Edit a Category
                            </h3>
                            <div className=" mx-auto mt-12">
                              <div>
                                <div className=" max-md:w-full lg:w-90">
                                  <form>
                                    <div className="flex max-md:w-full items-end flex-wrap gap-4 justify-between ">
                                      <div className="flex flex-col max-md:w-full  space-y-1.5">
                                        <Input
                                          id="name"
                                          placeholder="Category Name"
                                        />
                                      </div>
                                      <Button className="max-md:w-full">
                                        Save
                                      </Button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <DropdownMenuItem>
                      <FaTrash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
            {/* row 5 */}
            <tr className="hover">
              <th>5</th>
              <td>Category Name</td>
              <td>12/6/2023 12:00 AM</td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-5 h-5 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          <FaEdit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                      </DialogTrigger>
                      <DialogContent>
                        <div className="w-9/12 flex-wrap flex items-center  justify-center z-10 ">
                          <div>
                            <h3 className="font-bold text-lg">
                              Edit a Category
                            </h3>
                            <div className=" mx-auto mt-12">
                              <div>
                                <div className=" max-md:w-full lg:w-90">
                                  <form>
                                    <div className="flex max-md:w-full items-end flex-wrap gap-4 justify-between ">
                                      <div className="flex flex-col max-md:w-full  space-y-1.5">
                                        <Input
                                          id="name"
                                          placeholder="Category Name"
                                        />
                                      </div>
                                      <Button className="max-md:w-full">
                                        Save
                                      </Button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <DropdownMenuItem>
                      <FaTrash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
            {/* row 6 */}
            <tr className="hover">
              <th>6</th>
              <td>Category Name</td>
              <td>12/6/2023 12:00 AM</td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-5 h-5 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          <FaEdit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                      </DialogTrigger>
                      <DialogContent>
                        <div className="w-9/12 flex-wrap flex items-center  justify-center z-10 ">
                          <div>
                            <h3 className="font-bold text-lg">
                              Edit a Category
                            </h3>
                            <div className=" mx-auto mt-12">
                              <div>
                                <div className=" max-md:w-full lg:w-90">
                                  <form>
                                    <div className="flex max-md:w-full items-end flex-wrap gap-4 justify-between ">
                                      <div className="flex flex-col max-md:w-full  space-y-1.5">
                                        <Input
                                          id="name"
                                          placeholder="Category Name"
                                        />
                                      </div>
                                      <Button className="max-md:w-full">
                                        Save
                                      </Button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <DropdownMenuItem>
                      <FaTrash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
            {/* row 7 */}
            <tr className="hover">
              <th>7</th>
              <td>Category Name</td>
              <td>12/6/2023 12:00 AM</td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-5 h-5 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          <FaEdit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                      </DialogTrigger>
                      <DialogContent>
                        <div className="w-9/12 flex-wrap flex items-center  justify-center z-10 ">
                          <div>
                            <h3 className="font-bold text-lg">
                              Edit a Category
                            </h3>
                            <div className=" mx-auto mt-12">
                              <div>
                                <div className=" max-md:w-full lg:w-90">
                                  <form>
                                    <div className="flex max-md:w-full items-end flex-wrap gap-4 justify-between ">
                                      <div className="flex flex-col max-md:w-full  space-y-1.5">
                                        <Input
                                          id="name"
                                          placeholder="Category Name"
                                        />
                                      </div>
                                      <Button className="max-md:w-full">
                                        Save
                                      </Button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <DropdownMenuItem>
                      <FaTrash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
            {/* row 8 */}
            <tr className="hover">
              <th>8</th>
              <td>Category Name</td>
              <td>12/6/2023 12:00 AM</td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-5 h-5 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          <FaEdit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                      </DialogTrigger>
                      <DialogContent>
                        <div className="w-9/12 flex-wrap flex items-center  justify-center z-10 ">
                          <div>
                            <h3 className="font-bold text-lg">
                              Edit a Category
                            </h3>
                            <div className=" mx-auto mt-12">
                              <div>
                                <div className=" max-md:w-full lg:w-90">
                                  <form>
                                    <div className="flex max-md:w-full items-end flex-wrap gap-4 justify-between ">
                                      <div className="flex flex-col max-md:w-full  space-y-1.5">
                                        <Input
                                          id="name"
                                          placeholder="Category Name"
                                        />
                                      </div>
                                      <Button className="max-md:w-full">
                                        Save
                                      </Button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <DropdownMenuItem>
                      <FaTrash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
            {/* row 8 */}
            <tr className="hover">
              <th>8</th>
              <td>Category Name</td>
              <td>12/6/2023 12:00 AM</td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-5 h-5 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          <FaEdit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                      </DialogTrigger>
                      <DialogContent>
                        <div className="w-9/12 flex-wrap flex items-center  justify-center z-10 ">
                          <div>
                            <h3 className="font-bold text-lg">
                              Edit a Category
                            </h3>
                            <div className=" mx-auto mt-12">
                              <div>
                                <div className=" max-md:w-full lg:w-90">
                                  <form>
                                    <div className="flex max-md:w-full items-end flex-wrap gap-4 justify-between ">
                                      <div className="flex flex-col max-md:w-full  space-y-1.5">
                                        <Input
                                          id="name"
                                          placeholder="Category Name"
                                        />
                                      </div>
                                      <Button className="max-md:w-full">
                                        Save
                                      </Button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <DropdownMenuItem>
                      <FaTrash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
            {/* row 8 */}
            <tr className="hover">
              <th>8</th>
              <td>Category Name</td>
              <td>12/6/2023 12:00 AM</td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-5 h-5 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                          <FaEdit className="mr-2 h-4 w-4" />
                          Edit
                        </DropdownMenuItem>
                      </DialogTrigger>
                      <DialogContent>
                        <div className="w-9/12 flex-wrap flex items-center  justify-center z-10 ">
                          <div>
                            <h3 className="font-bold text-lg">
                              Edit a Category
                            </h3>
                            <div className=" mx-auto mt-12">
                              <div>
                                <div className=" max-md:w-full lg:w-90">
                                  <form>
                                    <div className="flex max-md:w-full items-end flex-wrap gap-4 justify-between ">
                                      <div className="flex flex-col max-md:w-full  space-y-1.5">
                                        <Input
                                          id="name"
                                          placeholder="Category Name"
                                        />
                                      </div>
                                      <Button className="max-md:w-full">
                                        Save
                                      </Button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <DropdownMenuItem>
                      <FaTrash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-wrap justify-between max-md:justify-center items-center py-5 ">
          <h2> 1 of 4 Row(s) selected.</h2>
          <div className="flex flex-wrap max-md:justify-center gap-y-4">
            <div className="join pe-2 max-md:pe-0  ">
              <button className="join-item btn btn-md">Previous</button>
              <button className="join-item btn btn-md">1</button>
              <button className="join-item btn btn-md">2</button>
              <button className="join-item btn btn-md">3</button>
              <button className="join-item btn btn-md">4</button>
              <button className="join-item btn btn-md">Next</button>
            </div>
            <select className="select select-bordered w-30 max-md:w-full max-w-xs">
              <option>Show 10 Row</option>
              <option>Show 25 Row</option>
              <option>Show 50 Row</option>
              <option>Show 100 Row</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default category;
