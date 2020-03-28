const logger = require('../util/logger.js');
var sql = require("mssql");
// config for your database
var config = {
    user: 'sa',
    password: 'P@d0rU123',
    server: '167.71.200.91',
    database: 'pDB'
};

var err = sql.connect(config)
if (err) console.log(err);

class request {
    async getAll(req) {
        var message
        var request = new sql.Request();
        var command = await request.query(`SELECT HNID, Firstname, Lastname
        FROM pDB.dbo.Patients `)

        logger.debug(command.recordset);
        message ={
                status_Code: 200,
                status: "success",
                message: command
                }
        return [200, message];
    }
    async getHospital(req) {
        var message
        var request = new sql.Request();
        var command = await request.query(`SELECT Firstname, Lastname
        FROM pDB.dbo.Patients
        WHERE HID = ${req.HID}`);
        logger.debug(command.recordset);
        message ={
                status_Code: 200,
                status: "success",
                message: command.recordset
                }
        return [200, message];
    }
    async top3(req) {
        var message;
        var request = new sql.Request();
        var command = await request.query(`SELECT TOP 3 HID
        FROM pDB.dbo.Patients
        ORDER BY HID ASC`);
        logger.debug(command.recordset);
        message ={
                status_Code: 200,
                status: "success",
                message: command.recordset
                }
        return [200, message];
    }

}
module.exports = request
// WHERE account_number = ${req.account_number} AND pin =${req.pin} `);