import { gql, useQuery } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

function BookList() {
  const { data } = useQuery(getBooksQuery);
  console.log(data);
  return (
    <div>
      <ul id="book-list">
        <li>Book name</li>
      </ul>
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);
