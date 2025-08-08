import { FC, useState } from "react";
import sidebar from './images/sidebar.svg';

interface SidebarItem {
  title: string;
  children: string[];
}

const sidebarItems: SidebarItem[] = [
  {
    title: "Smart Procurement",
    children: ["Pending List"],
  },
  {
    title: "Auto DO",
    children: ["Raise Request"],
  },
  {
    title: "Change DO",
    children: ["MIS"],
  },
  {
    title: "RCS System",
    children: ["Pending List"],
  },
  {
    title: "Online Certificate System",
    children: ["Raise Request"],
  },
];

const Sidebar: FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItemIndex(prev => (prev === index ? null : index));
  };

  return (
    <div
      className={`ml-0 h-screen border-r-2 border-r-gray-300 transition-all duration-300 hover:bg-gray-100
        ${expanded ? 'w-64 md:w-75' : 'w-10 md:w-15 -ml-5 border-none'}
        md:fixed md:left-10
      `}
    >
      <button className="w-10 pr-3 md:w-20 md:pr-5 md:pb-8" onClick={() => setExpanded(!expanded)}>
        <img src={sidebar} alt="sidebar" />
      </button>

      <div className="flex flex-col items-start mt-4">
        {sidebarItems.map((item, index) => (
          <div key={index} className="w-full">
            <button
              onClick={() => toggleItem(index)}
              className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-200 md:text-xl md:p-5"
            >
              <span className={`${expanded ? '' : 'sr-only'}`}>{item.title}</span>
              {expanded && <span>{openItemIndex === index ? '-' : '+'}</span>}
            </button>

            {expanded && openItemIndex === index && (
              <div className="ml-6 mt-1 space-y-1">
                {item.children.map((child, cIndex) => (
                  <a
                    key={cIndex}
                    href="#"
                    className="block px-2 py-1 text-sm text-gray-600 hover:text-black md:text-lg"
                  >
                    {child}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
