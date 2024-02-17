const express = require("express");

const router = express.Router();

const authorController = require("../controllers/author.controller");

router.post("", authorController.createAuthor);
router.get("", authorController.getAuthors);
router.get("/:id", authorController.getAuthorID);
router.put("/:id", authorController.updateAuthor);
router.delete("/:id", authorController.deleteAuthor);

module.exports = router;
