const db = require("../db");

class PrinterController{
    async createPrinter(req, res) {
        const { title, price, type } = req.body;
        const newPrinter = await db.query(`INSERT INTO printers (title, price, type) VALUES ($1, $2, $3) ;`, [title, price, type]);
        const allPrinters = await db.query(`SELECT * FROM printers`);
        
        res.json(allPrinters.rows);
      }

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

      async getPrinters(id=0) {
        query = `SELECT * FROM printers`;
        if( id ) {
          query += `WHERE printers.id = $1`;
        }

        const onePrinter = await db.query(
          `SELECT * FROM printers WHERE printers.id = $1`,
          [id]
        );

      }
    
      async getSortedPrinter(req, res) {
        const sortedPrinters = await db.query(
            `SELECT * FROM printers ORDER BY price`
          );
          res.json(sortedPrinters.rows);
      }
    
      async updatePrinter(req, res) {
        const { id, title, price,  type } = req.body;
        const updatePrinter = await db.query(
          `UPDATE printers SET title = $1, price = $2, type = $3 WHERE id = $4 RETURNING *`,
          [title, price, type, id]
        );
        res.json(updatePrinter.rows[0]);
      }
    
      async deletePrinter(req, res) {
        const id = req.params.id;
    const deletePrinter = await db.query(
      `DELETE FROM printers WHERE printers.id = $1`,
      [id]
    );
    res.json(deletePrinter.rows[0]);
  
      }
    
}
module.exports = new PrinterController();