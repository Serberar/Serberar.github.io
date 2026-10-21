# Lanzador de Chati

Página publicada en **https://serberar.github.io/** que sirve de lanzador de [Chati](https://github.com/Serberar/chati) en el móvil. Se instala como app (PWA) y entra en el ordenador donde Chati esté encendido.

## Cómo funciona

1. Comprueba qué ordenadores de la lista tienen Chati encendido (llama a su `/health`).
2. Si solo hay uno, entra directamente; si hay varios, deja elegir.
3. Opcionalmente activa los **avisos push**: un *service worker* por ordenador (`avisos/sw.js`) muestra las notificaciones de Chati aunque la app esté cerrada.

Los ordenadores se alcanzan por una red privada de Tailscale, así que el lanzador solo funciona desde los dispositivos autorizados.

## Archivos

- `index.html`: el lanzador.
- `manifest.webmanifest` e iconos: instalación como app.
- `avisos/sw.js`: service worker de las notificaciones.

## Autor

Sergio Bernabé
