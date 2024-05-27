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
function createFile(nameFile, content) {
  fs.writeFile(nameFile, content, (err) => {
    if (err) throw err;
    console.log("File has been created!");
  });
}

function renameFile(oldFile, newFile) {
  fs.rename(oldFile, newFile, (err) => {
    if (err) throw err;
    console.log("File has been renamed!");
  });
}
function readFile(file) {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}
function deleteFile(file) {
  fs.unlink(file, (err) => {
    if (err) throw err;
    console.log("file.txt was deleted");
  });
}
function updateFile(file, newData) {
  fs.appendFile(file, newData, (err) => {
    if (err) throw err;
    console.log(`The "More data" was appended to ${file}!`);
  });
}

// Function for folder

function createFolder(folderName) {
  fs.mkdir(folderName, (err) => {
    if (err) throw err;
    console.log("Directory 'test2024' was created!");
  });
}

function removeFolder(folderName) {
  fs.rmdir(folderName, (err) => {
    if (err) throw err;
    console.log("Directory 'test2024' was remove!");
  });
}

function showFolder(folderName) {
  fs.readdir(folderName, (err, files) => {
    if (err) throw err;
    console.log(files);
  });
}

switch (choice) {
  case "1":
    const choice1 = prompt(
      " Menu : \n 1-File Handling Menu : \n  1-create file \n  2-rename file \n  3-read file \n  4-delete file \n  5-update content \n..."
    );
    switch (choice1) {
      case "1":
        console.log("1-create file");
        const nameFile = prompt("Name of file : ... ");
        const content = prompt("Add content of file : ... ");
        createFile(nameFile, content);
        break;
      case "2":
        console.log("2-rename file");
        const nameFile1 = prompt("Name of file : ... ");
        const newFile = prompt("New Name of file ? : ... ");
        renameFile(nameFile1, newFile);
        break;
      case "3":
        console.log("3-read file");
        const nameFile2 = prompt("Name of file : ... ");
        readFile(nameFile2);
        break;
      case "4":
        console.log("4-delete file");
        const nameFile3 = prompt("Name of file : ...");
        deleteFile(nameFile3);
        break;
      case "5":
        console.log("5-update content");
        const nameFile4 = prompt("Name of file : ... ");
        const content1 = prompt("Add New content of file : ... ");
        updateFile(nameFile4, content1);
        break;

      default:
        console.log("Not OK 😤🤦‍♂️");
        break;
    }

    break;

  case "2":
    const choice2 = prompt(
      " Menu :  2-Folder Handling : \n  1-create folder\n  2-remove folder \n  3-show folder content \n..."
    );
    switch (choice2) {
      case "1":
        console.log("1-create folder");
        const nameFolder = prompt("Name of Folder : ... ");
        createFolder(nameFolder);
        break;
      case "2":
        console.log("2-remove folder");
        const nameFolder1 = prompt("Name of Folder : ... ");
        removeFolder(nameFolder1);
        break;
      case "3":
        console.log("3-show folder content");
        const nameFolder2 = prompt("Name of Folder : ... ");
        showFolder(nameFolder2);
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

// ----------------------- 5/27/2024 -------------------------------------

const dotenv = require("dotenv");
const { log } = require("console");

dotenv.config();

const age = process.env.AGE;

console.log(age);