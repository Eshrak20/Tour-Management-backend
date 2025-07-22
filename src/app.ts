import cors from "cors";
import express, { Response } from "express";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import { router } from "./app/routes";

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/v1", router)

app.get("/", (res: Response) => {
    res.status(200).json({
        message: "Welcome to Programming Hero Sey level er project -- Tour Man"
    })
})


app.use(globalErrorHandler)

app.use(notFound)

export default app