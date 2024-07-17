"use client";
import { useEffect } from "react";

import axios from "axios";

import { toast } from "react-hot-toast";
import useCart from "@/hooks/use-cart";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import { useSearchParams } from "next/navigation";
import {loadStripe} from "@stripe/stripe-js"

const Summary = () => {
  const searchPrams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  // To move checkout page .
  const onCheckout = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          productIds: items.map((item) => item.id),
        }
      );

      window.location = response.data.url;
    } catch (error) {
      console.error("Error during checkout:", error);
      toast.error("Failed to initiate checkout");
    }
  };

  useEffect(() => {
    if (searchPrams.get("success")) {
      toast.success("payment completed.");
      removeAll();
    }

    if (searchPrams.get("canceled")) {
      toast.error("something went wrong.");
    }
  }, [searchPrams, removeAll]);

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5  lg:mt-0 lg:p-8">
      <h2 className="text-lg  font-serif text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4  ">
        <div className=" flex  items-center justify-between border-t  border-gray-200 pt-4 ">
          <div className="tex-base  font-medium text-gray-900 ">
            Order Total
          </div>

          <Currency value={totalPrice} />
        </div>
        <div className=" flex  justify-end items-center">
          <Button disabled={items.length === 0} onClick={onCheckout} className="bg-black text-white w-full ">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
