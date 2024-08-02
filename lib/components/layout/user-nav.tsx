import { Link } from "react-router-dom";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui";
import { getInitials } from "@/utils";

interface Props {
  profile?: string;
  name: string;
  menuItems: { name: string; link: string }[];
}
const UserNav = (props: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer bg-neutral-100">
          <AvatarImage src={props?.profile} alt="avator" />
          <AvatarFallback className="bg-secondary-500 text-primary-500">
            {getInitials(props.name)}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {props.menuItems?.map((item, index) => (
          <DropdownMenuItem
            key={index}
            className="group cursor-pointer focus:bg-neutral-200"
          >
            <Link to={item?.link}>{item?.name}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="group cursor-pointer focus:bg-neutral-200">
          <Link to="/logout">Logout</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
