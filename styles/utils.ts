import { css, keyframes } from 'styled-components';

const mixin: any = {};

//keyframes
mixin.downUp = keyframes`
  0% { transform: translateY(100%); }
  100% { transform: translateY(0); }
`;

mixin.upDown = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(100%); }
`;

mixin.blink = keyframes`
  0% { opacity: 0; }
  65% { opacity: 1; }
  100% { opacity: 0; }
`;

//utils
mixin.pxToRem = (size: string, standard = 16) =>
  size
    .split(' ')
    .map((v) => `${Number(v) / standard}rem`)
    .join(' ');

mixin.pxToVw = (size: string, standard = 375) =>
  size
    .split(' ')
    .map((v) => `${(Number(v) / standard) * 100}vw`)
    .join(' ');

//mixin.getSizeBox = (w: number, h: number) => `width: ${mixin.pxToVw(String(w))}; height: ${mixin.pxToVw(String(h))};`;
mixin.getSizeBox = (w: number, h: number) => `width: ${w}px; height: ${h}px;`;

//css
mixin.a11y = () => {
  return css`
    overflow: hidden;
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
  `;
};

mixin.ellipsis = (line = 1) => {
  return css`
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
    word-break: ${line === 1 ? 'break-all' : 'keep-all'};
    overflow-wrap: break-word;
  `;
};

mixin.flex = ({ display = 'flex', direction = 'row', wrap = 'nowrap', align = 'center', justify = 'center' }) => {
  return css`
    display: ${display};
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    justify-content: ${justify};
    align-items: ${align};
  `;
};

export default mixin;
