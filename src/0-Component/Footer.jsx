import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B2341] text-white py-10 px-8 md:px-20">
      <div className="flex gap-8">
        <div className="w-1/5">
          <img
            src="/public/images/icons/sunsolaLogo.png"
            alt="Sun Sola Logo"
            className="w-38 mb-4"
          />
        </div>
        <div className="w-2/5">
          <h2 className="font-bold text-lg mb-2">SUN SOLA</h2>
          <p className="text-sm leading-relaxed mb-4">
            This platform is established to promote the adoption of clean energy
            by providing a space for solar installation companies to showcase
            their services. Users can explore information, compare options, and
            contact companies directly — supporting the transition towards
            sustainable energy use.
          </p>
          <p className="text-sm leading-relaxed">
            เว็บไซต์นี้จัดทำขึ้นเพื่อส่งเสริมการใช้พลังงานสะอาด
            โดยเปิดพื้นที่ให้บริษัทที่ให้บริการติดตั้งระบบโซลาร์เซลล์สามารถประชาสัมพันธ์ธุรกิจของตนเองได้
            ผู้ใช้งานสามารถเข้าชมข้อมูล เปรียบเทียบ และติดต่อบริษัทต่าง ๆ
            ได้โดยตรง เพื่อร่วมกันขับเคลื่อนการใช้พลังงานอย่างยั่งยืน
          </p>
        </div>

        <div className="w-1/5 ml-10">
          <h3 className="font-semibold text-lg mb-2">About Us</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/allshop" className="hover:underline">
                All shop
              </a>
            </li>
          </ul>
        </div>

        <div className="w-1/5">
          <h3 className="font-semibold text-lg mb-2">Developed by</h3>
          <ul className="space-y-1 text-sm">
            <li>Tantitham Tantithamtorn</li>
            <li>Thanchicha Hempichit</li>
            <li>Parichat Taodee</li>
          </ul>
          <h3 className="font-semibold text-lg mb-2 mt-10">Supported by</h3>
          <div className="flex flex-rows items-center">
            <img
              src="/public/images/icons/kmutt.png"
              alt="KMUTT Logo"
              className="w-25"
            />
            <img
              src="/public/images/icons/sit.png"
              alt="SIT Logo"
              className="w-30 h-10"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center border-t border-white mt-10 pt-6">
        Copyright © 2025 Sunsola. All rights reserved.
      </div>
    </footer>
  );
}
