import styled from "styled-components";
import LoginImg from "@/assets/로그인화면이미지.jpg";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import IconComponent from "@/components/IconComponents";
import { FormEvent, useState } from "react";
import { handleFirebaseAuth } from "@/utils/authUtils";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassWord] = useState<string>("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await handleFirebaseAuth("login", email, password);

      navigate("/");
    } catch (error: any) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("이메일 혹은 비밀번호가 일치하지 않습니다.");
      }
      setEmail("");
      setPassWord("");
    }
  };

  return (
    <Container>
      <Aside>
        <img src={LoginImg} alt="로그인화면 사이드 이미지" />
        <BackArrow to="/">
          <IconComponent icon={IoArrowBackOutline} size={40} />
        </BackArrow>
      </Aside>
      <Section>
        <Text>
          이와 같이 우리 많은 사람이 그리스도 안에서
          <br /> 한 몸이 되어 서로 지체가 되었느니라 <br />
          <span>[롬12:5]</span>
        </Text>
        <Wrap>
          <Form onSubmit={handleLogin}>
            <label htmlFor="email">User Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassWord(e.target.value)}
              required
            />
            <button type="submit">LogIn</button>
          </Form>
          <SignUp to="/signup">Sign Up</SignUp>
        </Wrap>
      </Section>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Aside = styled.aside`
  position: relative;
`;

const BackArrow = styled(Link)`
  position: absolute;
  top: 5%;
  left: 10px;
`;

const Section = styled.section`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  text-align: center;
  color: #21b6dca8;
  span {
    color: #4d9f6fa8;
    font-size: 0.9rem;
  }
  font-size: 1.1rem;
  margin-bottom: 12px;
`;

const Wrap = styled.div`
  width: 50%;
`;

const Form = styled.form`
  label {
    font-size: 0.9rem;
    font-weight: 400;
    color: gray;
  }
  input {
    width: 90%;
    height: 30px;
    padding-left: 8px;
    border: 1px solid #797171;
    border-radius: 4px;
    outline: none;
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  button {
    width: 150px;
    height: 36px;
    font-size: 17px;
    font-weight: 300;
    border: none;
    border-radius: 4px;
    outline: none;
    color: #fff;
    background-color: #797171;
    margin-bottom: 10px;
  }
`;

const SignUp = styled(Link)`
  font-size: 18px;
  color: #68113c;
  text-decoration: underline;
`;
