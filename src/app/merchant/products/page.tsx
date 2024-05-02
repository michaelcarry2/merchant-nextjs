"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

const category = () => {
  const [readio, setRadio] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadio(event.target.value);
  };

  return (
    <div className="px-10 max-md:px-2">
      <div className="w-full border-b flex-wrap flex items-center justify-between py-3">
        <h2 className="text-md font-bold">Products</h2>
      </div>
      <div className=" mx-auto  py-5">
        <div>
          <div className=" max-md:w-full lg:w-90 flex-wrap flex items-center justify-between">
            <h2 className="text-md font-bold">All Products</h2>
            <div className="flex items-center gap-x-4 gap-y-2 max-md:flex-wrap lg:flex-nowrap ">
              <Input className="" type="search" placeholder="Search sites..." />
              <Select>
                <SelectTrigger className="w-[190px]">
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

              <Dialog>
                <DialogTrigger asChild>
                  <Button>Add a Product</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Product type</DialogTitle>
                    <DialogDescription>Detail...Product type</DialogDescription>
                  </DialogHeader>
                  <div className="block  items-center justify-center ">
                    <div className="flex  justify-between gap-6 py-4 lg:flex-nowrap  max-md:flex-wrap ">
                      <div className=" w-full border-2 border-slate-200 p-8 rounded-lg justify-center items-center">
                        <div className="w-full flex items-center justify-between">
                          <div>
                            <Label htmlFor="terms">No Option</Label>
                            <DialogDescription className="pt-5">
                              Detail... No Option
                            </DialogDescription>
                          </div>
                          <input
                            type="radio"
                            name="no_option"
                            id="no_option"
                            value="no_option"
                            className="radio radio-sm"
                            checked={readio === "no_option"}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="w-full border-2 border-slate-200 p-8 rounded-lg justify-center items-center">
                        <div className="w-full flex items-center justify-between">
                          <div>
                            <Label htmlFor="terms">Has options</Label>
                            <DialogDescription className="pt-5">
                              Detail... has options
                            </DialogDescription>
                          </div>
                          <input
                            type="radio"
                            name="has_option"
                            id="has_option"
                            value="has_option"
                            className="radio radio-sm"
                            checked={readio === "has_option"}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex  justify-between gap-6 py-4 lg:flex-nowrap  max-md:flex-wrap ">
                      <div className=" w-full border-2 border-slate-200 p-8 rounded-lg justify-center items-center">
                        <div className="w-full flex items-center justify-between">
                          <div>
                            <Label htmlFor="terms">
                              Has options , Has variants
                            </Label>
                            <DialogDescription className="pt-5">
                              Detail... Has options , Has variants
                            </DialogDescription>
                          </div>
                          <input
                            type="radio"
                            name="has_option_variants"
                            id="has_option_variants"
                            value="has_option_variants"
                            className="radio radio-sm"
                            checked={readio === "has_option_variants"}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className=" w-full border-2 border-slate-200 p-8 rounded-lg justify-center items-center">
                        <div className="w-full flex items-center justify-between">
                          <div>
                            <Label htmlFor="terms">
                              Has options, has price per options
                            </Label>
                            <DialogDescription className="pt-5">
                              Detail... Has options, has price per options
                            </DialogDescription>
                          </div>
                          <input
                            type="radio"
                            name="has_option_price_per_options"
                            id="has_option_price_per_options"
                            value="has_option_price_per_options"
                            className="radio radio-sm"
                            checked={readio === "has_option_price_per_options"}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <DialogFooter>
                    <Link href={`/merchant/products/${readio}`}>
                      {" "}
                      <Button className="" type="submit">
                        Next
                      </Button>
                    </Link>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto ">
        <table className="table table-sm">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Option</th>
              <th>Stock</th>
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
              <td>No option</td>
              <td>10</td>
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
              <td>No option</td>
              <td>10</td>
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
              <td>No option</td>
              <td>10</td>
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
              <td>No option</td>
              <td>10</td>
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
              <td>No option</td>
              <td>10</td>
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
              <td>No option</td>
              <td>10</td>
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
              <td>No option</td>
              <td>10</td>
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
              <td>No option</td>
              <td>10</td>
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
              <td>No option</td>
              <td>10</td>
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
              <td>No option</td>
              <td>10</td>
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
