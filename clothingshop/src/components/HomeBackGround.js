import React from "react";
import imageHome from "assets/images/banner.jpg";
import { Box, Typography, CardMedia, Button } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router";

const HomeBackGround = () => {
  const TextP = styled.p`
    width: 400px;
    display: grid;
    text-align: left;
  `;

  const TextDiv = styled.div`
    position: absolute;
    color: white;
    top: 33%;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  `;

  //navigate
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <div style={{ position: "relative" }}>
        <CardMedia
          component="div"
          sx={{
            display: "flex",
            height: "100vh",
            objectFit: "cover",
            alignItems: "left",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${imageHome})`,
          }}
        />
        <TextDiv>
          <Typography variant="h4" component="div" fontWeight="bold">
            Welcome to our shop
          </Typography>
          <TextP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
            purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque
          </TextP>
          <Button
            onClick={() => navigate("/products")}
            sx={{ padding: "10px 30px" }}
            variant="contained"
          >
            SHOP NOW
          </Button>
        </TextDiv>
      </div>
    </Box>
  );
};

export default HomeBackGround;
