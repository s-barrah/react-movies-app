import * as React from "react";

function SvgClosed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="#00182E"
        fillRule="evenodd"
        d="M8 6.545L13.818.727a1.03 1.03 0 011.455 0 1.03 1.03 0 010 1.455L9.455 8l5.818 5.818a1.03 1.03 0 010 1.455 1.03 1.03 0 01-1.455 0L8 9.455l-5.818 5.818a1.03 1.03 0 01-1.455 0 1.03 1.03 0 010-1.455L6.545 8 .727 2.182a1.03 1.03 0 010-1.455 1.03 1.03 0 011.455 0L8 6.545z"
      />
    </svg>
  );
}

export default SvgClosed;
