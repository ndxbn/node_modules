import express from "express";
import * as http from "http";

import type * as net from "net";
import { AddressInfo } from "net";

export interface IApplication {
  start(): Promise<void>;
  stop(): Promise<void>;
}

export class HttpApplication implements IApplication {
  public port?: number;
  private server: http.Server;

  public constructor() {
    const expressApplication = express();

    expressApplication.get("/", (_, res) => {
      res.json("Hello! Here is ndxbn Server!");
    });

    this.server = http.createServer(expressApplication);
  }

  public start(): Promise<void> {
    const listenOption: net.ListenOptions = {
      host: "localhost",
      port: this.port ?? 0,
    };

    return new Promise((resolve) => {
      this.server.on("listening", () => {
        this.port = (this.server.address() as AddressInfo).port;
        resolve();
      });

      this.server.listen(listenOption);
    });
  }

  public stop(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.server.close(() => resolve());
    });
  }
}
