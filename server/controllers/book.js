const Book = require("../models/Book");

exports.createBook = (req, res, next) => {
  console.log(req.body);
  const bookObject = req.body;
  const book = new Book({
    userId: req.body.userId,
    userName: req.body.userName,
    title: req.body.title,
    author: req.body.author,
    lang: req.body.lang,
    description: req.body.description,
    option: req.body.option,
    lang: req.body.lang,
  });
  book
    .save()
    .then(() => res.status(201).json({ message: "book created" }))
    .catch((err) => res.status(400).json({ err }));
};

exports.getAllBooks = (req, res, next) => {
  Book.find()
    .then((book) => res.status(200).json(book))
    .catch((err) => res.status(400).json({ message: err }));
};

exports.getOneBook = (req, res, next) => {
  console.log("hello");
  Book.findOne({ _id: req.params.id })
    .then((book) => res.status(200).json(book))
    .catch((err) => res.status(400).json({ err }));
};

exports.updateBook = (req, res, next) => {
  Book.updateOne({ _id: req.params.id })
    .then((book) => {
      res.status(200).json({ message: "Book has been updated" });
    })
    .catch((err) => res.status(400).json({ err }));
};

exports.deleteBook = (req, res, next) => {
  Book.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "book successfully deleted" }))
    .catch((err) => res.status(400).json({ err }));
};
