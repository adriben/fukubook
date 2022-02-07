const Book = require("../models/Book");

exports.createBook = (req, res, next) => {
  console.log(req.body);
  const bookObject = req.body;
  const book = new Book({
    userId: req.body.userId,
    title: req.body.title,
    author: req.body.Author,
    description: req.body.description,
  });
  book
    .save()
    .then(() => res.status(201).json({ message: "book created" }))
    .catch((err) => res.status(400).json({ err }));
};

exports.getAllBooks = (req, res, next) => {
    Book.find()
    .then(book => res.status(200).json(book))
    .catch(err => res.status(400).json({ message: err}))
}
