import React from "react";
import styles from "../banner/Banner.module.css";
import Image from "next/image";

export default function Banner() {
  const bannerImage =
    "https://www.dticket.railway.co.th/DTicketPublicWeb/assets/img/bg-head.png";

  return (
    <div className={styles.banner}>
      <div className={styles.banner_content}>
        <img
          src={bannerImage}
          style={{
            objectFit: "fill",
            maxWidth:"none",
            width : '100%'
          }}
        />
        <div className={styles.content_header}>
          <h1>การรถไฟแห่งประเทศไทย</h1>
          <p>จองง่าย ตรวจสอบสะดวก</p>
        </div>
      </div>
    </div>
  );
}
