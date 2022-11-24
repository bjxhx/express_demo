import express from "express";
import db from "./db/index.js";
const app = express();

// 解决跨域问题
app.all("*", function (req, res, next) {
    // 设置允许跨域的域名,*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method.toLowerCase() === "options") {
        res.send(200); // 让options 尝试请求快速结束
    }
    next();

});


app.use(express.json());

function now() {
    return new Date().getTime()
}

app.post("/get", async function (req, res, next) {
    const { key } = req.body
    const start = now();
    const data = await db.get(key);
    const end = now();
    console.log(data)
    res.send({
        result: data,
        time: end - start
    })
})

app.post("/set", async function (req, res, next) {
    const { data } = req.body;
    const start = now();
    const putData = await db.put(data);
    const end = now();
    res.send({
        set: putData,
        time: end - start
    })
})

app.listen(3000, () => {
    console.log(`app listening on port ${3000}`);
});