import Title from "../../Title";
import Text from "../../Text";
import * as S from "./style";
import SlotMachine from "../../SlotMachine";
const machineList = [
  { text: "점심 맛있게 먹은 사람", value: "opt1" },
  { text: "몸짱", value: "opt2" },
  { text: "비오는데 우산 안 챙긴 사람", value: "opt3" },
  { text: "멍청이", value: "opt4" },
  { text: "월급도둑", value: "opt5" },
  { text: "영양제 사놓고 안먹는 사람", value: "opt6" },
  { text: "문지방에 발가락 찧은 사람", value: "opt7" },
  { text: "배고픈사람", value: "opt8" },
  { text: "아까 혼나서 기분 안좋은 사람", value: "opt9" },
  { text: "최근에 헤어진 사람", value: "opt10" },
  { text: "이틀째 속옷 안 갈아입은 사람", value: "opt11" },
  { text: "머리 안감은 사람", value: "opt12" },
];
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
        <Title level={1}>
          <Text font="bold" size={"4vw"} strong>
            방문해준 당신은...
            <SlotMachine machineList={machineList} />
          </Text>
        </Title>
      </span>
    </S.MainContainer>
  );
};

export default MainContainer;
