export default interface SvgProps {
  xmls?: string;
  viewBox?: string;
  width?: string;
  height?: string;
  fill?: string;
  onClick?: () => void;
  className?: string;
}

export const defaultSvgProps: SvgProps = {
  xmls: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  width: "1.25em",
  height: "1.25em",
  fill: "currentColor",
};
