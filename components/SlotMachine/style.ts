import styled from "styled-components";

export const SlotMachine = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .doors {
    display: flex;
  }

  .door {
    background: #000;
    width: 50vw;
    height: 10vh;
    overflow: hidden;
    border-radius: 5px;
    margin: 5px;
  }

  .boxes {
    transition: transform 1s ease-in-out;
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4vw;
  }

  .info {
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
`;
