interface ServerConfig {
  port: number;
  env: "development" | "production";
}

function startServer(config: ServerConfig): void {
  console.log(`🚀 Server starting on port ${config.port} in ${config.env} mode...`);
}

startServer({ port: 3000, env: "development" });
startServer({ port: 5000, env: "production" });