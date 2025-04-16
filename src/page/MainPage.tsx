import styled from "styled-components";
import soccer from "@/assets/soccer.jpg";
import Header from "@/layout/Header";

const MainPage = () => {
  return (
    <>
      <Header />
      <Container $bgImg={soccer}>
        <Box>
          <BoxItem>선수단</BoxItem>
          <BoxItem>일정</BoxItem>
          <BoxItem>사진</BoxItem>
        </Box>
      </Container>
    </>
  );
};

export default MainPage;

const Container = styled.main<{ $bgImg: string }>`
  width: 100%;
  height: 80vh;
  background-image: url(${(props) => props.$bgImg});
  background-position: center;
  background-size: cover;
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 200px;
  display: flex;
  background-color: aqua;
  text-align: center;
  gap: 10px;
`;
const BoxItem = styled.div`
  width: calc(33.333%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #222;
`;
