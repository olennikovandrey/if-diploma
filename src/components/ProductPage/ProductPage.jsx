import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ProductPageWrapper, ProductImgswrapper, ProductImg, ProductParams, ProductSizeLabel, ProductName, ProductPrice, ProductParamsLabel, ProductColorLabel,
  AvailableSizesWrapper, AvailableSizes, AddToBagAndFavoriteBtn, AddToBagBtn, AddToWishlist, ProductInfoItemWrapper, PlusMinusBtn, ProductInfoItem, ProductInfoTitle, ProductInfoText } from "./styled-components";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function ProductPage() {
  const [isProductDiscription, setProductDiscription] = useState(true);
  const data = sessionStorage.getItem("catalog");
  const parsedData = JSON.parse(data);
  const { id } = useParams();

  return (
    <>
      <Header margin={"0 auto"} position={"static"} color={"#000"} height={"112px"}/>
      <ProductPageWrapper>
        {parsedData.filter((item) => item.id === id).map((item) =>
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
              <div style={{width:"60px", height:"60px", border: "2px solid #000f08", marginBottom: "64px", background: `${item.color.hex}`}} />
              <ProductSizeLabel>SIZE</ProductSizeLabel>
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
  );
}