import React, { memo, useCallback, useEffect, useState } from "react";
import * as S from "./style";
import Text from "../Text";

interface IProps {
  children?: React.ReactNode;
  machineList?: any;
}

const SlotMachine = ({ children, machineList }: IProps) => {
  const [visitor, setVisitor] = useState("");
  useEffect(() => {
    const slotList =
      machineList[Math.floor(Math.random() * machineList.length)];
    setVisitor(slotList.text);
  }, [machineList]);
  const slotRender = useCallback(() => {
    return (
      <S.SlotMachine>
        <Text color="#0070f3">{visitor}</Text>...?
      </S.SlotMachine>
    );
  }, [visitor]);
  return <>{slotRender()}</>;
};

export default memo(SlotMachine);
