import ThemeSwitch from "@/app/ui/theme-switch";

export default function TopNav() {
  return (
    <header className="shadow bg-white dark:bg-gray-700">
      <nav className="flex justify-between items-center px-3 py-5 md:px-16">
        <h1 className="font-extrabold">Where in the world?</h1>
        <ThemeSwitch />
      </nav>
    </header>
  );
}
