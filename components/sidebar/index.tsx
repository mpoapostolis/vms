"use client";

import { Button } from "../ui/button";
import {
  AreaChart,
  BellIcon,
  Calendar,
  LayoutDashboard,
  Settings,
  Users2,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function MenuItem({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href={href} aria-label={label}>
          <Button variant="ghost" size="icon">
            {icon}
          </Button>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" sideOffset={5}>
        {label}
      </TooltipContent>
    </Tooltip>
  );
}
const menuItems = [
  {
    icon: <LayoutDashboard className="size-5" />,
    label: "overview",
    href: "/",
  },
  {
    icon: <AreaChart className="size-5" />,
    label: "Analytics",
    href: "/analytics",
  },
  {
    icon: <Users2 className="size-5" />,
    label: "Members",
    href: "/members",
  },
  {
    icon: <BellIcon className="size-5" />,
    label: "Notifications",
    href: "/notifications",
  },
  {
    icon: <Calendar className="size-5" />,
    label: "bookings",
    href: "/bookings",
  },
];

export function Sidebar() {
  return (
    <aside className="inset-y  sticky bg-background top-0 left-0  h-screen flex w-fit  flex-col border-r">
      <div className="flex items-center justify-center h-12  border-b">
        <Link href="/" className="text-xl font-extrabold tracking-tighter">
          VMS
        </Link>
      </div>
      <nav className="grid gap-1 place-items-center p-2">
        <TooltipProvider>
          {menuItems.map((item) => (
            <MenuItem key={item.label} {...item} />
          ))}
        </TooltipProvider>
      </nav>
      <nav className="mt-auto border-t grid gap-1 p-2">
        <TooltipProvider>
          <MenuItem
            icon={<Settings className="size-5" />}
            label="Settings"
            href="/settings"
          />

          <SignedIn>
            <Button variant="ghost" size="icon" aria-label="Account">
              <UserButton />
            </Button>
          </SignedIn>
        </TooltipProvider>
      </nav>
    </aside>
  );
}
