import { navigationItems } from "@/utils/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { VeiliIcon, VeiliLogo } from "@/assets/logos";

interface SideNavProps {
  className?: string;
  setCollapsed?: Dispatch<SetStateAction<boolean>>;
  collapsed: boolean;
  visible: boolean;
  drawerOpen: boolean;
  closeDrawer: () => void;
  smallLogo?: React.ReactNode;
  largeLogo?: React.ReactNode;
}

const SideNav: React.FC<SideNavProps> = ({
  collapsed,
  visible,
  drawerOpen,
  closeDrawer,
  smallLogo,
  largeLogo,
}) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});
  const location = useLocation();
  if (!location) {
    throw new Error("MyComponent must be used within a <BrowserRouter>");
  }
  const toggleSubItems = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const isActiveRoute = (path: string) => {
    return location.pathname.includes(path);
  };

  return (
    <div>
      {drawerOpen && (
        <div className="drawer-underlay" onClick={closeDrawer}></div>
      )}

      {visible && (
        <div
          className={`sidenav overflow-hidden ${
            collapsed && !drawerOpen
              ? "collapsed px-2"
              : drawerOpen
              ? "drawer"
              : ""
          }`}
        >
          <div className="flex flex-col justify-center py-10">
            {collapsed ? (
              <>{smallLogo ? smallLogo : <VeiliIcon />}</>
            ) : (
              <span className="px-10">
                {largeLogo ? largeLogo : <VeiliLogo />}
              </span>
            )}
          </div>

          <div className="no-scrollbar h-[90%] overflow-y-scroll pb-24">
            <ul>
              {navigationItems.map((item, index) => {
                const isActive = isActiveRoute(item.path as string);
                return (
                  <div key={index}>
                    {item?.navTopComponent &&
                      item?.navTopComponent({
                        collapsed,
                      })}

                    <div className="flex w-full items-center">
                      {isActive && !collapsed ? (
                        <div className="ml-0 mr-4 h-[40px] w-[5px] rounded-r-md bg-secondary-500"></div>
                      ) : !isActive && !collapsed ? (
                        <div className="ml-0 mr-4 h-[40px] w-[5px] rounded-r-md bg-primary-500"></div>
                      ) : null}
                      <li
                        className={collapsed ? "w-full" : "w-10/12"}
                        key={index}
                        onClick={() => toggleSubItems(index)}
                      >
                        {item?.path ? (
                          <Link
                            onClick={closeDrawer}
                            to={item.path}
                            className={isActive ? "active" : ""}
                          >
                            {item.navIcon({
                              size: 20,
                              className: `${
                                isActive
                                  ? "text-primary-500"
                                  : collapsed
                                  ? "text-secondary-500"
                                  : "text-secondary-500"
                              } ${!collapsed ? "mx-4" : "mx-1"}`,
                            })}

                            {!collapsed && (
                              <span
                                className={
                                  isActive
                                    ? "flex items-center justify-center font-Bold text-sm"
                                    : "flex items-center justify-center font-Regular text-sm"
                                }
                              >
                                {item.title}

                                {item.subItems && !collapsed && (
                                  <div className="">
                                    {openItems[index] ? (
                                      <ChevronUp className="ml-20" />
                                    ) : (
                                      <ChevronDown className="ml-20" />
                                    )}
                                  </div>
                                )}
                              </span>
                            )}
                          </Link>
                        ) : (
                          <div
                            className={
                              isActive
                                ? "active hover:cursor-pointer"
                                : "hover:cursor-pointer"
                            }
                          >
                            {item.navIcon({
                              size: 20,
                              className: `mx-4 ${
                                collapsed || isActive
                                  ? "text-primary-500"
                                  : "text-secondary-500"
                              }`,
                            })}
                            {!collapsed && (
                              <span
                                className={
                                  isActive
                                    ? "flex items-center justify-center font-Bold text-sm"
                                    : "flex items-center justify-center font-Regular text-sm"
                                }
                              >
                                {item.title}

                                {item.subItems && !collapsed && (
                                  <div className="">
                                    {openItems[index] ? (
                                      <ChevronUp className="ml-10" />
                                    ) : (
                                      <ChevronDown className="ml-10" />
                                    )}
                                  </div>
                                )}
                              </span>
                            )}
                          </div>
                        )}
                      </li>
                    </div>

                    {item?.navBottomComponent &&
                      item?.navBottomComponent({
                        collapsed,
                      })}

                    {item.subItems && !collapsed && (
                      <div>
                        {openItems[index] && (
                          <div>
                            {item.subItems.map((subItem, subIndex) => (
                              <div key={subIndex} className="sidenav-dropdown">
                                <Link
                                  onClick={closeDrawer}
                                  to={subItem.path}
                                  className={
                                    location.pathname === subItem.path
                                      ? "active w-full"
                                      : "w-full"
                                  }
                                >
                                  <span className="text-sm">
                                    {subItem.title}
                                  </span>
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideNav;
