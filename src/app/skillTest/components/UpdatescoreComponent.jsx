"use client";
import React, { useState } from "react";
import formSchema from "../Formschma";

const UpdatescoreComponent = ({
  rank,
  setRank,
  setScore,
  setPercentile,
  percentile,
  score,
  setData,
}) => {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    rank: rank || "",
    percentile: percentile || "",
    score: score || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Update parent state (rank, percentile, score)
    if (name === "rank") setRank(value);
    if (name === "percentile") setPercentile(value);
    if (name === "score") setScore(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({}); // Clear previous errors

    try {
      formSchema.parse({
        rank: Number(formData.rank),
        percentile: Number(formData.percentile),
        score: Number(formData.score),
      });

      // Save data after successful validation
      setData([formData.rank, formData.percentile, formData.score]);
      document.querySelector(".Update").classList.toggle("hidden");
      document.querySelector("body").classList.toggle("overflow-hidden");
    } catch (error) {
      if (error.errors) {
        const errorMessages = error.errors.reduce((acc, err) => {
          acc[err.path[0]] = err.message;
          return acc;
        }, {});
        setErrors(errorMessages);
      }
    }
  };

  const handleCancel = () => {
    setFormData({ rank: "", percentile: "", score: "" }); // Reset form fields
    setErrors({}); // Clear error messages
    setRank("");
    setPercentile("");
    setScore("");
    document.querySelector(".Update").classList.toggle("hidden");
    document.querySelector("body").classList.toggle("overflow-hidden");
  };

  return (
    <div className="h-svh w-screen relative z-40 flex text-[0.25em] max-md:text-[0.35em] max-mob:text-[0.4em] items-center">
      <div className="w-2/5 max-md:w-3/5 max-mob:w-4/5 m-auto bg-white">
        <div className="flex justify-between items-center mx-2 ">
          <p className="font-semibold text-[1.2em]">Update scores</p>
          <span className="w-[10%] min-w-[45px]">
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
        </div>
        <div className="mx-2 ">
          {/* Rank */}
          <div className="flex items-center justify-between my-[1.5em]">
            <p className="flex space-x-1">
              <span className="bg-blue-900 text-white flex justify-center items-center rounded-full p-1 w-5 h-5 text-[0.9em] ">
                1
              </span>
              <span>
                Update Your <b>Rank</b>
              </span>
            </p>
            <div>
              <input
                type="number"
                name="rank"
                value={formData.rank}
                onChange={handleChange}
                placeholder="Rank"
                className="p-1 border-2 focus:outline-none border-blue-300 rounded-md"
              />
              {errors.rank && (
                <p className="text-red-800 text-[0.7em]">{errors.rank}</p>
              )}
            </div>
          </div>

          {/* Percentile */}
          <div className="flex items-center justify-between my-[1.5em]">
            <p className="flex space-x-1">
              <span className="bg-blue-900 text-white flex justify-center items-center rounded-full p-1 w-5 h-5 text-[0.9em] ">
                2
              </span>
              <span>
                Update Your <b>Percentile</b>
              </span>
            </p>
            <div>
              <input
                type="number"
                name="percentile"
                value={formData.percentile}
                onChange={handleChange}
                placeholder="Percentile"
                className="p-1 border-2 focus:outline-none border-blue-300 rounded-md"
              />
              {errors.percentile && (
                <p className="text-red-800 text-[0.8em]">{errors.percentile}</p>
              )}
            </div>
          </div>

          {/* Score */}
          <div className="flex items-center justify-between my-[1.5em]">
            <p className="flex space-x-1">
              <span className="bg-blue-900 text-white flex justify-center items-center rounded-full p-1 w-5 h-5 text-[0.9em] ">
                3
              </span>
              <span>
                Update Your <b> Current Score (out of 15)</b>
              </span>
            </p>
            <div>
              <input
                type="number"
                name="score"
                value={formData.score}
                onChange={handleChange}
                placeholder="Score"
                className="p-1 border-2 focus:outline-none border-blue-300 rounded-md"
              />
              {errors.score && (
                <p className="text-red-800 text-[0.8em]">{errors.score}</p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-2 py-[1em]">
            <button
              type="button"
              className="border border-blue-900 text-blue-900 rounded-md p-1"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-800 text-white rounded-md py-2 px-4"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatescoreComponent;
