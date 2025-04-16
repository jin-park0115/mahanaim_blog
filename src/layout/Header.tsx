import styled from "styled-components";
import Navbar from "./Navbar";

import banner from "@/assets/배너이미지.jpg";
const Header = () => {
  return (
    <Headered $bgImg={banner}>
      <Navbar />
    </Headered>
  );
};

export default Header;

const Headered = styled.header<{ $bgImg: string }>`
  width: 100%;
  height: 600px;
  /* 변수(props)로 넘길 때 $bgImage와 같이 $ 붙이기 (스타일드 컴포넌트에서 props 충돌 방지)
 */
  background-image: url(${(props) => props.$bgImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.8;
`;
