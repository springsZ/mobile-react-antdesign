import Home from "./views/Home"
import Me from "./views/Me"

import { AppOutline, UserOutline } from "antd-mobile-icons"

export const tabs = [
  {
    key: "/home",
    title: "首页",
    icon: <AppOutline />,
    element: <Home />,
  },
  {
    key: "/me",
    title: "我的",
    icon: <UserOutline />,
    element: <Me />,
  },
]
