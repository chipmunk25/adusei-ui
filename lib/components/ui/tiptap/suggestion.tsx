// src/suggestion.tsx

import { SuggestionOptions } from "@tiptap/suggestion";
import { ReactRenderer } from "@tiptap/react";
import tippy, { Instance, Props } from "tippy.js";
import MentionList from "./mention-list";
// import "tippy.js/dist/tippy.css";

export interface SuggestionItem {
  //   id: number;
  label: string;
  email: string;
  image: string;
  id: string;
}

const createSuggestion = (
  trigger: string,
  suggestions: SuggestionItem[]
): Partial<SuggestionOptions> => ({
  char: trigger,
  items: ({ query }) => {
    return suggestions.filter((item) =>
      item.label.toLowerCase().includes(query.toLowerCase())
    );
  },
  render: () => {
    // let reactRenderer: ReactRenderer;
    // let popup: any;
    let reactRenderer: ReactRenderer;
    let popup: Instance<Props>[];

    return {
      onStart: (props) => {
        reactRenderer = new ReactRenderer(MentionList, {
          props,
          editor: props.editor,
        });

        popup = tippy("body", {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: reactRenderer.element,
          showOnCreate: true,
          interactive: true,
          arrow: false,
          trigger: "manual",
          placement: "bottom",
          popperOptions: {
            modifiers: [
              {
                name: "preventOverflow",
                options: {
                  boundary: "viewport",
                },
              },
              {
                name: "flip",
                options: {
                  fallbackPlacements: ["top", "bottom", "right", "left"],
                },
              },
            ],
          },
        });
      },
      onUpdate(props) {
        reactRenderer.updateProps(props);

        popup[0].setProps({
          getReferenceClientRect: props.clientRect,
        });
      },
      onExit() {
        popup[0].destroy();
        reactRenderer.destroy();
      },
    };
  },
  command: ({ editor, range, props }) => {
    editor
      .chain()
      .focus()
      .insertContentAt(range, [
        {
          type: "mention",
          attrs: { id: props.id, label: props.label, href: props.id },
        },
        { type: "text", text: " " },
      ])
      .run();
  },
  allowSpaces: true,
});

export default createSuggestion;
