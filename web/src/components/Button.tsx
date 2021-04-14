import React from "react";

type VariantButtonProps = Omit<ButtonProps, "variant">;

export function DangerButton(props: VariantButtonProps) {
  return <Button {...props} variant="danger" />;
}

export function PrimaryButton(props: VariantButtonProps) {
  return <Button {...props} variant="primary" />;
}

export function SecondaryButton(props: VariantButtonProps) {
  return <Button {...props} variant="secondary" />;
}

export function WarningButton(props: VariantButtonProps) {
  return <Button {...props} variant="warning" />;
}

interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  dark?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  variant: "primary" | "secondary" | "warning" | "danger";
}

function Button(props: ButtonProps) {
  const {
    children,
    dark,
    disabled,
    loading,
    onClick,
    type = "button",
    variant,
  } = props;

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-${
        dark ? "info" : "white"
      } bg-${variant} hover:bg-${variant}${
        !disabled ?? "-hover"
      } focus:outline-none focus:ring-1 focus:ring-${variant}-focus disabled:opacity-50`}
    >
      {children}
    </button>
  );
}
