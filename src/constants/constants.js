import { Icon } from "@iconify/react";

const SIDENAV_ITEMS = [
  {
    title: "Home",
    path: "/invoice",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: "Blog",
    path: "/employee/add-blog",
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Add Blog", path: "/employee/add-blog" },
      { title: "All Blog", path: "/employee/all-blog" },
    ],
  },
];

export default SIDENAV_ITEMS;
