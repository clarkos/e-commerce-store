"use client"

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import { WalletCards, Trash } from "lucide-react";

import Button from "@/components/ui/Button";
import Currency from "@/components/Currency";
import useCart from "@/hooks/useCart";

export default function SummaryPage() {

  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success("Payment Completed.");
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error("Something went wrong during payment.");
    }
  }, [searchParams, removeAll])

  const totalCart = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0);

  const onCheckout = async () => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
          productIds: items.map((item) => item.id)
        });
        window.location = response.data.url;
    } catch (error) {
      toast.error("Something went wrong during comunication.")
      console.log("PAYMENT_ERROR: ", error)
    }
  }

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
          <p className="text-md font-bold text-gray-800">
            <Currency value={totalCart} />
          </p>
        </div>
      </div>

      <div className="flex md:justify-evenly sm:justify-end flex-wrap-reverse pt-8 gap-y-4 gap-x-2">
        <Button disabled={items.length === 0} onClick={removeAll} className="flex items-center justify-center w-full bg-white hover:bg-red-500 hover:opacity-80 border border-gray-300 px-4 py-2 text-black hover:text-white">
          <Trash size={15} />
          <span className="ml-2 text-sm font-medium">
            Discard
          </span>
        </Button>
        <Button disabled={items.length === 0} onClick={onCheckout} className="flex items-center justify-center w-full bg-green-800 hover:bg-green-600 hover:opacity-100 px-4 py-2">
          <WalletCards size={15} />
          <span className="ml-2 text-sm font-bold">
            Checkout
          </span>
        </Button>
      </div>
    </div>
  )
}

/* "use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Button from "@/components/ui/Button";
import Currency from "@/components/Currency";
import useCart from "@/hooks/useCart";
import { toast } from "react-hot-toast";

const SummaryPage = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
      productIds: items.map((item) => item.id)
    });

    window.location = response.data.url;
  }

  return ( 
    <div
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 className="text-lg font-medium text-gray-900">
        Order summary
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button onClick={onCheckout} disabled={items.length === 0} className="w-full mt-6">
        Checkout
      </Button>
    </div>
  );
}
 
export default SummaryPage;
 */