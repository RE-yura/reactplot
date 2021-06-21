import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    data: {
      lastName: "hoge",
      firstName: "huga",
      email: "hogehoge@gmail.com",
      point: 547,
    },
  });
};
