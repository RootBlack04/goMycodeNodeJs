const fs = require("fs");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// File Handling Functions
const createFile = (nameFile, content) => {
  fs.writeFile(nameFile, content, (err) => {
    if (err) console.error("An error occurred while creating the file:", err);
    else console.log("File has been created!");
  });
};

const renameFile = (oldFile, newFile) => {
  fs.rename(oldFile, newFile, (err) => {
    if (err) console.error("An error occurred while renaming the file:", err);
    else console.log("File has been renamed!");
  });
};

const readFile = (file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) console.error("An error occurred while reading the file:", err);
    else console.log(data);
  });
};

const deleteFile = (file) => {
  fs.unlink(file, (err) => {
    if (err) console.error("An error occurred while deleting the file:", err);
    else console.log("File was deleted");
  });
};

const updateFile = (file, newData) => {
  fs.appendFile(file, newData, (err) => {
    if (err) console.error("An error occurred while updating the file:", err);
    else console.log(`The "More data" was appended to ${file}!`);
  });
};

// Folder Handling Functions
const createFolder = (folderName) => {
  fs.mkdir(folderName, { recursive: true }, (err) => {
    if (err) console.error("An error occurred while creating the folder:", err);
    else console.log("Directory was created!");
  });
};

const removeFolder = (folderName) => {
  fs.rmdir(folderName, { recursive: true }, (err) => {
    if (err) console.error("An error occurred while removing the folder:", err);
    else console.log("Directory was removed!");
  });
};

const showFolder = (folderName) => {
  fs.readdir(folderName, (err, files) => {
    if (err)
      console.error("An error occurred while showing the folder content:", err);
    else console.log(files);
  });
};

// Main Menu
readline.question(
  "Menu : \n 1-File Handling Menu \n 2-Folder Handling Menu \n",
  (choice) => {
    switch (choice) {
      case "1":
        // File Handling Menu
        readline.question(
          "File Handling Menu : \n 1-create file \n 2-rename file \n 3-read file \n 4-delete file \n 5-update content \n",
          (choice1) => {
            switch (choice1) {
              case "1":
                readline.question("Name of file : ", (nameFile) => {
                  readline.question("Add content of file : ", (content) => {
                    createFile(nameFile, content);
                  });
                });
                break;
              // ... handle other cases
            }
          }
        );
        break;
      case "2":
        // Folder Handling Menu
        readline.question(
          "Folder Handling Menu : \n 1-create folder\n 2-remove folder \n 3-show folder content \n",
          (choice2) => {
            switch (choice2) {
              case "1":
                readline.question("Name of Folder : ", (nameFolder) => {
                  createFolder(nameFolder);
                });
                break;
              // ... handle other cases
            }
          }
        );
        break;
      default:
        console.log("Invalid choice 😤🤦‍♂️");
        break;
    }
  }
);
