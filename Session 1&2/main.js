// const fs = require("node:fs");

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

// fs.unlink("./Files/users.json", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Done");
//   }
// });

// console.log(Buffer.from("a").toJSON()); // decimal number
// console.log(Buffer.from("a")); // hex number

//////////////////     streams     ////////////////////////
// [readable , writeable]

// const rStream = fs.createReadStream("./Files/test.txt", "utf-8");
// const wStream = fs.createWriteStream("./Files/test.txt", "utf-8");

// rStream.on("data", (chunk) => {
//   console.log(chunk);
//   // wStream.write("\n =========== chunk ============ \n");
//   // wStream.write(chunk);
// });
console.log("first");
