import "./sidenav.css";
import "./header.css";
import { IconLogo, DarkLogo } from "@/assets/logos";
import { useEffect, useState } from "react";
import SideNav from "./sidenav";
import SideNavToggle from "./navtoggle";
import Header from "./header";
import UserNav from "./user-nav";
import ErrorBoundary from "@/utils/error";
import { Outlet } from "react-router-dom";

interface Props {
  // children: React.ReactNode;
  logos?: {
    smallLogo?: React.ReactNode;
    largeLogo?: React.ReactNode;
  };
  userInfo: {
    menuItems: { name: string; link: string }[];
    name: string;
    profile?: string;
  };
}
export const Layout = ({ logos, userInfo }: Props) => {
  const [collapsed, setCollapsed] = useState(window.innerWidth <= 768);
  const [visible, setVisible] = useState(window.innerWidth > 768);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setVisible(window.innerWidth > 768);
      if (window.innerWidth > 768) {
        setDrawerOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    if (drawerOpen) {
      setDrawerOpen(false);
    }
  };

  const toggleCollapse = () => {
    setCollapsed(false);
    if (window.innerWidth < 768) {
      return toggleDrawer();
    }
  };

  const HeaderActionsStart = () => {
    return (
      <div className="flex w-full items-center gap-4">
        <SideNavToggle
          visible={visible}
          onCollapse={() =>
            visible ? setCollapsed(!collapsed) : toggleCollapse()
          }
          sideNavCollapse={collapsed}
        />
      </div>
    );
  };

  return (
    <ErrorBoundary>
      <div className={`fixed flex h-screen w-full flex-col bg-neutral-100`}>
        <main className="flex w-full">
          <SideNav
            smallLogo={logos?.smallLogo || <IconLogo />}
            largeLogo={logos?.largeLogo || <DarkLogo />}
            collapsed={collapsed}
            visible={visible ? visible : drawerOpen}
            drawerOpen={drawerOpen}
            closeDrawer={closeDrawer}
          />
          <div className="flex h-full w-full min-w-0 flex-auto flex-col">
            <Header
              className="w-full border-b border-gray-200 dark:border-gray-700"
              headerEnd={
                <div className="flex items-center gap-12">
                  <div className="flex items-center gap-4">
                    <UserNav
                      name={userInfo.name || "John Doe"}
                      menuItems={userInfo.menuItems}
                    />
                  </div>
                </div>
              }
              headerStart={<HeaderActionsStart />}
            />
            <div className="h-full w-full px-8 py-9">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </ErrorBoundary>
  );
};
