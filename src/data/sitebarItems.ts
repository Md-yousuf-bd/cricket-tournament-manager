import {
  FaHome,
  FaTrophy,
  FaUsers,
  FaUserFriends,
  FaCalendarAlt,
  FaChartBar,
} from "react-icons/fa";


export const sidebarItems = [
  {
    id: 1,
    title: "Dashboard",
    path: "/",
    icon: FaHome,
  },
  {
    id: 2,
    title: "Tournament",
    path: "/tournament",
    icon: FaTrophy,
  },
  {
    id: 3,
    title: "Teams",
    path: "/teams",
    icon: FaUsers,
  },
  {
    id: 4,
    title: "Players",
    path: "/player",
    icon: FaUserFriends,
  },
  {
    id: 5,
    title: "Matches",
    path: "/matches",
    icon: FaCalendarAlt,
  },
  {
    id: 6,
    title: "Statistics",
    path: "/statistics",
    icon: FaChartBar,
  },
];