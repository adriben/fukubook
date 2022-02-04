const Book = require('../models/Book');

exports.createBook = (req, res, next) => {
    console.log('bonjour');
    const bookObject = JSON.parse(req.body.book);
    const book = new Book({
        ...bookObject,

    })
     book.save()
     .then(() => res.status(201).json({ message: 'book created'}))
     .catch( err => res.status(400).json({ err }))
}