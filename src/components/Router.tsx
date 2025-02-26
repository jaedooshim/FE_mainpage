import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./profile/views/ProfileView.tsx";
import MainPageView from "./mainpage/views/MainPageView.tsx";
import OwnView from "./own/views/OwnView.tsx";

export default function Router() {
  const routers: { path: string; element: React.ReactNode; key: string }[] = [
    {
      path: "/", // 메인페이지
      element: <MainPageView />,
      key: "mainpage",
    },
    {
      path: "/profile", // 프로필
      element: <Profile />,
      key: "profile",
    },
    {
      path: "/own", // 자기소개 페이지
      element: <OwnView />,
      key: "own",
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routers.map(({ path, element, key }) => (
          <Route path={path} element={element} key={key} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
