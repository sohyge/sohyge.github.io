import { createGlobalStyle } from "styled-components";
import mixin from "../styles/utils";

export const GlobalStyles = createGlobalStyle`
  /* ------------- reset */
  html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,abbr,address,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strong,sub,sup,var,b,i,dl,dt,dd,ol,ul,li,
  fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,menu,nav,section,summary,time,mark,audio,video{margin:0;padding:0;}
  table{border:0;border-spacing:0;border-collapse:collapse;table-layout:fixed;}
  ul,ol,li,dl,dd,dt{list-style:none;}
  img,fieldset,iframe{border:0;}
  img {max-width:100%;vertical-align:middle;}
  textarea{resize:none;}
  input,select,textarea,button{font-size:100%;vertical-align:middle;outline:none;-webkit-appearance:none;}
  h1,h2,h3,h4,h5,h6{font-size:100%;}
  address,caption,cite,code,dfn,em,var{font-style:normal;font-weight:normal;}
  caption{overflow:hidden;margin-top:-1px;padding:0;width:1px;height:1px;font-size:0;line-height:0;}
  blockquote,q{quotes:none;} 
  blockquote:before,blockquote:after,q:before,q:after{content:"";content:none;} 
  body{-webkit-text-size-adjust:none;-webkit-font-smoothing: antialiased;}
  /* box-sizing */
  *,*:before,*:after{-webkit-box-sizing:border-box;box-sizing: border-box;}
  details summary::-webkit-details-marker{display:none;}
  /* base - input */
  input:checked[type="checkbox"]{background-color:#666;-webkit-appearance:checkbox;} 
  button,input[type="button"]{border:0;background-color:transparent;padding:0;cursor:pointer;}
  input[type="search"]::-webkit-search-cancel-button{-webkit-appearance:none;} 
  input[type="radio"] {-webkit-appearance:radio;}
  input[type="checkbox"] {-webkit-appearance:checkbox;}
  input[type="text"]::-ms-clear,
  input[type="password"]::-ms-clear {display: none;}
  select::-ms-expand {display: none;}
  /* placeholder */
  ::-webkit-input-placeholder {color:#c4c4c4;}
  :-moz-placeholder {color:#c4c4c4;}
  ::-moz-placeholder {color:#c4c4c4;}
  :-ms-input-placeholder {color: #c4c4c4 !important;}
  ::-ms-input-placeholder {color:#c4c4c4;}
  ::placeholder {color:#c4c4c4;}
  /* base - a */
  a,a:link,a:visited,a:hover,a:focus,a:active{text-decoration:none;}

  /* ------------- utils */
  .a11y {overflow:hidden;position:absolute;clip:rect(0 0 0 0);width:1px;height:1px;margin:-1px;border:0;padding:0;}

  /* ------------- layout */
  html, body {
    min-height: 100%;
  }

  body,input,select,textarea,button {
    font-family: ${({ theme }) => theme.fontFamily.regular};
    line-height: 1;
  }

  .no-scroll {
    overflow: hidden;
    width: 100%;
    touch-action: none;
  }

  .a-center {
    flex: 1;
    ${mixin.flex}
    height: 0;
  }
`;
