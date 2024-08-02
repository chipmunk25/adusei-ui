import { cn } from "@/utils";
import React, { ReactNode } from "react";
import { HEADER_HEIGHT_CLASS } from "@/utils/constants";

interface HeaderProps {
  headerStart?: ReactNode;
  headerEnd?: ReactNode;
  headerMiddle?: ReactNode;
  className?: string;
  container?: boolean;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { headerStart, headerEnd, headerMiddle, className, container } = props;

  return (
    <header className={cn("header", className)}>
      <div
        className={cn(
          "header-wrapper",
          HEADER_HEIGHT_CLASS,
          container && "container mx-auto"
        )}
      >
        <div className="header-action header-action-start w-full max-w-96">
          {headerStart}
        </div>
        {headerMiddle && (
          <div className="header-action header-action-end">{headerMiddle}</div>
        )}
        <div className="header-action header-action-end">{headerEnd}</div>
      </div>
    </header>
  );
};

export default Header;
