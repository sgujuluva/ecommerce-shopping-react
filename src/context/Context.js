import React from "react";
import { createContext, useReducer , useState} from "react";
import cartReducer from "./Reducer";
//images
import amazonLaptop from "../images/amazon-laptop.png";
import ladiesHandbag from "../images/ladieshandbag.png";
import echoDot from "../images/echodot.png";
import iPad from "../images/ipad.png";
import samsungPhone from "../images/samsungphone.png";
import monitor from "../images/monitor.png";
import juicer from "../images/juicer.png";
import microwave from "../images/microwave.png";

export const Cart = createContext();

const products = [
  {
    id: "1",
    title:
      "Lenovo Laptop Shoulder Bag T210, 15.6-Inch Laptop or Tablet, Sleek, Durable and Water-Repellent Fabric, Lightweight Toploader, Business Casual or School, GX40Q17229, Grey",
    price: 45.25,
    rating: 4,
    image: amazonLaptop,
  },
  {
    id: "2",
    title:
      "Women Fashion Synthetic Leather Handbags Tote Bag Shoulder Bag Top Handle Satchel Purse Set 4pcs",
    price: 35.99,
    rating: 3,
    image: ladiesHandbag,
  },
  {
    id: "3",
    title:
      "Echo (4th Gen) | Spherical design with rich sound, smart home hub, and Alexa | Charcoal",
    price: 38.79,
    rating: 4,
    image: echoDot,
  },
  {
    id: "4",
    title:
      "ESR Rebound Magnetic Keyboard Case, iPad Case with Keyboard Compatible with iPad Pro 12.9, Easy-Set Floating Cantilever Stand, Precision Multi-Touch Trackpad, Multi-Color Backlit Keys, Black",
    price: 159.99,
    rating: 5,
    image: iPad,
  },
  {
    id: "5",
    title:
      "SAMSUNG Galaxy S22 Cell Phone, Factory Unlocked Android Smartphone, 256GB, 8K Camera Video, Night Mode, Brightest Display Screen, 50MP Photo Resolution, Long Battery Life, US Version, Pink Gold",
    price: 749.99,
    rating: 3,
    image: samsungPhone,
  },
  {
    id: "6",
    title:
      "SAMSUNG T350 Series 22-Inch FHD 1080p Computer Monitor, 75Hz, IPS Panel, HDMI, VGA (D-Sub), 3-Sided Border-Less, FreeSync (LF22T350FHNXZA)",
    price: 147.07,
    rating: 5,
    image: monitor,
  },
  {
    id: "7",
    title:
      "Hamilton Beach Juicer Machine, Big Mouth Large 3” Feed Chute for Whole Fruits and Vegetables, Easy to Clean, Centrifugal Extractor, BPA Free, 800W Motor, Black",
    price: 77.85,
    rating: 4,
    image: juicer,
  },
  {
    id: "8",
    title:
      "Toshiba ML-EM45PIT(SS) Microwave Oven with Origin Inverter Technology, LCD Display and Smart Sensor, 1.6 Cu.ft, Stainless Steel",
    price: 199.99,
    rating: 2,
    image: microwave,
  },
];

function Context({ children }) {
  const [input, setInput] = useState("");
  //reducer
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    searchQuery: "",
  });
  return (
    <Cart.Provider value={{ state, dispatch, products,input, setInput }}>
      {children}
    </Cart.Provider>
  );
}

export default Context;
