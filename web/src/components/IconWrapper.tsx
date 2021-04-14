interface IconWrapperProps {
  children: React.ReactNode;
  position: "left" | "right" | "top" | "bottom";
}

export default function IconWrapper(props: IconWrapperProps) {
  const { children, position } = props;
  return (
    <span className={`absolute ${position}-0 inset-y-0 flex items-center px-3`}>
      {children}
    </span>
  );
}
