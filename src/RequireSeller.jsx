import { Navigate, Outlet } from "react-router-dom";

function RequireSeller() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    // ยังไม่ได้ login ให้ไปหน้า login
    return <Navigate to="/login" replace />;
  }

  if (user.Role !== "seller") {
    // login แล้วแต่ไม่ใช่ seller ให้ไปหน้า Unauthorized หรือหน้าอื่น ๆ ที่คุณตั้งไว้
    return <Navigate to="/unauthorized" replace />;
  }

  // ผ่านการตรวจสอบแล้ว ให้แสดงเส้นทางลูก (child routes)
  return <Outlet />;
}

export default RequireSeller;
