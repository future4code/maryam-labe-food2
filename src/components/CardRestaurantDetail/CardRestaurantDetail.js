import React, { useContext, useState } from "react";
import SimpleModalWrapped from "./CardModal"
import { useHistory } from "react-router-dom";
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext";
import {
  CardDetail,
  CardDetailImage,
  CardDetailTextName,
  CardDetailDescription,
  CardDetailPrice,
  ContainerCard,
  CardDetail2,
  ButtonAdd,
  ButtonRemove,
  AddItemCard
} from "./styled";

const CardRestaurantDetail = (props) => {
  const [open, setOpen] = useState(false);
  const {cart, setCart, cartId, setCartId} = useContext(GlobalStateContext)

  const OpenModal = () => {
    setOpen(true)
  }

  const AddToCart = (item, quantidade) => {
    const position = cartId.indexOf(item.id)
    if(position === -1){
      const newProduct = { item: item, quantidade: quantidade}
      const newCart = [... cart, newProduct]
      setCart(newCart)
      const newItemId = [...cartId, item.id]
      setCartId(newItemId)
    } else {
      const AuxCart = [...cart]
      const AuxCartId = [...cartId]
      AuxCartId.splice(position, 1)
      AuxCart.splice(position, 1)
      setCart(AuxCart)
      setCartId(AuxCartId)
    }
    
  }

  const renderizaQuantidade = () => {
    const position = cartId.indexOf(props.detail.id)
    if(position !== -1) {
      return(
        <div>
          {cart[position].quantidade}
        </div>
        )
    }
    
  }

  const ChangeButton = () => {
    const position = cartId.indexOf(props.detail.id)
    if(position === -1) {
      return(
          <ButtonAdd size="small" onClick={OpenModal}>ADICIONAR</ButtonAdd>
        )
    } else {
      return(
        <ButtonRemove size="small" onClick={()=> AddToCart(props.detail, 0)}>REMOVER</ButtonRemove> 
      )
    }
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
            <AddItemCard>
            <p>{renderizaQuantidade()}</p>
            </AddItemCard>
          </ContainerCard>

          <ContainerCard>
            <CardDetailDescription>
              {" "}
              {props.detail.description}{" "}
            </CardDetailDescription>
            </ContainerCard>




            <ContainerCard>

            <CardDetailPrice>R$ {props.detail.price.toFixed(2).toString().replace(".", ",")} </CardDetailPrice>
            {ChangeButton()}
        
          </ContainerCard>
          </CardDetail2>
        </CardDetail>
      </div>
      {open === true && <SimpleModalWrapped open={open} setOpen={setOpen} AddToCart = {AddToCart} Products = {props.detail}/>}
    </div>
  );
};

export default CardRestaurantDetail;
