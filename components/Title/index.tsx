import React, { memo, useEffect, useState } from "react";
import * as S from "./style";

interface IProps {
  level?: number;
  children?: React.ReactNode;
}

const Title = ({ level = 1, children }: IProps) => {
  const [_h, setH] = useState<any>("h1");

  useEffect(() => {
    setH("h" + level);
  }, [level]);

  return <S.Title as={_h}>{children}</S.Title>;
};

export default memo(Title);
