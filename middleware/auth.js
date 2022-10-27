export default function ({ app, route, store, redirect }) {
  //admin login token
  let adminLoginToken = app.$cookies.get("adminLoginToken");

  if (typeof adminLoginToken == "undefined") {
    adminLoginToken = "";
  }

  // if (
  //   (route.name === "index" && adminLoginToken !== undefined) ||
  //   adminLoginToken !== ""
  // ) {
  //   redirect("/login");
  // }
}
