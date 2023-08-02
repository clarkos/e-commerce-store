"use client"

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"
import { Dialog } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Menu, X } from "lucide-react";

import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";

interface MobileMenuProps {
  data: Category[];
}
const MobileMenu: React.FC<MobileMenuProps> = ({
  data
}) => {

  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);


  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }))

  return (
    <>
      <Button onClick={onOpen} className="flex items-center md:hidden p-3 ml-3 border border-white">
        <Menu size={15} />
      </Button>

      <Dialog open={open} as="div" className="relative z-40 md:hidden" onClose={onClose} >
        <div className="fixed inset-0 bg-black bg-opacity-40" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex flex-col h-full w-full max-w-xs overflow-y-auto bg-black bg-opacity-80 py-4 pb-6 shadow-xl">
          <div className="flex items-center justify-end px-10">
              <IconButton icon={<X size={20} />} onClick={onClose} />
            </div>
              <Link
                onClick={onClose}
                href="/"
                className={cn(
                  "ml-8 py-4 text-2xl font-extrabold transition-colors",
                  pathname === "/" ? "text-neutral-200" : "text-neutral-500"
                )}
              >
                Home
              </Link>
            {routes.map((route) => (
              <Link
                onClick={onClose}
                key={route.href}
                href={route.href}
                className={cn(
                  "ml-8 py-4 text-2xl font-extrabold transition-colors",
                  route.active ? "text-neutral-200" : "text-neutral-500"
                )}
              >
                {route.label}
              </Link>
            ))}
          </Dialog.Panel>
        </div>
      </Dialog>

{/*   <div className="hidden md:block mx-6 items-center space-x-4 lg:space-x6">
      </div> */}

    </>
  )
}

export default MobileMenu;