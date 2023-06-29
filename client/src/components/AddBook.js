import { useQuery } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import { getAuthorsQuery } from "../queries/queries";
import { useState } from "react";

function AddBook() {
  const { data, loading, error } = useQuery(getAuthorsQuery);
  const [formDetails, setFormDetails] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  if (loading) {
    return <option disabled>Loading Authors...</option>;
  }

  if (error) {
    return <option disabled>Something went wrong!</option>;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formDetails);
  };

  return (
    <form id="add-book" onSubmit={formSubmitHandler}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          onChange={(e) =>
            setFormDetails({ ...formDetails, name: e.target.value })
          }
        />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input
          type="label"
          onChange={(e) =>
            setFormDetails({ ...formDetails, genre: e.target.value })
          }
        />
      </div>

      <div className="field">
        <label>Author:</label>
        <select
          onChange={(e) =>
            setFormDetails({ ...formDetails, authorId: e.target.value })
          }
        >
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
