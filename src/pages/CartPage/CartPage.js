import React, { useState, useEffect, useContext } from "react"
import { ScreenContainer,
        AlignAddress, 
        Title, 
        Shipping,
        Total,
        Payment,
        AlignConfirm } from "./style"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Loading from "../../components/Loading/Loading"
import useRequestData from "../../hooks/useRequestData"
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/core/styles'
import { Button } from "@material-ui/core"
import CircularProgress from '@material-ui/core/CircularProgress'
import { GlobalStateContext } from "../../GlobalState/GlobalStateContext"
import CardRestaurantDetail from "../../components/CardRestaurantDetail/CardRestaurantDetail"


const StyledRadio = withStyles({
    root: {
      color: "#000000",
      '&$checked': {
          color: "#000000"
      }
    },
    checked: {},
  })(Radio)

  const StyledButton = withStyles({
    root: {
      padding: '0.7rem',
      marginTop: '0.7rem',
      marginBottom: '1rem',
      backgroundColor: "#5cb646",
    }
  })(Button)

  const StyledButtonEmpty = withStyles({
    root: {
      padding: '0.7rem',
      marginTop: '0.7rem',
      marginBottom: '1rem',
      backgroundColor: "#5CB64650",
    }
  })(Button)

const CartPage = () => {
    const address = useRequestData({}, `/profile/address`)
    const [isLoading, setIsLoading] = useState(false)
    const [emptyCartButton, setEmptyCartButton] = useState("")
    const {cart, setCart, cartId, setCartId, } = useContext(GlobalStateContext)

    // EXEMPLO PARA FAZER O BOTÃO MUDAR DE COR
    useEffect(() => {
          setEmptyCartButton(false)
      }, [])


      const ProductsCart = cart && cart.map((product)=>{
          return(
            <CardRestaurantDetail detail={product.item} />
          )
      })

      const TotalReturn = () => {
          let soma = 0
          cart.map((product)=>{
              soma = soma + (product.quantidade * product.item.price)
          })
          return soma.toFixed(2).toString().replace(".", ",")
      }


    return (
        <ScreenContainer>
            <Header />
            {address.address ?
            <AlignAddress>
                <div id={"address"}>
                    <p id={"title"}><Title>Endereço cadastrado</Title></p>
                    <p id={"address"}>{`${address.address.street}, ${address.address.number}, ${address.address.complement} ${address.address.neighbourhood} 
                    ${address.address.city}-${address.address.state} `}</p></div>
            </AlignAddress> : <Loading />}
                {(cart.length > 0)? (ProductsCart):<p>Carrinho vazio</p>}

            <Shipping>
                Frete: R$0,00
            </Shipping>

            <Total>
                <p>SUBTOTAL</p> <p><b>R${TotalReturn()}</b></p>
            </Total>

            <Payment>
            <p>Forma de pagamento</p>
            <hr />

            <RadioGroup
                aria-label="position"
                name="position"
                // value={this.state.value}
                // onChange={this.handleChange}
                column
            >

            <FormControlLabel value="dinheiro" control={<StyledRadio />} label="Dinheiro" />
            
            <FormControlLabel value="cartao" control={<StyledRadio />} label="Cartão de crédito" />
            </RadioGroup>
            </Payment>
            <AlignConfirm>
                {(cart.length > 0)?

            (<StyledButton
                type={"submit"}
                fullWidth
                variant={"contained"}
                color={"primary"}
                padding={10}
                active={emptyCartButton}
            >

                { isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Confirmar</> }
            </StyledButton>)
            :
            (<StyledButtonEmpty
                type={"submit"}
                fullWidth
                variant={"contained"}
                color={"primary"}
                padding={10}
                active={emptyCartButton}
            >

                { isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Confirmar</> }
            </StyledButtonEmpty>)}
            </AlignConfirm>
            <Footer />
        </ScreenContainer>
    )
}

export default CartPage