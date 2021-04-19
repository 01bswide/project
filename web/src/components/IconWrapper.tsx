import styles from "./IconWrapper.module.css";

interface IconWrapperProps {
  children: React.ReactNode;
  position: "left" | "right" | "top" | "bottom";
  textBaseline?: boolean;
}

export default function IconWrapper(props: IconWrapperProps) {
  const { children, position, textBaseline } = props;
  return (
    <span
      className={`absolute ${position}-0 inset-y-0 ${
        textBaseline ? styles.text_baseline : ""
      } flex items-center px-3`}
    >
      {children}
    </span>
  );
}
