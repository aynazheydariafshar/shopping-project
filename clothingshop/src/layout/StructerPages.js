import Footer from "./sructerLayout/Footer";
import Header from "./sructerLayout/Header";

const StructerPages = (Component) => {
  const WithStructerPages = (...props) => {
    return (
      <>
        <Header />
        <Component>{props}</Component>
        <Footer />
      </>
    );
  };
  return WithStructerPages;
};

export default StructerPages;
