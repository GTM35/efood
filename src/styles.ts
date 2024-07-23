import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  background: "#FFF8F2",
  text: "#E66767",
  text2: "#FFEBD9",
  branco: "#fff",
};

export const Globalcss = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${colors.background};
    }
  
    .btn{
        width:fit-content;
        background-color: ${colors.text};
        color: ${colors.text2};
        border: none;
        padding: 4px 6px;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        text-decoration: none;
    }

    .textLink {
        font-weight: 900;
        color: ${colors.text};
        font-size: 18px;
        cursor: pointer;
        text-decoration: none;
    }

    
`;

export const ContentAlign = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1024px;

  height: 180px;
`;
