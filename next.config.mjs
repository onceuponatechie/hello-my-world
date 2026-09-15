const nextConfig = {
  experimental: {
    workerThreads: process.env.NEXT_WORKER_THREADS === "1",
    useTypeScriptCli: process.env.NEXT_WORKER_THREADS !== "1",
  },
};

export default nextConfig;
