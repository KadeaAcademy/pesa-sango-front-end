import styled from "styled-components";

export const AffichageStyle = styled.div`
  main {
    padding-top: 10px;
  }
  .categories {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    padding: 15px;
    padding-bottom: 0px;
    padding-top: 0px;
  }
  .red {
    background-color: #d91438;
  }
  .white {
    background-color: white;
  }
  .lienSignalements {
    color: blueviolet;
    margin-left: 100px;
    margin-top: 20px;

    a {
      text-decoration: none;
      color: #000000;
    }
  }
  .titre {
    padding: 20px;
  }
`;

export const Container = styled.div`
  padding: 20px;
`;