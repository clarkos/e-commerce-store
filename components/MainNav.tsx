"use client"

import Link from "next/link";
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}
const MainNav: React.FC<MainNavProps> = ({
  data
}) => {

  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }))

  return (
    <div>
      <nav className="hidden md:block mx-6 items-center space-x-4 lg:space-x6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-yellow-950",
              route.active ? "text-gray-600" : "text-neutral-500"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
      <div className="md:hidden bg-yellow-300">
      </div>
    </div>
  )
}

export default MainNav