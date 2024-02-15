import { MoonIcon } from "@heroicons/react/24/outline";

export default function TopNav() {
  return (
    <nav className="flex justify-between items-center px-3 py-5 md:px-16">
      <h1 className="font-extrabold">Where in the world?</h1>
      <button className="flex gap-2 items-center text-sm">
        <MoonIcon className="w-4 h-4" />
        <span className="font-semibold">Dark Theme</span>
      </button>
    </nav>
  );
}
