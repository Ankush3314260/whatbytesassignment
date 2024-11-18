"use client";
import React, { useEffect, useState } from "react";
import UpdatescoreComponent from "./components/UpdatescoreComponent";
import dynamic from "next/dynamic";
import LineChartComponent from "./components/LineChartComponent";

const DynamicPieChart = dynamic(
  () => import("./components/PieChartComponent"),
  { ssr: false }
);
// import PieChartComponent from "./components/PieChartComponent";
const Page = () => {
  const [rank, setRank] = useState(0);
  const [percentile, setPercentile] = useState(0);
  const [score, setScore] = useState(0);
  const [data, setData] = useState([1, 30, 10]);
  const [save, setSave] = useState(false);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className=" w-full min-h-full global-text ">
      {/* making container for the details of skill test */}
      <div className="absolute  top-0 left-0   bottom-0 right-0 z-10 bg-black/65 Update hidden ">
        <UpdatescoreComponent
          rank={rank}
          setRank={setRank}
          percentile={percentile}
          setPercentile={setPercentile}
          score={score}
          setData={setData}
          setScore={setScore}
        />
      </div>
      <div className="mx-[2%] my-[3%] ">
        <p className="text-[0.3em] max-md:text-[0.5em]">Skill Test</p>
        <div className="flex flex-wrap gap-[1%]">
          {/* html text container and related info */}

          <div className="my-[2%] md:w-[60%] max-md:w-full justify-center flex-grow-0 ">
            {/* html container */}
            <div className="flex items-center border-[1px] rounded-md  ">
              <span className="w-[10%] min-w-[50px] flex justify-center">
                <svg
                  className="p-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <title>HTML5 Logo</title>
                  <path d="M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2M206 23h-20.3V0h63.7v23H229v46h-23M259.5 0h24.1l14.8 24.3L313.2 0h24.1v69h-23V34.8l-16.1 24.8l-16.1-24.8v34.2h-22.6M348.7 0h23v46.2h32.6V69h-55.6" />
                  <path
                    fill="#e44d26"
                    d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512"
                  />
                  <path fill="#f16529" d="M256 480.5V131H404.3L376 447" />
                  <path
                    fill="#ebebeb"
                    d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26"
                  />
                  <path
                    fill="#fff"
                    d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8"
                  />
                </svg>
              </span>
              <div className="text-[0.25em] max-sm:text-[0.45em]">
                <p className="font-semibold">Hyper Text Markup Language</p>
                <span className="text-gray-600 ">
                  Question:08 | Duration: 15 mins | Submitted on 5 June 2021
                </span>
              </div>
              <div className="ml-[2%]  flex items-center">
                <button
                  className="bg-blue-700 hover:bg-blue-900 transition-all duration-200 font-semibold py-[0.5em] px-[1em] text-white max-sm:text-[0.35em] text-[0.25em] rounded-lg"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    document
                      .querySelector(".Update")
                      .classList.toggle("hidden");
                    document
                      .querySelector("body")
                      .classList.toggle("overflow-hidden");
                  }}
                >
                  Update
                </button>
              </div>
            </div>
            {/* quick stastics */}
            <div className="border-[1px] mt-[0.5em] rounded-md">
              <p className="font-semibold text-[0.25em] max-md:text-[0.35em] p-2">
                Quick Statics
              </p>
              <div className="flex p-2 max-sm:p-1">
                <div className="flex  justify-center space-x-2 items-center w-1/3 ">
                  <span className="w-1/5 max-sm:w-5 bg-gray-200 p-1 rounded-full flex justify-center">
                    <svg
                      className="w-10"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Layer_1"
                      viewBox="0 0 508 508"
                      xmlSpace="preserve"
                    >
                      <circle
                        style={{ fill: "#324A5E" }}
                        cx="254"
                        cy="254"
                        r="254"
                      />

                      <g>
                        <path
                          style={{ fill: "#F9B54C" }}
                          d="M299.6,443.6c-24.8-29.6-30-104-30.8-130.8H240c-1.2,26.8-6,101.2-30.8,130.8L299.6,443.6   L299.6,443.6z"
                        />
                        <path
                          style={{ fill: "#F9B54C" }}
                          d="M344.4,255.6c-4.8,6.4-3.6,15.6,2.8,20.4c3.2,2.4,6.8,3.6,10.8,2.8c4-0.4,7.2-2.4,9.6-5.6   c1.6-2.4,4.8-2.8,7.2-0.8c2.4,1.6,2.8,4.8,0.8,7.2c-4,5.2-10,8.8-16.4,9.6c-1.2,0-2.4,0-3.2,0c-5.2,0-10.8-1.6-15.2-5.2   c-10.8-8.4-12.8-24-4.8-34.8l78-102c5.2-6.8,7.2-14.8,6-23.2s-5.6-15.6-12.4-20.4c-13.2-9.6-32.4-6.4-42.4,7.2l-12,15.6   c-0.8-4.4-1.6-8.8-2.8-13.2l6.4-8.4c13.6-17.6,38.8-21.6,56.4-9.2c9.2,6.4,15.2,16,16.8,27.2c1.6,11.2-1.2,22-8,30.8L344.4,255.6z"
                        />
                        <path
                          style={{ fill: "#F9B54C" }}
                          d="M166.8,284c-4.4,3.2-9.6,5.2-15.2,5.2c-1.2,0-2.4,0-3.2,0c-6.4-0.8-12.4-4.4-16.4-9.6   c-1.6-2.4-1.2-5.2,0.8-7.2c2.4-1.6,5.2-1.2,7.2,0.8c2.4,3.2,6,5.2,9.6,5.6c4,0.4,7.6-0.4,10.8-2.8c6.4-4.8,7.6-14,2.8-20.4   l-77.6-102c-6.8-8.8-9.6-20-8-30.8c1.6-11.2,7.6-20.8,16.8-27.2c17.6-12.4,42.8-8.4,56.4,9.2l6.4,8.4c-1.2,4.4-2,8.8-2.8,13.2   l-12-15.6c-10-13.2-29.2-16.4-42.4-7.2c-6.8,4.8-11.2,12-12.4,20.4c-1.2,8.4,0.8,16.4,6,23.2l78,102   C180,260.4,177.6,275.6,166.8,284z"
                        />
                      </g>
                      <path
                        style={{ fill: "#FFD05B" }}
                        d="M170,76c-11.6,24.8-18.8,55.6-18.8,88.4c0,84.8,46,153.6,102.8,153.6s102.8-68.8,102.8-153.6  c0-32.8-6.8-63.2-18.8-88.4C338,76,170,76,170,76z"
                      />
                      <path
                        style={{ fill: "#FFFFFF" }}
                        d="M192,168.4c0-7.2,0.4-14.4,1.2-21.2h-16.8c-0.8,6.8-1.2,14-1.2,21.2c0,70.4,38,127.6,85.2,127.6  c2.8,0,5.6-0.4,8.4-0.8C226,289.2,192,234.8,192,168.4z"
                      />
                      <g>
                        <circle
                          style={{ fill: "#FFD05B" }}
                          cx="254"
                          cy="364.4"
                          r="31.2"
                        />
                        <path
                          style={{ fill: "#FFD05B" }}
                          d="M299.6,443.6h-91.2c-12.4,0-22.8,10.4-22.8,22.8l0,0h136.8l0,0C322.4,453.6,312.4,443.6,299.6,443.6   z"
                        />
                      </g>
                    </svg>
                  </span>
                  <p className="text-[0.3em] max-md:text-[0.35em] w-1/2 leading-tight">
                    <span className="block font-semibold">
                      {data.length != 0 ? data[0] : "0"}
                    </span>
                    <span className="text-[0.8em]  text-gray-500">
                      YOUR RANK
                    </span>
                  </p>
                </div>
                <div className="flex items-center w-1/3  justify-center space-x-2 border-l-[1px] p-2">
                  <span className="max-sm:w-5 sm:w-1/5 bg-gray-200 p-1 rounded-full flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Layer_1"
                      viewBox="0 0 376.654 376.654"
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          style={{ fill: "#A88D63" }}
                          d="M328.935,354.585c0,12.138-9.932,22.069-22.07,22.069H74.569c-12.138,0-22.069-9.932-22.069-22.069   V68.047c0-12.138,9.932-22.069,22.069-22.069h232.295c12.139,0,22.07,9.932,22.07,22.069v286.538H328.935z"
                        />
                        <path
                          style={{ fill: "#3E4A57" }}
                          d="M242.18,30.623h-32.862c1.504-2.892,2.367-6.171,2.367-9.657C211.686,9.388,202.296,0,190.716,0   c-11.581,0-20.966,9.388-20.966,20.966c0,3.486,0.863,6.766,2.368,9.657h-32.862c-9.105,0-16.553,7.447-16.553,16.552v24.552   H258.73V47.175C258.73,38.07,251.281,30.623,242.18,30.623z M190.716,28.611c-4.222,0-7.645-3.423-7.645-7.646   c0-4.22,3.423-7.643,7.645-7.643c4.224,0,7.645,3.423,7.645,7.643C198.36,25.188,194.939,28.611,190.716,28.611z"
                        />
                        <path
                          style={{ fill: "#CAA977" }}
                          d="M324.153,354.585c0,12.138-9.932,22.069-22.07,22.069H69.788c-12.139,0-22.07-9.932-22.07-22.069   V68.047c0-12.138,9.932-22.069,22.07-22.069h232.295c12.139,0,22.07,9.932,22.07,22.069V354.585z"
                        />
                        <rect
                          x="70.803"
                          y="65.232"
                          style={{ fill: "#E8E8E8" }}
                          width="230.264"
                          height="279.886"
                        />
                        <g>
                          <path
                            style={{ fill: "#5C6670" }}
                            d="M237.396,30.623h-32.861c1.504-2.892,2.367-6.171,2.367-9.657C206.902,9.388,197.516,0,185.938,0    c-11.581,0-20.969,9.388-20.969,20.966c0,3.486,0.863,6.766,2.367,9.657h-32.862c-9.102,0-16.553,7.447-16.553,16.552v24.552    h136.029V47.175C253.949,38.07,246.501,30.623,237.396,30.623z M185.938,28.611c-4.226,0-7.646-3.423-7.646-7.646    c0-4.22,3.421-7.643,7.646-7.643c4.222,0,7.646,3.423,7.646,7.643C193.582,25.188,190.158,28.611,185.938,28.611z"
                          />
                          <path
                            style={{ fill: "#A4A9AD" }}
                            d="M185.938,4.966c-8.839,0-16.003,7.165-16.003,16c0,8.839,7.164,16.003,16.003,16.003    c8.838,0,16-7.164,16-16.003C201.938,12.131,194.774,4.966,185.938,4.966z M185.938,28.611c-4.226,0-7.646-3.423-7.646-7.646    c0-4.22,3.421-7.643,7.646-7.643c4.222,0,7.646,3.423,7.646,7.643C193.582,25.188,190.158,28.611,185.938,28.611z"
                          />
                        </g>
                        <g>
                          <rect
                            x="92.875"
                            y="102.159"
                            style={{ fill: "#A4A9AD" }}
                            width="183.178"
                            height="11.132"
                          />
                          <rect
                            x="92.875"
                            y="128.644"
                            style={{ fill: "#A4A9AD" }}
                            width="156.695"
                            height="11.13"
                          />
                          <rect
                            x="92.875"
                            y="155.128"
                            style={{ fill: "#A4A9AD" }}
                            width="183.178"
                            height="11.13"
                          />
                          <rect
                            x="92.875"
                            y="181.611"
                            style={{ fill: "#A4A9AD" }}
                            width="156.695"
                            height="11.13"
                          />
                          <rect
                            x="92.875"
                            y="208.094"
                            style={{ fill: "#A4A9AD" }}
                            width="183.178"
                            height="11.131"
                          />
                          <rect
                            x="92.875"
                            y="234.578"
                            style={{ fill: "#A4A9AD" }}
                            width="156.695"
                            height="11.13"
                          />
                          <rect
                            x="92.875"
                            y="261.061"
                            style={{ fill: "#A4A9AD" }}
                            width="183.178"
                            height="11.131"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <p className="text-[0.3em] max-md:text-[0.35em] w-1/2 leading-tight">
                    <span className="block font-semibold">
                      {data.length != 0 ? data[1] : "0"}
                    </span>
                    <span className="text-[0.8em] text-gray-500">
                      PERCENTILE
                    </span>
                  </p>
                </div>
                <div className="flex items-center w-1/2 justify-center space-x-2 border-l-[1px] ">
                  <span className="w-[13%] max-sm:w-5 bg-gray-300 p-1 rounded-full flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      enableBackground="new 0 0 64 64"
                    >
                      <path
                        d="M32,2C15.431,2,2,15.432,2,32c0,16.568,13.432,30,30,30c16.568,0,30-13.432,30-30C62,15.432,48.568,2,32,2z M25.025,50  l-0.02-0.02L24.988,50L11,35.6l7.029-7.164l6.977,7.184l21-21.619L53,21.199L25.025,50z"
                        fill="#43a047"
                      />
                    </svg>
                  </span>
                  <p className="text-[0.3em] max-md:text-[0.35em] w-1/2 leading-tight">
                    <span className="block font-semibold">
                      {data.length != 0 ? data[2] : "0"}/15
                    </span>
                    <span className="text-[0.8em] text-gray-500">
                      CORRECT ANSWER
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* line graph code container */}
            <div className="border-[1px] rounded-md mt-[0.5em] ">
            <div className="flex items-center justify-between p-1">
              <div>
              <p className="font-semibold text-[0.25em]  max-md:text-[0.35em] p-2">
                Comparison Graph
              </p>
              <div className="text-[0.25em] max-md:text-[0.35em]">
                <p>
                  <span className=" p-2 block">
                    <b>
                      You scored {data.length != 0 ? data[1] : "0"} percentile{" "}
                    </b>{" "}
                    which is lower than the average percentile 72% of all the
                    engineers who toke this assessment
                  </span>
                </p>
              </div>

              </div>
              <p className=" bg-[#d9d9d9] rounded-full max-sm:w-7 sm:w-[6%] md:w-[10%] max-sm:p-1 sm:p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#FFFFFF"
                  version="1.1"
                  id="Layer_1"
                  viewBox="0 0 455 455"
                  xmlSpace="preserve"
                >
                  <polygon points="260,160.001 195,225.001 0,30.001 0,424.999 455,424.999 455,354.999 " />
                </svg>
              </p>
              </div>
              {/* line chart component */}
              <div>
                <LineChartComponent
                  percentile={data.length !== 0 ? data[1] : "0"}
                />
              </div>
            </div>
          </div>

          {/* syllabus wise analysis container */}
          <div className=" w-[39%] max-md:grid-cols-2 grid max-md:w-full max-sm:grid-cols-1 gap-[1%] max-mob:w-full max-md:text-[1.5em] my-[2%] ">
            <div className="border-[1px] rounded-md p-3  my-[5%] ">
              <h3 className="text-[0.3em] font-medium">
                Syllabus Wise Analysis
              </h3>
              {/* static prograss bar static */}
              <div className=" text-[0.25em] my-[3%] ">
                <div className="my-[5%]">
                  <p className="text-gray-600">HTML Tools, Forms, History</p>
                  <div className="flex items-center space-x-1">
                    <input
                      className="w-full input1"
                      type="range"
                      min="0"
                      readOnly
                      max="100"
                      value="80"
                      style={{
                        background: `linear-gradient(to right, #3381ff 0%, #3381ff 80% ,  #99c0ff 80%,  #99c0ff 100%)`,
                      }}
                    />

                    <span className="font-medium text-[#3381ff]">80%</span>
                  </div>
                </div>
                <div className="my-[5%]">
                  <p className="text-gray-600">Tags & References in HTML</p>
                  <div className="flex items-center space-x-1">
                    <input
                      className="w-full input2"
                      type="range"
                      min="0"
                      max="100"
                      readOnly
                      value="60"
                      style={{
                        background: `linear-gradient(to right, #3381ff 0%, #3381ff 60% ,  #ffc299 60%,  #ffc299 100%)`,
                      }}
                    />

                    <span className="font-medium text-[#ff8533]">60%</span>
                  </div>
                </div>
                <div className="my-[5%]">
                  <p className="text-gray-600">Tables & References in HTML</p>
                  <div className="flex items-center space-x-1">
                    <input
                      className="w-full input3"
                      type="range"
                      min="0"
                      max="100"
                      readOnly
                      value="24"
                      style={{
                        background: `linear-gradient(to right, #ff1a1a 0%, #ff1a1a 24% ,  #ffc299 24%,  #ffc299 100%)`,
                      }}
                    />

                    <span className="font-medium text-[#ff1a1a]">24%</span>
                  </div>
                </div>
                <div className="my-[5%]">
                  <p className="text-gray-600">Tables & CSS Basics</p>
                  <div className="flex items-center space-x-1">
                    <input
                      className="w-full input4"
                      type="range"
                      min="0"
                      max="100"
                      readOnly
                      value="96"
                      style={{
                        background: `linear-gradient(to right, #33cc33 0%, #33cc33 96% ,  #c2f0c2 96%,  #c2f0c2 100%)`,
                      }}
                    />

                    <span className="font-medium text-[#33cc33]">96%</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Question analysis container code */}
            <div className="border-[1px] rounded-md p-3 ">
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-[0.3em] font-medium py-[1em] ">
                    Question Analysis
                  </h3>
                  <h2 className="text-blue-500 text-[0.3em] ">
                    {data.length != 0 ? data[2] : "0"}/15
                  </h2>
                </div>
                <p className="text-[0.25em] ">
                  {" "}
                  <b>
                    {" "}
                    You scored {data.length != 0 ? data[2] : "0"} Question
                    Correct out of 15.
                  </b>{" "}
                  <span className="text-gray-500">
                    However it still needs some improvements
                  </span>
                </p>
              </div>
              {/* pie chart graph */}
              <div className="w-[100%]">
                <DynamicPieChart totalQuestions={15} score={data[2] || 12} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
