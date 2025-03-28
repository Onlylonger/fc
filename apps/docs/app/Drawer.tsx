"use client";

import { Button, Drawer } from "@shilong/rc/components";
import { MenuIcon } from "@shilong/rc/icons";
// import { ActiveButtonLink } from "./shared/ActiveLink";
// import Link from "next/link";

export default function VaulDrawer() {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <Button variant="outline">
          <MenuIcon />
          <span>Menu</span>
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="right-2 top-2 bottom-2 fixed z-10 outline-none w-[310px] flex"
          // The gap between the edge of the screen and the drawer is 8px in this case.
          style={
            { "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties
          }
        >
          <div className="bg-zinc-50 h-full w-full grow p-5 flex flex-col rounded-[16px]">
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-2 text-zinc-900">
                Menus
              </Drawer.Title>
              {/* <div className="hidden md:flex gap-2">
                <Link href="/components">Components</Link>
                <Link href="/hooks">Hooks</Link>
                <Link href="/utils">Utils</Link>
                <Link href="/icons">Icons</Link>
              </div> */}
              <Drawer.Description className="text-zinc-600 mb-2">
                This one specifically is not touching the edge of the screen,
                but that&apos;s not required for a side drawer.
              </Drawer.Description>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
