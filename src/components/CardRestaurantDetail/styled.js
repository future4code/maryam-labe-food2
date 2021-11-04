import styled from "styled-components";



export const ContainerCard = styled.div`
  display: flex;
  height: 60px;
  flex-direction: column;
  justify-content: space-between;
`
export const CardDetail = styled.div`
  display: flex;
  flex-direction: row;
  width: 328px;
  height: 112px;
  margin: 7px 0 0;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
`;
export const CardDetail2 = styled.div`
display: block;
flex-direction: row;
justify-content: space-between;
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
  margin: 18px 49px 8px 16px;
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
  margin: 8px 16px 4px;
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
  width: 90px;
  height: 31px;
  margin: 7px 0 0 80px;
  padding: 8px 20.5px 9px 21.5px;
  border-radius: 8px;
  border: solid 1px #5cb646;
`

