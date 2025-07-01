"use client";
import { useSearchParams } from "next/navigation";
import React, { useContext } from "react";
import { recommendedVideos } from "@/app/common/Rightsidebar";
import Link from "next/link";
import { MainContextProvider } from "../MainContext";

export default function Searched() {

  let {uploadvideo,
    setuploadvideo}=useContext(MainContextProvider)

  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const filteredVideos =uploadvideo .filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.channel.toLowerCase().includes(query.toLowerCase())
  );
  

  return (
    <div className="p-5 w-full">
      <h2 className="text-2xl font-bold mb-4 text-white">Search Results for: <span className="text-blue-400">{query}</span></h2>
      {filteredVideos.length === 0 ? (
        <p className="text-gray-400">No results found.</p>
      ) : (
        <div className="grid grid-cols-1 items-center gap-6">
          {filteredVideos.map((v) => (
            <div
              
              className="grid grid-cols-[30%_auto] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <Link href={`/videopage/${v.id}`}>
                <img className="rounded-t-lg w-full" src={v.thumbnail} alt={v.title} />
              </Link>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {v.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {v.channel}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 