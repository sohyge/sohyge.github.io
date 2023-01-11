import styled, { css } from "styled-components";
import mixin from "../../styles/utils";

interface IProps {
  className: string;
  size: string | number;
  weight: string | number;
  lineHeight: string | number;
  color: string;
  align: string;
  font: string;
  underline: boolean;
  del: boolean;
  ellipsis: number;
  maxWidth: string | number;
}

export const Text = styled.span<IProps>`
  font-size: ${({ size }) =>
    typeof size === "number" ? `${mixin.pxToVw(String(size))}` : size};
  line-height: ${({ lineHeight }) =>
    typeof lineHeight === "number"
      ? `${mixin.pxToVw(String(lineHeight))}`
      : lineHeight};
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  text-decoration: ${({ underline, del }) =>
    !del && underline ? "underline" : undefined};
  font-weight: ${({ weight }) => weight};
  font-family: ${({ font, theme }) =>
    font === "bold"
      ? theme.fontFamily.bold
      : font === "semibold"
      ? theme.fontFamily.semibold
      : font === "medium"
      ? theme.fontFamily.medium
      : font === "light"
      ? theme.fontFamily.light
      : font === "regular"
      ? theme.fontFamily.regular
      : null};
  max-width: ${({ maxWidth }) =>
    typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth};

  ${(props) => {
    if (props.ellipsis !== 0) {
      return css`
        ${mixin.ellipsis(props.ellipsis)}
      `;
    }
  }}

  @media ${({ theme }) => theme.media.sm} {
    font-size: ${({ size }) => (typeof size === "number" ? `${size}px` : size)};
    line-height: ${({ lineHeight }) =>
      typeof lineHeight === "number" ? `${lineHeight}px` : lineHeight};
  }
`;
