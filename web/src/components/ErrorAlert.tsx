import Alert from "./Alert";

import UserVisibleError from "../util/UserVisibleError";

interface ErrorAlertProps {
  className?: string;
  defaultMessage?: React.ReactNode;
  onClose?: () => void;
  error: unknown;
}

export default function ErrorAlert(props: ErrorAlertProps) {
  const {
    className = "",
    defaultMessage = "Error encountered.",
    onClose,
    error,
  } = props;

  if (error) {
    const errorMessage = UserVisibleError.isUserVisibleError(error)
      ? error.message
      : defaultMessage;
    return (
      <Alert
        className={className}
        dismissible={onClose !== undefined}
        onClose={onClose}
        variant="danger"
        message={errorMessage}
      />
    );
  } else {
    return null;
  }
}
