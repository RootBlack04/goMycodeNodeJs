// let name = "GomyCode";

// console.log("Salam " + name);

// const test = ["hello", "ahmed", "Mac", "Apple", 15];

// console.log(test[0]);

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("What's your name? ", (name) => {
//   console.log(`Hi ${name}!`);
//   rl.close();
// });
// const fs = require("fs");

// const prompt = require("prompt-sync")();

// const name = prompt(
//   'MENU :\n 1-createFile \n 2-ReadFile \n Entre "1" or "2" : '
// );

// if (name === "1") {
//   const nameFile = prompt("name file : ");
//   fs.writeFile(nameFile, "Hello, World!", (err) => {
//     if (err) throw err;
//     console.log("File has been created!");
//   });
// } else if (name === "2") {
//   const nameFile = prompt("name file : ");
//   fs.readFile(nameFile, "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
// } else {
//   console.log("Invalid choice. Please enter '1' or '2'.");
// }

/*
Menu

1-File Handling Menu 
    1-create file 
    2- rename file 
    3-read file 
    4-delete file
    5-update content 

2-Folder Handling 
    1-create folder
    2-remove folder 
    3-show folder content  

*/

// console.log("hello");

// ---------------------------------------------------------------------------------------------
const fs = require("fs");
const prompt = require("prompt-sync")();

// fs.mkdir("test2024", (err) => {
//     if (err) throw err;
//     console.log("Directory 'test2024' was created!");
// });
// fs.rmdir("test2024", (err) => {
//   if (err) throw err;
//   console.log("Directory 'test2024' was created!");
// });

// fs.readdir("test2024", (err, files) => {
// if (err) throw err;
// console.log(files);
// });

const choice = prompt(
  " Menu : \n 1-File Handling Menu : \n  1-create file \n  2-rename file \n  3-read file \n  4-delete file \n  5-update content \n 2-Folder Handling : \n  1-create folder\n  2-remove folder \n  3-show folder content  "
);

// function for File
function createFile() {
  fs.writeFile("file.txt", "Hello, World!", (err) => {
    if (err) throw err;
    console.log("File has been created!");
  });
}

function renameFile() {
  fs.rename("oldFile.txt", "newFile.txt", (err) => {
    if (err) throw err;
    console.log("File has been renamed!");
  });
}
function readFile() {
  fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
function deleteFile() {
  fs.unlink("file.txt", (err) => {
    if (err) throw err;
    console.log("file.txt was deleted");
  });
}
function updateFile() {
  fs.appendFile("file.txt", " More data", (err) => {
    if (err) throw err;
    console.log('The "More data" was appended to file!');
  });
}

// Function for folder

function createFolder() {}

switch (choice) {
  case "1":
    const choice1 = prompt(
      " Menu : \n 1-File Handling Menu : \n  1-create file \n  2-rename file \n  3-read file \n  4-delete file \n  5-update content \n  "
    );
    switch (choice1) {
      case "1":
        console.log("1-create file");
        break;
      case "2":
        console.log("2-rename file");
        break;
      case "3":
        console.log("3-read file");
        break;
      case "4":
        console.log("4-delete file");
        break;
      case "5":
        console.log("5-update content");
        break;

      default:
        console.log("Not OK 😤🤦‍♂️");

        break;
    }

    break;

  case "2":
    const choice2 = prompt(
      " Menu :  2-Folder Handling : \n  1-create folder\n  2-remove folder \n  3-show folder content  "
    );
    switch (choice2) {
      case "1":
        console.log("1-create folder");
        break;
      case "2":
        console.log("2-remove folder");
        break;
      case "3":
        console.log("3-show folder content");
        break;

      default:
        console.log("Not OK 😤🤦‍♂️");

        break;
    }
    break;

  default:
    console.log("Not OK 😤🤦‍♂️");
    break;
}
