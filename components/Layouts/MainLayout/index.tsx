import * as S from "./style";
interface IProps {
  children?: React.ReactNode;
}
const MainLayout = ({ children }: IProps) => {
  return <S.MainLayout>{children}</S.MainLayout>;
};

export default MainLayout;
