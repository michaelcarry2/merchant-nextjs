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
 
const inventory = () => {
  return (
<div className="px-10">
<div className="w-full border-b flex-wrap flex items-center  justify-between  py-3">
  <h2 className="text-md font-bold">Merchant inventory</h2>
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
</div>
  );
};

export default inventory;
