import React, { useState } from "react";

const SolarSelector = () => {
  const [selectedType, setSelectedType] = useState("บ้าน");
  const [formData, setFormData] = useState({
    houseSize: "",
    residents: "",
    electricBill: "",
    carType: "",
    usageType: "",
    carBill: "",
  });

  const [result, setResult] = useState(null);
  const [recommendedPanelType, setRecommendedPanelType] = useState(""); // State for recommended panel type

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const parseBillValue = (value) => {
    const cleaned = value.replace(/[, บาท]/g, "").trim();

    if (cleaned.includes("น้อยกว่า")) {
      const match = cleaned.match(/\d+/);
      return match ? parseInt(match[0]) - 1 : 0;
    }
    if (cleaned.includes("มากกว่า")) {
      const match = cleaned.match(/\d+/);
      return match ? parseInt(match[0]) + 1 : 0;
    }

    const nums = cleaned.match(/\d+/g);
    if (nums && nums.length === 2) {
      return (parseInt(nums[0]) + parseInt(nums[1])) / 2;
    } else if (nums && nums.length === 1) {
      return parseInt(nums[0]);
    }
    return 0;
  };

  const getAdjustedMonthlyBill = () => {
    let baseBill = 0;

    if (selectedType === "บ้าน") {
      baseBill = parseBillValue(formData.electricBill);

      // Adjust based on house size (example: +/- 10% from average)
      if (formData.houseSize.includes("เล็ก")) baseBill *= 0.9;
      else if (formData.houseSize.includes("ใหญ่")) baseBill *= 1.1;
      // For "บ้านกลาง" or empty, it's neutral (multiplied by 1)

      // Adjust based on residents (example: +/- 5% from average)
      if (formData.residents.includes("1-2")) baseBill *= 0.95;
      else if (formData.residents.includes("5")) baseBill *= 1.05;
      // For "3-4 คน" or empty, it's neutral
    } else {
      // selectedType === "รถยนต์"
      baseBill = parseBillValue(formData.carBill);
      // For EV charging, we assume carBill already reflects the total bill including EV charging.
      // The `usageType` will primarily influence `sunHours` / `derate`.
    }
    return Math.max(0, baseBill); // Ensure bill is not negative
  };

  const calculateSystem = (
    monthlyBill,
    type, // "บ้าน" or "รถยนต์"
    usageType = null, // relevant for "รถยนต์"
    ratePerUnit = 4.2,
    sunHours = 4.5,
    derate = 0.8,
    panelWatt = 410, // Default to a modern Mono panel wattage
    costPerkW = 45000
  ) => {
    if (monthlyBill <= 0) {
      return {
        actual: 0,
        panels: 0,
        monthlyProd: 0,
        savings: 0,
        totalCost: 0,
        payback: Infinity,
      };
    }

    let effectiveSunHours = sunHours;
    let effectiveDerate = derate;

    // Adjust sunHours/derate based on car usage type if selectedType is "รถยนต์"
    if (type === "รถยนต์" && usageType) {
      if (usageType === "ชาร์จที่บ้านตอนกลางวัน") {
        effectiveSunHours = 5.0; // Higher utilization of solar during peak sun
        effectiveDerate = 0.85; // Better efficiency as power is consumed directly
      } else if (usageType === "ชาร์จที่บ้านตอนกลางคืน") {
        effectiveSunHours = 4.0; // Solar can't directly charge at night, so production mainly offsets daytime household use
        effectiveDerate = 0.75; // Overall efficiency might be lower for EV specific offset
      } else if (usageType === "มีที่ทำงานให้ชาร์จฟรี") {
        effectiveSunHours = sunHours;
        effectiveDerate = derate;
      }
    }

    const monthlyKWhNeeded = monthlyBill / ratePerUnit;
    const dailyKWhNeeded = monthlyKWhNeeded / 30;

    let requiredSystemKw = dailyKWhNeeded / effectiveSunHours / effectiveDerate;
    requiredSystemKw = Math.max(requiredSystemKw, 0.5); // Minimum system size (e.g., 500W)

    const panels = Math.ceil((requiredSystemKw * 1000) / panelWatt);
    const actualSystemKw = (panels * panelWatt) / 1000;

    const producedMonthlyKWh =
      actualSystemKw * effectiveSunHours * 30 * effectiveDerate;
    const monthlySaving =
      Math.min(producedMonthlyKWh, monthlyKWhNeeded) * ratePerUnit;
    const estimatedCost = actualSystemKw * costPerkW;
    const payback =
      monthlySaving > 0 ? estimatedCost / (monthlySaving * 12) : Infinity;

    return {
      actual: actualSystemKw,
      panels,
      monthlyProd: producedMonthlyKWh,
      savings: monthlySaving,
      totalCost: estimatedCost,
      payback,
    };
  };

  // NEW: Function to recommend panel type
  const getPanelRecommendation = (
    calculatedKw,
    monthlyBill,
    selectedUsageType,
    houseSize
  ) => {
    if (calculatedKw === 0) return ""; // No recommendation if no system is calculated

    // Rule-based recommendation
    let recommendation = "";

    // General efficiency and space consideration
    if (calculatedKw < 3) {
      // Smaller systems or limited space
      recommendation = "แผงชนิด Monocrystalline (โมโนคริสตัลไลน์)";
      if (monthlyBill < 2000 && !selectedUsageType) {
        // Lower bill, standard house
        recommendation +=
          " (มีประสิทธิภาพสูง เหมาะกับพื้นที่จำกัดและผู้ที่ต้องการประหยัดไฟสูงสุด)";
      }
    } else if (calculatedKw >= 3 && calculatedKw < 10) {
      // Medium to large systems
      recommendation = "แผงชนิด Monocrystalline (โมโนคริสตัลไลน์)";
      if (monthlyBill >= 2000 && monthlyBill <= 4000) {
        recommendation +=
          " (เหมาะสำหรับบ้านส่วนใหญ่ ให้ประสิทธิภาพดี คืนทุนคุ้มค่า)";
      }
    } else {
      // Very large systems or high consumption
      recommendation = "แผงชนิด Monocrystalline (โมโนคริสตัลไลน์)";
      recommendation +=
        " (แนะนำสำหรับระบบขนาดใหญ่ เพื่อประสิทธิภาพสูงสุดและประหยัดค่าไฟได้มาก)";
    }

    // Specific adjustments based on usage type (if car)
    if (selectedUsageType === "ชาร์จที่บ้านตอนกลางวัน") {
      recommendation = "แผงชนิด Monocrystalline (โมโนคริสตัลไลน์)";
      recommendation +=
        " (ประสิทธิภาพสูงเป็นสิ่งสำคัญ เพื่อให้การชาร์จรถยนต์ EV ในเวลากลางวันเป็นไปอย่างเต็มที่)";
    } else if (
      selectedUsageType === "ชาร์จที่บ้านตอนกลางคืน" ||
      selectedUsageType === "มีที่ทำงานให้ชาร์จฟรี"
    ) {
      // If EV charging isn't directly from solar during the day, focus on overall home consumption
      // Mono is still generally preferred for efficiency and space
      recommendation = "แผงชนิด Monocrystalline (โมโนคริสตัลไลน์)";
      recommendation +=
        " (ยังคงแนะนำเพื่อประสิทธิภาพที่ดีที่สุดสำหรับภาพรวมการใช้ไฟในบ้าน)";
    }

    // Consider Polycrystalline for budget or large space if not EV related strongly
    // This is a simplified rule; in a real scenario, user might choose based on budget
    // if (monthlyBill < 2000 && !selectedUsageType && houseSize.includes("บ้านใหญ่")) { // Low bill, large house = might prioritize budget
    //     recommendation = "แผงชนิด Polycrystalline (โพลีคริสตัลไลน์)";
    //     recommendation += " (ราคาคุ้มค่า เหมาะสำหรับผู้ที่มีงบประมาณจำกัดและมีพื้นที่ติดตั้งเพียงพอ)";
    // }

    return recommendation;
  };

  const handleSubmit = () => {
    // Check if all necessary fields are selected
    if (
      selectedType === "บ้าน" &&
      (!formData.houseSize || !formData.residents || !formData.electricBill)
    ) {
      alert(
        "กรุณาเลือกข้อมูลขนาดบ้าน, จำนวนผู้อาศัย และค่าไฟฟ้าต่อเดือนให้ครบถ้วน"
      );
      setResult(null);
      setRecommendedPanelType(""); // Clear recommendation
      return;
    }
    if (
      selectedType === "รถยนต์" &&
      (!formData.carType || !formData.usageType || !formData.carBill)
    ) {
      alert(
        "กรุณาเลือกข้อมูลรถยนต์, ลักษณะการใช้งาน และค่าไฟฟ้าต่อเดือนให้ครบถ้วน"
      );
      setResult(null);
      setRecommendedPanelType(""); // Clear recommendation
      return;
    }

    const bill = getAdjustedMonthlyBill();

    if (bill <= 0) {
      alert("ไม่สามารถคำนวณได้ กรุณาเลือกค่าไฟฟ้าต่อเดือนที่ถูกต้อง");
      setResult(null);
      setRecommendedPanelType(""); // Clear recommendation
      return;
    }

    const calculatedResult = calculateSystem(
      bill,
      selectedType,
      formData.usageType
    );
    setResult(calculatedResult);

    // Get and set panel recommendation
    const recommendation = getPanelRecommendation(
      calculatedResult.actual,
      bill, // Use the adjusted bill
      formData.usageType,
      formData.houseSize
    );
    setRecommendedPanelType(recommendation);
  };

  return (
    <div className="mb-6">
      <h2 className="font-semibold mb-4">
        Solar Cell ที่เหมาะสำหรับบ้านหรือรถยนต์ของคุณ
      </h2>

      <div className="flex mb-4">
        <button
          onClick={() => {
            setSelectedType("บ้าน");
            setResult(null); // Clear previous result on type change
            setRecommendedPanelType(""); // Clear recommendation
          }}
          className={`px-4 py-2 rounded-l ${
            selectedType === "บ้าน" ? "bg-gray-400" : "bg-gray-200"
          }`}
        >
          บ้าน
        </button>
        <button
          onClick={() => {
            setSelectedType("รถยนต์");
            setResult(null); // Clear previous result on type change
            setRecommendedPanelType(""); // Clear recommendation
          }}
          className={`px-4 py-2 rounded-r ${
            selectedType === "รถยนต์" ? "bg-gray-400" : "bg-gray-200"
          }`}
        >
          รถยนต์
        </button>
      </div>
      <div className="flex gap-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mb-6 ">
          {selectedType === "บ้าน" ? (
            <>
              <div>
                <label className="block font-medium mb-1">ขนาดบ้าน</label>
                <select
                  name="houseSize"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.houseSize}
                  onChange={handleChange}
                >
                  <option value="">-- เลือก --</option>
                  <option>บ้านเล็ก (30-50 ตร.ม.)</option>
                  <option>บ้านกลาง (100-150 ตร.ม.)</option>
                  <option>บ้านใหญ่ (180-250 ตร.ม.)</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">จำนวนผู้อาศัย</label>
                <select
                  name="residents"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.residents}
                  onChange={handleChange}
                >
                  <option value="">-- เลือก --</option>
                  <option>1-2 คน</option>
                  <option>3-4 คน</option>
                  <option>5 คนขึ้นไป</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">
                  ค่าไฟฟ้าต่อเดือน
                </label>
                <select
                  name="electricBill"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.electricBill}
                  onChange={handleChange}
                >
                  <option value="">-- เลือก --</option>
                  <option>น้อยกว่า 2,000 บาท</option>
                  <option>2,000-4,000 บาท</option>
                  <option>มากกว่า 4,000 บาท</option>
                </select>
              </div>
            </>
          ) : (
            <>
              <div>
                <label className="block font-medium mb-1">รถยนต์</label>
                <select
                  name="carType"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.carType}
                  onChange={handleChange}
                >
                  <option value="">-- เลือก --</option>
                  <option>รถยนต์ EV 1 คัน</option>
                  <option>รถยนต์ EV 2 คัน</option>
                  <option>รถยนต์ EV 3 คัน</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">
                  ลักษณะการใช้งาน
                </label>
                <select
                  name="usageType"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.usageType}
                  onChange={handleChange}
                >
                  <option value="">-- เลือก --</option>
                  <option>ชาร์จที่บ้านตอนกลางวัน</option>
                  <option>ชาร์จที่บ้านตอนกลางคืน</option>
                  <option>มีที่ทำงานให้ชาร์จฟรี</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">
                  ค่าไฟฟ้าต่อเดือน
                </label>
                <select
                  name="carBill"
                  className="w-full border px-3 py-2 rounded"
                  value={formData.carBill}
                  onChange={handleChange}
                >
                  <option value="">-- เลือก --</option>
                  <option>น้อยกว่า 1,500 บาท</option>
                  <option>1,500–3,000 บาท</option>
                  <option>มากกว่า 3,000 บาท</option>
                </select>
              </div>
            </>
          )}
        </div>

        <div className="flex mb-4 items-center">
          <button
            onClick={handleSubmit}
            className="bg-[#193c76] text-white text-base w-[158px] h-[50px] rounded-full shadow-md"
          >
            Submit
          </button>
        </div>
      </div>
      {result && (
        <div className="bg-green-100 p-4 rounded">
          <h3 className="font-semibold text-lg mb-2">ระบบที่แนะนำ: </h3>
          <p>ขนาดระบบที่เหมาะสม: {result.actual.toFixed(2)} kW</p>
          <p>จำนวนแผงโซลาร์เซลล์: {result.panels} แผง</p>
          <p>ผลิตไฟฟ้าได้ประมาณ {result.monthlyProd.toFixed(0)} kWh/เดือน</p>
          <p>ประหยัดค่าไฟได้ประมาณ {result.savings.toFixed(0)} บาท/เดือน</p>
          <p>ราคาติดตั้งโดยประมาณ: {result.totalCost.toLocaleString()} บาท</p>
          <p>ระยะเวลาคืนทุน: {result.payback.toFixed(1)} ปี</p>
          {result.payback === Infinity && (
            <p className="text-red-500">
              *ไม่สามารถคำนวณระยะเวลาคืนทุนได้ เนื่องจากไม่มีการประหยัดค่าไฟ
              (หรือค่าไฟที่ใช้ต่ำมาก)
            </p>
          )}

          {recommendedPanelType && (
            <div className="mt-4 border-t pt-4">
              <h3 className="font-semibold text-lg mb-2">
                แนะนำประเภทแผงโซลาร์เซลล์:
              </h3>
              <p className="">
                จากข้อมูลที่ให้มา ระบบของคุณ{recommendedPanelType}
                <br />
                โดยทั่วไป แผง Monocrystalline เหมาะสำหรับประเทศไทย
                เนื่องจากมีประสิทธิภาพสูงและทนทาน ในขณะที่ Polycrystalline
                มีราคาถูกกว่าแต่ต้องการพื้นที่มากกว่า และ Thin Film
                เหมาะกับการใช้งานเฉพาะทาง
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SolarSelector;
