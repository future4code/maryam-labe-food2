import React, { useState } from "react";
import { Button } from "@material-ui/core";
import SimpleModalWrapped from "./CardModal"
import { useHistory } from "react-router-dom";
import {
  CardDetail,
  CardDetailImage,
  CardDetailTextName,
  CardDetailDescription,
  CardDetailPrice,
  ContainerCard,
  RectangleButton,
  CardDetail2
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
          <CardDetailImage src={props.detail.photoUrl} />

          <CardDetail2>
          <ContainerCard>
            <CardDetailTextName> {props.detail.name} </CardDetailTextName>
            <CardDetailDescription>
              {" "}
              {props.detail.description}{" "}
            </CardDetailDescription>
            </ContainerCard>


            <ContainerCard>
            <RectangleButton>
            <CardDetailPrice>R$ {props.detail.price} </CardDetailPrice>
            <Button size="small" onClick={AddToCart}>Adicionar</Button>
            </RectangleButton>
          </ContainerCard>
          </CardDetail2>

        </CardDetail>
      </div>
      {open === true && <SimpleModalWrapped open={open} setOpen={setOpen}/>}
    </div>
  );
};

export default CardRestaurantDetail;
