import { MoonIcon } from "@heroicons/react/24/outline";

export default function TopNav() {
  return (
    <nav className="flex justify-between items-center px-3 py-5 md:px-16">
      <h1 className="font-extrabold">Where in the world?</h1>
      <button className="flex gap-3 items-center">
        <MoonIcon className="w-5 h-5" />
        <span className="font-semibold">Dark Theme</span>
      </button>
    </nav>
  );
}
