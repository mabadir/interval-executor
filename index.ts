import { runCommand } from "./runCommand";

async function run() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command) {
    throw new Error("Invalid Command");
  }

  const interval = Number(args[1]);

  if (!interval || typeof interval !== "number") {
    throw new Error("Invalid interval");
  }
  console.log("Starting running command: " + command);
  console.log("Command runs ever " + interval + " minutes");
  const commandArr = command.split(" ");
  const cmd = commandArr.shift() ?? command;
  while (true) {
    const output = await runCommand(cmd, commandArr);
    console.log(output);
    await sleep(interval);
  }
}

const sleep = (min: number) =>
  new Promise((resolve) => setTimeout(resolve, min * 60 * 1000));

run().then(
  () => void process.exit(0),
  (err) => {
    console.error(err);
    process.exit(1);
  }
);
