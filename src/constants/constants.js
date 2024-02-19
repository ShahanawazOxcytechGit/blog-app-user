import { Icon } from "@iconify/react";

const SIDENAV_ITEMS = [
  {
    title: "Home",
    path: "/invoice",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Customer",
    path: "/invoice/add-customer",
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Add Customer", path: "/invoice/add-customer" },
      { title: "All Customer", path: "/invoice/all-customer" },
    ],
  },
  {
    title: "Blog",
    path: "/invoice/add-blog",
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Add Blog", path: "/invoice/add-blog" },
      { title: "All Blog", path: "/invoice/all-blog" },
    ],
  },
];

export default SIDENAV_ITEMS;
