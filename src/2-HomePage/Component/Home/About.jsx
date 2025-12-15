import React from 'react'

function About() {
  return (
    <><div className="grid grid-cols-2">
          <div className="bg-[#11284f] text-white p-[65px]">
            <h2 className="text-[40px] font-bold mb-[30px]">
              โซลาร์เซลล์ (Solar Cell)
            </h2>
            <p className="text-[18px]">
              หรือสามารถเรียกได้อีกชื่อว่าเซลล์แสงอาทิตย์คือ
              อุปกรณ์อิเล็กทรอนิกส์ชนิดหนึ่ง
              ที่มีคุณสมบัติในการเปลี่ยนพลังงานแสงจากแสงอาทิตย์
              มาแปรสภาพให้เป็นพลังงานไฟฟ้า
              เป็นการเปลี่ยนแสงอาทิตย์ที่ร้อนเกินทนในประเทศเรา
              ให้มาเป็นพลังงานไฟฟ้าเพื่อนำไปใช้ ประโยชน์ต่าง ๆ
              ซึ่งพลังงานไฟฟ้าที่ผลิตจากแผงโซล่าเซลล์นั้นเป็นไฟฟ้าที่สามารถนำกลับไป
              เป็นไฟฟ้าที่สามารถนำไปใช้ได้ทันที
            </p>
          </div>

          <img
            src="/images/home/solar1.png"
            alt="solar pic"
            className="w-full h-full"
          />
          <img
            src="/images/home/solar2.png"
            alt="solar pic"
            className="w-full h-full"
          />

          <div className="bg-[#fcf995] text-black p-[65px] pb-0">
            <h2 className="text-[40px] font-bold mb-[30px]">
              ประโยชน์ของ Solar Cell
            </h2>
            <p className="text-[18px]">
              โซลาร์เซลล์เป็นนวัตกรรมแนวใหม่ที่ให้ประโยชน์กับผู้ที่นำมันมาติดตั้งจะเห็นได้จากมี
              คนจำนวนมากเริ่มติดตั้งโซลาร์เซลล์ บ้านหรือออฟฟิศต่าง ๆ
              ที่พึ่งเริ่มสร้างใหม่ ก็จะมีแผงโซล่าเซลล์ตั้งให้เห็น
              โดยประโยชน์ที่ได้จากการติดตั้งโซล่าเซลล์ มีดังนี้
            </p>
            <br />
            <ul className="ml-[20px] text-[18px] list-disc">
              <li>
                <span className="font-bold">พลังงานสะอาด</span>{" "}
                ใช้แสงอาทิตย์ซึ่งไม่มีวันหมด และไม่ก่อมลพิษ
              </li>
              <li>
                <span className="font-bold">ประหยัดค่าไฟ</span>{" "}
                ลดการพึ่งพาไฟฟ้าจากการไฟฟ้า ช่วยลดค่าใช้จ่ายระยะยาว
              </li>
              <li>
                <span className="font-bold">ลดความร้อน</span>{" "}
                แผงโซล่าเซลล์ช่วยดูดซับแสงแดด ลดอุณหภูมิในบ้านหรืออาคาร
              </li>
              <li>
                <span className="font-bold">เพิ่มมูลค่าทรัพย์สิน</span>{" "}
                บ้านหรืออาคารที่ติดโซล่าเซลล์มีราคาขายสูงขึ้น
              </li>
            </ul>
          </div>
        </div></>
  )
}

export default About