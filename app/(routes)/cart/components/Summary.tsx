"use client"

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import { WalletCards, Trash } from "lucide-react";

import Button from "@/components/ui/Button";
import Currency from "@/components/Currency";
import useCart from "@/hooks/useCart";

export default function SummaryPage () {

  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const searchParams = useSearchParams();
  let totalCart = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0);


  // useEffect(() => {
  //    items.forEach((item) => totalCart += Number(item.price))
  //    toast.success("Cart updated.");
  // }, [items])

  return (
    <div className="mt-16 rounded-lg bg-gray-100 ml-4 px-4 py-6 sm:p-6 md:col-span-5 md:mt-0 md:p-8">
      <h2 className="text-md font-medium text-gray-900">
        Order Summary
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border=gray-200 pt-4">
          <p className="text-base font-medium text-gray-900">
            Order total
          </p>
          <p className="text-md font-bold">
            <Currency value={totalCart} />
          </p>
        </div>
      </div>
 
      <div className="flex md:justify-evenly sm:justify-end flex-wrap-reverse pt-8 gap-y-4 gap-x-2">
        <Button onClick={() => {}} className="flex items-center justify-center w-full bg-white hover:bg-red-500 hover:opacity-80 border border-gray-300 px-4 py-2 text-black hover:text-white">
          <Trash size={15} />
          <span className="ml-2 text-sm font-medium">
            Discard
          </span>
        </Button>
        <Button onClick={removeAll} className="flex items-center justify-center w-full bg-green-800 hover:bg-green-600 hover:opacity-100 px-4 py-2">
          <WalletCards size={15} />
          <span className="ml-2 text-sm font-bold">
            Checkout
          </span>
        </Button>
      </div>
      </div>
  )
}