"use client";
import Link from "next/link";
import { usePathname} from 'next/navigation';
const Sidebar = () => {
  const router= usePathname()
  
  return (
    <div className="h-full border-r-[1px]  ">
      <section>
        <ul className="  text-[#292929] font-medium relative top-[50px]   text-[0.8em] h-full ">
          <li className="  ">
            <Link href="/" className={`${router==='/'?"bg-gray-100 rounded-e-full   text-blue-600":""} mr-[5%]  py-[1.5em] flex items-center max-sm:justify-center space-x-2 transition-all duration-200`}>
              <span className="ml-[5%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5"
                  viewBox="0 -960 960 960"
                  fill={`${router==='/'?"#2564eb":"#292929"}`}
                >
                  <path d="M160-160v-320h160v320H160Zm240 0v-640h160v640H400Zm240 0v-440h160v440H640Z" />
                </svg>
              </span>{" "}
              <span className={` max-sm:hidden`}>Dashboard</span>{" "}
            </Link>
          </li>
          <li className="">
            <Link href="/skillTest" className={`${router==='/skillTest'?"bg-gray-100 rounded-e-full   text-blue-600 transition-all duration-200":""} mr-[5%]  py-[1.5em] flex items-center max-sm:justify-center space-x-2 `}>
              <span className="ml-[5%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                className="w-5"
                  viewBox="0 -960 960 960"
               
                  fill={`${router==='/skillTest'?"#2564eb":"#292929"}`}
                >
                  <path d="M280-880h400v314q0 23-10 41t-28 29l-142 84 28 92h152l-124 88 48 152-124-94-124 94 48-152-124-88h152l28-92-142-84q-18-11-28-29t-10-41v-314Zm80 80v234l80 48v-282h-80Zm240 0h-80v282l80-48v-234ZM480-647Zm-40-12Zm80 0Z" />
                </svg>
              </span>{" "}
              <span className="max-sm:hidden"> Skill Test</span>
            </Link>
          </li>
          <li>
            <Link href="/internship" className={`${router==='/internship'?"bg-gray-100 rounded-e-full   text-blue-600":""} mr-[5%]  py-[1.5em] flex items-center max-sm:justify-center space-x-2 transition-all duration-200`}>
              {" "}
              <span className="ml-[5%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5"
                  viewBox="0 -960 960 960"
                  
                  fill={`${router==='/internship'?"#2564eb":"#292929"}`}
                >
                  <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" />
                </svg>
              </span>{" "}
              <span className="max-sm:hidden"> Internship</span>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Sidebar;
