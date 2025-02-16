const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());

// Route mặc định khi truy cập "/"
app.get("/", (req, res) => {
    res.send("API Proxy Server đang chạy!");
});

// Route để lấy dữ liệu từ API
app.get("/random-story", async (req, res) => {
    try {
        const response = await fetch("https://wholesomelist.com/api/random");
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "Lỗi lấy dữ liệu" });
    }
});

app.listen(3000, () => console.log("Server đang chạy trên cổng 3000"));
