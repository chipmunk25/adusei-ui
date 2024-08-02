import { Home } from "lucide-react";
import { AiOutlinePieChart } from "react-icons/ai";
// import { BiBullseye } from "react-icons/bi";
import {
  FaGlobeAmericas, //   FaRegArrowAltCircleLeft,
  //   FaRegFileAlt,
} from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa6";
import { GiWindTurbine } from "react-icons/gi";
import { IoCardOutline } from "react-icons/io5";
import {
  MdLightbulbOutline,
  MdOutlineFormatListBulleted,
  MdOutlineGroup,
  MdOutlineHealthAndSafety,
  MdOutlineInsertChartOutlined,
} from "react-icons/md";
import { PiClipboardText } from "react-icons/pi";
import { PiMathOperations } from "react-icons/pi";
import { RiDoorOpenLine } from "react-icons/ri";
import { TbSettings, TbZoomScan } from "react-icons/tb";
import { Icon } from "@/components/ui";

type SubNavItem = {
  title: string;
  path: string;
};

type NavIconProps = {
  size?: string | number | undefined;
  className?: string | undefined;
  color?: string | undefined;
};

type NavTopOrBottomItem = {
  collapsed?: boolean;
};

interface NavItem {
  title: string;
  icon?: string;
  navIcon: ({ size, className, color }: NavIconProps) => JSX.Element;
  navTopComponent?: ({ collapsed }: NavTopOrBottomItem) => JSX.Element;
  navBottomComponent?: ({ collapsed }: NavTopOrBottomItem) => JSX.Element;
  path?: string;
  subItems?: SubNavItem[];
}

export const navigationItems: NavItem[] = [
  {
    title: "Dashboard",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <Home size={size} className={className} color={color} />
    ),
    path: "/home",
  },
  {
    title: "Reports",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <MdOutlineInsertChartOutlined
        size={size}
        className={className}
        color={color}
      />
    ),
    path: "/reports",
  },
  {
    title: "Actions",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <MdOutlineFormatListBulleted
        size={size}
        className={className}
        color={color}
      />
    ),
    path: "/actions",
  },
  {
    title: "Audit Trail",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <PiMathOperations
        size={size}
        className={`${className} border-primary rounded-[2px] border`}
        color={color}
      />
    ),
    navBottomComponent: () => (
      <div className="mx-auto w-9/12 border-b border-[#647488] pt-5" />
    ),
    path: "/audit-trail",
  },
  {
    title: "Incidents",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <MdLightbulbOutline size={size} className={className} color={color} />
    ),
    navTopComponent: ({ collapsed }) => (
      <div className="mx-auto w-9/12 pt-8">
        {!collapsed && (
          <div className="pb-3 text-[9px] uppercase text-[#2CD5C7]">
            Item Management
          </div>
        )}
      </div>
    ),
    path: "/incidents",
  },
  {
    title: "Observations",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <Icon name="Target" size={size} className={className} color={color} />
    ),
    path: "/observations",
  },
  {
    title: "Inspections",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <TbZoomScan size={size} className={className} color={color} />
    ),
    path: "/inspections",
  },
  {
    title: "Audits",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <AiOutlinePieChart size={size} className={className} color={color} />
    ),
    path: "/audits",
  },
  {
    title: "Findings",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <PiClipboardText size={size} className={className} color={color} />
    ),
    path: "/findings",
  },
  {
    title: "Internal",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <IoCardOutline size={size} className={className} color={color} />
    ),
    navTopComponent: ({ collapsed }) => (
      <div className="mx-auto w-9/12 pt-8">
        {!collapsed && (
          <div className="pb-3 text-[9px] uppercase text-[#2CD5C7]">
            Compliance Management
          </div>
        )}
      </div>
    ),
    subItems: [
      {
        title: "Trainings",
        path: "/compliance/internal/trainings",
      },
      {
        title: "Certifications",
        path: "/compliance/internal/certifications",
      },
    ],
  },
  {
    title: "External",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <FaGlobeAmericas size={size} className={className} color={color} />
    ),
    subItems: [
      {
        title: "Regulations",
        path: "/compliance/external/regulations",
      },
    ],
  },
  {
    title: "Envrionmental",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <GiWindTurbine size={size} className={className} color={color} />
    ),
    navTopComponent: ({ collapsed }) => (
      <div className="mx-auto w-9/12 pt-8">
        {!collapsed && (
          <div className="pb-3 text-[9px] uppercase text-[#2CD5C7]">
            Record Management
          </div>
        )}
      </div>
    ),
    path: "/records/environmental",
  },
  {
    title: "Health",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <MdOutlineHealthAndSafety
        size={size}
        className={className}
        color={color}
      />
    ),
    path: "/records/health",
  },
  {
    title: "Meeting",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <RiDoorOpenLine size={size} className={className} color={color} />
    ),
    path: "/records/meeting",
  },
  {
    title: "Employees",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <FaRegAddressCard size={size} className={className} color={color} />
    ),
    navTopComponent: ({ collapsed }) => (
      <div className="mx-auto w-9/12 pt-8">
        {!collapsed && (
          <div className="pb-3 text-[9px] uppercase text-[#2CD5C7]">
            Resource Management
          </div>
        )}
      </div>
    ),
    path: "/resource/employees",
  },
  {
    title: "Access Management",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <MdOutlineGroup size={size} className={className} color={color} />
    ),
    path: "/resource/access",
  },
  {
    title: "Documents",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <Icon name="FileText" size={size} className={className} color={color} />
    ),
    path: "/resource/documents",
  },
  {
    title: "Inventory",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <IoCardOutline size={size} className={className} color={color} />
    ),
    path: "/resource/inventory",
  },
  {
    title: "Log Out",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <Icon
        name="CircleArrowLeft"
        size={size}
        className={className}
        color={color}
      />
    ),
    navTopComponent: () => <div className="pt-10" />,
    path: "/logout",
  },
  {
    title: "Settings",
    navIcon: ({ size, className, color }: NavIconProps) => (
      <TbSettings size={size} className={className} color={color} />
    ),
    path: "/settings",
  },
];
