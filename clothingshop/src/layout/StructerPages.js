const { default: Footer } = require("./sructerLayout/Footer")
const { default: Header } = require("./sructerLayout/Header")

const StructerPages = (Component) => {
    const WithStructerPages = (...props) => {
        return <>
            <Header />
            <Component>{props}</Component>
            <Footer />
        </>
    }
    return WithStructerPages;
}

export default StructerPages;