import React from "react";
import SvgProps, { defaultSvgProps } from "./SvgProps";

const ErrorWarning: React.FC<SvgProps> = (props) => {
  return (
    <svg {...props} viewBox="0 0 128 128">
      <path d="M72.2,20.1c-1.7-3-4.8-4.7-8.2-4.7s-6.5,1.8-8.2,4.7L2.3,112.8c-1.7,3-1.7,6.5,0,9.5c1.7,3,4.8,4.7,8.2,4.7h107 c3.4,0,6.5-1.8,8.2-4.7c1.7-3,1.7-6.5,0-9.5L72.2,20.1z M67,104c0,1.7-1.3,3-3,3s-3-1.3-3-3v-5.6c0-1.7,1.3-3,3-3s3,1.3,3,3V104z M67,84c0,1.7-1.3,3-3,3s-3-1.3-3-3V48.4c0-1.7,1.3-3,3-3s3,1.3,3,3V84z"></path>
    </svg>
  );
};

ErrorWarning.defaultProps = defaultSvgProps;

export default ErrorWarning;
