import { Button } from "@mui/material";
import background from "assets/images/banner.jpg";
import styled from "styled-components";

const HomeBackGround = () => {

    //add style for article
    const ArticleImage = styled.article`
        color : white;
        background-repeat: no-repeat;
        background-size: 100% 100vh;
        place-items: center;
        background-image:  linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${background});
    `;

    //add style for headertxt
    const TextImage = styled.h1`
        background-repeat: no-repeat;
        background-position: center;
        font-size : 40px;
        place-items: center;
    `;

    //add style for paragraph
    const TextP = styled.p`
        width: 400px;
        display: grid;
    `;

  return (
        <ArticleImage>
            <div style={{placeItems: 'center' , display : 'flex',height : '100vh' , justifyContent : 'center' , flexDirection : 'column' , alignItems : 'center'}}>
                <TextImage>Welcome to our shop</TextImage>
                <TextP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque
                </TextP>
                <Button sx={{padding : '10px 30px'}} variant="contained">SHOP NOW</Button>
            </div>
        </ArticleImage>
  );
};

export default HomeBackGround;