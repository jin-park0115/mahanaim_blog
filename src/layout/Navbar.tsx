import styled from "styled-components";
import logoimg from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import MyInfoPage from "@/page/MyInfoPage";

const Navbar = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggeIn);

  return (
    <Nav>
      <NavWrap>
        <ImgBox>
          <img src={logoimg} alt="마하나임 로고" draggable="true" />
        </ImgBox>
        <ul>
          <li>
            <Link to="/schedule">일정</Link>
          </li>
          <li>게시물</li>
          {isLoggedIn ? (
            <Link to="/myinfo">
              <li>내정보</li>
            </Link>
          ) : (
            <Link to="/login">
              <li>로그인</li>
            </Link>
          )}
        </ul>
      </NavWrap>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  background-color: rgba(34, 34, 34, 0.5);
  ul {
    display: flex;
    cursor: pointer;
    color: #ffffff;
    gap: 20px;
    font-size: 1.2rem;
  }
`;

const NavWrap = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 15px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImgBox = styled.div`
  width: 60px;
  height: 60px;
`;
