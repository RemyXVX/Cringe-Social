import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../lib/primsa";
import { PrismaClient } from "@prisma/client";

const Handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const dashboardId = req.query.id;
	const prisma = new PrismaClient();

  if (req.method === "DELETE") {
    try {
      const user = await prisma.user.delete({
        where: { id: Number(dashboardId) },
      });
      res.json(user);
    } catch (error) {
      console.log("Error deleting user:", error);
      res.status(500).json({ error: "Failed to delete user" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default Handler;
