import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyInfoPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    useAuthStore.getState().setToken(null);
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  return (
    <Container>
      <LeftSection>
        <UserName>
          <p>사용자 이름</p>
        </UserName>
        <button onClick={handleLogout}>로그아웃</button>
      </LeftSection>
      <RightSection>
        <p>나의 기록</p>
        <Items>
          <Item>글귀</Item>
          <Item>사진</Item>
          <Item>등등</Item>
        </Items>
      </RightSection>
    </Container>
  );
};

export default MyInfoPage;

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 100vh;
  display: flex;
  gap: 10px;
`;

const LeftSection = styled.section`
  width: 40%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background-color: aliceblue;
  button {
    width: 80px;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: transparent;
  }
`;

const UserName = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

const RightSection = styled.div`
  width: 60%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: antiquewhite;
`;

const Items = styled.div`
  display: flex;
  gap: 10px;
  border: 1px solid #444;
`;

const Item = styled.div`
  width: calc(33.333%);
  height: 250px;
  border: 1px solid #222;
  border-radius: 4px;
`;
