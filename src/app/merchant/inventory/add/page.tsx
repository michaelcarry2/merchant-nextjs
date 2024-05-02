import * as React from "react";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const categories = [
  {
    Number: "001",
    categoryName: "Category Name",
    CreateAt: "12/6/2023 12:00 AM",
    actions: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">...</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Action</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <a className="w-full h-full" href="category-edit">
                Edit
              </a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
  {
    Number: "002",
    categoryName: "2",
    CreateAt: "12/6/2023 12:00 AM",
    actions: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">...</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Action</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <a className="w-full h-full" href="category-edit">
                Edit
              </a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
  {
    Number: "003",
    categoryName: "2",
    CreateAt: "12/6/2023 12:00 AM",
    actions: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">...</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Action</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <a className="w-full h-full" href="category-edit">
                Edit
              </a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
  {
    Number: "004",
    categoryName: "3",
    CreateAt: "12/6/2023 12:00 AM",
    actions: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">...</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Action</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <a className="w-full h-full" href="category-edit">
                Edit
              </a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
  {
    Number: "005",
    categoryName: "4",
    CreateAt: "12/6/2023 12:00 AM",
    actions: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">...</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Action</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <a className="w-full h-full" href="category-edit">
                Edit
              </a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
  {
    Number: "006",
    categoryName: "5",
    CreateAt: "12/6/2023 12:00 AM",
    actions: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">...</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Action</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <a className="w-full h-full" href="category-edit">
                Edit
              </a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
  {
    Number: "007",
    categoryName: "6",
    CreateAt: "12/6/2023 12:00 AM",
    actions: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">...</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Action</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <a className="w-full h-full" href="category-edit">
                Edit
              </a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
];


const category = () => {
  return (
<div className="px-10">
<div className="w-full border-b flex-wrap flex items-center  justify-between  py-3">
  <h2 className="text-md font-bold">Merchant category</h2>
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
    <Button className="bg-blue-600 ">Add Category</Button>
    </div>
</div>
<div >


        <div className=" 2xl:w-full sm:w-screen">
          <div className="flex-row border border-slate-200 rounded-md p-5">
            <div className="container mx-auto  p-auto">
              <br />
              <div>
                <Table className="lg:w-full scroll-auto ">
                  <TableHeader>

                    <TableRow>
                      <TableHead className="w-[50px]">No.</TableHead>
                      <TableHead>Category Name</TableHead>
                      <TableHead>Creat At</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {categories.map((Number) => (
                      <TableRow key={Number.Number}>
                        <TableCell className="font-medium">
                          {Number.Number}
                        </TableCell>
                        <TableCell>{Number.categoryName}</TableCell>
                        <TableCell>{Number.CreateAt}</TableCell>
                        <TableCell className="text-right">
                          {Number.actions}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={3}>1 of 7row(s) selected.</TableCell>
                      <TableCell className="text-right">
                        <Button className="mx-2 w-20" >
                          Previous
                        </Button>
                        <Button className="mx-2 w-20" >
                          Next
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default category;
