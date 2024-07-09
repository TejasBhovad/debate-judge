"use client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { resetData, randomizeData } from "@/app/data";
import Link from "next/link";
import { Button } from "./ui/button";
const Navbar = () => {
  const handleReset = async () => {
    await resetData();
    window.location.reload();
  };
  const handleRandomize = async () => {
    await randomizeData();
    window.location.reload();
  };
  return (
    <nav className="absolute flex h-14 w-full items-center justify-between border-b-[1.5px] border-utility bg-secondary px-8">
      <Link className="text-lg font-semibold" href="/">
        debsoc.
      </Link>
      <div className="flex h-full w-auto gap-4 py-2">
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/300" alt="Profile picture" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <Button
          className="h-10 border-[1px] border-utility bg-muted hover:bg-muted/80"
          onClick={handleReset}
        >
          Reset Data
        </Button>
        <Button
          className="h-10 border-[1px] border-utility bg-muted hover:bg-muted/80"
          onClick={handleRandomize}
        >
          Randomize Data
        </Button>
      </div>
    </nav>
  );
};

const NavbarWrapper = ({ children }) => {
  return (
    <div className="h-fit min-h-screen w-full">
      <Navbar />
      <main className="h-fit min-h-screen w-full pt-14">{children}</main>
    </div>
  );
};

export default NavbarWrapper;
