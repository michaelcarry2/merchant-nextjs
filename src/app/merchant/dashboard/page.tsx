"use client";
import * as React from "react";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface MyChartProps {
  data: {
    labels: string[];
    values: number[];
  };
}
const dashboard = () => {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const canvas2 = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvas.current) {
      const ctx = canvas.current;
      const data = {
        labels: [
          "ม.ค",
          "ก.พ",
          "มี.ค",
          "เม.ย",
          "พ.ค",
          "มิ.ค",
          "ก.ค",
          "ส.ค",
          "ก.ย",
          "ต.ค",
          "พ.ย",
          "ธ.ค",
        ],
        datasets: [
          {
            label: "รายการสั่งซื้อ",
            data: [0, 40, 10, 40, 70, 40, 60, 80, 50, 75, 100, 125],
          },
          {
            label: "ยอดขาย",
            data: [10, 30, 50, 20, 50, 80, 18, 90, 11, 40, 80, 110],
          },
        ],
      };
      const myChart = new Chart(ctx, {
        type: "line",
        data: data,
        options: {
          scales: {
            y: {
              min: 0,
              beginAtZero: true,
              suggestedMax: 100,
            },
          },
        },
      });

      // Cleanup function to destroy the chart when the component is unmounted
      return () => {
        myChart.destroy();
      };
    }
  }, []);
  useEffect(() => {
    if (canvas2.current) {
      const ctx = canvas2.current;
      const data = {
        labels: [
          "ม.ค",
          "ก.พ",
          "มี.ค",
          "เม.ย",
          "พ.ค",
          "มิ.ค",
          "ก.ค",
          "ส.ค",
          "ก.ย",
          "ต.ค",
          "พ.ย",
          "ธ.ค",
        ],
        datasets: [
          {
            label: "ผู้เข้าชม",
            data: [0, 40, 10, 40, 70, 40, 60, 80, 100, 60, 90, 120],
          },
        ],
      };
      const myChart = new Chart(ctx, {
        type: "line",
        data: data,
        options: {
          scales: {
            y: {
              min: 0,
              beginAtZero: true,
              suggestedMax: 100,
            },
          },
        },
      });

      // Cleanup function to destroy the chart when the component is unmounted
      return () => {
        myChart.destroy();
      };
    }
  }, []);
  return (
    <div className="px-10">
      <div className="w-full border-b flex-wrap flex items-center  justify-between  py-3">
        <h2 className="text-md font-bold">แดชบอร์ด</h2>
      </div>

      <div className="w-full flex flex-auto gap-5 max-lg:gap-2 py-5 items-center max-md:justify-center max-lg:justify-center max-xl:justify-center max-2xl:justify-center flex-wrap">
        <div className="card 2xl:w-[320px] max-2xl:w-[200px] max-md:w-full  h-[100px] max-sm:h-[100px] items-center bg-base-100 border rounded-[25px] border-gray-300 overflow-hidden">
          <div className="w-full flex justify-between items-center p-8 max-sm:p-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.69 49.8971C32.3775 50.0571 32.44 50.9571 31.77 51.1796L27.82 52.4796C17.895 55.6796 12.67 53.0046 9.44499 43.0796L6.24499 33.2046C3.04499 23.2796 5.69499 18.0296 15.62 14.8296L16.93 14.3946C17.9375 14.0621 18.9175 15.0721 18.63 16.0946C18.49 16.5996 18.355 17.1296 18.22 17.6796L15.77 28.1546C13.02 39.9296 17.045 46.4296 28.82 49.2296L31.69 49.8971Z"
                fill="#0F7DFF"
              />
              <path
                d="M42.925 8.02233L38.75 7.04733C30.4 5.07233 25.425 6.69733 22.5 12.7473C21.75 14.2723 21.15 16.1223 20.65 18.2473L18.2 28.7223C15.75 39.1723 18.975 44.3223 29.4 46.7973L33.6 47.7973C35.05 48.1473 36.4 48.3723 37.65 48.4723C45.45 49.2223 49.6 45.5723 51.7 36.5473L54.15 26.0973C56.6 15.6473 53.4 10.4723 42.925 8.02233ZM38.225 33.3223C38 34.1723 37.25 34.7223 36.4 34.7223C36.25 34.7223 36.1 34.6973 35.925 34.6723L28.65 32.8223C28.1989 32.6736 27.821 32.3591 27.5928 31.9426C27.3646 31.526 27.3029 31.0383 27.4204 30.5781C27.5378 30.1178 27.8256 29.7193 28.2255 29.463C28.6254 29.2067 29.1077 29.1118 29.575 29.1973L36.85 31.0473C37.875 31.2973 38.475 32.3223 38.225 33.3223ZM45.55 24.8723C45.325 25.7223 44.575 26.2723 43.725 26.2723C43.575 26.2723 43.425 26.2473 43.25 26.2223L31.125 23.1473C30.6739 22.9986 30.296 22.6841 30.0678 22.2676C29.8396 21.851 29.7779 21.3633 29.8954 20.9031C30.0128 20.4428 30.3006 20.0443 30.7005 19.788C31.1004 19.5317 31.5827 19.4368 32.05 19.5223L44.175 22.5973C45.2 22.8223 45.8 23.8473 45.55 24.8723Z"
                fill="#0F7DFF"
              />
            </svg>
            <div>
              <p className="text-gray-400 text-sm">รายการสั่งซื้อ</p>
              <p className="text-black font-extrabold flex justify-end">
                10,342
              </p>
            </div>
          </div>
        </div>

        <div className="card 2xl:w-[320px] max-2xl:w-[200px] max-md:w-full  h-[100px] max-sm:h-[100px] items-center bg-base-100 border rounded-[25px] border-gray-300 overflow-hidden">
          <div className="w-full flex justify-between items-center p-8 max-sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M40.475 5H19.525C10.425 5 5 10.425 5 19.525V40.45C5 49.575 10.425 55 19.525 55H40.45C49.55 55 54.975 49.575 54.975 40.475V19.525C55 10.425 49.575 5 40.475 5ZM39.375 39.375H20.625C19.6 39.375 18.75 38.525 18.75 37.5C18.75 36.475 19.6 35.625 20.625 35.625H39.375C40.4 35.625 41.25 36.475 41.25 37.5C41.25 38.525 40.4 39.375 39.375 39.375ZM39.375 24.375H20.625C19.6 24.375 18.75 23.525 18.75 22.5C18.75 21.475 19.6 20.625 20.625 20.625H39.375C40.4 20.625 41.25 21.475 41.25 22.5C41.25 23.525 40.4 24.375 39.375 24.375Z"
                fill="#0F7DFF"
              />
            </svg>
            <div>
              <p className="text-gray-400 text-sm">การขายทั้งหมด</p>
              <p className="text-black font-extrabold flex justify-end">
                10,342
              </p>
            </div>
          </div>
        </div>

        <div className="card 2xl:w-[320px] max-2xl:w-[200px] max-md:w-full  h-[100px] max-sm:h-[100px] items-center bg-base-100 border rounded-[25px] border-gray-300 overflow-hidden">
          <div className="w-full flex justify-between items-center p-8 max-sm:p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 60 60"
              fill="none"
            >
              <path
                d="M12.5 37.5C10.15 37.5 7.97504 38.325 6.25004 39.7C5.07656 40.6326 4.12954 41.8188 3.48007 43.1697C2.8306 44.5206 2.49554 46.0011 2.50004 47.5C2.50004 53.025 6.97505 57.5 12.5 57.5C14.9308 57.4965 17.277 56.6078 19.1 55C21.175 53.175 22.5 50.5 22.5 47.5C22.5 41.975 18.025 37.5 12.5 37.5ZM15 48.125C15 48.775 14.65 49.4 14.1 49.725L10.975 51.6C10.675 51.8 10.325 51.875 10 51.875C9.37504 51.875 8.75004 51.55 8.40004 50.975C7.87504 50.075 8.15004 48.925 9.05004 48.4L11.275 47.075V44.375C11.2717 44.13 11.3171 43.8867 11.4086 43.6594C11.5001 43.432 11.6359 43.2251 11.808 43.0507C11.9801 42.8762 12.1852 42.7377 12.4113 42.6432C12.6374 42.5486 12.88 42.5 13.125 42.5C14.15 42.5 15 43.35 15 44.375V48.125ZM37.125 9.875V19.375H33.375V9.875C33.375 9.2 32.775 8.875 32.375 8.875C32.25 8.875 32.125 8.9 32 8.95L12.175 16.425C10.85 16.925 10 18.175 10 19.6V21.275C7.72504 22.975 6.25004 25.7 6.25004 28.775V19.6C6.25004 16.625 8.07505 13.975 10.85 12.925L30.7 5.425C31.25 5.225 31.825 5.125 32.375 5.125C34.875 5.125 37.125 7.15 37.125 9.875ZM53.75 36.25V38.75C53.7501 39.0772 53.6219 39.3914 53.3928 39.6252C53.1638 39.8589 52.8522 39.9935 52.525 40H48.875C47.55 40 46.35 39.025 46.25 37.725C46.175 36.95 46.475 36.225 46.975 35.725C47.2014 35.4906 47.4736 35.3052 47.7746 35.1805C48.0757 35.0558 48.3992 34.9943 48.725 35H52.5C53.225 35.025 53.75 35.575 53.75 36.25Z"
                fill="#0F7DFF"
              />
              <path
                d="M48.7 32.375H51.25C52.625 32.375 53.75 31.25 53.75 29.875V28.775C53.75 23.6 49.525 19.375 44.35 19.375H15.65C13.525 19.375 11.575 20.075 10 21.275C7.725 22.975 6.25 25.7 6.25 28.775V33.225C6.25 34.175 7.25 34.775 8.15 34.475C9.55 34 11.025 33.75 12.5 33.75C20.075 33.75 26.25 39.925 26.25 47.5C26.25 49.3 25.775 51.275 25.025 53.025C24.625 53.925 25.25 55 26.225 55H44.35C49.525 55 53.75 50.775 53.75 45.6V45.125C53.75 43.75 52.625 42.625 51.25 42.625H49.075C46.675 42.625 44.375 41.15 43.75 38.825C43.25 36.925 43.85 35.075 45.1 33.875C46.025 32.925 47.3 32.375 48.7 32.375ZM35 31.875H22.5C21.475 31.875 20.625 31.025 20.625 30C20.625 28.975 21.475 28.125 22.5 28.125H35C36.025 28.125 36.875 28.975 36.875 30C36.875 31.025 36.025 31.875 35 31.875Z"
                fill="#0F7DFF"
              />
            </svg>
            <div>
              <p className="text-gray-400 text-sm">ค้างชำระ</p>
              <p className="text-black font-extrabold flex justify-end">
                10,342
              </p>
            </div>
          </div>
        </div>

        <div className="card 2xl:w-[320px] max-2xl:w-[200px] max-md:w-full  h-[100px] max-sm:h-[100px] items-center bg-base-100 border rounded-[25px] border-gray-300 overflow-hidden">
          <div className="w-full flex justify-between items-center p-8 max-sm:p-3">
            <svg
              width="32"
              height="32"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1049_4415)">
                <path
                  d="M52.425 40.2C51.825 46.875 47 51.25 40 51.25H17.5C10.6 51.25 5 45.65 5 38.75V21.25C5 14.45 9.1 9.7 15.475 8.9C16.125 8.8 16.8 8.75 17.5 8.75H40C40.65 8.75 41.275 8.775 41.875 8.875C47.85 9.575 51.9 13.75 52.425 19.8C52.4391 19.9712 52.417 20.1435 52.3602 20.3056C52.3033 20.4677 52.2131 20.616 52.0952 20.741C51.9773 20.8659 51.8345 20.9647 51.6759 21.0308C51.5174 21.097 51.3467 21.1291 51.175 21.125H47.3C44.9 21.125 42.675 22.05 41.075 23.7C39.175 25.55 38.225 28.15 38.45 30.75C38.85 35.3 42.85 38.875 47.6 38.875H51.175C51.9 38.875 52.5 39.475 52.425 40.2Z"
                  fill="#0F7DFF"
                />
                <path
                  d="M55.0001 27.425V32.575C55.0001 33.95 53.9001 35.075 52.5001 35.125H47.6001C44.9001 35.125 42.4251 33.15 42.2001 30.45C42.0501 28.875 42.6501 27.4 43.7001 26.375C44.6251 25.425 45.9001 24.875 47.3001 24.875H52.5001C53.9001 24.925 55.0001 26.05 55.0001 27.425Z"
                  fill="#0F7DFF"
                />
                <path
                  d="M18.353 35.8354C18.353 38.8706 20.658 41.3177 23.5217 41.3177H29.3656C31.8569 41.3177 33.8824 39.1765 33.8824 36.5412C33.8824 33.6706 32.6485 32.6589 30.8092 32.0001L21.4263 28.7059C19.587 28.0471 18.353 27.0354 18.353 24.1648C18.353 21.5295 20.3786 19.3883 22.8698 19.3883H28.7137C31.5775 19.3883 33.8824 21.8354 33.8824 24.8706M26.1014 16.2354V44.4706"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1049_4415">
                  <rect width="60" height="60" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div>
              <p className="text-gray-400 text-sm">รายได้วันนี้</p>
              <p className="text-black font-extrabold flex justify-end">
                10,342
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-5 ">
        <h2 className="text-md font-bold">ยอดขาย</h2>
        <div className="w-full flex max-2xl:flex-wrap  max-md:justify-center max-lg:justify-center max-xl:justify-center max-2xl:justify-center gap-3 ">
          <div className="w-[950px] max-md:w-full items-center overflow-x-auto">
            <canvas  ref={canvas}></canvas>
          </div>
          <div className="w-[500px] items-center border rounded-[25px] p-2 max-xl:w-full max-2xl:w-full">
            <div className="flex justify-between font-bold text-lg p-2 overflow-x-auto">
              <p>รายการสั่งซื้อ</p>
              <p className="px-2">ยอดชำระ</p>
            </div>
            <div className="overflow-x-auto p-2">
              <table className="table text-nowrap">
                <tbody>
                  <tr className="hover flex justify-between items-center">
                    <td className="text-sm">
                      <p>ชื่อบัญชี</p>
                      <p className="text-gray-400">12/12/2567 เวลา 13.45 น.</p>
                    </td>
                    <td>ชื่อสินค้า</td>
                    <td className="text-blue-700 font-bold text-end">60,000</td>
                  </tr>
                  <tr className="hover flex justify-between items-center">
                    <td className="text-sm">
                      <p>ชื่อบัญชี</p>
                      <p className="text-gray-400">12/12/2567 เวลา 13.45 น.</p>
                    </td>
                    <td>ชื่อสินค้า</td>
                    <td className="text-blue-700 font-bold text-end">60,000</td>
                  </tr>
                  <tr className="hover flex justify-between items-center">
                    <td className="text-sm">
                      <p>ชื่อบัญชี</p>
                      <p className="text-gray-400">12/12/2567 เวลา 13.45 น.</p>
                    </td>
                    <td>ชื่อสินค้า</td>
                    <td className="text-blue-700 font-bold text-end">60,000</td>
                  </tr>
                  <tr className="hover flex justify-between items-center">
                    <td className="text-sm">
                      <p>ชื่อบัญชี</p>
                      <p className="text-gray-400">12/12/2567 เวลา 13.45 น.</p>
                    </td>
                    <td>ชื่อสินค้า</td>
                    <td className="text-blue-700 font-bold text-end">60,000</td>
                  </tr>
                  <tr className="hover flex justify-between items-center">
                    <td className="text-sm">
                      <p>ชื่อบัญชี</p>
                      <p className="text-gray-400">12/12/2567 เวลา 13.45 น.</p>
                    </td>
                    <td>ชื่อสินค้า</td>
                    <td className="text-blue-700 font-bold text-end">60,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center text-sm py-5 text-blue-700">
              <a href="">ดูทั้งหมด</a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-5">
        <h2 className="text-md font-bold over">การเข้าชมหน้าเว็บไซต์</h2>
        <div className="w-full flex max-2xl:flex-wrap  max-md:justify-center max-lg:justify-center max-xl:justify-center max-2xl:justify-center gap-3 ">
          <div className="w-[950px] max-md:w-full items-center overflow-x-auto">
            <canvas ref={canvas2}></canvas>
          </div>
          <div className="w-[500px] items-center border rounded-[25px] max-lg:justify-center max-xl:w-full max-2xl:w-full">
            <div className="flex justify-between font-bold text-lg p-5 px-5 overflow-x-auto">
              <p>หมวดหมู่ขายดี</p>
              <p className="px-3">รายได้</p>
            </div>
            <div className="w-full overflow-x-auto p-2">
              <table className="table  text-nowrap">
                <tbody>
                  <tr className="hover">
                    <th>1</th>
                    <td>No option</td>
                    <td>300 ชิ้น</td>
                    <td className="text-blue-700 font-bold text-end">60,000</td>
                  </tr>
                  <tr className="hover">
                    <th>2</th>
                    <td>Has option</td>
                    <td>300 ชิ้น</td>
                    <td className="text-blue-700 font-bold text-end">60,000</td>
                  </tr>
                  <tr className="hover">
                    <th>3</th>
                    <td>Variant</td>
                    <td>300 ชิ้น</td>
                    <td className="text-blue-700 font-bold text-end">60,000</td>
                  </tr>
                  <tr className="hover">
                    <th>4</th>
                    <td>Per price</td>
                    <td>300 ชิ้น</td>
                    <td className="text-blue-700 font-bold text-end">60,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center text-sm py-5 text-blue-700">
              <a href="">ดูทั้งหมด</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
