const db = require("../db");

class PrinterController{

      async getAllPrinter(req, res) {
        const printers = await db.query(`SELECT * FROM printers`)
        res.json(printers.rows)
      }
    
      async getOnePrinter(req, res) {
        const id = req.params.id;
        const onePrinter = await db.query(
          `SELECT * FROM printers WHERE printers.id = $1`,
          [id]
        );
        res.json(onePrinter.rows[0]);
      }

      async getPrinters(req, res) {
        const {  typePrinter,sortPrinters, searchPrinters } = req.query;
        let query = "SELECT * FROM printers ";
        if (typePrinter !== "" || searchPrinters !== "") {
            query += " WHERE ";

            query +=` LOWER(type) LIKE LOWER('%${typePrinter}%') `;

            query += ` AND LOWER(title) LIKE LOWER('%${searchPrinters}%') `;
        }

        if (sortPrinters !== "") {
            query += ` ORDER BY ${sortPrinters} `;
        }

        const sortedStadiums = await db.query(query);
        res.json(sortedStadiums.rows);
    }

    
    
}
module.exports = new PrinterController();