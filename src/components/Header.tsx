import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div>
      <div className={`w-full h-[6rem] flex items-center px-[4rem] border-b-2 justify-between`}>
        <p className={`font-bold text-[1.5rem] font-serif cursor-pointer`} onClick={() => navigate("/")}>
          DooCanDoIt PortPolio
        </p>
        <p
          className={`font-bold text-[1.5rem] font-serif cursor-pointer hover:text-blue-500 duration-300`}
          onClick={() => navigate(location.pathname === "/profile" ? "/" : "/profile")}
        >
          {location.pathname === "/profile" ? "Home" : "Profile"}
        </p>
      </div>
    </div>
  );
}
