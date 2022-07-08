import styled from "styled-components";

const Footer = () => {

    //add style for footer
    const FooterPage = styled.footer`
        background-color: #06283D;
        bottom: 0;
        position: relative;
        width: 100%;
        padding: 30px;
        color: white;
        text-align: center;
        font-size: 10px;
    `;

    return <FooterPage>
        © copy right 2022
    </FooterPage>
}

export default Footer;