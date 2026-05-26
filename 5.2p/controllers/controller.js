const booksService = require("../services/service");

const getAllBooks = async (req, res, next) => {
  try {
    const books = await booksService.getAllBooks();

    res.status(200).json(books);

  } catch (error) {
    next(error);
  }
};

const getBookById = async (req, res, next) => {
  try {
    const book = await booksService.getBookById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found"
      });
    }

    res.status(200).json(book);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBooks,
  getBookById
};