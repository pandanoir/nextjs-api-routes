import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res
    .status(200)
    .json({ message: `process.env.MESSAGE is ${process.env.MESSAGE}` });
};
