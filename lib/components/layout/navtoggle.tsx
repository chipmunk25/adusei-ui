import React, { Dispatch, SetStateAction } from "react";
import { HiOutlineMenu, HiOutlineMenuAlt2 } from "react-icons/hi";

interface NavToggleProps {
  toggled: boolean;
  className?: string;
}

interface SideNavToggleProps {
  className?: string;
  onCollapse: Dispatch<SetStateAction<boolean>>;
  visible?: boolean;
  sideNavCollapse: boolean;
}

const NavToggle: React.FC<NavToggleProps> = ({ toggled, className }) => {
  return (
    <div className={className}>
      {toggled ? <HiOutlineMenu /> : <HiOutlineMenuAlt2 />}
    </div>
  );
};

const SideNavToggle: React.FC<SideNavToggleProps> = ({
  className,
  onCollapse,
  sideNavCollapse,
}) => {
  return (
    <>
      <div className={className} onClick={() => onCollapse(sideNavCollapse)}>
        <NavToggle
          className="rounded-full p-3 text-2xl transition duration-300 hover:cursor-pointer hover:rounded-full hover:bg-gray-100"
          toggled={sideNavCollapse}
        />
      </div>
    </>
  );
};

export default SideNavToggle;
