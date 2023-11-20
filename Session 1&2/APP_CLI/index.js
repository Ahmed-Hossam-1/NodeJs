#!/user/bin/env node

// console.log("first");
// // console.log(process.argv);
// if (process.argv[2] === "add") {
//   console.log("Hello Ya " + process.argv[3]);
// }

// Program CLI
import { Command } from "commander";
import inquirer from "inquirer";
import fs from "fs";

const program = new Command();

// Global Var
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
const filePath = "../Files/cousrses.json";

program.name("Ahmed").description("i'm Frontend dev").version("0.0.1");
program
  .command("list")
  .alias("l")
  .description("list all courses")
  .action(() => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        process.exit;
      } else {
        console.table(JSON.parse(data));
      }
    });
  });

program.command("add").alias("a").description("add course");
inquirer.prompt(questions).then((answers) => {
  // Use user feedback for... whatever!!
  console.log(answers);

  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, "utf-8", (err, fileContent) => {
      if (err) {
        console.log(err);
        process.exit();
      }
      console.log("File Content => ", fileContent);
      const newContent = JSON.parse(fileContent);
      newContent.push(answers);
      fs.writeFile(filePath, JSON.stringify(newContent), "utf-8", () => {
        console.log("add courses done");
      });
    });
  } else {
    fs.writeFile(filePath, JSON.stringify(answers), "utf-8", () => {
      console.log("add courses done");
    });
  }
});

program.parse();
