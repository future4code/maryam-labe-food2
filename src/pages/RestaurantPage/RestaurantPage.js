import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../../constants/urls";
import { ContainerRestaurant, TitleRestaurante, Container, BoxTitle, BoxImageBack, ImageBack } from "./style";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik1nbUg3Vk5VMXVGYVBmN0NPTm5tIiwibmFtZSI6Ik1hZ2RpZWwgU2l2YSIsImVtYWlsIjoiYXJxLm1hZ2RpZWxzaWx2YUBnbWFpbC5jb20iLCJjcGYiOiI0MjIuODgwLjI4OC01OCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSdWEgTWlndWVsIEJhcmJhciwgNDAwIC0gVmlsYSBHdXN0YXZvIENvcnJlaWEiLCJpYXQiOjE2MzU3OTI5MzF9.wcLFpU-xiJHSNbSdtGEQQBTm9kgivJVPAU1raX7jd0k";
const url = `${BASE_URL}/restaurants/1`;

const RestaurantPage = () => {
  const [dataRestaurant, setDataRestaurant] = useState({});

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          auth: token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setDataRestaurant(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <Container>
      <ContainerRestaurant>
          <BoxTitle>
        <TitleRestaurante>Restaurante</TitleRestaurante>
        <BoxImageBack>
            <ImageBack src="../../assets/back.png" />
        </BoxImageBack>
        </BoxTitle>
      </ContainerRestaurant>
    </Container>
  );
};
export default RestaurantPage;
