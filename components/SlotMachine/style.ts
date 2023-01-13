import styled from "styled-components";

export const SlotMachine = styled.div`
  width: 100%;
  height: 100%;
  background: #1a2b45;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .doors {
    display: flex;
  }

  .door {
    background: #000;
    width: 20vw;
    height: 110px;
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
    font-size: 3rem;
  }

  .buttons {
    margin: 1rem 0 2rem 0;
  }

  button {
    cursor: pointer;
    font-size: 1.2rem;
    margin: 0 0.2rem;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
  }

  .info {
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
`;
