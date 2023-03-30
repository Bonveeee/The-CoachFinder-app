const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/home", component: () => import("pages/IndexPage.vue") },
      {
        path: "/coaches",
        component: () => import("pages/CoachesPage.vue"),
        
      },
      {
        path: "/coaches/:id",
        component: () => import("components/CoachDetail.vue"),
        props: true,
        children: [
          {
            path: "/coaches/:id/contact",
            component: () => import("components/ContactCoach.vue"), //contact/c1/contact
          },
        ],
      },
      {
        path: "/players",
        component: () => import("pages/PlayersPage.vue"),
      },
      {
        path: "/events",
        component: () => import("pages/EventsPage.vue"),
      },
      {
        path: "/login",
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "/about",
        component: () => import("pages/AboutPage.vue"),
      },
      {
        path: "/requests",
        component: () => import("pages/RequestsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];
export default routes;
