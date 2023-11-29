import {
  MdOutlineSettings,
  MdOutlineHistory,
  MdOutlineAttachMoney,
  MdOutlineAddAlarm,
  MdCameraswitch,
  MdWorkspacesOutline,
} from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { GrAppsRounded } from "react-icons/gr";
import { vector1, vector2, vector3, vector4 } from ".";

export const navLinks = [
  {
    id: 1,
    title: "home",
    icons: <IoHomeOutline />,
  },
  {
    id: 2,
    title: "analytics",
    icons: <TbBrandGoogleAnalytics />,
  },
  {
    id: 3,
    title: "revenue",
    icons: <FaRegMoneyBillAlt />,
  },
  {
    id: 4,
    title: "crm",
    icons: <AiOutlineUsergroupAdd />,
  },
  {
    id: 5,
    title: "Apps",
    icons: <GrAppsRounded />,
  },
];

export const navButtons = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
];

export const userProfileData = [
  {
    icon: <MdOutlineSettings />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <MdOutlineHistory />,
    title: "Purchase History",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <MdOutlineAttachMoney />,
    title: "Refer & Earn",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
  {
    icon: <MdWorkspacesOutline />,
    title: "Integration",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
  {
    icon: <MdOutlineAddAlarm />,
    title: "Report Bug",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
  {
    icon: <MdCameraswitch />,
    title: "Switch Account",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
  {
    icon: <FiLogOut />,
    title: "Sign Out",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];

export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
];

export const transactions = [
  // ...
  {
    name: "John Doe",
    amount: "USD 100",
    status: "Successful",
    date: "April 03, 2023",
    isSuccessful: true,
    transactionType: "incoming",
  },
  {
    name: "Jane Doe",
    amount: "USD 50",
    status: "Pending",
    date: "April 03, 2023",
    isSuccessful: false,
    isPending: true,
    transactionType: "outgoing",
  },
  {
    name: "Jane Doe",
    amount: "USD 570",
    status: "Failed",
    date: "April 03, 2023",
    isSuccessful: false,
    isPending: false,
    transactionType: "outgoing",
  },
  {
    name: "Jane Doe",
    amount: "USD 500",
    status: "Successful",
    date: "April 03, 2023",
    isSuccessful: true,
    isPending: false,
    transactionType: "outgoing",
  },
  {
    name: "Jane Doe",
    amount: "USD 500",
    status: "Successful",
    date: "April 03, 2023",
    isSuccessful: true,
    isPending: false,
    transactionType: "incoming",
  },
  {
    name: "Jane Doe",
    amount: "USD 50",
    status: "Pending",
    date: "April 03, 2023",
    isSuccessful: false,
    isPending: true,
    transactionType: "outgoing",
  },
  {
    name: "John Doe",
    amount: "USD 100",
    status: "Successful",
    date: "April 03, 2023",
    isSuccessful: true,
    transactionType: "incoming",
  },
  {
    name: "Jane Doe",
    amount: "USD 500",
    status: "Successful",
    date: "April 03, 2023",
    isSuccessful: true,
    isPending: false,
    transactionType: "incoming",
  },
];

export const AppsData = [
  {
    image: vector1,
    message: "Link in bio",
    desc: "manage your link in bio",
  },
  {
    image: vector2,
    message: "Store",
    desc: "manage your store activities",
  },
  {
    image: vector4,
    message: "Media kit",
    desc: "manage your media kit",
  },
  {
    image: vector4,
    message: "Invoicing",
    desc: "Manage your invoicing",
  },
  {
    image: vector1,
    message: "Booking",
    desc: "Manage bookings",
  },
];
