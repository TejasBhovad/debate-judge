import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="border-utility absolute flex h-14 w-full items-center justify-between border-b-[1.5px] bg-secondary px-4">
      <Link className="text-lg font-medium" href="/">
        debsoc.
      </Link>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/300" alt="Profile picture" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
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
