import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";
// Assuming HeaderAuth is imported correctly

export default function Navbar() {
  return (
    <nav
      className="
      w-full flex justify-center
      border-b border-b-foreground/10
      h-16 sticky top-0 z-50
      bg-black/75 backdrop-blur-sm
    "
    >
      {/* Change flex to grid and define 3 columns */}
      <div className="w-full grid grid-cols-3 items-center p-3 px-5 text-sm">
        {/* Left Column (Placeholder/Logo - empty for now) */}
        <div className="flex gap-5 font-semibold justify-self-start">
          {/* You could put a logo or brand element here if needed */}
          <Link href={"/"}>Reel It Back</Link>
        </div>

        {/* Center Column (Links) */}
        {/* Use justify-self-center to center the content within this grid cell */}
        <div className="flex gap-5 items-center font-semibold justify-self-center">
          <Link href={"/influencer"}>Influencer</Link>
          <Link href={"/customers"}>Customers</Link>
          <Link href={"/brands"}>Brands</Link>
          {/*
          <div className="flex items-center gap-2">
            <DeployButton />
          </div>
          */}
        </div>

        {/* Right Column (Auth Component) */}
        {/* Use justify-self-end to push this to the right edge of its grid cell */}
        <div className="justify-self-end flex gap-5 items-center font-semibold">
        <ThemeSwitcher />
          <HeaderAuth />
        </div>
      </div>
    </nav>
  );
}

// Placeholder for HeaderAuth component if you need to test
const HeaderAuth = () => <button>Login</button>;
