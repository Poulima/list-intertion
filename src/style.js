import styled from 'styled-components';

export const ListInsert = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  margin: 0px 20px;
  .header {
    font-size: 24px;
    text-align: center;
    color: #444;
  }

  .empty-state {
    font-size: 20px;
    color: #444;
    margin: 20px;
  }

  input {
    width: 200px;
    border-radius: 4px;
    padding: 12px 20px;
    margin: 8px ;
    font-size: 20px;
  }

`;

export const List = styled.ul `
   list-style: none;
   padding: 0px;
`;

export const ListItem = styled.li `
    font-size: 22px;
    padding: 10px 20px;
`;

export const Button = styled.button `
  background-color: #808080;
  border-radius: 4px;
  color: white;
  padding: 6px 35px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
`;
