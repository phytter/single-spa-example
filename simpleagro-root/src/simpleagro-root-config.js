import { registerApplication, start } from "single-spa";

fetch("https://simpleagro.fra1.digitaloceanspaces.com/applications.json")
  .then((res) => res.json())
  .then((res) => {
    res.applications.forEach((app) => (
      registerApplication({
        name: app.name,
        app: () => System.import(app.package),
        activeWhen: app.exact ? (location) => location.pathname === app.activeWhen : [app.activeWhen]
      })
    ))
  })
  .finally(() => {
    start({
      urlRerouteOnly: true,
    });
  })

