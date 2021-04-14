export default interface SvgProps {
  xmls?: string;
  viewBox?: string;
  width?: string;
  height?: string;
  fill?: string;
}

export const defaultSvgProps: SvgProps = {
  xmls: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  width: "20",
  height: "20",
  fill: "currentColor",
};
