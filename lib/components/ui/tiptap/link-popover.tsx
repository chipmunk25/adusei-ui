// LinkPopover.jsx
import { useState, useCallback } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../popover";
import { Input } from "../input";
import { Button } from "../button";
import { Label } from "../label";
import { Icon } from "../icon";
import { cn } from "@/utils";
import { Editor } from "@tiptap/react";

const LinkPopover = ({ editor }: { editor: Editor | null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [displayText, setDisplayText] = useState("");

  const setLink = useCallback(() => {
    setIsOpen(true);
  }, [editor]);

  const applyLink = () => {
    if (url === "") {
      editor?.chain().focus().extendMarkRange("link").unsetLink().run();
    } else {
      editor
        ?.chain()
        .focus()
        .setLink({ href: url })
        .insertContent(displayText)
        .run();
    }
    setIsOpen(false);
    setDisplayText("");
    setUrl("");
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger onClick={setLink} className="h-4">
        <Icon
          name="Link2"
          className={cn("text-text hover:cursor-pointer", {
            "text-primary": editor?.isActive("link"),
          })}
          size={16}
          strokeWidth={2}
        />
      </PopoverTrigger>
      <PopoverContent>
        <div style={{ padding: "16px" }}>
          <div>
            <Label>Display Text:</Label>
            <Input
              className="w-full mb-2"
              type="text"
              value={displayText}
              onChange={(e) => setDisplayText(e.target.value)}
            />
          </div>
          <div>
            <Label>URL:</Label>
            <Input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full mb-2"
            />
          </div>
          <Button
            onClick={applyLink}
            className="mt-2"
            disabled={!url || !displayText}
          >
            Apply
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LinkPopover;
