import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async (req:NextApiRequest,res:NextApiResponse) => {
    if(req.method !== 'GET'){
        return res.status(405);
    }

    const fetchedData = await prisma.user.findMany();
    return fetchedData;
}