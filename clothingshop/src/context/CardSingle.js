import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Box } from "@mui/material";
import PropTypes from "prop-types";
import { AiTwotoneStar } from "react-icons/ai";
import { MdInsertComment } from "react-icons/md";

export default function CardSingle({
  imgSrc,
  title,
  price,
  description,
  rate,
  count,
}) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        marginY: "10px",
        width: "100%",
        height: "40rem",
        border: "1px solid gray",
        padding: "15px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
          className="image-hover"
          image={imgSrc}
          alt="imgProduct"
          sx={{ objectFit: "contain", padding: "20px" }}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" padding='5px'>
              {title}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              padding='5px'
              component="div"
              color="text.secondary"
              sx={{
                height: "83px",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {description}
            </Typography>
        </CardContent>
        <CardActions sx={{ flexDirection: "column", display: "flex" }}>
          <Box sx={{ marginRight: "200px" }}>
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{ fontSize: "20px" }}
              color="#35796D"
            >
              {`${price} $`}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AiTwotoneStar />
            <Typography variant="body2" padding="10px">
              {rate}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MdInsertComment />
            <Typography variant="body2" padding="10px">
              {count}
            </Typography>
          </Box>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

CardSingle.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  rate: PropTypes.number,
  count: PropTypes.number,
};
