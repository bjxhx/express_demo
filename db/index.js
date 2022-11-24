import { Deta } from "deta";
const DB_KEY = "c0b6gqzz_Xhx8xrCw4naD3JJE642MeM8DPEqx4rG2";
const deta = Deta(DB_KEY);

const db = deta.Base('testDB');

export default db;