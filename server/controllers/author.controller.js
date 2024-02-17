const Author = require("../models/author.model");
module.exports.createAuthor = async (req, res) => {
  try {
    const newAuthor = await Author.create(req.body);
    res.status(200);
    res.json(newAuthor);
  } catch (error) {
    res.status(500);
    res.json(error);
    console.log(error.message);
  }
};
module.exports.getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200);
    res.json(authors);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.json(error);
  }
};
module.exports.getAuthorID = async (req, res) => {
  const { id } = req.params;
  try {
    const author = await Author.findOne({ _id: id });
    res.status(200);
    res.json(author);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
module.exports.updateAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedAuthor = await Author.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200);
    res.json(updatedAuthor);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
module.exports.deleteAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAuthor = await Author.deleteOne({ _id: id });
    res.status(200);
    res.json(author);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
