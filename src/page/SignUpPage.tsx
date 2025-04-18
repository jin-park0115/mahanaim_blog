import React, { useState } from "react";
import styled from "styled-components";
import { signUpFields } from "@/formFields";
import { IoArrowBackOutline } from "react-icons/io5";
import IconComponent from "@/components/IconComponents";
import { handleFirebaseAuth } from "@/utils/authUtils";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    group: "",
  });

  const isPasswordMatch =
    formData.password &&
    formData.confirmPassword &&
    formData.password === formData.confirmPassword;
  //password 컨펌

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // 필드 입력값 state에 저장

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await handleFirebaseAuth(
        "signup",
        formData.email,
        formData.password
      );
      alert("Sign Up Success");
      navigate("/");
    } catch (error: any) {
      console.log(error);
      switch (error.code) {
        case "auth/email-already-in-use":
          return alert("이미 사용중인 이메일 입니다.");
        case "auth/invalid-email":
          return alert("잘못된 이메일 형식입니다.");
        case "auth/missing-email":
          return alert("이메일을 입력 해주세요.");
        case "auth/weak-password":
          return alert("비밀번호는 6글자 이상이어야 합니다.");
        case "auth/network-request-failed":
          return alert("네트워크 연결에 실패 하였습니다.");
      }
    }
  };
  // 회원가입 로직

  return (
    <Container>
      <h1>signup</h1>
      <BackArrow to="/">
        <IconComponent icon={IoArrowBackOutline} size={40} />
      </BackArrow>
      <form onSubmit={handleSubmit}>
        {signUpFields.map((item) => (
          <InputField key={item.name}>
            <label htmlFor={item.type}>{item.text}</label>
            <input
              type={item.type}
              id={item.type}
              name={item.name}
              placeholder={item.place}
              value={formData[item.name as keyof typeof formData] as string}
              onChange={handleChange}
            />
          </InputField>
        ))}
        <button type="submit">Sign Up!</button>
      </form>
    </Container>
  );
};

export default SignUpPage;

const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  border: 1px solid #222;
`;

const BackArrow = styled(Link)``;

const InputField = styled.div`
  label {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
`;
