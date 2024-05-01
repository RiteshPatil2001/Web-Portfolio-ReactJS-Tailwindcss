import React from "react";

const CustomInputArea = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  errorid,
  errormessage,
}) => {
  return (
    <>
      <div className="h-32 phone:h-28">
        <div>
          <label className="text-2xl phone:text-xl font-bold">
            {label}
            <sup className="text-[rgba(255,0,0)]">*</sup>
          </label>
          <div className="innerdiv">
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="min-w-[450px] max-w-[450px] phone:min-w-[300px] phone:max-w-[300px] phone:text-sm tablet:text-lg laptop:text-lg desktop:text-lg phone:p-2 tablet:p-3 laptop:p-3 desktop:p-3 rounded text-white outline-none border-2 border-gray-400 bg-transparent"
            />
          </div>
        </div>
        <div className="part2">
          <span
            className="text-[rgba(255,0,0)] font-semibold ml-3 mt-1 text-base"
            id={errorid}
          >
            {errormessage}
          </span>
        </div>
      </div>
    </>
  );
};

export default CustomInputArea;
