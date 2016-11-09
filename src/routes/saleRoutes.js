var cors = require('cors'),
    express = require('express'),
    saleRouter = express.Router(),        
    sql = require('mssql');
 
saleRouter.all('*', cors());

var getSales = function(){
    
    saleRouter.route('/')    
    .get(function(req,res){
        sql.connect("mssql://username:password@server/database").then(function() {
            // Query for this demo you will need values that will be plotted on the bars.
			//the column names should be: name, subtotal
            new sql.Request().query('SELECT [tickerdate],[tickerclose],[tickerhigh],[tickerlow],[tickeropen],[volume] FROM [kilil].[dbo].[Ticker]').then(function(recordset) {
                //console.dir(recordset);
                res.send(recordset);
            }).catch(function(err) {
               console.log(err); 
            });
        
        }).catch(function(err) {
            console.log(err); 
        });
    });
    
    return saleRouter;
        
};


module.exports = {
  getSales: getSales
};
