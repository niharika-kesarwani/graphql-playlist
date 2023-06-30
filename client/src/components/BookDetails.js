import { useQuery } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import { getBookQuery } from "../queries/queries";

function BookDetails() {
  return (
    <div id="book-details">
      <p>Output book details here</p>
    </div>
  );
}

export default graphql(getBookQuery)(BookDetails);
