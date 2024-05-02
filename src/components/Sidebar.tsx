import * as React from "react";
import Link from 'next/link'
import {
  MdDashboard,
  MdInventory,
  MdOutlineMonetizationOn,
  MdFeedback,
  MdWebStories,
  MdWeb,

} from "react-icons/md";
import { BsFillFileTextFill,BsFillHddNetworkFill  } from "react-icons/bs";
import { TbCategoryFilled } from "react-icons/tb";
import { FaBox, FaBook } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import { GrUpgrade } from "react-icons/gr";
import { RiTeamFill } from "react-icons/ri";
import { SiMarketo  } from "react-icons/si";
import { BiSupport } from "react-icons/bi";


const Sidebar = () => {
  return (
    <div className="overflow-y-auto w-full border-dark-800 md:h-full max-md:hidden md:flex p-10 ">
      <div className="flex items-start justify-center ">
        <ul className="menu w-full rounded-box text-gray-500">
          <li>
            <h2 className="menu-title">การจัดการเว็บไซต์</h2>
            <ul>
              <li>
                <h2 className="menu-title flex items-center">
                  <MdWeb  className="mr-2 h-4 w-4" /> เว็บไซต์
                </h2>
                <ul>
                  <li>
                    <Link href="/dashboard/sites">
                      <MdWebStories className="mr-2 h-4 w-4" /> เว็บไซต์ทั้งหมด
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <h2 className="menu-title flex items-center">
                  <SiMarketo  className="mr-2 h-4 w-4" /> การจัดการร้านค้า
                </h2>
                <ul>
                  <li>
                      <Link href="/dashboard/merchant">
                        <MdDashboard className="mr-2 h-4 w-4" /> ร้านค้า
                      </Link>
                     </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <h2 className="menu-title">ตั้งค่า</h2>
            <ul>
              <li>
                <Link href="/merchant/general">
                  <GiSettingsKnobs className="mr-2 h-4 w-4" /> ทั่วไป
                </Link>
              </li>
              <li>
                <Link href="/merchant/plans">
                  <GrUpgrade className="mr-2 h-4 w-4" /> แพลน
                </Link>
              </li>
              <li>
                <Link href="/merchant/billing">
                  <MdOutlineMonetizationOn className="mr-2 h-4 w-4" /> การเรียกเก็บเงิน
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <h2 className="menu-title">เพิ่มเติม</h2>
            <ul>
              <li>
                <Link href="/merchant/tutorials">
                  <FaBook className="mr-2 h-4 w-4" /> การใช้งาน
                </Link>
              </li>
              <li>
                <Link href="/merchant/">
                  <BiSupport className="mr-2 h-4 w-4" />
                  ซัพพอร์ต
                </Link>
              </li>
              <li>
                <Link href="/merchant/feedback">
                  <MdFeedback className="mr-2 h-4 w-4" /> Feedback
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
