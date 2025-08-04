import { useState } from 'react';

type MenuItem = {
  title: string;
  children?: string[];
};

const menuItems: MenuItem[] = [
  { title: 'Smart Procurement', children: ['Pending List'] },
  { title: 'Auto DO', children: ['Raise Request'] },
  { title: 'Change DO', children: ['MIS'] },
  { title: 'RCS System', children: ['Pending List'] },
  { title: 'Online Certificate System', children: ['Raise Request'] },
];

const Sidebar = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (title: string) => {
    setOpenItem(prev => (prev === title ? null : title));
  };

  return (
    <aside className="w-20 bg-white h-screen border-r p-4 text-sm">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.title}>
            <div
              className="cursor-pointer font-medium hover:text-blue-600"
              onClick={() => toggleItem(item.title)}
            >
              {item.title}
            </div>
            {openItem === item.title && item.children && (
              <ul className="ml-4 mt-1 space-y-1 text-gray-600">
                {item.children.map((child) => (
                  <li
                    key={child}
                    className="cursor-pointer hover:text-blue-500"
                  >
                    {child}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
