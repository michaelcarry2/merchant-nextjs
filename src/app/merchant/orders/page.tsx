import * as React from "react";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FaTrash } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { BiDetail } from "react-icons/bi";

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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const orderReport = () => {
  return (
    <div className="px-10 max-md:px-2">
      <div className="w-full border-b flex-wrap flex items-center justify-between py-3">
        <h2 className="text-md font-bold">รายการสั่งซื้อ</h2>
      </div>
      <div className=" mx-auto  py-5">
        <div>
          <div className="w-full  flex-wrap flex items-center  justify-between  py-3">
            <h2 className="text-md font-bold ">รายการสั่งซื้อทั้งหมด</h2>
            <div className="flex items-center gap-x-4 gap-y-2 max-md:flex-wrap lg:flex-nowrap ">
              <Input
                className=""
                type="search"
                placeholder="ค้นหารายการสั่งซื้อ"
              />
              <Select>
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="กรองการชำระเงิน" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button className="bg-slate-900 px-12">Export</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto ">
        <table className="table table-sm">
          {/* head */}
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>เลขที่ใบสั่งซื้อ</th>
              <th>ลูกค้า</th>
              <th>ราคา</th>
              <th>การชำระเงิน</th>
              <th>วันที่สั่งซื้อ</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th>1</th>
              <td>PO000001</td>
              <td>ชื่อบัญชีผู้ใช้</td>
              <td>10,000</td>
              <td>
                <div className="w-full">
                  <div className="badge badge-md badge-success badge-outline w-1/2 max-xl:w-full">
                    <p className="text-nowrap">ชำระเงินแล้ว</p>
                  </div>
                </div>
              </td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <div className="dropdown max-lg:dropdown-left">
                  <div tabIndex={0} className=" btn btn-xs">
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
                  </div>
                  <ul
                    tabIndex={0}
                    className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box "
                  >
                    <li>
                      <a>
                        <BiDetail className="mr-2 h-4 w-4" />
                        <span>Detail</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <FaTrash className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>PO000002</td>
              <td>ชื่อบัญชีผู้ใช้</td>
              <td>10,000</td>
              <td>
                <div className="w-full">
                  <div className="badge badge-md badge-warning badge-outline w-1/2 max-xl:w-full">
                  <p className="text-nowrap">รอชำระเงิน</p>
                  </div>
                </div>
              </td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <div className="dropdown max-lg:dropdown-left">
                  <div tabIndex={0} className=" btn btn-xs">
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
                  </div>
                  <ul
                    tabIndex={0}
                    className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box "
                  >
                    <li>
                      <a>
                        <BiDetail className="mr-2 h-4 w-4" />
                        <span>Detail</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <FaTrash className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
              <th>3</th>
              <td>PO000003</td>
              <td>ชื่อบัญชีผู้ใช้</td>
              <td>10,000</td>
              <td>
                <div className="w-full">
                  <div className="badge badge-md badge-success badge-outline w-1/2 max-xl:w-full">
                  <p className="text-nowrap">ชำระเงินแล้ว</p>
                  </div>
                </div>
              </td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <div className="dropdown max-lg:dropdown-left">
                  <div tabIndex={0} className=" btn btn-xs">
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
                  </div>
                  <ul
                    tabIndex={0}
                    className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box "
                  >
                    <li>
                      <a>
                        <BiDetail className="mr-2 h-4 w-4" />
                        <span>Detail</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <FaTrash className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            {/* row 4 */}
            <tr className="hover">
              <th>4</th>
              <td>PO000004</td>
              <td>ชื่อบัญชีผู้ใช้</td>
              <td>10,000</td>
              <td>
                <div className="w-full">
                  <div className="badge badge-md badge-warning badge-outline w-1/2 max-xl:w-full">
                    <p className="text-nowrap">รอชำระเงิน</p>
                  </div>
                </div>
              </td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <div className="dropdown max-lg:dropdown-left">
                  <div tabIndex={0} className=" btn btn-xs">
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
                  </div>
                  <ul
                    tabIndex={0}
                    className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box "
                  >
                    <li>
                      <a>
                        <BiDetail className="mr-2 h-4 w-4" />
                        <span>Detail</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <FaTrash className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            {/* row 5 */}
            <tr className="hover">
              <th>5</th>
              <td>PO000005</td>
              <td>ชื่อบัญชีผู้ใช้</td>
              <td>10,000</td>
              <td>
                <div className="w-full">
                  <div className="badge badge-md badge-warning badge-outline w-1/2 max-xl:w-full">
                    <p className="text-nowrap">รอชำระเงิน</p>
                  </div>
                </div>
              </td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <div className="dropdown max-lg:dropdown-left">
                  <div tabIndex={0} className=" btn btn-xs">
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
                  </div>
                  <ul
                    tabIndex={0}
                    className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box "
                  >
                    <li>
                      <a>
                        <BiDetail className="mr-2 h-4 w-4" />
                        <span>Detail</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <FaTrash className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            {/* row 6 */}
            <tr className="hover">
              <th>6</th>
              <td>PO000006</td>
              <td>ชื่อบัญชีผู้ใช้</td>
              <td>10,000</td>
              <td>
                <div className="w-full">
                  <div className="badge badge-md badge-success badge-outline w-1/2 max-xl:w-full">
                  <p className="text-nowrap">ชำระเงินแล้ว</p>
                  </div>
                </div>
              </td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <div className="dropdown max-lg:dropdown-left">
                  <div tabIndex={0} className=" btn btn-xs">
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
                  </div>
                  <ul
                    tabIndex={0}
                    className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box "
                  >
                    <li>
                      <a>
                        <BiDetail className="mr-2 h-4 w-4" />
                        <span>Detail</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <FaTrash className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            {/* row 7 */}
            <tr className="hover">
              <th>7</th>
              <td>PO000007</td>
              <td>ชื่อบัญชีผู้ใช้</td>
              <td>10,000</td>
              <td>
                <div className="w-full">
                  <div className="badge badge-md badge-success badge-outline w-1/2 max-xl:w-full">
                    <p className="text-nowrap">ชำระเงินแล้ว</p>
                  </div>
                </div>
              </td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <div className="dropdown max-lg:dropdown-left">
                  <div tabIndex={0} className=" btn btn-xs">
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
                  </div>
                  <ul
                    tabIndex={0}
                    className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box "
                  >
                    <li>
                      <a>
                        <BiDetail className="mr-2 h-4 w-4" />
                        <span>Detail</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <FaTrash className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            {/* row 8 */}
            <tr className="hover">
              <th>8</th>
              <td>PO000008</td>
              <td>ชื่อบัญชีผู้ใช้</td>
              <td>10,000</td>
              <td>
                <div className="w-full">
                  <div className="badge badge-md badge-success badge-outline w-1/2 max-xl:w-full">
                    <p className="text-nowrap">ชำระเงินแล้ว</p>
                  </div>
                </div>
              </td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <div className="dropdown max-lg:dropdown-left">
                  <div tabIndex={0} className=" btn btn-xs">
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
                  </div>
                  <ul
                    tabIndex={0}
                    className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box "
                  >
                    <li>
                      <a>
                        <BiDetail className="mr-2 h-4 w-4" />
                        <span>Detail</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <FaTrash className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            {/* row 9 */}
            <tr className="hover">
              <th>9</th>
              <td>PO000009</td>
              <td>ชื่อบัญชีผู้ใช้</td>
              <td>10,000</td>
              <td>
                <div className="w-full">
                  <div className="badge badge-md badge-success badge-outline w-1/2 max-xl:w-full">
                    <p className="text-nowrap">ชำระเงินแล้ว</p>
                  </div>
                </div>
              </td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <div className="dropdown max-lg:dropdown-left">
                  <div tabIndex={0} className=" btn btn-xs">
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
                  </div>
                  <ul
                    tabIndex={0}
                    className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box "
                  >
                    <li>
                      <a>
                        <BiDetail className="mr-2 h-4 w-4" />
                        <span>Detail</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <FaTrash className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
            {/* row 10 */}
            <tr className="hover">
              <th>10</th>
              <td>PO000010</td>
              <td>ชื่อบัญชีผู้ใช้</td>
              <td>10,000</td>
              <td>
                <div className="w-full">
                  <div className="badge badge-md badge-error badge-outline w-1/2 max-xl:w-full">
                    ยกเลิก
                  </div>
                </div>
              </td>
              <td>30/10/2023 11:59 PM</td>
              <td>
                <div className="dropdown max-lg:dropdown-left">
                  <div tabIndex={0} className=" btn btn-xs">
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
                  </div>
                  <ul
                    tabIndex={0}
                    className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box "
                  >
                    <li>
                      <a>
                        <BiDetail className="mr-2 h-4 w-4" />
                        <span>Detail</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <FaTrash className="mr-2 h-4 w-4" />
                        <span>Delete</span>
                      </a>
                    </li>
                  </ul>
                </div>
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

export default orderReport;
