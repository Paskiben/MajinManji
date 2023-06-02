import mysql from "mysql2/promise"

export default async function handler(req, res) {
    const conn = await mysql.createConnection({
        host: "localhost",
        datatbase: "mapdata",
        user: "root",
        password: ""
    });
    try{

        const query = "SELECT * FROM mapdata.places";
        const [data] = await conn.execute(query);
        conn.end();

        res.status(200).json({result: data});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

    //res.status(200).json({});
}