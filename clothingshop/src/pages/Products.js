import { Box, Card } from "@mui/material";
import CardSingle from "context/CardSingle";
import { DataContext } from "context/DataContext";
import StructerPages from "layout/StructerPages";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  //get data from contaxt
  const dataContext = useContext(DataContext);

  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          flexDirection: { md: "row", sm: "column" },
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          py: "20px",
        }}
      >
        {dataContext.data?.map((item) => {
          return (
            <Link className="link" to={`/products/${item.id}`}>
              <CardSingle
                imgSrc={item.image}
                title={item.title}
                price={item.price}
                description={item.description}
                rate={item.rating.rate}
                count={item.rating.count}
              />
            </Link>
          );
        })}
      </Box>
    </Card>
  );
};

export default StructerPages(Products);
