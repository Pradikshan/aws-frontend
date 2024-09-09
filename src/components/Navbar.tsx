import React, { useState, useContext } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { AuthContext } from "../AuthContext";
import { cn } from "../utils/cn.ts";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <NavbarFunc className="top-2" />
    </div>
  );
}

function NavbarFunc({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { user } = useContext(AuthContext);

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

        {user && (
          <MenuItem setActive={setActive} active={active} item="Music">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="View Albums"
                href="/albums"
                src="/images/album-cover.jpg"
                description="All the albums curated by DreamStreamer"
              />
              <ProductItem
                title="View Artists"
                href="/artists"
                src="/images/artists-cover.jpg"
                description="All the Artists affiliated with DreamStreamer"
              />
              <ProductItem
                title="View Songs"
                href="/songs"
                src="/images/song-cover.jpg"
                description="All the songs curated by DreamStreamer"
              />
            </div>
          </MenuItem>
        )}

        {!user && (
          <MenuItem setActive={setActive} active={active} item="Pricing">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/pricing">View Subscription Info</HoveredLink>
            </div>
          </MenuItem>
        )}

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
