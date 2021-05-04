import * as React from "react";

function SvgClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 10.545l5.818-5.818a1.03 1.03 0 011.455 0 1.03 1.03 0 010 1.455L13.455 12l5.818 5.818a1.03 1.03 0 010 1.455 1.03 1.03 0 01-1.455 0L12 13.455l-5.818 5.818a1.03 1.03 0 01-1.455 0 1.03 1.03 0 010-1.455L10.545 12 4.727 6.182a1.03 1.03 0 010-1.455 1.03 1.03 0 011.455 0L12 10.545z"
      />
    </svg>
  );
}

export default SvgClose;
