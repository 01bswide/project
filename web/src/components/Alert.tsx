import React, { useState } from "react";
import Close from "./icons/Close";
import ErrorWarning from "./icons/ErrorWarning";
import IconWrapper from "./IconWrapper";

interface AlertProps {
  className: string;
  dismissible: boolean;
  onClose?: () => void;
  message: React.ReactNode;
  variant: "primary" | "secondary" | "warning" | "danger";
}

export default function Alert(props: AlertProps) {
  const { className = "", dismissible, onClose, variant, message } = props;

  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      {showAlert ? (
        <div
          className={`text-white px-12 py-2 text-center text-sm rounded-md relative mb-4 bg-${variant} ${className}`}
        >
          <IconWrapper textBaseline position="left">
            <ErrorWarning />
          </IconWrapper>
          {message}

          {dismissible ? (
            <IconWrapper position="right">
              <Close className={"cursor-pointer"} onClick={() => onClose()} />
            </IconWrapper>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
