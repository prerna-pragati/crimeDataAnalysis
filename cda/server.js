const express = require('express');
const bodyParser = require('body-parser');
const oracledb = require('oracledb');
const url = require('url');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const makeOrCheckConn = async () => {
    let connection;
    try{
        connection = await oracledb.getConnection({ user: "katarichalusuhas", password: "zQX1bNStzg1xq0IfwYyKmCqg", 
        connectionString:"(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host="+'oracle.cise.ufl.edu'+")(Port="+1521+"))(CONNECT_DATA=(SID=orcl)))",    
     });
        console.log('COnnection Successful')
        return connection;
    }
    catch(error){
        console.log(error)
    }
}
oracledb.initOracleClient({libDir: 'C:\\Users\\user\\Downloads\\instantclient-basic-windows.x64-19.17.0.0.0dbru\\instantclient_19_17'});

app.get('/api/gp', async (req, res) => {
    const connection = await makeOrCheckConn();
    const queryParams = url.parse(req.url,true).query;
    const names = queryParams.name.split(',');
    const address = queryParams.address.split(',')
    const sqlQuery = `Select * from demonode where name in (${names.map(val => `'${val}'`)}) and address in (${address.map(val => `'${val}'`)})`
    const result = await connection.execute(sqlQuery,
        [],
      { resultSet: true, outFormat: oracledb.OUT_FORMAT_OBJECT });
      const rs = result.resultSet;
      const queryResult = []
      let row;
      while ((row = await rs.getRow())) {
        if (!row.DONE)
          queryResult.push(row)
      }
    await rs.close();
    connection.release();
    res.send({ express: JSON.stringify(queryResult) });       
});

app.get('/api/world', (req, res) => {
  res.send({ express: `I received your POST request. This is what you sent me` });
});

app.listen(port, () => console.log(`Listening on port ${port}`));