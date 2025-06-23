import React from "react";
import Narbar from "../0-Component/Navbar";
import LeftArrow from "../0-Component/UI/LeftArrow";
import SolarSelector from "./Component/Recommend/SolarSelector";

function RecommendPage() {
  return (
    <>
      <Narbar icon={<LeftArrow />} page="Recommend" />
      <div className="mx-[160px] my-[65px]">
        <div className="mb-10">
          <h2 className="text-center font-semibold mb-4">
            เวลาที่โซลาร์เซลล์ผลิตไฟได้สูงสุด
          </h2>
          <div className="overflow-x-auto flex justify-center">
            <table className="w-1/2 table-auto border border-gray-400 text-center text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-400 px-4 py-2">
                    เวลาใน 1 วัน
                  </th>
                  <th className="border border-gray-400 px-4 py-2">
                    ประสิทธิภาพผลิตไฟ (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">🔶 07:00–09:00</td>
                  <td className="border px-4 py-2">~30–50%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">🔶🔶 10:00–14:00</td>
                  <td className="border px-4 py-2">~80–100% (ช่วงพีก)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">🔶 15:00–17:00</td>
                  <td className="border px-4 py-2">~50–70%</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">🔶 หลัง 17:00</td>
                  <td className="border px-4 py-2">&lt;10% (ลดลงอย่างมาก)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Return on Investment Table */}
        <div className="mb-10">
          <h2 className="text-center font-semibold mb-4">
            ระยะเวลาคืนทุนโดยประมาณ
          </h2>
          <div className="overflow-x-auto flex justify-center">
            <table className="w-2/3 table-auto border border-gray-400 text-center text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">ขนาดระบบ</th>
                  <th className="border px-4 py-2">คืนทุนเมื่อใช้กับบ้าน</th>
                  <th className="border px-4 py-2">คืนทุนเมื่อใช้กับ EV</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">2-3 kW</td>
                  <td className="border px-4 py-2">6-8 ปี</td>
                  <td className="border px-4 py-2">5-6 ปี</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">5 kW</td>
                  <td className="border px-4 py-2">6-7 ปี</td>
                  <td className="border px-4 py-2">5 ปี</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">10 kW</td>
                  <td className="border px-4 py-2">7-8 ปี</td>
                  <td className="border px-4 py-2">5-6 ปี</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Selection Form */}
        <SolarSelector />
      </div>
    </>
  );
}

export default RecommendPage;
