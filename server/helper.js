const fs = require("fs");

const saveNotes = (note, callback) => {
  const noteJson = JSON.stringify(note);
  fs.writeFile("notes.json", noteJson, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const loadNotes = (callback) => {
  fs.readFile("notes.json", (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

// promise

const saveNotesV2 = (note) => {
  return new Promise((resolve, reject) => {
    const noteJson = JSON.stringify(note);
    fs.writeFile("notes.json", noteJson, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const loadNotesV2 = (callback) => {
  return new Promise((resolve, reject) => {
    fs.readFile("notes.json", (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

module.exports = {
  saveNotesV2,
  loadNotesV2,
};
