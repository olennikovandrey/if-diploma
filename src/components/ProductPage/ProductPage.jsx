import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import wishlistSVG from "../../assets/images/sale/favorite.svg"

export default function ProductPage() {
  const [isProductDiscription, setProductDiscription] = useState(true)
  const po = [{
    "id": "5cd9a543-e4a3-4aa7-afa7-a78cf716ad9d",
    "type": "Dresses",
    "name": "SATIN EFFECT TUNIC DRESS",
    "price": {
      "currency": "USD",
      "value": "4990"
    },
    "color": {
      "name": "Orange",
      "hex": "#ED7C00"
    },
    "availableSizes": [
      "XS, S, M, L, XL, XXL"
    ],
    "description": "SLEEVELESS TUNIC DRESS WITH V-NECKLINE AND WIDE ARM HOLES. FRONT PLEATS. ASYMMETRIC HEM.",
    "images": [
      "https://res.cloudinary.com/intellectfox/image/upload/v1619551443/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_1_1.jpg",
      "https://res.cloudinary.com/intellectfox/image/upload/v1619551814/Diploma%20Front-end/Online%20shop_Modmikky/Dresses/dress_1_2.jpg"
    ]
  },
]

  const ProductPageWrapper = styled.div `
    max-width: 2880px;
    width: 2880px;
    height: 1625px;
    background: #fff;
    margin: 0 auto;
    margin-bottom: 180px;
    display: flex;
    flex-direction: row;
  `;

  const ProductImgswrapper = styled.div`
    width: 2160px;
    height: 1625px;
    display: flex;
    flex-direction: row;
  `;

  const ProductImg = styled.img`
    width: 1080px;
    height: 1625px;
  `;

  const ProductColorDiv = styled.div`
    width: 60px;
    height: 60px;
    border: 2px solid #000f08;
    margin-bottom: 60px;
    background: ${po.map((item) => item.color.hex)};
  `;

  const ProductParams = styled.div`
    width: 100%;
    height: 1625px;
    padding: 0 120px;
  `;

  const ProductName = styled.h3`
    margin: 80px 0 40px;
  `;

  const ProductPrice = styled.div`
    width: 100%;
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 20px;
  `;

  const ProductParamsLabel = styled.p`
    width: 100%;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 60px;
    color: #8c8c8c;
  `;

  const ProductColorLabel = styled.p`
    width: 100%;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 24px;
    color: #8c8c8c;
  `;

  const AvailableSizesWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
  `;

  const AvailableSizes = styled.div`
    width: 40px;
    height: 30px;
    margin-right: 10px;
    border: none;
    color: #000f08;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
    &:hover {
      border-bottom: 2px solid #000;
    }
  `;

  const AddToBagAndFavoriteBtn = styled.div`
    width: 480px;
    height: 100px;
    background-color: black;
    display: flex;
    border: 1px solid white;
    margin-bottom: 80px;
  `;

  const AddToBagBtn = styled.button`
    width: 380px;
    height: 100px;
    border: 1px solid #fff;
    background-color: #000;
    color: #fff;
    font-size: 32px;
    line-height: 32px;
    &:hover {
      background-color: #262323;
    }
  `;

  const AddToWishlist = styled.button`
    width: 98px;
    height: 100px;
    border: 1px solid white;
    background-color: black;
    color: #000;
    content: "";
    &:before {
      display: inline-block;
      height: 36px;
      content: url("${wishlistSVG}");
    }
    &:hover {
      background-color: #262323;
    }
  `;

  const ProductInfoItemWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: flex-start;
  `;

  const PlusMinusBtn = styled.button`
    width: 10%;
    height: auto;
    margin: -15px 30px 0 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border: none;
    background-color: #fff;
    color: #000;
    font-size: 35px;
  `;

  const ProductInfoItem = styled.div`
    width: 90%;
    height: auto;
  `;

  const ProductInfoTitle = styled.p`
    width: 100%;
    font-size: 24px;
    line-height: 24px;
    color: #000;
    margin-bottom: 40px;
  `;

  const ProductInfoText = styled.p`
    width: 100%;
    margin-bottom: 60px;
    font-size: 24px;
    line-height: 36px;
    color: #8c8c8c;
  `;

  return (
    <>
      <Header margin={"0 auto"} position={"static"} color={"#000"} height={"112px"}/>
      <ProductPageWrapper>
        {po.map((item) => 
          <>
            <ProductImgswrapper>
              <ProductImg src={item.images[0]} />
              <ProductImg src={item.images[1]} />
            </ProductImgswrapper>
            <ProductParams>
              <ProductName>{item.name}</ProductName>
              <ProductPrice>{item.price.currency + " $" + item.price.value}</ProductPrice>
              <ProductParamsLabel>PRE-ORDER</ProductParamsLabel>
              <ProductColorLabel>COLOR</ProductColorLabel>
              <ProductColorDiv color={item.color.hex}/>
              <ProductParamsLabel>SIZE</ProductParamsLabel>
              <AvailableSizesWrapper>
                {item.availableSizes.join().split(",").map((item) => <AvailableSizes>{item}</AvailableSizes>)}
              </AvailableSizesWrapper>
              <AvailableSizes></AvailableSizes>
              <AddToBagAndFavoriteBtn>
                <AddToBagBtn>ADD TO BAG</AddToBagBtn>
                <AddToWishlist/>
              </AddToBagAndFavoriteBtn>
              <ProductInfoItemWrapper>
                <PlusMinusBtn onClick={() => setProductDiscription(!isProductDiscription)}>{isProductDiscription ? "-" : "+"}</PlusMinusBtn>
                <ProductInfoItem>
                  <ProductInfoTitle>PRODUCT DESCRIPTION</ProductInfoTitle>
                  {isProductDiscription ? (<ProductInfoText>{item.description}</ProductInfoText>) : null}
                </ProductInfoItem>
              </ProductInfoItemWrapper>
              <ProductInfoItemWrapper>
                <PlusMinusBtn>+</PlusMinusBtn>
                <ProductInfoItem>
                  <ProductInfoTitle>SHIPPING & RETURNS</ProductInfoTitle>
                </ProductInfoItem>
              </ProductInfoItemWrapper>
              <ProductInfoItemWrapper>
                <PlusMinusBtn>+</PlusMinusBtn>
                <ProductInfoItem>
                  <ProductInfoTitle>FABRIC COMPOSITION</ProductInfoTitle>
                </ProductInfoItem>
              </ProductInfoItemWrapper>
            </ProductParams>
          </>
        )}
      </ProductPageWrapper>
      <Footer />
    </>
  )
}