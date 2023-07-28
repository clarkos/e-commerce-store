"use client"

import Container from "@/components/ui/Container";
import useCart from "@/hooks/useCart";
import { useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import SummaryPage from "./components/Summary";

const CartPage = () => {
  const cart = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 md:px-8">
          <h1 className="text-3xl font-bold text-black">
            Shopping Cart
            <div className="mt-12 md:grid md:grid-cols-12 md:items-start gap-x-12">
              <div className="md:col-span-7">
                {cart.items.length === 0 
                  && <p className="text-neutral-500">
                      No items added to cart.
                    </p>}
                <ul>
                  {cart.items.map((item) => (
                    <CartItem 
                      key={item.id}
                      data={item}
                    />
                  ))}
                </ul>
              </div>
              <SummaryPage />
            </div>
          </h1>
        </div>
      </Container>
    </div>
  )
}

export default CartPage