import React from "react";
import { BtnContact } from "./BtnContact";
export const Footers = () => {
  return (
    <div className="flex justify-center border-t-2 border-[var(--color-border)] bg-[var(--c-bg)] p-5 cursor-none ">
      <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-3 pt-2 text-white">
          <div className="flex justify-center items-center">
            <div className="p-2">
              <BtnContact />
              <p className="mt-1">Contact</p>
            </div>
          </div>
          <div className=" flex flex-col  text-center lg:text-start">
            <p className="uppercase ">sociel</p>
            <ul className=" p-2 text-center lg:text-start lg:border-l-2 lg:ml-4 gap-2 ">
              <li >
                <a
                  href="https://www.facebook.com/pukkawat2/"
                  className="hover:text-black hover:bg-amber-50 transition p-1 flex justify-center lg:justify-start "
                >
                  Facebook
                  <span class="relative flex size-1">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex size-1 rounded-full bg-green-500"></span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p class="text-center text-white text-sm sm:text-base font-medium tracking-wide mt-3">
          Developed with
          <button class="">
            <span class="block animate-bounce mx-3 hover:animate-spin">❤️</span>
          </button>
          by <span class="text-white"> Phakhawat Chomnkul</span>
        </p>
      </div>
    </div>
  );
};
