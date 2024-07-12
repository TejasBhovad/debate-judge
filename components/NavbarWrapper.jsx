"use client";
import { resetMembers, dummyValues } from "@/app/queries";
import Link from "next/link";
import { Button } from "./ui/button";
const Navbar = () => {
  const handleReset = async () => {
    await resetMembers();
    window.location.reload();
  };
  const handleRandomize = async () => {
    await dummyValues();
    window.location.reload();
  };
  return (
    <nav className="absolute flex h-14 w-full items-center justify-between border-b-[1.5px] border-utility bg-secondary px-8">
      <Link className="text-lg font-semibold" href="/">
        debsoc.
      </Link>
      <div className="flex h-full w-auto gap-4 py-2">
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
          Dummy Data
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
