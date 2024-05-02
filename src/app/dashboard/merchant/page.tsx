import * as React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

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

const merchant = () => {
  return (
    <div className="px-10">
      <div className="w-full border-b flex-wrap flex items-center  justify-between  py-3">
        <h2 className="text-md font-bold">Work space site</h2>
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
          <Button className="bg-blue-600 ">New Site</Button>
        </div>
      </div>
      <div className="pt-5 gap-8 flex items-center lg:justify-start max-md:justify-center flex-wrap">
        <div className="card w-[250px] h-[200px] bg-base-100 border ">
          <figure className="border-b relative overflow-hidden flex items-center justify-center group">
            <img className="transition duration-300 group-hover:brightness-50"
              src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/10/Customizable-Screen-Skeleton-Loader-In-CSS-css-skeletons.css.png?fit=678%2C485&ssl=1"
              alt="Shoes"
            />
              <a href="/merchant/dashboard" className="absolute py-2 px-8 rounded bg-white text-black text-sm font-bold opacity-0 group-hover:opacity-100 transition duration-300">Dashboard</a>
          </figure>
          <div className="px-3 py-3 flex flex-col ">
            <h5 className="font-bold">Site Name</h5>
            <h6 className=" font-bold text-xs text-gray-400">Domain Name.com</h6>
          </div>
        </div>
        <div className="card w-[250px] h-[200px] bg-base-100 border ">
          <figure className="border-b relative overflow-hidden flex items-center justify-center group">
            <img className="transition duration-300 group-hover:brightness-50"
              src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/10/Customizable-Screen-Skeleton-Loader-In-CSS-css-skeletons.css.png?fit=678%2C485&ssl=1"
              alt="Shoes"
            />
              <a href="/merchant/dashboard" className="absolute py-2 px-8 rounded bg-white text-black text-sm font-bold opacity-0 group-hover:opacity-100 transition duration-300">Dashboard</a>
          </figure>
          <div className="px-3 py-3 flex flex-col ">
            <h5 className="font-bold">Site Name</h5>
            <h6 className=" font-bold text-xs text-gray-400">Domain Name.com</h6>
          </div>
        </div>
        <div className="card w-[250px] h-[200px] bg-base-100 border ">
          <figure className="border-b relative overflow-hidden flex items-center justify-center group">
            <img className="transition duration-300 group-hover:brightness-50"
              src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/10/Customizable-Screen-Skeleton-Loader-In-CSS-css-skeletons.css.png?fit=678%2C485&ssl=1"
              alt="Shoes"
            />
              <a href="/merchant/dashboard" className="absolute py-2 px-8 rounded bg-white text-black text-sm font-bold opacity-0 group-hover:opacity-100 transition duration-300">Dashboard</a>
          </figure>
          <div className="px-3 py-3 flex flex-col ">
            <h5 className="font-bold">Site Name</h5>
            <h6 className=" font-bold text-xs text-gray-400">Domain Name.com</h6>
          </div>
        </div>
        <div className="card w-[250px] h-[200px] bg-base-100 border ">
          <figure className="border-b relative overflow-hidden flex items-center justify-center group">
            <img className="transition duration-300 group-hover:brightness-50"
              src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/10/Customizable-Screen-Skeleton-Loader-In-CSS-css-skeletons.css.png?fit=678%2C485&ssl=1"
              alt="Shoes"
            />
              <a href="/merchant/dashboard" className="absolute py-2 px-8 rounded bg-white text-black text-sm font-bold opacity-0 group-hover:opacity-100 transition duration-300">Dashboard</a>
          </figure>
          <div className="px-3 py-3 flex flex-col ">
            <h5 className="font-bold">Site Name</h5>
            <h6 className=" font-bold text-xs text-gray-400">Domain Name.com</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default merchant;
