import { FC, ReactNode, CSSProperties, Key } from "react";

export type LogoItem =
  | { node: ReactNode; title?: string; href?: string; ariaLabel?: string }
  | {
      src: string;
      srcSet?: string;
      sizes?: string;
      width?: number;
      height?: number;
      alt?: string;
      title?: string;
      href?: string;
    };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoItem, key: Key) => ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

export declare const LogoLoop: FC<LogoLoopProps>;
declare const LogoLoopDefault: FC<LogoLoopProps>;
export default LogoLoopDefault;
