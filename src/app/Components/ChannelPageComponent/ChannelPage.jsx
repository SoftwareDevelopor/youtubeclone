import { MainContextProvider } from "@/app/MainContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function ChannelPage() {
  let { user } = useContext(MainContextProvider);

  

  return (
    <div className="px-8 py-6 flex flex-col gap-7">
      <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input id="dropzone-file" type="file" class="hidden"/>
        </label>
      </div>

      {
        user ? 
        <a href="#" class="grid lg:grid-cols-[18%_auto] gap-9 items-center">
        <div className="flex items-center justify-center bg-black rounded-full p-5">
          <img
            class="object-cover rounded-full w-full"
            src={user.photoURL}
            alt=""
          />
        </div>
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            {user.displayName}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            50 Subscribers
          </p>
          <p>
            Math is a wonderful, an amazing thing. Math is such a subject that
            it helps us in different ways.The uses of an amazing subject in
            various subject (Science, Economics, Computer, etc.). We prepare the
            mathematics for IIT JEE exam. We provide the best contents for the
            preparation of IIT JEE. Trust me, you will definitely select in the
            top institutes like IITs, NITs. Who are searching for the best
            mathematics teacher , please you can contact on my phone
            number:-7061352871. Thanking you for watching my YouTube channel.
          </p>
          <p className="my-4">[website]</p>
          <div className="flex gap-5 items-center">
            <Link href={"https://studio.youtube.com/"}>
              <button
                type="button"
                className="bg-[#282828] px-5 py-3 text-lg font-semibold rounded-3xl"
              >
                Customize Channel
              </button>
            </Link>

            <Link href={"https://studio.youtube.com/"}>
              <button
                type="button"
                className="bg-[#282828] px-5 py-3 text-lg font-semibold rounded-3xl"
              >
                Manage Videos
              </button>
            </Link>
          </div>
        </div>
      </a>
      :
      <>
      </>
      }
      <nav className="w-full border-b border-gray-500">
        <ul className="flex gap-6 items-center text-xl p-4 ">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>Videos</li>
          <li>Shorts</li>
          <li>Playlists</li>
          <li>Posts</li>
          <li>
            <CiSearch className="text-xl" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
