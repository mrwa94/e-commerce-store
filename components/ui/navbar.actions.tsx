"use client";

import { useEffect, useState } from "react";

import { ShoppingBag } from "lucide-react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

export const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const router = useRouter(); 

  if (!isMounted) {
    return null;
  }
  return (
    <div className="ml-auto flex items-center gap-x-4 ">
      <Button onClick={()=>router.push("/cart")} className="flex items-center px-4 py-2 rounded-full">
        <ShoppingBag size={30} className=" ml-auto flex  items-center   " />
        <span className="  relative  right-3 bottom-2 bg-red-500 text-white rounded-full text-sm font-semibold w-5 h-5 ">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};
