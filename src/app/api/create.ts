import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/primsa";
import { PrismaClient } from "@prisma/client";

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient ();
	const {id, name, email, password, status, pictures} = req.body

	try {
		await prisma.user.create({
			data: { 
        id,
        name,
        email,
        password,
        status,
        pictures
			}
		})
		res.status(200).json({message: 'user Created'})
	} catch (error) {
		console.log("Failure");
	}
}

export default Handler;