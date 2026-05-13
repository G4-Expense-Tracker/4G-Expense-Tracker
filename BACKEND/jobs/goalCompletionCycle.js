import cron from "node-cron";

cron.schedule("0 0 * * *", async () => {
  console.log("Running weekly goal reset job");

  try {
    // reset incomplete goals and level up complete ones
  } catch (err) {
    console.log(err);
  }
});
