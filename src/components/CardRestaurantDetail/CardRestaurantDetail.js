import React, { useState } from "react";
import { goToCart } from "../../routes/coordinator";
import SimpleModalWrapped from "./CardModal"
import { useHistory } from "react-router-dom";
import {
  CardDetail,
  CardDetailImage,
  CardDetailTextName,
  CardDetailDescription,
  CardDetailPrice,
  ContainerCard,
} from "./styled";



const CardRestaurantDetail = (props) => {
  const [open, setOpen] = useState(false);

  const AddToCart = () => {
    setOpen(true)
  }
  console.log(props);
  const history = useHistory();

  return (
    <div>
      <div>
        <CardDetail>
          {/* <p > {props.detail.category} </p> */}
          <CardDetailImage src={props.detail.photoUrl} />
          <ContainerCard>
            <CardDetailTextName> {props.detail.name} </CardDetailTextName>
            <CardDetailDescription>
              {" "}
              {props.detail.description}{" "}
            </CardDetailDescription>
            <CardDetailPrice>R$ {props.detail.price} </CardDetailPrice>
          </ContainerCard>
          <button onClick={AddToCart}>Adicionar ao carrinho</button>
        </CardDetail>
      </div>
      {open === true && <SimpleModalWrapped/>}
    </div>
  );
};

export default CardRestaurantDetail;
