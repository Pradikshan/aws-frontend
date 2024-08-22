"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn.ts";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p> */}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Home</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Features">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/features">View Features</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Music">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="View Album"
              href="/"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="All the albums curated by DreamStreamer"
            />
            <ProductItem
              title="View Artists"
              href="/"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="All the Artists affiliated with DreamStreamer"
            />
            <ProductItem
              title="View Songs"
              href="/"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="All the songs curated by DreamStreamer"
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/pricing">View Subscription Info</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="About & Support">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">About Us</HoveredLink>
            <HoveredLink href="/support">Support</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
