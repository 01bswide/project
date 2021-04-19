import React, { createContext, useContext, useState } from "react";

import { Button, ButtonProps } from "./Button";
import ErrorAlert from "./ErrorAlert";
import IconWrapper from "./IconWrapper";
import useId from "./util/useId";
import useIsUnmounted from "./util/useIsUnmounted";

interface FormProps {
  children: React.ReactNode;
  className?: string;
  onSubmit: () => Promise<void>;
}

interface FormState {
  dismissError: () => void;
  error: unknown;
  isLoading: boolean;
}

const FormContext = createContext<FormState | null>(null);

export default function Form(props: FormProps) {
  const { children, className, onSubmit } = props;

  const isUnmounted = useIsUnmounted();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await onSubmit();
    } catch (error) {
      if (!isUnmounted.current) {
        setError(error);
      }
    } finally {
      if (!isUnmounted.current) {
        setIsLoading(false);
      }
    }
  };

  const formState = {
    dismissError: () => setError(null),
    error: error,
    isLoading: isLoading,
  };

  return (
    <FormContext.Provider value={formState}>
      <form className={className} onSubmit={handleSubmit}>
        {children}
      </form>
    </FormContext.Provider>
  );
}

function useFormState(): FormState {
  const formState = useContext(FormContext);
  if (formState === null) {
    throw new Error("not inside Form");
  } else {
    return formState;
  }
}

interface FormErrorAlertProps {
  className?: string;
  defaultMessage?: React.ReactNode;
}

Form.ErrorAlert = function FormErrorAlert(props: FormErrorAlertProps) {
  const { className, defaultMessage } = props;
  const { dismissError, error } = useFormState();

  if (error) {
    return (
      <ErrorAlert
        className={className}
        defaultMessage={defaultMessage}
        error={error}
        onClose={dismissError}
      />
    );
  } else {
    return null;
  }
};

Form.Button = function FormButton(props: ButtonProps) {
  const { isLoading } = useFormState();

  return <Button disabled={isLoading} {...props} />;
};

interface FormSubmitButtonProps {
  loadingLabel?: React.ReactNode;
  submitLabel: React.ReactNode;
  variant?: ButtonProps["variant"];
  icon?: React.ReactNode;
}

Form.SubmitButton = function FormSubmitButton(props: FormSubmitButtonProps) {
  const { submitLabel, variant = "primary", icon } = props;
  const { loadingLabel = submitLabel } = props;
  const { isLoading } = useFormState();

  return (
    <Button loading={isLoading} type="submit" variant={variant}>
      <IconWrapper textBaseline position="left">
        {icon}
      </IconWrapper>
      {isLoading ? loadingLabel + "â€¦" : submitLabel}
    </Button>
  );
};

interface FormTextInputProps {
  autoComplete?: string;
  id?: string;
  name?: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  rounded?: string;
  type: string;
  value?: string;
}

Form.TextInput = function FormTextInout(props: FormTextInputProps) {
  const fallbackId = useId();

  const {
    id = fallbackId,
    autoComplete,
    name,
    label,
    onChange,
    required,
    rounded,
    type,
    value,
  } = props;
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        onChange={onChange}
        className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-info rounded${
          rounded ? "-" + rounded : ""
        }-md focus:outline-none focus:ring-indigo-500 focus:border-link focus:z-10 sm:text-sm`}
        placeholder={label}
        value={value}
      />
    </div>
  );
};
