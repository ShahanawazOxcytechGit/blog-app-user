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
    icon: <Icon icon="lucide:file" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: "Add Blog", path: "/employee/add-blog" },
      { title: "All Blog", path: "/employee/all-blog" },
    ],
  },
  {
    title: "Tutorial",
    path: "/employee/tutorial",
    icon: <Icon icon="lucide:video" width="24" height="24" />,
  },
];

export default SIDENAV_ITEMS;
