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
  const {cart, setCart, cartId, setCartId, shipping, setShipping, shippingId, setShippingId} = useContext(GlobalStateContext)

  const OpenModal = () => {
    setOpen(true)
  }


  const AddToCart = (item, quantidade, restaurantId) => {
    const position = cartId.indexOf(item.id)
    const positionId = shippingId.indexOf(restaurantId)
    console.log(restaurantId)
    console.log(shippingId)
    console.log(positionId)
    console.log(cart)

    if (positionId !== -1 || cartId.length === 0){
      if((position === -1)){
        const newProduct = { item: item, quantidade: quantidade, restaurantId: restaurantId}
        const newCart = [... cart, newProduct]
        setCart(newCart)
        const newItemId = [...cartId, item.id]
        setCartId(newItemId)
        props.addShipping()
  
      } else {
        const AuxCart = [...cart]
        const AuxCartId = [...cartId]
        AuxCartId.splice(position, 1)
        AuxCart.splice(position, 1)
        setCart(AuxCart)
        setCartId(AuxCartId)
        removeShipping()
      }
    }

  }

  const removeShipping = () => {
    let products = []
    products = shippingId.filter((ship) => {
      return(ship === props.restaurantId)
    })

    if (products.length === 1){
      const position = shippingId.indexOf(props.restaurantId)

      let positionOfShipping = 0
      let firstShip = shippingId[0]

      for (let ship of shippingId){
        if (ship !== firstShip){
          positionOfShipping = positionOfShipping + 1
          firstShip = ship
        }
        if (ship === props.restaurantId){
          break
        }
      }

      console.log(positionOfShipping)

      const auxShippingId = [... shippingId]
      const auxShipping = [... shipping]

      auxShippingId.splice(position, 1)
      auxShipping.splice(positionOfShipping, 1)

      setShippingId(auxShippingId)
      setShipping(auxShipping)
    } else {
      const position = shippingId.indexOf(props.restaurantId)
      const auxShippingId = [... shippingId]
      auxShippingId.splice(position,1)
      setShippingId(auxShippingId)
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
      {open === true && <SimpleModalWrapped restaurantId={props.restaurantId} open={open} setOpen={setOpen} AddToCart = {AddToCart} Products = {props.detail}/>}
    </div>
  );
};

export default CardRestaurantDetail;
