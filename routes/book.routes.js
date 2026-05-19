const express = require('express');

const controller = require('../controllers/book.controller')

const router = express.Router();


router.get('/', controller.getAllBooks);

router.get('/:id', controller.getBooksById);

router.post('/' , controller.createBook);

//supporting to enter multiple books one at a time
// router.post('/', (req, res) => {
//     const data = req.body;

//     // If it's an array → handle multiple books
//     if (Array.isArray(data)) {
//         const createdBooks = [];

//         for (const item of data) {
//             const { title, author } = item;

//             if (!title || title === '')
//                 return res.status(400).json({ error: 'title is required' });

//             if (!author || author === '')
//                 return res.status(400).json({ error: 'author is required' });

//             const id = BOOKS.length + 1;
//             const book = { id, title, author };

//             BOOKS.push(book);
//             createdBooks.push(book);
//         }

//         return res.status(201).json({
//             message: 'books successfully created',
//             books: createdBooks
//         });
//     }

//     // Single object → original logic
//     const { title, author } = data;

//     if (!title || title === '')
//         return res.status(400).json({ error: 'title is required' });

//     if (!author || author === '')
//         return res.status(400).json({ error: 'author is required' });

//     const id = BOOKS.length + 1;
//     const book = { id, title, author };

//     BOOKS.push(book);

//     return res.status(201).json({
//         message: 'book successfully created',
//         id
//     });
// });


router.delete('/:id', controller.deleteBook);


//default export of router 
module.exports = router;