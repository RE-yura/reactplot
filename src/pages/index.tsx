import Head from "next/head";
import React, { useEffect } from "react";
import DefaultLayout from "../components/templates/DefaultLayout";
import PointCard from "../components/atoms/home/PointCard";
import Button from "../components/atoms/global/Button";
import { useUserState } from "../redux/user/useState";
import { useNavState } from "../redux/nav/useState";
import { FrontViewType } from "../types/frontViewType";

const Index = () => {
  const { userState, getMe, loading } = useUserState();
  const { setBackDrop, setFrontViewType } = useNavState();

  useEffect(() => {
    getMe();
  }, [getMe]);

  return (
    <DefaultLayout>
      <Head>
        <title>WebAppTemplate</title>
      </Head>

      <div className="text-base mt-8 mb-2">ポイント</div>
      <PointCard loading={loading} rank={10} point={userState.me?.point} />

      <div className="flex flex-row justify-around items-center w-9/12 mb-5 mt-7">
        <Button
          className="text-xs bg-gray-500"
          href="/account"
          radius="8px"
          padding="6px 20px"
          color="white"
          bg="#8d8d8d"
        >
          Form example
        </Button>
        <Button
          className="text-xs bg-gray-500"
          onClick={() => {
            setBackDrop({ show: true, isDark: true });
            setFrontViewType(FrontViewType.LaunchNotification);
          }}
          radius="8px"
          padding="6px 20px"
          color="white"
          bg="#8d8d8d"
        >
          Modal example
        </Button>
      </div>
    </DefaultLayout>
  );
};

export default Index;
