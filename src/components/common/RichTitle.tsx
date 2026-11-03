import React from "react";
import clsx from "clsx";

interface RichTitleProps {
  /** Text where *wrapped* segments render as the italic serif accent. */
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  accentClassName?: string;
  /** Start the italic accent on its own line (the Figma two-line title treatment). */
  breakBeforeAccent?: boolean;
}

/** Heading that renders `*accent*` segments in the brand italic serif. */
export default function RichTitle({ text, as: Tag = "h2", className, accentClassName, breakBeforeAccent }: RichTitleProps) {
  const parts = text.split(/(\*[^*]+\*)/g).filter(Boolean);
  return (
    <Tag className={className}>
      {parts.map((part, i) =>
        part.startsWith("*") ? (
          <React.Fragment key={i}>{breakBeforeAccent && i > 0 && <br />}<span className={clsx("font-recia italic font-medium leading-none", accentClassName)}>
            {part.slice(1, -1)}
          </span></React.Fragment>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </Tag>
  );
}
