import { spawn } from "child_process";

export async function runCommand(cmd: string, args: string[]) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args);
    let output = "";

    child.stdout.on("data", (data) => {
      output += data;
    });

    child.stderr.on("data", (data) => {
      console.error(`Error: ${data}`);
    });

    child.on("close", (code) => {
      if (code !== 0) {
        console.log(`Command process exited with code ${code}`);
        reject(new Error(`Command "${cmd}" failed with code ${code}`));
      } else {
        resolve(output);
      }
    });

    child.on("error", (error) => {
      console.error(`Spawn error: ${error}`);
      reject(new Error(`Command "${cmd}" could not be spawned`));
    });
  });
}
