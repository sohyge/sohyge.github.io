import React, { memo } from "react";
import * as S from "./style";

interface IProps {
  className?: string;
  children?: React.ReactNode;
  block?: boolean;
  paragraph?: boolean;
  size?: string | number;
  weight?: string | number;
  lineHeight?: string | number;
  color?: string;
  align?: string; //'left' | 'center' | 'right'
  font?: string; //'regular' | 'light' | 'medium' | 'semibold' | 'bold'
  underline?: boolean;
  del?: boolean;
  strong?: boolean;
  em?: boolean;
  italic?: boolean;
  ellipsis?: number;
  maxWidth?: string | number;
}

const Text = ({
  className,
  children,
  block = false,
  paragraph = false,
  size,
  weight,
  lineHeight,
  color,
  align,
  font,
  underline = false,
  del = false,
  strong = false,
  em = false,
  italic = false,
  ellipsis = 0,
  maxWidth,
}: IProps) => {
  const param: any = {
    size: size,
    weight: weight,
    color: color,
    lineHeight: lineHeight,
    align: align,
    font: font,
    underline: underline,
    del: del,
    strong: strong,
    em: em,
    italic: italic,
    ellipsis: ellipsis,
    as: block ? "div" : paragraph ? "p" : "span",
    maxWidth: maxWidth,
  };

  if (!underline && del) children = <del>{children}</del>;
  if (italic) children = <i>{children}</i>;
  if (em) children = <em>{children}</em>;
  if (strong) children = <strong>{children}</strong>;

  const str = (children: React.ReactNode) => String(children);

  return (
    <>
      <S.Text {...param}>{children}</S.Text>
    </>
  );
};

export default memo(Text);
