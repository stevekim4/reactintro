import propTypes from "prop-types";
import { Link } from "react-router-dom"; // alternative to href for react (rerender pages without refreshing)

function Movie({ coverImg, title, summary, genres, id }) {
  return (
    <div>
      <img src={coverImg} />
      <h2>
        <Link to={`movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number,
  coverImg: propTypes.string,
  title: propTypes.string,
  summary: propTypes.string,
  genres: propTypes.arrayOf(propTypes.string),
};

export default Movie;
