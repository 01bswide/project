import React from "react";
import SvgProps, { defaultSvgProps } from "./SvgProps";

const Lock: React.FC<SvgProps> = (props) => {
  return (
    <svg {...props} aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Lock.defaultProps = defaultSvgProps;

export default Lock;
