import React from "react";
import { useState } from "react";

const ButtonPrimary = (props) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      className="btn-primary bg-white items-center h-fit "
      {...props}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <span className="pr-[16px]">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          className=""
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M20.9709 4.45465C21.0071 4.32635 21.0084 4.19074 20.9747 4.06178C20.9411 3.93281 20.8736 3.81514 20.7794 3.72089C20.6851 3.62664 20.5675 3.55921 20.4385 3.52554C20.3095 3.49187 20.1739 3.49318 20.0456 3.52934L2.04562 8.98746C1.89866 9.02893 1.76787 9.11428 1.67072 9.23208C1.57356 9.34988 1.51468 9.49453 1.50194 9.64669C1.4892 9.79885 1.52321 9.95128 1.59942 10.0836C1.67564 10.2159 1.79042 10.3218 1.92843 10.3871L9.95531 14.1878C10.1116 14.2619 10.2374 14.3877 10.3116 14.544L14.1131 22.57C14.1784 22.708 14.2844 22.8228 14.4167 22.899C14.549 22.9752 14.7014 23.0092 14.8536 22.9964C15.0057 22.9837 15.1504 22.9248 15.2682 22.8277C15.386 22.7305 15.4713 22.5997 15.5128 22.4528L20.9709 4.45465Z"
            className={` ${
              !isHover ? "fill-[#37517E]" : "fill-[#47B2E4]"
            } transition-all duration-300`}
          />
          <path
            d="M20.9709 4.45465C21.0071 4.32635 21.0084 4.19074 20.9747 4.06178C20.9411 3.93281 20.8736 3.81514 20.7794 3.72089C20.6851 3.62664 20.5675 3.55921 20.4385 3.52554C20.3095 3.49187 20.1739 3.49318 20.0456 3.52934L2.04562 8.98746C1.89866 9.02893 1.76787 9.11428 1.67072 9.23208C1.57356 9.34988 1.51468 9.49453 1.50194 9.64669C1.4892 9.79885 1.52321 9.95128 1.59942 10.0836C1.67564 10.2159 1.79042 10.3218 1.92843 10.3871L9.95531 14.1878C10.1116 14.2619 10.2374 14.3877 10.3116 14.544L14.1131 22.57C14.1784 22.708 14.2844 22.8228 14.4167 22.899C14.549 22.9752 14.7014 23.0092 14.8536 22.9964C15.0057 22.9837 15.1504 22.9248 15.2682 22.8277C15.386 22.7305 15.4713 22.5997 15.5128 22.4528L20.9709 4.45465Z"
            className={`${
              !isHover ? "stroke-[#37517E]" : "stroke-[#47B2E4]"
            } transition-all duration-300`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.1644 14.3356L15 9.5"
            className={`${
              !isHover ? "stroke-[#37517E]" : "stroke-[#47B2E4]"
            } transition-all duration-300`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className=" text-[1rem] pl-[18px] border-l border-[#C4CFE2]">
        Contact
      </span>
    </button>
  );
};

export default ButtonPrimary;
