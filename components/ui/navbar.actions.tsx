"use client";

import { useEffect, useState } from "react";

import { ShoppingBag } from "lucide-react";

import Button from "@/components/ui/button";

export const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4 ">
      <Button className="flex items-center px-4 py-2 rounded-full">
        <ShoppingBag size={30} className=" ml-auto flex  items-center   " />
        <span className="  relative  right-3 bottom-2 bg-red-500 text-white rounded-full text-sm font-semibold w-5 h-5 ">
          20
        </span>
      </Button>
    </div>
  );
};
