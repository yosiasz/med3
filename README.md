# med3
A simple site to demo use of data from Microsoft SQL Server to plot
bar charts using D3.js with a rest api using express.js

* [mssql.js](https://www.npmjs.com/package/mssql)
* [express.js](https://www.npmjs.com/package/express)
* [d3.js](https://www.npmjs.com/package/d3)

## Installation 

```bash
 From a command prompt run the following in order to clone repo
  git clone https://github.com/yosiasz/med3.git
   
  Go to that folder
   cd med3
     
  Install modules
   npm install
   On your SQL Server create a database named med3
   create a user named med3 and give it db_datareadr & db_datawriter permissions to med3 database

   Go to folder med3/src/sqlscript/seedtickerdata.sql and run script

   In routes/SaleRoutes.js change sql.connect("mssql://med3:med3@sqlservername/med") to match your sqlservername
  
  Run
    npm start
    
  Browse to see charts
   http://localhost:5000/
```