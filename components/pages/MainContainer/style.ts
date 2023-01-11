import styled from "styled-components";
interface IProps {
  className: string;
}
export const MainContainer = styled.div<IProps>`
  width: 100vw;
  height: 100vh;
  .info {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
`;
