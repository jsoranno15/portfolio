import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-4 bg-gray-200 absolute w-full">
      <div className="flex items-center justify-center w-full gap-4">
        <Link href="/">About</Link>
        <Link href="/test">Skills</Link>
      </div>
    </nav>
  );
};

export default Navbar;
