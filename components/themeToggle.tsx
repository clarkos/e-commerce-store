"use client"

import { useEffect, useState } from "react";
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import { Switch } from "@headlessui/react";

export function ModeToggle() {
  const [enabled, setEnabled] = useState(false);
  const { setTheme } = useTheme()

  useEffect (() => {
    enabled ? setTheme("light") : setTheme("dark")
  }, [enabled]);

  return (
    <div className={`pl-2 pr-2 flex items-center justify-center rounded-full border ${enabled ? "bg-gray-200" : "bg-gray-800"}`}>
      <Moon className="h-4 w-4" />
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-black-200' : 'bg-black-600'
          } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Theme Switcher</span>
        <span
          className={`${enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-gray-500 transition`}
        />
      </Switch>
      <Sun className="h-4 w-4" />
    </div>
  )

}
