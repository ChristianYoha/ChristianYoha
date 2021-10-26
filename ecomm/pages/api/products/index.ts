import {NextApiRequest, NextApiResponse} from 'next';
import {products} from "../../index";

export const handler = (req: NextApiRequest, res: NextApiResponse)=>{
    res.status(200).json(products)
}