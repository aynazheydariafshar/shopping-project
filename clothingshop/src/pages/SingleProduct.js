import { Box, Button, Divider, Typography } from "@mui/material";
import { DataContext } from "context/DataContext";
import StructerPages from "layout/StructerPages";
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import { MdInsertComment } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { IoMdAdd } from "react-icons/io";
import { BiMinus, BiArrowBack } from "react-icons/bi";
import { addToCart, decreaseCount } from "redux/cartShop";
import Spinner from "components/Spinner";

const SingleProduct = () => {
  //navigate
  const navigate = useNavigate();

  //select cart from redux
  const cart = useSelector((state) => state.cart);

  //get state from redux
  const dispatch = useDispatch();

  //get data from contaxt
  const dataContext = useContext(DataContext);

  //add params for every single product
  const dataParams = useParams();

  //single product
  const [product, setProduct] = useState();

  //low count product
  const handlelowerCounter = (item) => {
    dispatch(decreaseCount(item));
  };

  //add product from cart
  const handleaddCounter = (item) => {
    dispatch(addToCart(item));
  };

  //find count product
  const findproduct = (item) => {
    return cart.cartItems.findIndex((el) => item.id === el.id);
  };

  //find single product with filter
  const filterData = () => {
    return dataContext.data?.filter((item) => item.id === +dataParams.id);
  };

  //add price and count when user add or low count
  const getPrice = (item) => {
    return item.price * cart.cartItems[findproduct(item)]?.cartQuantity
      ? (item.price * cart.cartItems[findproduct(item)]?.cartQuantity).toFixed(
          3
        )
      : item.price.toFixed(3);
  };

  useEffect(() => {
    setProduct(filterData());
  }, [dataParams]);

  return (
    <>
      {dataContext.loading ? (
        <Spinner />
      ) : (
        <>
          {product?.map((item) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  marginTop: "20px",
                  flexDirection: { md: "row", sm: "column", xs: "column" },
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    border: "1px solid black",
                    margin: "30px 40px",
                    padding: "12%",
                  }}
                >
                  <img
                    src={item.image}
                    alt="product"
                    width="250px"
                    height="300px"
                  />
                </Box>
                <Box>
                  <Button onClick={() => navigate(-1)} sx={{ color: "gray" }}>
                    <BiArrowBack fontSize="30px" />
                  </Button>
                  <Typography
                    gutterBottom
                    fontWeight="bold"
                    variant="h4"
                    component="div"
                    padding="20px"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    fontWeight="bold"
                    variant="h6"
                    component="div"
                    paddingX="20px"
                  >
                    description
                  </Typography>
                  <Box width="95%" marginLeft="20px">
                    <Divider color="gray" />
                    <Typography
                      paddingY="30px"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      {item.description}
                    </Typography>
                    <Divider color="gray" />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: {
                        md: "flex-start",
                        sm: "center",
                        xs: "center",
                      },
                      marginLeft: "20px",
                      marginTop: "20px",
                    }}
                  >
                    <AiTwotoneStar />
                    <Typography variant="h6" paddingX="10px">
                      {item.rating.rate}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: {
                        md: "flex-start",
                        sm: "center",
                        xs: "center",
                      },
                      marginLeft: "20px",
                    }}
                  >
                    <MdInsertComment />
                    <Typography variant="h6" paddingX="10px">
                      {item.rating.count}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        display: "flex",
                        justifyContent: {
                          md: "flex-start",
                          sm: "center",
                          xs: "center",
                        },
                      }}
                      padding="5px"
                      variant="h6"
                      fontWeight="bold"
                      marginY="20px"
                    >
                      <Button
                        sx={{ marginLeft: "10px" }}
                        onClick={() => handlelowerCounter(item)}
                        variant="outlined"
                        padding="5px 20px"
                      >
                        <BiMinus fontSize="30px" />
                      </Button>
                      <span style={{ fontSize: "20px", padding: "0 20px" }}>
                        {cart.cartItems[findproduct(item)]?.cartQuantity
                          ? cart.cartItems[findproduct(item)].cartQuantity
                          : 1}
                      </span>
                      <Button
                        sx={{ marginLeft: "10px" }}
                        onClick={() => handleaddCounter(item)}
                        variant="outlined"
                        padding="5px 20px"
                      >
                        <IoMdAdd fontSize="30px" />
                      </Button>
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: {
                        md: "flex-start",
                        sm: "center",
                        xs: "center",
                      },
                    }}
                  >
                    <Button
                      onClick={() => alert(`${getPrice(item)}$`)}
                      padding="0 20px"
                      sx={{
                        marginLeft: "15px",
                        marginBottom: "30px",
                        fontSize: "15px",
                      }}
                      variant="contained"
                    >
                      {getPrice(item)} $
                    </Button>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </>
      )}
    </>
  );
};

export default StructerPages(SingleProduct);
