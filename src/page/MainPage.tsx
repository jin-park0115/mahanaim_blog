import styled from "styled-components";
import Header from "@/layout/Header";
import { Link } from "react-router-dom";
import { GrSchedule } from "react-icons/gr";
import { FaUser } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import IconComponent from "@/components/IconComponents";

const MainPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Box>
          <BoxItem>
            <Link to="/">
              <p>선수단</p>
              <IconComponent icon={FaUser} size={30} />
            </Link>
          </BoxItem>
          <BoxItem>
            <Link to="/schedule">
              <p>일정</p>
              <IconComponent icon={GrSchedule} size={30} />
            </Link>
          </BoxItem>
          <BoxItem>
            <Link to="/">
              <p>사진</p>
              <IconComponent icon={IoMdPhotos} size={30} />
            </Link>
          </BoxItem>
        </Box>
      </Container>
    </>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100%;
  height: 80vh;
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
  text-align: center;
  gap: 10px;
`;
const BoxItem = styled.div`
  width: calc(33.333%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #222;
  border-radius: 8px;
`;
