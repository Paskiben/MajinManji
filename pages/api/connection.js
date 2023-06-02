import mysql from "mysql2/promise"

export default async function handler(req, res) {
    const conn = await mysql.createConnection({
        host: "localhost",
        datatbase: "mapdata",
        user: "root",
        password: ""
    });
    try{

        let query = "CREATE TABLE IF NOT EXISTS mapdata.categories (id TINYINT NOT NULL AUTO_INCREMENT , name VARCHAR(32) NOT NULL, description VARCHAR(128) NOT NULL , PRIMARY KEY (id))";
        await conn.execute(query);
        query = "CREATE TABLE IF NOT EXISTS mapdata.places (id tinyint NOT NULL AUTO_INCREMENT PRIMARY KEY, name varchar(64) NOT NULL, description varchar(128) NOT NULL, latitude double NOT NULL, longitude double NOT NULL, upvotes int NOT NULL, downvotes int NOT NULL, category tinyint)";
        await conn.execute(query);
        query = "CREATE TABLE IF NOT EXISTS mapdata.comments (id tinyint NOT NULL AUTO_INCREMENT, content varchar(256) NOT NULL, timestamp datetime NOT NULL, upvotes int NOT NULL, downvotes int NOT NULL, place tinyint NOT NULL, user int NOT NULL, PRIMARY KEY (id))";
        await conn.execute(query);
        conn.end();

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

    res.status(200).json({});
}