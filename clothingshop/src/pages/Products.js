import { Box, Card } from "@mui/material";
import Spinner from "components/Spinner";
import CardSingle from "components/CardSingle";
import { DataContext } from "context/DataContext";
import StructerPages from "layout/StructerPages";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  //get data from contaxt
  const dataContext = useContext(DataContext);

  return (
    <>
      {dataContext.loading ? (
        <Spinner />
      ) : (
        <Card>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", sm: "row", xs: "column" },
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
      )}
    </>
  );
};

export default StructerPages(Products);
