import styled from "styled-components";

export const HeaderStyled = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    background: darkslategrey;
    .heading {
      padding: 27px;
      margin: 0px;
    }
    .heading-list {
      min-width: 30%;
      list-style: none;
      display: flex;
      margin: 0px;
      justify-content: space-around;
      li {
        padding: 27px;
      }
    }
  }
`;
