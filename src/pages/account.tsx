import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Head from "next/head";
import Validation from "../lib/validation";
import Button from "../components/atoms/global/Button";
import DefaultLayout from "../components/templates/DefaultLayout";
import TextField from "../components/atoms/global/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useUserState } from "../redux/user/useUserState";

const AccountSettingPage = () => {
  const { userState, getMe } = useUserState();

  useEffect(() => {
    getMe();
  }, [getMe]);

  const [showPassword, setShowPassword] = useState(false);

  const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState("");
    return {
      value,
      error,
      setError,
      onChange: (event) => {
        const key = event.target.name;
        const value: string = event.target.value;
        setValue(value);
        setError(Validation.formValidate(key, value));
      },
    };
  };

  const lastName = useInput(userState.me?.lastName || "");
  const firstName = useInput(userState.me?.firstName || "");
  const year = useInput(null);
  const month = useInput(null);
  const email = useInput(userState.me?.email || "");
  const password = useInput("");

  const fieldNames = {
    lastName,
    firstName,
    year,
    month,
    email,
    password,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInfo = {
      lastName: lastName.value,
      firstName: firstName.value,
      year: +year.value,
      month: +month.value,
      email: email.value,
      password: password.value,
    };
    // eslint-disable-next-line no-console
    console.log(userInfo);

    const errors = [];
    Object.keys(fieldNames).forEach((key) => {
      const error = Validation.formValidate(key, fieldNames[key].value);
      fieldNames[key].setError(error);
      if (error) errors.push(error);
    });

    if (errors.length > 0) return;
    alert("submitted");
  };

  return (
    <DefaultLayout notTop>
      <Head>
        <title>Dreamteams - アカウント設定</title>
      </Head>

      <form className="mx-2" onSubmit={handleSubmit}>
        <FieldName>お名前</FieldName>
        <TextField placeholder="姓" name="lastName" {...lastName} />
        <TextField placeholder="名" name="firstName" {...firstName} />

        <FieldName>メールアドレス</FieldName>
        <TextField type="email" name="email" placeholder="sample@dremateams.com" {...email} />

        <FieldName>生年月日</FieldName>
        <div className="flex flex-row items-center w-8/12">
          <TextField
            type="number"
            name="year"
            textAlign="center"
            width="80px"
            placeholder="1997"
            {...year}
          />
          <div className="text-sm mx-2">年</div>
          <TextField
            type="number"
            name="month"
            textAlign="center"
            width="80px"
            placeholder="2"
            {...month}
          />
          <div className="text-sm mx-2">月</div>
        </div>

        <FieldName>パスワード</FieldName>
        <div className="flex flex-row items-center">
          <TextField type={showPassword ? "text" : "password"} name="password" {...password} />
          {showPassword ? (
            <FontAwesomeIcon
              className="cursor-pointer"
              onClick={() => setShowPassword(false)}
              icon={faEye}
            />
          ) : (
            <FontAwesomeIcon
              className="cursor-pointer"
              onClick={() => setShowPassword(true)}
              icon={faEyeSlash}
            />
          )}
        </div>

        <div className="my-5 text-sm">
          「<a className="text-link">利用規約</a>」および「
          <a className="text-link">プライバシーポリシー</a>」をご確
          認の上、「同意して登録する」を押してください。
        </div>

        <Button type="submit" margin="10px auto 0" padding="10px 40px" color="white" bg="#fda032">
          同意して登録する
        </Button>
      </form>
    </DefaultLayout>
  );
};

const FieldName = styled.p`
  width: 100%;
  font-size: 10px;
  font-weight: bold;
  margin-top: 20px;
`;

export default AccountSettingPage;
