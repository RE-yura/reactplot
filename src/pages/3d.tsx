import Head from "next/head";
import React, { useEffect } from "react";
import DefaultLayout from "../components/templates/DefaultLayout";
import PointCard from "../components/atoms/home/PointCard";
import Plot2D from "../components/atoms/home/Plot2D";
import { useUserState } from "../redux/user/useUserState";
import dynamic from "next/dynamic";

const Plot3DNoSSR = dynamic(() => import("../components/atoms/home/Plot3D"), {
  ssr: false,
});

const Page3D = () => {
  const { userState, loading } = useUserState();

  return (
    <DefaultLayout>
      <Head>
        <title>reactplot - 3D</title>
      </Head>

      {/* <div className="text-base mt-8 mb-2">ポイント</div>
      <PointCard loading={loading} rank={10} point={userState.point} /> */}

      <Plot3DNoSSR />
    </DefaultLayout>
  );
};

export default Page3D;
