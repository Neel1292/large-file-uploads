import cron from "node-cron";
import { prisma } from "../prisma/client.js";

cron.schedule("0 */6 * * *", async () => {
  console.log("Running upload cleanup job...");

  const expiredUploads = await prisma.upload.deleteMany({
    where: {
      status: { not: "COMPLETED" },
      expiresAt: { lt: new Date() },
    },
  });

  console.log(`Deleted ${expiredUploads.count} expired uploads`);
});
