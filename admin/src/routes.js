import React from "react";

// page Imports
const Patient = React.lazy(() => import("./views/pages/Patient/PatientPages"));

const SettingsPage = React.lazy(() =>
  import("./views/pages/SettingPage/SettingPage")
);

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const PatientDetails = React.lazy(() =>
  import("./views/pages/Patient/PatientDetails")
);

const Profile = React.lazy(() => import("./views/pages/Profile/Profile"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/admin/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/admin/patient", exact: true, name: "Patients", component: Patient },
  {
    path: "/admin/patient/:id",
    exact: true,
    name: "Patient Profile",
    component: PatientDetails,
  },

  {
    path: "/admin/profile",
    name: "Profile Setting",
    component: Profile,
  },

  { path: "/admin/setting", name: "Profile Setting", component: SettingsPage },
];

export default routes;
