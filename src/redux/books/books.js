import { v4 as uuid } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  {
    id: uuid(),
    bookTitle: 'book 1',
    author: 'author 1',
  },
  {
    id: uuid(),
    bookTitle: 'book 2',
    author: 'author 2',
  },
];

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK:
      return [...state].filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

export default reducer;
