import { useQuery } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import { getBooksQuery } from "../queries/queries";

function BookList() {
  const { data, loading, error } = useQuery(getBooksQuery);

  if (loading) {
    return <div>Loading books...</div>;
  }
  if (error) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) => {
          return <li key={book.id}>{book.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);
