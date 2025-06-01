import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: #4361ee;
  padding: 1rem;
  color: #fff;

  nav {
    display: flex;
    flex-direction: column;
    
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  li {
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      margin: 0 1rem;
    }
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;



function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <h1>Movie App</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movie/create">Add Movie</Link>
          </li>
          <li>
            <Link to="/movie/popular">Popular</Link>
          </li>
          <li>
            <Link to="/movie/now">Now Playing</Link>
          </li>
          <li>
            <Link to="/movie/top">Top Rated</Link>
          </li>
        </ul>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
