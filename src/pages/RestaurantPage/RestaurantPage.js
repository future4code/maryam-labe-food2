import axios from "axios";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import React, { useState } from "react";
import CardRestaurantDetail from "../../components/CardRestaurantDetail/CardRestaurantDetail";
import { useEffect } from "react";
import { BASE_URL } from "../../constants/urls";
import { CategoryRestaurant, Container, ContainerRestaurant, ImgCard, RestaurantName, DeliveryTime, RestaurantShipping, RestaurantAddress } from "./style";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik1nbUg3Vk5VMXVGYVBmN0NPTm5tIiwibmFtZSI6Ik1hZ2RpZWwgU2l2YSIsImVtYWlsIjoiYXJxLm1hZ2RpZWxzaWx2YUBnbWFpbC5jb20iLCJjcGYiOiI0MjIuODgwLjI4OC01OCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSdWEgTWlndWVsIEJhcmJhciwgNDAwIC0gVmlsYSBHdXN0YXZvIENvcnJlaWEiLCJpYXQiOjE2MzU3OTI5MzF9.wcLFpU-xiJHSNbSdtGEQQBTm9kgivJVPAU1raX7jd0k";
const url = `${BASE_URL}/restaurants/1`;

const RestaurantPage = () => {
  const [dataRestaurant, setDataRestaurant] = useState({});
  const [dataProducts, setDataProducts] = useState([]);

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
    const dataProductsOrdenado = dataProducts.sort((a, b)=>{
      return(
        (a.category < b.category)? -1: (b.category > a.category)? 1 : 0
      )

    })
    let categoria = ""
    const renderizaCard = dataProductsOrdenado &&
    dataProductsOrdenado.map((detail) => {
      if (detail.category !== categoria){
        categoria = detail.category
        return(
          <div>
            <h3>{categoria}</h3>
            <CardRestaurantDetail detail={detail} />
          </div>
        )
      } else {
        return <CardRestaurantDetail detail={detail} />;
      }
    });
    return(
      <div>
      {renderizaCard}
      </div>
    )
  }    
  return (
    <div>
      <Header/>
    <Container>
      <ContainerRestaurant>
      <ImgCard src={dataRestaurant.logoUrl} />
        <RestaurantName>{dataRestaurant.name} </RestaurantName>
        <CategoryRestaurant>{dataRestaurant.category} </CategoryRestaurant>
        <div>
        <DeliveryTime>{dataRestaurant.deliveryTime} min</DeliveryTime> 
        <RestaurantShipping>Frete R$ {dataRestaurant.shipping} </RestaurantShipping>
        </div>
        <RestaurantAddress>{dataRestaurant.address}</RestaurantAddress>
        {RestaurantDetail()}    
      </ContainerRestaurant>
      </Container>
      <Footer/>
    </div>
  );
};
export default RestaurantPage;
