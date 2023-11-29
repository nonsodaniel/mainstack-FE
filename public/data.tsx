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
    title: "Home",
    icons: <IoHomeOutline />,
  },
  {
    id: 2,
    title: "Analytics",
    icons: <TbBrandGoogleAnalytics />,
  },
  {
    id: 3,
    title: "Revenue",
    icons: <FaRegMoneyBillAlt />,
  },
  {
    id: 4,
    title: "CRM",
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
    id: "Home",
    title: "Home",
  },
  {
    id: "Features",
    title: "Features",
  },
];

export const userProfileList = [
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
  {
    amount: 500,
    metadata: {
      name: "John Doe",
      type: "digital_product",
      email: "johndoe@example.com",
      quantity: 1,
      country: "Nigeria",
      product_name: "Rich Dad Poor Dad",
    },
    payment_reference: "c3f7123f-186f-4a45-b911-76736e9c5937",
    status: "successful",
    type: "deposit",
    date: "2022-03-03",
  },
  {
    amount: 400,
    metadata: {
      name: "Fibi Brown",
      type: "coffee",
      email: "fibibrown@example.com",
      quantity: 8,
      country: "Ireland",
    },
    payment_reference: "d28db158-0fc0-40cd-826a-4243923444f7",
    status: "successful",
    type: "deposit",
    date: "2022-03-02",
  },
  {
    amount: 350.56,
    metadata: {
      name: "Delvan Ludacris",
      type: "webinar",
      email: "johndoe@example.com",
      quantity: 1,
      country: "Kenya",
      product_name: "How to build an online brand",
    },
    payment_reference: "73f45bc0-8f41-4dfb-9cae-377a32b71d1e",
    status: "successful",
    type: "deposit",
    date: "2022-03-01",
  },
  {
    amount: 300,
    status: "successful",
    type: "withdrawal",
    date: "2022-03-01",
  },
  {
    amount: 300,
    metadata: {
      name: "Shawn kane",
      type: "webinar",
      email: "shawnkane@example.com",
      quantity: 1,
      country: "United Kingdom",
      product_name: "Support my outreach",
    },
    payment_reference: "c22055e5-8f47-4059-a1e9-51124d325992",
    status: "successful",
    type: "deposit",
    date: "2022-02-28",
  },
  {
    amount: 200,
    status: "successful",
    type: "withdrawal",
    date: "2022-03-01",
  },
  {
    amount: 200,
    metadata: {
      name: "Ada Eze",
      type: "webinar",
      email: "adaeze1@example.com",
      quantity: 1,
      country: "Nigeria",
      product_name: "Learn how to pitch your idea",
    },
    payment_reference: "5b2988d9-395e-4a91-984b-8b02f0d12df9",
    status: "successful",
    type: "deposit",
    date: "2022-02-20",
  },
];

export const AppsData = [
  {
    image: vector1,
    message: "Link in bio",
    desc: "Manage your link in bio",
  },
  {
    image: vector2,
    message: "Store",
    desc: "Manage your store activities",
  },
  {
    image: vector4,
    message: "Media kit",
    desc: "Manage your media kit",
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
