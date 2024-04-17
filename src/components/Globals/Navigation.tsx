import { menuItems } from "../../const/NavMenuItems";
import type { MenuItem } from "../../types/types";

export default function Navigation() {
  const menu = menuItems.map((item: MenuItem) => {
    return (
      <a
        key={item.href}
        href={item.href}
        className="px-4 py-2 text-white hover:bg-slate-500 hover:text-slate-400 rounded-xl mx-1"
      >
        {item.name}
      </a>
    );
  });

  return (
    <nav className="flex flex-row items-center justify-center sticky top-0 z-10">
      <div className="flex flex-row items-center justify-left w-fit px-5 h-16 rounded-3xl my-6 bg-slate-400">
        <img
          src="https://eddremonts.dk/themes/thebakerdev-zenii/assets/dist/images/logo.svg?ver1583469235"
          alt="logo"
          className="w-28 h-12 rounded-3xl"
        />
        {menu}
      </div>
    </nav>
  );
}
