"use client";
import React from "react";

import Link from "next/link";
import { mainNavItems } from "./navitems";

export default function Sidebar() {

  
  return (
    <>
  
        
          <div className="flex flex-col gap-5">
            {mainNavItems.map((items, index) => {
            
              const IconComponent = items.icon;
              return (
                <div className="py-2.5 px-1.5 group rounded-lg hover:bg-[#31313153]" key={index}>
                  <Link href={items.url} className="flex gap-2 flex-col items-center-safe">
                    <IconComponent className="text-3xl" />
                    {items.label}
                  </Link> 
                </div>
              );
            })}
          </div>
    
    </>
  );
}
