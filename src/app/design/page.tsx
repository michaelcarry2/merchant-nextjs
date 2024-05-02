"use client";
import { ReactNode, useEffect, useState } from "react";
import Draggable from "react-draggable";
import React from "react";
import styles from "./design.module.css";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LuWrench } from "react-icons/lu";
import { FaRegSave } from "react-icons/fa";
import { PiArrowUUpRightFill, PiArrowUUpLeftFill } from "react-icons/pi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FiSmartphone } from "react-icons/fi";
import { BsTabletLandscape } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { BiSolidColorFill } from "react-icons/bi";
import { MdOutlineSettings } from "react-icons/md";
import { LuInfo } from "react-icons/lu";
import { FaCopy } from "react-icons/fa6";
import { FaPaste } from "react-icons/fa6";
import { IoDuplicate } from "react-icons/io5";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineSort } from "react-icons/md";
import { PiAlignLeftBold } from "react-icons/pi";
import { Md3DRotation } from "react-icons/md";
import { TbSquareRoundedNumber0 } from "react-icons/tb";
import { TbFlipVertical, TbFlipHorizontal } from "react-icons/tb";
import { BsQuestionLg } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { IoMoveOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { Button } from "@/components/ui/button";

async function allowDrop(event: any): Promise<void> {
  event.preventDefault();
  console.log("drag over here!");
}

function drag(event: any): void {
  event.dataTransfer.setData("text/plain", event.target.id);
  console.log("item->", event.target.id);
}

function drop(event: any): void {
  event.preventDefault();

  try {
    let id: string = event.dataTransfer.getData("text/plain");
    const editorField: HTMLDivElement = event.target;
    console.log("drop class list---->", editorField.classList);

    const target = makeNewItemById(id) as HTMLDivElement;

    console.log("DROP THE : ", target);

    if (editorField.id == "editor") {
      editorField.appendChild(target);
      console.log("DROP IN EDITOR >");
    } else {
      const dropPointElement: Element | null = document.elementFromPoint(
        event.clientX,
        event.clientY
      );
      console.log(`DROP POINT : `, dropPointElement);
      dropPointElement?.before(target);
    }
  } catch (err: any) {
    console.error("drop error : ", err.message);
  }
}

function makeNewItemById(id: string): HTMLDivElement | null {
  let newItem: HTMLDivElement | null = document
    .querySelector(`#${id}`)
    ?.cloneNode(true) as HTMLDivElement;
  newItem.draggable = true;
  newItem.ondragstart = dragOut;
  newItem.classList.add("new-element-drag");
  return newItem;
}

function dragOut(event: any): void {
  event.target.remove();
}

function makeDragExample(size: number): Array<Element> | Array<any> {
  const sizeExample: number = size;
  const prototypeObjects: Array<Element> | Array<any> = Array.apply(
    null,
    Array(sizeExample)
  ).map((n, i) => {
    return (
      <div
        id={`obj-custom-${i}`}
        draggable="true"
        className="col-span-1 row-span-2 h-32"
        onDragStart={drag}
        style={{ backgroundColor: Math.random() * 3 < 1.5 ? `red` : `green` }}
      >
        Item {i}
      </div>
    );
  });
  return prototypeObjects;
}

type DeviceSize = {
  width: string;
  height: string;
};
type CustomOption = {
  label: string;
  value: string;
};

const design = () => {

const [isVisible, setIsVisible] = useState(true);
const [currentEditComponentId , setCurrentEditComponentId] = useState("");

  //----------------------- [FUNCTION] ---------------------------
  async function clickToEditComponent(e:any) : Promise<void>{
    console.log(e.target);
    let targetComponent = document.querySelector("#"+e.target.id);
    
    if(targetComponent != null){
      let width : number = parseInt(
                                      targetComponent
                                      ?.classList.value.split(" ").find((e)=> e.substring(0,9) == "col-span-")
                                      ?.split("-")[2]!
                                    );
     
      console.log(width);

      (document.querySelector("#current-editor-width") as HTMLInputElement).value = width.toString();

      setCurrentEditComponentId(e.target.id);
    }
  
  }

  async function allowDrop(event:any) : Promise<void> {
    event.preventDefault();
    console.log('drag over here!');
  };

  function drag(event:any) : void{
    event.dataTransfer.setData('text/plain', event.target.id);
    console.log("drag->",event.target.id);
  };

  function drop(event:any) : void{
    event.preventDefault();

    try{
      let id : string = event.dataTransfer.getData('text/plain');
      const editorField : HTMLDivElement = event.target;
      console.log("drop class list---->",editorField.classList);
      
      const target = makeNewItemById(id) as HTMLDivElement;

      console.log("DROP THE : ",target);

      if (editorField.id == "editor") {
        editorField.appendChild(target);
        console.log("DROP IN EDITOR >")
      }else{
        const dropPointElement :  Element | null = document.elementFromPoint(event.clientX , event.clientY);
        console.log(`DROP POINT : `,dropPointElement);
        dropPointElement?.before(target);
      }
    }catch(err : any){
      console.error("drop error : " ,err.message);
    }
  }

  function makeNewItemById(id : string) : HTMLDivElement | null{
    let newItem : HTMLDivElement | null = document.querySelector(`#${id}`)?.cloneNode(true) as HTMLDivElement;
    newItem.draggable = true;
    newItem.ondragstart = dragOut;
    newItem.classList.add("new-element-drag");
    newItem.id += "-"+new Date().getTime();
    newItem.addEventListener("click",clickToEditComponent);
    return newItem;
  }

  function dragOut(event : any) : void {
    event.target.remove();
  }


  function makeDragExample(size:number) : Array<Element> | Array<any>{
    const sizeExample : number = size; 
    const prototypeObjects : Array<Element>| Array<any> 
          = Array
            .apply(null, Array(sizeExample))
            .map((n,i)=>{
              const long = (Math.random()*3 <1.5)?1:2;
              return (
                <div id={`obj-custom-${i}`} draggable="true" className={`col-span-${long} row-span-2 h-32`} onDragStart={drag} style={{backgroundColor:((Math.random()*3 <1.5)?`red`:`green`)}}>
                    Item {i} | col {long}
                </div>
              )
            });
    return prototypeObjects;
  }

  async function changeWidthCurrentEditorComponent(e:any){
    let target : HTMLElement = document.querySelector("#"+currentEditComponentId) as HTMLElement;
    if(e.target.value){
       let oldWidth : string = target
                                ?.classList.value.split(" ")
                                .find((e)=> e.substring(0,9) == "col-span-")!;
        target.classList.remove(oldWidth);
        target.classList.add("col-span-"+e.target.value);                
    }
  }

  //----------------------- [/FUNCTION] ---------------------------
  useEffect(()=>{
    function dragOutAtClient(event:any) : void{
      event.target.remove();
    }

    async function addClickEventToInnerEditorComponent(target:Element) : Promise<void>{
      target.addEventListener("click",clickToEditComponent);
  }
    // *** add remove function to original html element ***
    (()=>{
      let editor = document.querySelector<HTMLElement>("#editor");
      editor!.innerHTML = htmlFromDatabase;


      const oldElements : Array<Element> = Array.from(document.querySelectorAll(".old-element-drag"));

      for(let oldDragableElement of oldElements){
          console.log("old element->",oldDragableElement);
          oldDragableElement.addEventListener("dragstart",dragOutAtClient);
          addClickEventToInnerEditorComponent(oldDragableElement);
      }
    })();
  },[]);

  const [drawers, setDrawers] = useState({
    drawerOpen1: false,
    drawerOpen2: false,
    drawerOpen3: false,
    drawerOpen4: false,
  });

  const toggleDrawer = (drawerName : string) => {
    setDrawers((prevState : any) => ({
      [drawerName]: !prevState[drawerName]
    }));
  };

  const handleCheckboxChange = () => {
    setIsVisible(!isVisible);
  };

  const [size, setSize] = useState<DeviceSize>({
    width: "100%",
    height: "100%",
  });
  const [customSize, setCustomSize] = useState({ width: "", height: "" });
  const [isCustom, setIsCustom] = useState(false);
  const [customOptions, setCustomOptions] = useState<CustomOption[]>([]);

  const changeSize = (width: string, height: string) => {
    setSize({ width, height });
  };

  const handleCustomInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    dimension: "width" | "height"
  ) => {
    setCustomSize({ ...customSize, [dimension]: e.target.value });
  };

  const applyCustomSize = () => {
    if (customSize.width && customSize.height) {
      const newSizeValue = `${customSize.width} x ${customSize.height}`;
      changeSize(`${customSize.width}px`, `${customSize.height}px`);
      const newCustomOption: CustomOption = {
        label: `Custom ${customOptions.length + 1}`,
        value: newSizeValue,
      };
      setCustomOptions([...customOptions, newCustomOption]);
      setIsCustom(false); // Optional: Close custom input after adding
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "custom") {
      setIsCustom(true);
    } else {
      const [width, height] = value.split(" x ");
      changeSize(`${width}px`, `${height}px`);
      setIsCustom(false);
    }
  };
  

  const ExampleElement: Array<Element> | Array<any> | Array<ReactNode> =
    makeDragExample(4);
  ExampleElement.push(
    <img
      id="example-image-1"
      src="/images/example_1.png"
      className="col-span-2 row-span-2 h-32"
      draggable={true}
      onDragStart={drag}
      style={{ maxWidth: "200px" }}
    />
  );

  const htmlFromDatabase: string = `
      <h1 id="test" draggable="true" style="background:blue;color:white;" class="old-element-drag">Drag me for remove</h1>
`;

  return (
    <div className="relative bg-slate-200 w-full h-full">
      <div className="flex justify-between items-center border-b h-[50px] bg-white">
        <div className="flex p-4 gap-5">
          <button>
            <RxHamburgerMenu className="h-7 w-7" />
          </button>
          <select className="select select-sm select-bordered  w-30 max-md:w-full">
            <option>Home:Homepage</option>
            <option>Home:Homepage</option>
            <option>Home:Homepage</option>
            <option>Home:Homepage</option>
          </select>
        </div>
        <div className="flex gap-4">
          <button onClick={() => changeSize("100%", "100%")}>
            <FiMonitor className="h-7 w-7" />
          </button>
          <button onClick={() => changeSize("768px", "1024px")}>
            <BsTabletLandscape className="h-7 w-7" />
          </button>
          <button onClick={() => changeSize("390px", "844px")}>
            <FiSmartphone className="h-7 w-7" />
          </button>
          <button>
            <HiOutlineDotsVertical className="h-7 w-7" />
          </button>
          <select
            className="select select-sm select-bordered w-30 max-md:w-full"
            value={`${parseInt(size.width)} x ${parseInt(size.height)}`} // อัปเดตตรงนี้เพื่อให้ตรงกับ format ของ options
            onChange={handleSelectChange}
          >
            <option value="1440 x 1024">1440 x 1024</option>
            <option value="1280 x 1024">1280 x 1024</option>
            <option value="1024 x 1024">1024 x 1024</option>
            {customOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
            <option value="custom">Custom size...</option>
          </select>

          {isCustom && (
            <div className="flex gap-2 items-center ">
              <input
                type="text"
                placeholder="Width"
                className="input input-sm input-bordered"
                value={customSize.width}
                onChange={(e) => handleCustomInputChange(e, "width")}
              />
              <span>x</span>
              <input
                type="text"
                placeholder="Height"
                className="input input-sm input-bordered"
                value={customSize.height}
                onChange={(e) => handleCustomInputChange(e, "height")}
              />
              <button onClick={applyCustomSize} className="btn btn-sm">
                ตกลง
              </button>
            </div>
          )}
        </div>
        <div className="flex gap-2 p-4">
          <button>
            <PiArrowUUpLeftFill className="h-8 w-8" />
          </button>
          <button>
            <PiArrowUUpRightFill className="h-8 w-8" />
          </button>
          <Popover>
            <PopoverTrigger asChild>
              <button>
                <LuWrench className="h-7 w-7" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-40 items-center">
              <div className="relative flex gap-5">
                <label>
                  <input
                    type="checkbox"
                    checked={isVisible}
                    onChange={handleCheckboxChange}
                  />{" "}
                  แทบเครื่องมือ
                </label>
              </div>
            </PopoverContent>
            {isVisible && (
              <Draggable>
                <div className="absolute mt-20 ">
                  <div className="box">
                    <div className="card w-38 bg-slate-100">
                      <div className="  flex justify-end gap-4 p-2">
                        <IoMoveOutline className="w-4 h-4" />
                        <RxCross1 className=" hover:bg-red-500 rounded-lg hover:text-white  w-4 h-4" />
                      </div>
                      <div>{currentEditComponentId}</div>
                      <div className=" border-b"></div>

                      <div className="flex justify-center gap-4 pt-5">
                        <button className=" hover:bg-blue-200">
                          <FaCopy className="h-6 w-6" />
                        </button>
                        <button className=" hover:bg-blue-200">
                          <FaPaste className="h-6 w-6" />
                        </button>
                      </div>

                      <div className="flex justify-center gap-4 pt-5">
                        <button className=" hover:bg-blue-200">
                          <IoDuplicate className="h-6 w-6" />
                        </button>
                        <button className=" hover:bg-blue-200">
                          <FaRegTrashCan className="h-6 w-6" />
                        </button>
                      </div>
                      <div className=" border-b pt-5"></div>

                      <div className="flex justify-center gap-4 pt-2">
                        <button className=" hover:bg-blue-200">
                          <MdOutlineSort className="h-6 w-6" />
                        </button>
                        <button className=" hover:bg-blue-200">
                          <PiAlignLeftBold className="h-6 w-6" />
                        </button>
                      </div>
                      <div className="flex justify-center gap-4 pt-5">
                        <button className=" hover:bg-blue-200">
                          <Md3DRotation className="h-6 w-6" />
                        </button>
                        <button className=" hover:bg-blue-200">
                          <TbSquareRoundedNumber0 className="h-6 w-6" />
                        </button>
                      </div>
                      <div className="flex justify-center gap-4 pt-5">
                        <button className=" hover:bg-blue-200">
                          <TbFlipVertical className="h-6 w-6" />
                        </button>
                        <button className=" hover:bg-blue-200">
                          <TbFlipHorizontal className="h-6 w-6" />
                        </button>
                      </div>
                      <div className=" border-b pt-2"></div>

                      <div className="flex justify-center pt-2 ">
                        <p className="text-md">ขนาด</p>
                      </div>
                      <div className="text-sm flex justify-center gap-2 w-full pt-3">
                        <p>กว้าง</p>
                        <input
                          id="current-editor-width"
                          type="text"
                          placeholder="1"
                          className="input w-12 h-5"
                          onChange={changeWidthCurrentEditorComponent}
                        />
                      </div>
                      <div className="text-sm flex justify-center gap-5 pt-3 w-full">
                        <p>สูง</p>
                        <input
                          type="text"
                          placeholder="1"
                          className=" input w-12  h-5"
                        />
                      </div>
                      <div className="flex justify-center px-4 pt-2">
                        <p className="text-md">ตำแหน่ง</p>
                      </div>
                      <div className="text-l flex justify-center gap-6 pt-3 w-full">
                        <p>X</p>
                        <input
                          type="text"
                          placeholder="1"
                          className=" input w-12  h-6"
                        />
                      </div>
                      <div className="text-l flex justify-center gap-6 pt-3 w-full pb-5 pr-0">
                        <p>Y</p>
                        <input
                          type="text"
                          placeholder="1"
                          className=" input w-12  h-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Draggable>
            )}
          </Popover>
          <button>
            <FaRegSave className="h-7 w-7" />
          </button>
          <Button className="rounded-full">Publish</Button>
        </div>
      </div>
      <div className="flex">
        <div className="relative w-[65px] bg-white flex flex-col items-center gap-5 border-r-4">
          <div className="pt-5 z-20">
            <button
              onClick={() => toggleDrawer("drawerOpen1")}
              className="btn btn-circle btn-ghost btn-md hover:bg-blue-200 hover:text-blue-600"
            >
              <IoAddCircleOutline className="h-8 w-8" />
            </button>
          </div>

          <div className="z-20">
            <button
              onClick={() => toggleDrawer("drawerOpen2")}
              className="btn btn-circle btn-ghost btn-md hover:bg-green-200 hover:text-green-600"
            >
              <MdOutlineCategory className="h-8 w-8" />
            </button>
          </div>

          <div className="z-20">
            <button
              onClick={() => toggleDrawer("drawerOpen3")}
              className="btn btn-circle btn-ghost btn-md hover:bg-orange-200 hover:text-orange-600"
            >
              <CgFileDocument className="h-8 w-8" />
            </button>
          </div>

          <div className="z-20 pb-11">
            <button
              onClick={() => toggleDrawer("drawerOpen4")}
              className="btn btn-circle btn-ghost btn-md hover:bg-purple-200 hover:text-purple-600"
            >
              <BiSolidColorFill className="h-8 w-8" />
            </button>
          </div>

          <div className="z-20 pt-96">
            <button>
              <MdOutlineSettings className="h-8 w-8" />
            </button>
          </div>
          <div className="z-20">
            <LuInfo className="h-8 w-8" />
          </div>
          <div
            id="drawer1"
            className={`drawer absolute bg-white h-full w-[500px] left-[65px] ${
              drawers.drawerOpen1 ? "drawer-open" : "drawer-close"
            } border-t-4 border-blue-600 z-0`}
          >
            <div className="w-[500px] h-12 border-b flex justify-between p-2 items-center">
              <div className="font-bold">
                <h1>เพิ่มองค์ประกอบ</h1>
              </div>
              <div className="flex gap-5">
                <button>
                  <BsQuestionLg className="h-5 w-5" />
                </button>
                <button>
                  <IoClose className="h-6 w-6" />
                </button>
              </div>
            </div>
              <div className="grid grid-cols-3 gap-4">
                {...ExampleElement}
              </div>
          </div>
          

          <div
            id="drawer2"
            className={`drawer absolute bg-white h-full w-[500px] left-[65px] ${
              drawers.drawerOpen2 ? "drawer-open" : "drawer-close"
            } border-t-4 border-green-600 z-0`}
          >
            <div className="w-[500px] h-12 border-b flex justify-between p-2 items-center">
              <div className="font-bold">
                <h1>เพิ่มหมวด</h1>
              </div>
              <div className="flex gap-5">
                <button>
                  <BsQuestionLg className="h-5 w-5" />
                </button>
                <button>
                  <IoClose className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
          <div
            id="drawer3"
            className={`drawer absolute bg-white h-full w-[500px] left-[65px] ${
              drawers.drawerOpen3 ? "drawer-open" : "drawer-close"
            } border-t-4 border-orange-600 z-0`}
          >
            <div className="w-[500px] h-12 border-b flex justify-between p-2 items-center">
              <div className="font-bold">
                <h1>หน้าเพจเว็บไซต์และเมนู</h1>
              </div>
              <div className="flex gap-5">
                <button>
                  <BsQuestionLg className="h-5 w-5" />
                </button>
                <button>
                  <IoClose className="h-6 w-6" />
                </button>
              </div>

            </div>
          </div>
          <div
            id="drawer4"
            className={`drawer absolute bg-white h-full w-[500px] left-[65px] ${
              drawers.drawerOpen4 ? "drawer-open" : "drawer-close"
            } border-t-4 border-purple-600 z-0`}
          >
            <div className="w-[500px] h-12 border-b flex justify-between p-2 items-center">
              <div className="font-bold">
                <h1>ดีไซน์ของเว็บไซต์</h1>
              </div>
              <div className="flex gap-5">
                <button>
                  <BsQuestionLg className="h-5 w-5" />
                </button>
                <button>
                  <IoClose className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-[1440px] h-full flex justify-center p-8">
            <div
              style={{ width: size.width, height: size.height }} // ใช้ state ที่เก็บขนาด
              className="bg-white shadow-2xl flex justify-center items-center"
            >
              <div
                className={`${styles.editor} grid grid-cols-3 gap-2`}
                id="editor"
                onDrop={drop}
                onDragOver={allowDrop}
              >
                {/* <div dangerouslySetInnerHTML={{ __html: htmlFromDatabase}}></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default design;
