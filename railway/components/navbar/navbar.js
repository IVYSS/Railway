import React from "react";
import styles from "../navbar/navbar.module.css";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {

  const menuData = [
    { name: "หน้าแรก", link: "/" },
    { name: "ประวัติการซื้อ", link: "/" },
    { name: "แปลี่ยนแปลงตั๋ว", link: "/" },
    { name: "ยกเลิกตั๋วโดยสาร", link: "/" },
    { name: "สิทธิพิเสษ", link: "/" },
    {
      name: "ศูนย์ความช่วยเหลือ",
      select: (
        <div className={styles.menuitem_select}>
          <div className={styles.select_item}>
            <Link href={"/"}>วิธีการจองตั๋วโดยสาร</Link>
          </div>

          <div className={styles.select_item}>
            <Link href={"/"}>วิธีการจองตั๋วท่องเที่ยว</Link>
          </div>
          <div className={styles.select_item}>
            <Link href={"/"}>วิธีการยกเลิกตั๋วโดยสาร</Link>
          </div>
          <div className={styles.select_item}>
            <Link href={"/"}>สมัครสมาชิก</Link>
          </div>
          <div className={styles.select_item}>
            <Link href={"/"}>ลืมรหัสผ่าน</Link>
          </div>
          <div className={styles.select_item}>
            <Link href={"/"}>คำถามที่พบบ่อย</Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_container}>
        <Link href="/">
          <img
            src="https://www.dticket.railway.co.th/DTicketPublicWeb/assets/img/logo.png"
            style={{ cursor: "pointer" }}
          ></img>
        </Link>
        <div className={styles.navbar_container_menu}>
          <div className={styles.container_first}>
            <li style={{ cursor: "default" }}>
              <img src="https://www.dticket.railway.co.th/DTicketPublicWeb/assets/img/icon3.png"></img>
            </li>
            <li>
              <Link href="/">
                <p>เข้าสู่ระบบ</p>
              </Link>
            </li>
            <li>
              <Link href="/">
                <p>สมัครสมาชิก</p>
              </Link>
            </li>
            <li className={styles.container_first_noti}>
              <img src="https://www.dticket.railway.co.th/DTicketPublicWeb/assets/img/icon-alert.png"></img>
            </li>
            <div className={styles.container_language}>
              <li className={styles.container_first_language}>
                <img src="https://www.dticket.railway.co.th/DTicketPublicWeb/assets/img/icon1.png"></img>
              </li>
              <li>ไทย</li>
              <li>
                <IoIosArrowDown></IoIosArrowDown>
              </li>
            </div>
          </div>
          <div className={styles.container_second}>
            {menuData.map((e, index) => {
              return (
                <div className={styles.menuitem} key={index}>
                  <Link href={e?.link ? e.link : ""}>
                    {e.name}
                  </Link>

                  <div className={styles.underline}></div>
                  {e?.select && e.select}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
