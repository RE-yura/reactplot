import Head from "next/head";
import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/templates/DefaultLayout";
import { useUserState } from "../redux/user/useUserState";
import { usePlotState } from "../redux/plot/usePlotState";
import AxisManager from "../components/organisms/home/AxisManager";
import CsvManager from "../components/molecules/CsvManager";
import Plot2D from "../components/atoms/home/Plot2D";
// import { XAxisType, YAxisType } from "../types";

const Index = () => {
  const { userState, getMe, loading } = useUserState();
  const { plotState, setLabels } = usePlotState();

  const [csvData, setCsvData] = useState([]);

  const zip = (array1, array2) => array1.map((_, i) => [array1[i], array2[i]]);
  const col = (j) =>
    csvData.map((row) => {
      return row[j];
    });

  const handleData = () => {
    if (csvData.length === 0) return [];

    const x = col(plotState.xaxis.id);
    console.log(plotState.yaxis.ids);
    return plotState.yaxis.ids?.map((id) => {
      const y = col(id);
      return { name: y[0], value: zip(x, y) };
    });
    // const y2 = csvData.map((row) => {
    //   return row[2];
    // });
    // return { [y1[0]]: zip(x, x), [y2[0]]: zip(x, y2) };
  };

  useEffect(() => {
    getMe();
  }, [getMe]);

  return (
    <DefaultLayout>
      <Head>
        <title>reactplot</title>
      </Head>
      {/* <div className="text-base mt-8 mb-2">ポイント</div>
      <PointCard loading={loading} rank={10} point={userState.point} /> */}
      {console.log("csvdata", csvData)}
      <CsvManager setCsvData={setCsvData} />

      <div className="flex flex-row">
        <Plot2D data={handleData()} />
        <AxisManager />
      </div>
    </DefaultLayout>
  );
};

export default Index;
