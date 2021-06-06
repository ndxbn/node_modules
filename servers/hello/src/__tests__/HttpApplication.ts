import { HttpApplication } from "../";
import * as http from "http";

describe("happy path", () => {
  test("request and response", async (done) => {
    const app = new HttpApplication();
    // port will be resolved automatically, and you can get via app.port after start
    await app.start();

    const assertion = (res: http.IncomingMessage) => {
      expect(res.statusCode).toBe(200);

      // tear down
      app.stop();
      done();
    };

    // act
    http
      .get(
        {
          host: "localhost",
          port: app.port,
          path: "/",
        },
        assertion
      )
      .on("error", (err) => done.fail(err))
      .end();
  });
});
