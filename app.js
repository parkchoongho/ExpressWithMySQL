import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import cardsRouter from "./routes/cardsRouter";

const app = express();

app.use(helmet());
app.use(morgan("dev"));

app.use("/api/cards", cardsRouter);

const PORT = 3000;

const handleListening = () => console.log(`Listening On PORT: ${PORT}`);

app.listen(PORT, handleListening);
