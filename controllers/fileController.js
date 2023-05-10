const File = require("../model/fileModel");
const moment = require("moment");
const fs = require("fs");
const path = require("path");


const addFileController = async (req, res) =>
{
    const folder = "./files"; // The folder where the file will be created
    const timestamp = moment().format("YYYY-MM-DD HH:mm:ss"); // The current timestamp
    const filename = `${ moment().format("YYYY-MM-DD HH:mm:ss") }`; // The filename with the current date-time
    const filepath = `${ folder }/${ filename }`; // The full filepath

    fs.writeFile(filepath, timestamp, (err) =>
    {
        if (err) {
            console.error(err);
            res.status(500).send("Error creating file");
        } else {
            const file = new File({ name: filename, path: filepath });
            file.save((err) =>
            {
                if (err) {
                    console.error(err);
                    res.status(500).send("Error saving file metadata");
                } else {
                    res.send("File created successfully");
                }
            });
        }
    });
};

const getFileController = async (req, res) => {
    const folder = './files'; // The folder where the files are stored

  // Get all the files in the folder
  fs.readdir(folder, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error retrieving files');
    } else {
      // Find the file metadata in MongoDB for each file in the folder
      const filePromises = files.map((file) => {
        const query = { name: file, path: `${folder}/${file}` };
        return File.findOne(query);
      });

      // Resolve all the file metadata promises and send the results as the API response
      Promise.all(filePromises)
        .then((files) => {
          res.send(files);
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send('Error retrieving file metadata');
        });
    }
  });
};

module.exports = { addFileController, getFileController };