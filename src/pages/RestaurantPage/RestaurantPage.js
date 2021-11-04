import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CardRestaurantDetail from "../../components/CardRestaurantDetail/CardRestaurantDetail";
import { useEffect } from "react";
import { BASE_URL } from "../../constants/urls";
import {
  CategoryRestaurant,
  Container,
  ContainerRestaurant,
  ImgCard,
  RestaurantName,
  DeliveryTime,
  RestaurantShipping,
  RestaurantAddress,
  TimeShipping
} from "./style";

const RestaurantPage = () => {

  const [dataRestaurant, setDataRestaurant] = useState({});
  const [dataProducts, setDataProducts] = useState([]);

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
  console.log(dataRestaurant);
  console.log(dataProducts);

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
              <h5><u>{categoria}</u></h5>
              <CardRestaurantDetail detail={detail} />
            </div>
          );
        } else {
          return <CardRestaurantDetail detail={detail} />;
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
              Frete R$ {dataRestaurant.shipping},00{" "}
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
