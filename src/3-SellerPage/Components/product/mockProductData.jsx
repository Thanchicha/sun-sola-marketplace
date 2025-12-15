const mockProductDataList = {
  100: [
    {
      Name: "แผงโซล่าเซลล์ LONGi 635w N-type BIFACIAL",
      Detail: `- Maximum power(Pmax): 635W
- Open Circuit Voltage(Voc): 57.39V
- Short Circuit Current(Isc): 13.97A
- Operating Voltage(Vmp): 48.15V
- Operating Current(Imp): 13.19A
- Dimensions: 2465x1134x30mm`,
      Price: 2585,
      Image: "/images/seller/product1.png",
    },
    {
      Name: "แผงโซล่าเซลล์ Jinko 580w N-type Mono half cell",
      Detail: `- Maximum power(Pmax): 580W
- Open Circuit Voltage(Voc): 52.31V
- Short Circuit Current(Isc): 14.01A
- Operating Voltage(Vmp): 43.35V
- Operating Current(Imp): 13.38A
- Dimensions: 2278x1134x30mm`,
      Price: 2640,
      Image: "/images/seller/product2.png",
    },
    {
      Name: "แผงโซล่าเซลล์ JA 625W N-type BIFACIAL",
      Detail: `- Maximum power(Pmax): 625w
- Open Circuit Voltage(Voc): 52.77V
- Short Circuit Current(Isc): 15.16A
- Operating Voltage(Vmp): 43.71V
- Operating Current(Imp): 14.30A
- Dimensions: 2465x1134x35mm`,
      Price: 2545,
      Image: "/images/seller/product3.png",
    },
  ],
  101: [
    {
      Name: "แผงโซล่าเซลล์ LONGi 635w N-type BIFACIAL",
    Detail: `- Maximum power(Pmax): 635W
- Open Circuit Voltage(Voc): 57.39V
- Short Circuit Current(Isc): 13.97A
- Operating Voltage(Vmp): 48.15V
- Operating Current(Imp): 13.19A
- Dimensions: 2465x1134x30mm`,
    Price: 2585,
      Image: "/images/allshop/thlgfjlgh.jpg",
    },
    {
      Name: "แผงโซล่าเซลล์ Jinko Tiger Neo 560W N-type",
    Detail: `- Maximum power(Pmax): 560W
- Efficiency: 22.26%
- Open Circuit Voltage(Voc): 50.1V
- Short Circuit Current(Isc): 13.91A
- Dimensions: 2278x1134x30mm`,
    Price: 2390,
      Image: "/images/allshop/jqftggikh.jpg",
    },
    {
      Name: "อินเวอร์เตอร์ Huawei SUN2000-10KTL-M1",
    Detail: `- Output Power: 10kW
- Max Efficiency: 98.6%
- Number of MPPTs: 2
- Communication: RS485, Wi-Fi
- Dimensions: 525x470x166mm`,
    Price: 3250,
      Image: "/images/allshop/qpkjhmnfd.jpg",
    },
  ],
  102: [
    {
      Name: "แผงโซล่าเซลล์ Canadian Solar HiKu7 660W",
    Detail: `- Power Output: 660W
- Cell Type: Monocrystalline
- Voc: 44.3V
- Isc: 15.1A
- Dimensions: 2384x1303x35mm`,
    Price: 2690,
      Image: "/images/allshop/thlgfjlgh.jpg",
    },
    {
      Name: "โครงเหล็กติดตั้งโซล่าเซลล์แบบปรับมุม",
    Detail: `- วัสดุ: อลูมิเนียมอัลลอย
- รองรับแผง: 1-2 แผง
- ปรับมุมได้: 15° - 45°
- ใช้งาน: หลังคาลอน, พื้นดิน`,
    Price: 1850,
      Image: "/images/allshop/jqftggikh.jpg",
    },
    {
      Name: "Smart Meter Growatt TPM-E",
    Detail: `- Measurement: 3-phase
- Communication: RS485
- Accuracy: Class 1
- Installation: DIN Rail`,
    Price: 5500,
      Image: "/images/allshop/qpkjhmnfd.jpg",
    }, 
  ],
  103: [
    {
      Name: "อินเวอร์เตอร์ Solis 3.6kW 1-phase",
    Detail: `- Output Power: 3.6kW
- Max Efficiency: 97.8%
- MPPT: 2 ช่อง
- น้ำหนัก: 14kg
- ขนาด: 310x543x160mm`,
    Price: 15800,
      Image: "/images/allshop/thlgfjlgh.jpg",
    },
    {
      Name: "Hybrid Inverter DEYE SUN-8K-SG04LP3",
    Detail: `- Output: 8kW
- Battery Input: 48V
- Efficiency: 97.6%
- รองรับ PV สูงสุด 10400W
- ขนาด: 455x565x181mm`,
    Price: 42900,
      Image: "/images/allshop/jqftggikh.jpg",
    },
    {
      Name: "กล่องกันน้ำ MC4 พร้อมฟิวส์ 1000V",
    Detail: `- กันน้ำระดับ: IP67
- รองรับแรงดัน: สูงสุด 1000V DC
- รวมฟิวส์: 15A
- ช่องเชื่อมต่อ: 4 ช่อง`,
    Price: 490,
      Image: "/images/allshop/qpkjhmnfd.jpg",
    }, 
  ],
  104: [
    {
      Name: "แผงโซล่าเซลล์ Mono 450W Half-Cell",
    Detail: `- Maximum Power: 450W  
- Efficiency: 20.5%  
- Voltage at Pmax: 41.2V  
- Current at Pmax: 10.93A  
- Dimensions: 2108x1048x35mm`,
    Price: 4890,
      Image: "/images/allshop/thlgfjlgh.jpg",
    },
    {
      Name: "อินเวอร์เตอร์ Growatt MIN 2500TL-X",
    Detail: `- Output Power: 2.5kW  
- Efficiency: 97.4%  
- MPPT: 2 ช่อง  
- น้ำหนัก: 6.2kg  
- ขนาด: 375x350x160mm`,
    Price: 7790,
      Image: "/images/allshop/jqftggikh.jpg",
    },
    {
      Name: "แบตเตอรี่ AGM 12V 100Ah Deep Cycle",
    Detail: `- Voltage: 12V  
- Capacity: 100Ah  
- Type: AGM Deep Cycle  
- ใช้งาน: ระบบโซล่าร์, สำรองไฟ  
- น้ำหนัก: 28kg`,
    Price: 7490,
      Image: "/images/allshop/qpkjhmnfd.jpg",
    }, 
  ],
  105: [
    {
      Name: "Solar Charge Controller MPPT 60A 12/24V",
    Detail: `- Rated Current: 60A  
- Input Voltage: 12V/24V Auto  
- Display: LCD  
- Efficiency: >98%  
- รองรับระบบแบตเตอรี่หลายชนิด`,
    Price: 2690,
      Image: "/images/allshop/thlgfjlgh.jpg",
    },
    {
      Name: "แบตเตอรี่ลิเธียม LiFePO4 12V 50Ah",
    Detail: `- Voltage: 12.8V  
- Capacity: 50Ah  
- Long cycle life: 4000+  
- น้ำหนักเบาและปลอดภัย  
- เหมาะสำหรับระบบโซลาร์พกพา`,
    Price: 6850,
      Image: "/images/allshop/jqftggikh.jpg",
    },
    {
      Name: "อินเวอร์เตอร์ Pure Sine Wave 1000W 12V",
    Detail: `- Continuous Output: 1000W  
- Surge: 2000W  
- Output: 220V AC  
- USB + AC Sockets  
- ระบบป้องกันครบวงจร`,
    Price: 3150,
      Image: "/images/allshop/qpkjhmnfd.jpg",
    }, 
  ],
  106: [
    {
      Name: "โคมไฟถนนโซล่าเซลล์ 200W พร้อมรีโมท",
    Detail: `- Power: 200W  
- Solar Panel: Poly 6V  
- Battery: Li-ion 3.2V  
- Sensor: Motion + Light  
- รีโมทควบคุม + ขาตั้ง`,
    Price: 1290,
      Image: "/images/allshop/thlgfjlgh.jpg",
    },
    {
      Name: "พัดลมโซล่าเซลล์ 18 นิ้ว DC 12V",
    Detail: `- ใบพัดขนาด 18 นิ้ว  
- ใช้ไฟ DC 12V จากแบตเตอรี่  
- เหมาะสำหรับใช้ในฟาร์ม/บ้าน  
- ใช้งานต่อเนื่อง 6-8 ชม.`,
    Price: 2490,
      Image: "/images/allshop/jqftggikh.jpg",
    },
    {
      Name: "ปั๊มน้ำพลังงานแสงอาทิตย์ 12V DC 60W",
    Detail: `- แรงดันไฟฟ้า: 12V DC  
- กำลังไฟ: 60W  
- สูบน้ำลึก 5-7 เมตร  
- เหมาะสำหรับรดน้ำ/เกษตร  
- ท่อเข้า/ออก: 1 นิ้ว`,
    Price: 1390,
      Image: "/images/allshop/qpkjhmnfd.jpg",
    }, 
  ],
  107: [
    {
      Name: "ระบบแผงโซล่าเซลล์พร้อมแบตเตอรี่ขนาดเล็ก",
    Detail: `- แผง 30W + แบตเตอรี่ Li-ion  
- USB Output สำหรับชาร์จมือถือ  
- ไฟ LED 3 หลอด  
- เหมาะสำหรับบ้านพักชั่วคราว/เดินป่า`,
    Price: 1890,
      Image: "/images/allshop/thlgfjlgh.jpg",
    },
    {
     Name: "แผงโซล่าเซลล์ Trina Solar 670W Bifacial",
    Detail: `- Maximum Power: 670W  
- Cell Type: Mono PERC Bifacial  
- Efficiency: 21.6%  
- Voltage at Pmax: 38.5V  
- Current at Pmax: 17.4A  
- Dimensions: 2384x1303x35mm`,
    Price: 9250,
      Image: "/images/allshop/jqftggikh.jpg",
    },
    {
     Name: "อินเวอร์เตอร์ Huawei SUN2000-5KTL-M1",
    Detail: `- Output Power: 5,000W  
- MPPT: 2 ช่อง  
- รองรับแบตเตอรี่สำรองพลังงาน  
- Smart Monitoring via App  
- ประสิทธิภาพสูงสุด 98.4%`,
    Price: 34900,
      Image: "/images/allshop/qpkjhmnfd.jpg",
    }, 
  ],
  108: [
    {
      Name: "ชุดโซล่าเซลล์ 3kW พร้อมติดตั้งครบชุด",
    Detail: `- แผงโซล่า 6 แผง (500W)  
- อินเวอร์เตอร์ Hybrid 3kW  
- ตู้เบรกเกอร์ + อุปกรณ์ป้องกัน  
- ติดตั้งพร้อมใช้งาน  
- รับประกัน 10 ปี`,
    Price: 79000,
      Image: "/images/allshop/thlgfjlgh.jpg",
    },
    {
      Name: "แบตเตอรี่ลิเธียม LiFePO4 48V 200Ah",
    Detail: `- Voltage: 48V  
- Capacity: 200Ah  
- Cycle life: >6000  
- Smart BMS ในตัว  
- ใช้กับระบบ Hybrid/Inverter`,
    Price: 88000,
      Image: "/images/allshop/jqftggikh.jpg",
    },
    {
      Name: "อินเวอร์เตอร์ Hybrid Victron MultiPlus-II 48/5000/70",
    Detail: `- Continuous Output: 5,000VA  
- Battery Charger: 70A  
- Grid Interactive (On/Off-grid)  
- รองรับระบบ Lithium  
- เชื่อมต่อผ่าน Victron VRM`,
    Price: 67500,
      Image: "/images/allshop/qpkjhmnfd.jpg",
    }, 
  ],
};

export default mockProductDataList;
