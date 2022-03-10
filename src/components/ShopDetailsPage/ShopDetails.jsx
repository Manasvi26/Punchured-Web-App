import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../data";

const ShopDetails = () => {
  const [shopData, setShopData] = useState([]);
  const { id } = useParams();
  //   console.log(typeof id);

  //   console.log("Here it is", id);
  //   console.log(data);

  //   console.log(shopData);
  //   data.forEach((item) => {
  //     if (item.id === id) {
  //       //   console.log(item);
  //       setShopData(item);
  //       //   console.log(shopData);
  //     }
  //   });

  useEffect(() => {
    data.forEach((item) => {
      if (item.id === id) {
        console.log(item);
        setShopData(item);
        //   console.log(shopData);
      }
    });
  }, []);

  console.log(shopData);

  return (
    <div>
      <h1>ShopDetails</h1>;
      <div>
        <img src={shopData.image} alt="" />
      </div>
      <h2>{shopData.name}</h2>
      <div>
        <div>Rating: {shopData.rating}</div>
        <div>Distance: {shopData.radius} Km</div>
        <div>Payment Mode: {shopData.payment}</div>
        <div>Discount: {shopData.discount}</div>
      </div>
      <div>
        {shopData.services.map((el) => (
          <div>
            <h3>{el}</h3>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopDetails;
