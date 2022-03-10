import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";

import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import data from "../../data";
import NavBar from "../Headers/NavBar";
import "./HomePage.css";
// console.log(data);
// console.log(i);

export const HomePage = () => {
  const [itemData, setItemData] = useState(data);

  const filteredItems = (item, num) => {
    if (item.rating >= Number(num)) {
      return item;
    }
  };

  const handleFilter = (e) => {
    console.log(e.target.value);
    var filteredArr = [...data]
      .filter((item) => {
        return filteredItems(item, e.target.value);
      })
      .sort((a, b) => {
        return a.rating - b.rating;
      });
    setItemData(filteredArr);
  };

  const filterPayment = (items, type) => {
    if (items.payment === type) {
      return items;
    }
  };

  const handlePayment = (e) => {
    if (e.target.value !== "All") {
      let filteredRes = [...data].filter((items) => {
        return filterPayment(items, e.target.value);
      });
      setItemData(filteredRes);
    } else {
      setItemData(data);
    }
  };

  const handleSort = (e) => {
    if (e.target.value === "Ascending") {
      let sorted = [...data].sort((a, b) => {
        return a.radius - b.radius;
      });
      setItemData(sorted);
    } else if (e.target.value === "Descending") {
      let sorted = [...data].sort((a, b) => {
        return b.radius - a.radius;
      });
      setItemData(sorted);
    } else {
      setItemData(data);
    }
  };
  // console.log(item.id);

  return (
    <div>
      <NavBar />
      <div className="heading_shops">
        <h4>Filter and sort</h4>
        <div>
          Distance:&nbsp;
          <select onChange={handleSort} className="drop-filter" name="" id="">
            <option value="All">All</option>
            <option value="Ascending">Nearest</option>
            <option value="Descending">Farthest</option>
          </select>
          &nbsp; &nbsp; Ratings:&nbsp;
          <select
            onChange={handleFilter}
            className="drop-filter"
            name="Ratings"
            id=""
          >
            <option value={0}>Show all</option>
            <option value="4">4 star</option>
            <option value="3">3 star</option>
            <option value={2}>2 star</option>
            <option value={1}>1 star</option>
          </select>
          &nbsp; &nbsp;Payment:&nbsp;
          <select
            onChange={handlePayment}
            className="drop-filter"
            name="payments"
            id=""
          >
            <option value="All">All</option>
            <option value="Cash">Cash</option>
            <option value="Online">Online</option>
          </select>
        </div>
      </div>

      <div className="shops_cont" style={{ display: "grid", gap: "100px" }}>
        {itemData.map((item) => {
          return (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt="image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <div className="button_cont">
                <CardActions>
                  <Link
                    to={`/shop/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      // onClick={() => applying(item)}

                      variant="contained"
                      size="small"
                    >
                      Book Services
                    </Button>
                  </Link>
                  <Button
                    variant="outlined"
                    style={{ cursor: "default", color: "#0a66c2" }}
                    size="small"
                  >
                    {`${item.radius} Km away`}
                  </Button>
                </CardActions>

                <CardActions>
                  <Button
                    className="rating_btn"
                    style={{ cursor: "default" }}
                    // onClick={() => applying(item)}
                    variant="contained"
                    size="small"
                  >
                    {`${item.rating}`}
                    <StarIcon />
                  </Button>
                </CardActions>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
