import { useQuery } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import { getAuthorsQuery } from "../queries/queries";

function AddBook() {
  const { data, loading, error } = useQuery(getAuthorsQuery);

  if (loading) {
    return <option disabled>Loading Authors...</option>;
  }

  if (error) {
    return <option disabled>Something went wrong!</option>;
  }

  return (
    <form id="add-book">
      <div className="field">
        <label>Book name:</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input type="label" />
      </div>

      <div className="field">
        <label>Author:</label>
        <select>
          <option>Select author</option>
          {data.authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>

      <button>+</button>
    </form>
  );
}

export default graphql(getAuthorsQuery)(AddBook);
