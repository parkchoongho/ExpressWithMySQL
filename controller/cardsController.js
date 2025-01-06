import mysql from "mysql";

import { databaseConfig } from "../config/database";

export const findAll = (req, res) => {
  const connection = mysql.createConnection(databaseConfig);

  connection.connect();

  let result;
  connection.query(
    `SELECT * FROM Card WHERE chapter=(SELECT chapid FROM Chapter WHERE name="${req.query.chapter}")`,
    (error, rows, fields) => {
      if (error) throw error;
      console.log(rows);
      result = rows;
    }
  );

  connection.end();
  console.log("Test");

  res.send(result);
};

export const create = (req, res) => {
  const connection = mysql.createConnection(databaseConfig);

  connection.connect();

  connection.query(
    `INSERT INTO CARD(cardid, title, description, chapter) VALUES(${1}, "CORS", "네트워크관련", ${2})`,
    (error, rows, fields) => {
      if (error) throw error;
      console.log(rows);
    }
  );

  connection.end();

  res.send("Wow!!!");
};
