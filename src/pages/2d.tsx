import Head from "next/head";
import React, { useEffect } from "react";
import DefaultLayout from "../components/templates/DefaultLayout";
import PointCard from "../components/atoms/home/PointCard";
import Plot2D from "../components/atoms/home/Plot2D";
import { useUserState } from "../redux/user/useUserState";
import dynamic from "next/dynamic";

const Page2D = () => {
  const { userState, actions, loading } = useUserState();

  useEffect(() => {
    actions.getMyPoint();
  }, [actions]);

  return (
    <DefaultLayout>
      <Head>
        <title>reactplot</title>
      </Head>

      {/* <div className="text-base mt-8 mb-2">ポイント</div>
      <PointCard loading={loading} rank={10} point={userState.point} /> */}

      <Plot2D />
    </DefaultLayout>
  );
};

export default Page2D;
