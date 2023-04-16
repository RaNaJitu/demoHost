import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import styled from "styled-components";
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 10;
    display: flex;
    // align-items: center;
    // margin: 20px;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: #f5fbfd;
    background-color: #F0F9FF;
    position: relative;
    flex-direction: column;
    // &:hover ${Info}{
    //   opacity: 1;
    // }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;
  
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;

  const Text = styled.div`
  font-size: 20px;
  margin: 250px;
  width: 100%;
  height: 25%;
  z-index: 2;
  `
  const mystyle = {
    width:"90%",
    color: "black",
    textAlign: "center",
    fontSize: "20px",
    padding: "10px",
    fontFamily: "Arial"
  };

  const Product = ({ item }) => {
    return (
      <Container>
        <Image src={item.img} />
      <div style={mystyle}>
        {item.description}
      </div>
      </Container>
    );
  };
  
  export default Product;