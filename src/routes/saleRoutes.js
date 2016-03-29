<<<<<<< HEAD
var cors = require('cors'),
    express = require('express'),
    saleRouter = express.Router(),        
    sql = require('mssql');
 
saleRouter.all('*', cors());

var getSales = function(){
    
    saleRouter.route('/')    
    .get(function(req,res){
        sql.connect("mssql://username:password@your.sql.server/yourdatabase").then(function() {
            // Query for this demo you will need values that will be plotted on the bars.
			//the column names should be: name, subtotal
            new sql.Request().query('select top 10 productid as name, subtotal  from dbo.OrderDetail o  where ProductID is not null').then(function(recordset) {
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
=======
var cors = require('cors'),
    express = require('express'),
    saleRouter = express.Router(),        
    sql = require('mssql');
 
saleRouter.all('*', cors());

var getSales = function(){
    
    saleRouter.route('/')    
    .get(function(req,res){
        sql.connect("mssql://username:password@your.sql.server/yourdatabase").then(function() {
            // Query for this demo you will need values that will be plotted on the bars.
			//the column names should be: name, subtotal
            new sql.Request().query('select top 10 productid as name, subtotal  from dbo.OrderDetail o  where ProductID is not null').then(function(recordset) {
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
>>>>>>> origin/master
};