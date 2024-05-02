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

const site = () => {
  return (
    <div className="px-10">
      <div className="w-full border-b flex-wrap flex items-center  justify-between  py-3">
        <h2 className="text-md font-bold">Merchant site</h2>
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
              <button className="absolute py-2 px-8 rounded bg-white text-black font-bold opacity-0 group-hover:opacity-100 transition duration-300">Design</button>
          </figure>
          <div className="px-3 py-3 flex items-center justify-between">
            <h5 className="font-medium">Site Name</h5>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-6">
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
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Duplicate</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Share</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="card w-[250px] h-[200px] bg-base-100 border">
          <figure className="border-b relative overflow-hidden flex items-center justify-center group">
            <img className="transition duration-300 group-hover:brightness-50"
              src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/10/Customizable-Screen-Skeleton-Loader-In-CSS-css-skeletons.css.png?fit=678%2C485&ssl=1"
              alt="Shoes"
            />
              <button className="absolute py-2 px-8 rounded bg-white text-black font-bold opacity-0 group-hover:opacity-100 transition duration-300">Design</button>
          </figure>
          <div className="px-3 py-3 flex items-center justify-between ">
            <h5 className="font-medium">Site Name</h5>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-6">
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
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Duplicate</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Share</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="card w-[250px] h-[200px] bg-base-100 border">
          <figure className="border-b relative overflow-hidden flex items-center justify-center group">
            <img className="transition duration-300 group-hover:brightness-50"
              src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/10/Customizable-Screen-Skeleton-Loader-In-CSS-css-skeletons.css.png?fit=678%2C485&ssl=1"
              alt="Shoes"
            />
              <button className="absolute py-2 px-8 rounded bg-white text-black font-bold opacity-0 group-hover:opacity-100 transition duration-300">Design</button>
          </figure>
          <div className="px-3 py-3 flex items-center justify-between ">
            <h5 className="font-medium">Site Name</h5>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-6">
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
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Duplicate</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Share</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="card w-[250px] h-[200px] bg-base-100 border">
          <figure className="border-b relative overflow-hidden flex items-center justify-center group">
            <img className="transition duration-300 group-hover:brightness-50"
              src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/10/Customizable-Screen-Skeleton-Loader-In-CSS-css-skeletons.css.png?fit=678%2C485&ssl=1"
              alt="Shoes"
            />
              <button className="absolute py-2 px-8 rounded bg-white text-black font-bold opacity-0 group-hover:opacity-100 transition duration-300">Design</button>
          </figure>
          <div className="px-3 py-3 flex items-center justify-between ">
            <h5 className="font-medium">Site Name</h5>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-6">
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
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Duplicate</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Share</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default site;
