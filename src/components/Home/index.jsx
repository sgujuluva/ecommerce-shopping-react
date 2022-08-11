import React from "react";
//images
import eShopImage from "../../images/e-commerce-platforms.png";
import amazonLaptop from "../../images/amazon-laptop.png";
import ladiesHandbag from "../../images/ladieshandbag.png";
import echoDot from "../../images/echodot.png";
import iPad from "../../images/ipad.png";
import samsungPhone from "../../images/samsungphone.png";
import monitor from "../../images/monitor.png";
import juicer from "../../images/juicer.png";
import microwave from "../../images/microwave.png";
//components
import Products from "../Products";

function Home() {
  return (
    <div className="home-container">
      <div className="home-image">
        <img src={eShopImage} alt="" />
      </div>
      <div className="home-row">
        <Products 
          id="1"
          title="Lenovo Laptop Shoulder Bag T210, 15.6-Inch Laptop or Tablet, Sleek, Durable and Water-Repellent Fabric, Lightweight Toploader, Business Casual or School, GX40Q17229, Grey"
          price={45.25}
          rating={4}
          image={amazonLaptop}
        />
        <Products
          id="2"
          title="Women Fashion Synthetic Leather Handbags Tote Bag Shoulder Bag Top Handle Satchel Purse Set 4pcs"
          price={35.99}
          rating={3}
          image={ladiesHandbag}
        />
      </div>
      <div className="home-row">
        <Products
          id="3"
          title="Echo (4th Gen) | Spherical design with rich sound, smart home hub, and Alexa | Charcoal"
          price={38.79}
          rating={4}
          image={echoDot}
        />
        <Products
          id="4"
          title="ESR Rebound Magnetic Keyboard Case, iPad Case with Keyboard Compatible with iPad Pro 12.9, Easy-Set Floating Cantilever Stand, Precision Multi-Touch Trackpad, Multi-Color Backlit Keys, Black"
          price={159.99}
          rating={5}
          image={iPad}
        />
        <Products
          id="5"
          title="SAMSUNG Galaxy S22 Cell Phone, Factory Unlocked Android Smartphone, 256GB, 8K Camera Video, Night Mode, Brightest Display Screen, 50MP Photo Resolution, Long Battery Life, US Version, Pink Gold"
          price={749.99}
          rating={3}
          image={samsungPhone}
        />
      </div>
      <div className="home-row">
        <Products
          id="6"
          title="SAMSUNG T350 Series 22-Inch FHD 1080p Computer Monitor, 75Hz, IPS Panel, HDMI, VGA (D-Sub), 3-Sided Border-Less, FreeSync (LF22T350FHNXZA)"
          price={147.07}
          rating={5}
          image={monitor}
        />
        <Products
          id="7"
          title="Hamilton Beach Juicer Machine, Big Mouth Large 3” Feed Chute for Whole Fruits and Vegetables, Easy to Clean, Centrifugal Extractor, BPA Free, 800W Motor, Black"
          price={77.85}
          rating={4}
          image={juicer}
        />
        <Products
          id="8"
          title="Toshiba ML-EM45PIT(SS) Microwave Oven with Origin Inverter Technology, LCD Display and Smart Sensor, 1.6 Cu.ft, Stainless Steel"
          price={199.99}
          rating={2}
          image={microwave}
        />
      </div>
    </div>
  );
}

export default Home;
