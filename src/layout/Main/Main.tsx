import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/luri_main.jpg'

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <MainImg src={mainImg} />
      <MainTitle>{greeting.title}</MainTitle>
      <SubTitle>{greeting.eventDetail}</SubTitle>
    </div>
  );
};

export default Main;

const MainImg = styled.img`
  border-radius: 100px 100px 100px 100px;
  width: 90%;
  max-width: 450px;
  padding-top: 20px;
`;

const MainTitle = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 2rem;
  color: #2F2120;
  line-height: 120%;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2F2120;
  line-height: 140%;
  white-space: pre-line;
`;
