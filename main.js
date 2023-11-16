const fs = require("node:fs");

// read

// const fileContent = fs.readFileSync("./Files/test.txt", "utf-8");
// console.log(fileContent);
// fs.readFile("./Files/test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// write
// fs.writeFile(
//   "./Files/users.json",
//   JSON.stringify([
//     {
//       id: 1,
//       name: "ahmed",
//     },
//     {
//       id: 2,
//       name: "mohamed",
//     },
//   ]),
//   "utf-8",
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Done");
//     }
//   }
// );

// delete
fs.unlink("./Files/users.json", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Done");
  }
});
