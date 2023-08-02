"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingBag } from "lucide-react";

import Button from "@/components/ui/Button";
import useCart from "@/hooks/useCart";
import { ModeToggle } from "@/components/themeToggle";

const NavbarActions = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  
  if (!isMounted) return null;


  return (
    <div className="ml-auto flex items-center gap-x-4" >
      <ModeToggle />
      <Button onClick={() => router.push("/cart")} className="flex items-center rounded-full px-4 py-2">
        <ShoppingBag 
          size={20}
        />
        <span className="ml-2 text-sm font-medium">
          {cart.items.length}
        </span>
      </Button>
    </div>
  )
}

export default NavbarActions;