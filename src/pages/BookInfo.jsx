import { useParams } from 'react-router-dom';

const BookInfo = ({ books }) => {
  const { id } = useParams();
  const book = books.find(b => String(b.id) === String(id));

  if (!book) return <h1>Book not found</h1>;

  return <h1>{book.title}</h1>;
};

export default BookInfo;
