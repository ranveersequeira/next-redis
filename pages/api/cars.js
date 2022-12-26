// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createCar } from "../lib/redis";

export default async function handler(req, res) {
    const id = await createCar(req.body);
    res.status(200).json({ id })
}
