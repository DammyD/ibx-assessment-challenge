// Nav_Links.tsx
import React from 'react';
import Link from 'next/link';
import { MdKeyboardArrowDown, MdKeyboardArrowRight  } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

interface Sublink {
  href: string;
  key: string;
  label: string;
}

interface NavLink {
  href: string;
  key: string;
  label: string;
  submenu?: boolean;
  sublinks?: Sublink[];
}

interface NavLinksProps {
  handleLinkClick: () => void;
}

const Nav_Links: React.FC <{ handleLinkClick: () => void }> = ({ handleLinkClick}) => {
  
  const links: NavLink[] = [
    {
      href: "/",
      key: "categories",
      label: "Categories",
      submenu: true,
      sublinks: [
        { href: "/", key: "development", label: "Development" },
        { href: "/", key: "buesiness", label: "Bussiness" },
        { href: "/", key: "finance_accounting", label: "Finance & Accounting" },
        { href: "/", key: "it_software", label: "IT & Software" },
        { href: "/", key: "office_productivity", label: "Office Productivity" },
        { href: "/", key: "personal_development", label: "Personal Development" },
        { href: "/", key: "design", label: "Design" },
        { href: "/", key: "marketing", label: "Marketing" },
        { href: "/", key: "lifestyle", label: "Lifestyle" },
        { href: "/", key: "photography_video", label: "Photography & Video" },
        { href: "/", key: "health_fitness", label: "Health & Fitness" },
      ],
    },
    { href: "/", key: "teach", label: "Teach" },
    { href: "/", key: "contact_us", label: "Contact Us" },
    { href: "/", key: "about_us", label: "About Us" },
  ];

  return (
    <>
      {links.map((link) => (
        <div key={link.key} className="relative group">
          <div className="group">
         <Link href={link.href} key={link.key} className="md:cursor-pointer py-7 regular-16 text-gray-25 font-medium flex justify-around items-center gap-6 cursor-pointer transition-all relative">
            <span className="relative">
              {link.label}
              <div className='underline absolute left-0 bottom-0 h-1 w-3 rounded bg-purple-100 opacity-0 transition-opacity group-hover:opacity-100'></div>
            </span>
            <div className=''>
              {link.submenu && (
                <span className="ml-auto transform transition-transform">
                  {link.label === 'Categories' ? <MdKeyboardArrowDown className="transition-transform 0.5s ease  hover:rotate-180" size="20"/> : null}
                </span>
              )}
            </div>
          </Link>
          </div>
          {link.submenu && (
            <div className="absolute top-full left-0 bg-white rounded-md p-2 sm:p-5 opacity-0 group-hover:opacity-100 transition-opacity z-10 shadow-md">
              {link.sublinks?.map((slink) => (
                <div key={slink.key} className="text-sm text-gray-25 my-2 sm:my-3.5">
                  <Link href={slink.href} className="md:cursor-pointer block items-center hover:text-purple-100 cursor-pointer whitespace-nowrap" onClick={handleLinkClick}>
                    <div className='flex items-center gap-2 sm:gap-10'>
                    {slink.label}
                    <span className="ml-auto">
                    {slink.label === 'Development' ? <MdKeyboardArrowRight size="20" fill="#9a9aa0"/> : null}
                    </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      {/* Search bar - Visible only on small screens */}
      <div className="lg:hidden w-full">
        <div className="w-4/5 h-full ml-8 py-4 px-3 rounded-[6px] items-center gap-1 bg-[#fafafa]">
          <div className="flex">
            <input
              type="text"
              placeholder="Search Anything"
              className="w-full h-full bg-[#fafafa] text-sm outline-none placeholder:text-[#bdbdbd]"
            />
            <FaSearch size="20" color="#bdbdbd" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav_Links;



