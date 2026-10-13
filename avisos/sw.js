// Avisos de Chati en el icono del lanzador: uno de estos por ordenador
// (alcance avisos/<ordenador>/), cada uno suscrito con la clave de su Chati.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));

self.addEventListener("push", (event) => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch (e) { data = { title: "Chati", body: event.data && event.data.text() }; }
  // el iPhone exige enseñar un aviso por cada push (si no, quita el permiso)
  event.waitUntil(self.registration.showNotification(data.title || "Chati", {
    body: data.body || "", tag: data.tag || "chati", icon: "/icon-192.png", badge: "/icon-192.png",
  }));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil((async () => {
    const wins = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const w of wins) {
      if ("focus" in w) return w.focus();
    }
    return self.clients.openWindow("/");  // el lanzador: entra en el ordenador encendido
  })());
});
