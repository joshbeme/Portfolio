const { createServer } = require("http");
const WebSocket = require("ws");
const { parse } = require("url");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => handle(req, res));
  const wss = new WebSocket.Server({ noServer: true });
  wss.on("connection", (ws) => {
    console.log("WebSocket connection established");
  });
  wss.on("error", (err) => console.error(err));
  server.on("connection", (ws) => {
    console.log("incoming connection", wss.clients.size);

    wss.on("message", (message) => {
      console.log("received: %s", message);
      setTimeout(() => ws.send(`echo: ${message}`), 1000);
    });

    wss.onclose = () => {
      console.log("connection closed", wss.clients.size);
    };
  });

  server.on("upgrade", function (req, socket, head) {
    const { pathname } = parse(req.url, true);
    if (pathname !== "/_next/webpack-hmr") {
      wss.handleUpgrade(req, socket, head, function done(ws) {
        ws.onerror = (err) => console.error(err);
        console.log("WebSocket connection established");
      });
    }
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(
      `> Ready on http://localhost:${port} and ws://localhost:${port}`
    );
  });
});
