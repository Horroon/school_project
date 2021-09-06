import { HeaderStyled } from "./header.style";

export const Header = () => (
  <HeaderStyled>
    <nav className="header">
      <h3 className="heading">Govt. High School Nawan</h3>
      <ul className="heading-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">profile tab</a>
        </li>
      </ul>
    </nav>
  </HeaderStyled>
);
