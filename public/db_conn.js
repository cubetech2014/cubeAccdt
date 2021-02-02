var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var config = {
  server: 'cc1.cube-tech.co.kr,1198',  //update me
  authentication: {
    type: 'default',
    options: {
      userName: 'msa', //update me
      password: 'cubetech201$'  //update me
    }
  },
  options: {
      // If you are on Microsoft Azure, you need encryption:
      encrypt: true,
      database: 'cube_accdt'  //update me
  }
};

var connection = new Connection(config);

function connectDB(){
  connection.connect();
}

function endDB(){
  connection.end();
}

connection.on('connect', function (err) {
  if (err) {
    console.log(err)
  } else {
    executeStatement()
  }
});


function selectQuery(){
  var sql = 'select suser_id from suser';
  connection.query(sql, function(err, rows, field){
    if (err) {
      console.log(err.stack);
    }
    console.log(json.stringify(field));
  })
};

function executeStatement () {
  request = new Request("select 123, 'hello world'", function (err, rowCount) {
    if (err) {
      console.log(err)
    } else {
      console.log(rowCount + ' rows')
    }
    connection.close()
  })

  request.on('row', function (columns) {
    columns.forEach(function (column) {
      if (column.value === null) {
        console.log('NULL')
      } else {
        console.log(column.value)
      }
    })
  })

  connection.execSql(request)
}

module.export = {
  selectQuery,
  executeStatement
}
