// console.log("first");
// // console.log(process.argv);
// if (process.argv[2] === "add") {
//   console.log("Hello Ya " + process.argv[3]);
// }

import { Command } from "commander";
import inquirer from "inquirer";
import fs from "fs";

const questions = [
  /* Pass your questions in here */
  {
    type: "input",
    name: "programming",
    message: "plz enter course title",
  },
  {
    type: "price",
    name: "price",
    message: "plz enter course price",
  },
];

const program = new Command();

program.name("Ahmed").description("i'm Frontend dev").version("0.0.1");
inquirer.prompt(questions).then((answers) => {
  // Use user feedback for... whatever!!
  console.log(answers);
  fs.writeFile(
    "../Files/cousrses.json",
    JSON.stringify(answers),
    "utf-8",
    () => {
      console.log("add courses done");
    }
  );
});
program
  .command("add")
  .alias("a")
  .description("add course")
  .action((param, option) => {
    console.log(param, option);
  });

program.parse();
