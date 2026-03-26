import { app } from "./server.js"
import dotenv from 'dotenv'

dotenv.config();

const PORT = parseInt(process.env.PORT) || 8080

app.listen(PORT, () => {
    console.log(`⚙️ Server is running at PORT ${PORT}`)
})