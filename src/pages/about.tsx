import Head from "next/head";
import React from "react";
import DefaultLayout from "../components/templates/DefaultLayout";

const About = () => {
  return (
    <DefaultLayout>
      <Head>
        <title>WebAppTemplate - About</title>
      </Head>

      <div className="text-lg my-8">About</div>
    </DefaultLayout>
  );
};

export default About;
