import Title from "../../Title";
import Text from "../../Text";
import * as S from "./style";
import SlotMachine from "../../SlotMachine";
const machineList = [
  "점심 맛있게 먹은 사람",
  "몸짱",
  "비오는데 우산 안 챙긴 사람",
  "멍청이",
  "월급도둑",
  "영양제 사놓고 안먹는 사람",
  "문지방에 발가락 찧은 사람",
  "배고픈사람",
  "아까 혼나서 기분 안좋은 사람",
  "최근에 헤어진 사람",
  "이틀째 속옷 안 갈아입은 사람",
  "머리 안감은 사람",
  "저녁에 회식 있어서 신난 사람",
  "대머리",
  "모태솔로",
  "혼자 밥먹는거 좋아하는 사람",
  "얼굴에 개기름 뜬 사람",
  "양치할때 혓바닥 안닦는 사람",
  "무쇠다리",
];
const MainContainer = () => {
  return (
    <S.MainContainer className={"center"}>
      <span className="info">
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
