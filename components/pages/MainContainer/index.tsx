import Title from "../../Title";
import Text from "../../Text";
import * as S from "./style";

const MainContainer = () => {
  return (
    <S.MainContainer className={"center"}>
      <span className="info">
        <Title level={1}>
          <Text font="bold" size={"4vw"} strong>
            마, <Text color="#0070f3">반갑다!</Text>
          </Text>
        </Title>
        <Title level={1}>
          <Text font="bold" size={"4vw"} strong>
            곧 <Text color="#0070f3">수정</Text> 할거니까 조금만 기다려.
          </Text>
        </Title>
      </span>
    </S.MainContainer>
  );
};

export default MainContainer;
