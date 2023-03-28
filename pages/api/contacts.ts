import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async (req:NextApiRequest,res:NextApiResponse) => {
    if(req.method !== 'POST'){
        return res.status(405);
    }

    const contactData = JSON.parse(req.body);

    const savedData = await prisma.user.create({
        data: contactData
    })
}