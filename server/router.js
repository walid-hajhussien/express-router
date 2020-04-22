const express = require("express");
const fsNote = require("./helper");

const router = express.Router();

router.post("/addNote", (req, res) => {
  fsNote
    .loadNotesV2()
    .then((oldNote) => {
      return fsNote.saveNotesV2(JSON.parse(oldNote) + req.body.note);
    })
    .then((response) => {
      return fsNote.loadNotesV2();
    })
    .then((allNotes) => {
      res.send(allNotes);
    })
    .catch((error) => {
      res.send("error");
    });
});

router.get("*", (req, res) => {
  res.redirect("/");
});

module.exports = router;
