import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, { useState, useContext} from "react";
import { useParams } from "react-router-dom";
import CardRestaurantDetail from "../../components/CardRestaurantDetail/CardRestaurantDetail";
import { useEffect } from "react";
import { BASE_URL } from "../../constants/urls";
import { GlobalStateContext } from '../../GlobalState/GlobalStateContext'
import {
  CategoryRestaurant,
  Container,
  ContainerRestaurant,
  ImgCard,
  RestaurantName,
  DeliveryTime,
  RestaurantShipping,
  RestaurantAddress,
  TimeShipping,
  BorderBottom, 
} from "./style";

const RestaurantPage = () => {
  const [dataRestaurant, setDataRestaurant] = useState({});
  const [dataProducts, setDataProducts] = useState([]);
  const {cart, shipping, setShipping, shippingId, setShippingId} = useContext(GlobalStateContext)

  const params = useParams();

  const token = localStorage.getItem("token");
  const url = `${BASE_URL}/restaurants/${params.id}`;

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        setDataRestaurant(response.data.restaurant);
        setDataProducts(response.data.restaurant.products);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

 
  
  const addShipping = () => {
    const position = shippingId.indexOf(dataRestaurant.id)
    if (position === -1 && dataRestaurant.shipping !== undefined){
      const newShipping = [... shipping, dataRestaurant.shipping]
      setShipping(newShipping)
    }
    if (dataRestaurant.id !== undefined){
      const newShippingId = [...shippingId, dataRestaurant.id]
      setShippingId(newShippingId)
    }
  }


  const RestaurantDetail = () => {
    const dataProductsOrdenado = dataProducts.sort((a, b) => {
      return a.category < b.category ? -1 : b.category > a.category ? 1 : 0;
    });
    let categoria = "";
    const renderizaCard =
      dataProductsOrdenado &&
      dataProductsOrdenado.map((detail) => {
        if (detail.category !== categoria) {
          categoria = detail.category;
          return (
            <div>
              <BorderBottom><h5>{categoria}</h5></BorderBottom>
              <CardRestaurantDetail restaurantId={dataRestaurant.id}  addShipping={addShipping} detail={detail} />
            </div>
          );
        } else {
          return <CardRestaurantDetail restaurantId={dataRestaurant.id}  addShipping={addShipping} detail={detail} />;
        }
      });
    return <div>{renderizaCard}</div>;
  };
  return (
    <div>
      <Header />
      <Container>
        <ContainerRestaurant>
          <ImgCard src={dataRestaurant.logoUrl} />
          <RestaurantName>{dataRestaurant.name} </RestaurantName>
          <CategoryRestaurant>{dataRestaurant.category} </CategoryRestaurant>
          <TimeShipping>
            <DeliveryTime>{dataRestaurant.deliveryTime} min</DeliveryTime>
            <RestaurantShipping>
              Frete R$ {dataRestaurant.shipping},00
            </RestaurantShipping>
          </TimeShipping>
          <RestaurantAddress>{dataRestaurant.address}</RestaurantAddress>
          {RestaurantDetail()}
        </ContainerRestaurant>
      </Container>
      <Footer />
    </div>
  );
};
export default RestaurantPage;
