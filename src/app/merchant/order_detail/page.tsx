import React from "react";

const ordersdetail = () => {
  return (
    <div className="px-10">
      <div className="w-full border-b flex-wrap flex items-center  justify-between  py-3">
        <h2 className="text-md font-bold">Order Detail</h2>
      </div>
      <div className="pt-5 flex  gap-4 flex-wrap  max-xl:justify-center max-2xl:justify-center">
        <div className="pt-5 ">
          <div className="card w-[420px] h-[491px] bg-base-100 border ">
            <figure className="px-10 pt-10  ">
              <img 
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="w-full flex justify-center px-10 pt-10">
              <div className=" w-full ">
              <div className=" text-start flex justify-between w-full">
              <p>ชื่อสินค้า</p>
              <p>product</p>
              </div>
              <div className="text-start mt-5 flex justify-between w-full">
              <p>ราคา</p>
              <p>35บาท</p>
              </div>
              <div className="text-start mt-5 flex justify-between w-full">
              <p>ตัวเลือกสินค้า</p>
              <p>43,สีเขียว</p>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5 ">
          <div className="card w-[600px] h-full  bg-base-100 border max-md:w-full   ">
            <div className="px-10 pt-10  ">
            <div className=" w-full ">
              <div className=" text-start flex justify-start gap-x-5 w-full">
              <p className=" w-[150px]">วันที่สั่ง</p>
              <p>01/01/2566</p>
              </div>
              <div className="text-start mt-5 flex justify-start gap-x-5 w-full">
              <p className=" w-[150px]">ผู้ใช้งาน</p>
              <p>test1234</p>
              </div>
              <div className="text-start mt-5  flex justify-start gap-x-5 w-full">
              <p className=" w-[150px]">ที่อยู่</p>
              <p>xxxxxxxxxxxxxxxxxxx</p>
              </div>
              <div className=" text-start mt-20 flex justify-start gap-x-5 w-full">
              <p className=" w-[150px]">เบอโทร</p>
              <p>0826426433</p>
              </div>
              <div className="text-start mt-5 flex justify-start gap-x-5 w-full">
              <p className=" w-[150px]">จำนวน</p>
              <p>x2</p>
              </div>
              <div className="text-start mt-5 flex justify-start gap-x-5 w-full">
              <p className=" w-[150px]">ราคารวม</p>
              <p>70 บาท</p>
              </div>
              <div className="text-start mt-5 flex justify-start gap-x-5 w-full">
              <p className=" w-[150px]">ช่องทางการชำระ</p>
              <p>prompt play</p>
              </div>
              <div className="text-start mt-5 flex justify-start gap-x-5 w-full">
              <p className=" w-[150px]">สถานะ</p>
              <div className=" badge badge-accent badge-outline   mt-2 ">ชำระเงินสำเร็จ</div>
              </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default ordersdetail;