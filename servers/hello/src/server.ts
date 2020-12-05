// entry point as server process
import { HttpApplication } from "./";

const app = new HttpApplication();
app.port = 8000;

app.start();
