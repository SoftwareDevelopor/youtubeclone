"use client";

import React, { useContext, useState } from "react";
import NavSlider from "../Components/Navitems/NavSlider";
import Link from "next/link";
import { MainContextProvider } from "../MainContext";

// Mock data for recommended videos
export const recommendedVideos = [
  {
    id: 1,
    thumbnail: "https://picsum.photos/168/94",
    title: "Building a YouTube Clone",
    channel: "CodeWithMe",
    views: "2.1M views",
    timeAgo: "3 days ago",
    duration: "15:42",
    isSubscribed: true,
    verified: true,
    channelLogo: "https://i.pravatar.cc/40?img=1",
    description: 'This is the description'
  },
  {
    id: 2,
    thumbnail: "https://picsum.photos/168/95",
    title: "Advanced JavaScript Concepts",
    channel: "TechMaster",
    views: "890K views",
    timeAgo: "1 week ago",
    duration: "22:15",
    isSubscribed: false,
    verified: true,
    description: 'This is the description',
    channelLogo: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    thumbnail: "https://picsum.photos/168/96",
    title: "How to Build a Full-Stack Web ",
    channel: "WebDev Pro",
    description: 'This is the description',
    views: "1.5M views",
    timeAgo: "2 weeks ago",
    duration: "45:30",
    isSubscribed: true,
    verified: false,
    channelLogo: "https://i.pravatar.cc/40?img=3",
  },
  {
    id: 4,
    thumbnail: "https://picsum.photos/168/97",
    title: "CSS Grid vs Flexbox",
    description: 'This is the description',
    channel: "CSS Ninja",
    views: "567K views",
    timeAgo: "5 days ago",
    duration: "12:08",
    isSubscribed: false,
    verified: true,
    channelLogo: "https://i.pravatar.cc/40?img=4",
  },
  {
    id: 5,
    thumbnail: "https://picsum.photos/168/98",
    title: "React Hooks Explained: useState,",
    channel: "React Guru",
    description: 'This is the description',
    views: "3.2M views",
    timeAgo: "1 month ago",
    duration: "28:45",
    isSubscribed: true,
    verified: true,
    channelLogo: "https://i.pravatar.cc/40?img=5",
  },
  {
    id: 6,
    thumbnail: "https://picsum.photos/168/99",
    title: "Node.js Backend Development",
    channel: "Backend Boss",
    description: 'This is the description',
    views: "1.8M views",
    timeAgo: "3 weeks ago",
    duration: "35:20",
    isSubscribed: false,
    verified: true,
    channelLogo: "https://i.pravatar.cc/40?img=6",
  },
  {
    id: 7,
    thumbnail: "https://picsum.photos/168/100",
    title: "TypeScript vs JavaScript",
    description: 'This is the description',
    channel: "TypeScript Pro",
    views: "950K views",
    timeAgo: "1 week ago",
    duration: "18:33",
    isSubscribed: true,
    verified: false,
    channelLogo: "https://i.pravatar.cc/40?img=7",
  },
  {
    id: 8,
    thumbnail: "https://picsum.photos/168/101",
    title: "Database Design Best Practices",
    channel: "Data Master",
    description: 'This is the description',
    views: "720K views",
    timeAgo: "4 days ago",
    duration: "25:10",
    isSubscribed: false,
    verified: true,
    channelLogo: "https://i.pravatar.cc/40?img=8",
  },
];

export default function Rightsidebar() {

  let {    uploadvideo,
    setuploadvideo}=useContext(MainContextProvider)
    

  // Determine grid layout: row-wise if video, column-wise otherwise

  return (
    <>
      <div className="p-5 w-full overflow-hidden">
        <NavSlider/>
        <div className="grid lg:grid-cols-3 grid-cols-1 items-center gap-6">
  
          {
            uploadvideo? 
            uploadvideo.map((item,index)=>{
              
              return(
                <>
                <Link href={`/videopage/${item.id}`}>
                  <img className="rounded-t-lg w-full" src={item.thumbnail} alt="" />
                </Link>
                <div className="p-5">
                  <a href={`/videopage/${item.id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.channel}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
                </>
              )
            })

            :
          (
            <p>Please Upload the Video
              <button type="button" className="bg-blue-600 text-white rounded-xl px-4 py-2.5">Upload Video</button>
            </p>
          )
            
          }
        </div>
      </div>
    </>
  );
}
