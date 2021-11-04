import styled from "styled-components";



export const ContainerCard = styled.div`
  display: flex;
  height: 32%;
  width: 214px;
  flex-direction: row;
  justify-content: space-between;
  border:1px solid black;
`
export const CardDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 328px;
  height: 112px;
  margin: 7px 0 0;
  border-radius: 8px;
  border: solid 1px blue;
`;
export const CardDetail2 = styled.div`
display: block;
flex-direction: row;
justify-content: space-between;
border: solid 1px violet;
background-color: yellow;
height: 100%;

`
export const CardDetailImage = styled.img`
  width: 96px;
  height: 112px;
  margin: 0 16px 0 0;
  object-fit: contain;

`
export const CardDetailTextName = styled.span`
  width: 167px;
  height: 18px;
  margin: 5px 0px 0px 10px;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: "normal";
  font-stretch: "normal";
  font-style: "normal";
  line-height: "normal";
  letter-spacing: -0.39px;
  color: #5cb646;

`
export const CardDetailDescription = styled.span`
  width: 200px;
  height: 30px;
  margin: 8px 16px 4px 10px;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: "normal";
  font-stretch: "normal";
  font-style: "normal";
  line-height: "normal";
  letter-spacing: -0.29px;
  color: #b8b8b8;
`
export const CardDetailPrice = styled.span`
  width: 118px;
  height: 19px;
  margin: 4px 8px 15px 16px;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: "normal";
  font-stretch: "normal";
  font-style: "normal";
  line-height: "normal";
  letter-spacing: -0.39px;
  color: var(--black);
`
export const RectangleButton = styled.div`
  width: 20%;
  height: 31px;
  margin: 7px 0 0 80px;
  padding: 8px 20.5px 9px 21.5px;
  border-radius: 8px;
  border: solid 1px #5cb646;
`

export const ContaierModal = styled.div`
  width: 300px;
  height: 30vh;

`
export const ButtonAdd = styled.button`
  font-size: 10px;
  background-color: white;
  width: 30%;
  height: 35%;
  align-self:flex-end;
  border-top-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  border: solid 1px #5cb646;
`
export const ButtonRemove = styled.button`
  font-size: 10px;
  background-color: white;
  width: 30%;
  height: 31px;
  margin: 0px 0px 100px 150px;
  border-top-left-radius: 0.5em;
  border: solid 1px red;
`
export const AddItemCard = styled.div`
  color:black;
  font-size: 10px;
  background-color: white;
  width: 20%;
  height:200px;
  height: 31px;
  margin: 7px 0 0 80px;
  border-bottom-left-radius: 0.5em;
  border: solid 1px #5cb646;
`



