use med3
go

if exists(select 1 from sys.tables where name = 'Ticker')
  begin
    drop table dbo.Ticker;
  end


create table dbo.Ticker(tickerdate datetime, tickerclose decimal(10,3) , tickerhigh decimal(10,3), tickerlow decimal(10,3), tickeropen decimal(10,3), volume int);

insert into Ticker
 select '20060403', 9.97, 10.2929, 10.2929, 9.0957, 409506560 union 
 select '20060410', 9.4957, 10.1329, 10.1329, 10.0414, 207337728 union 
 select '20060417', 9.5771, 10, 10, 9.5014, 252939248 union 
 select '20060424', 10.0557, 10.1857, 10.1857, 9.55, 177648096 union 
 select '20060501', 10.27, 10.4129, 10.4129, 10.11, 181668336 union 
 select '20060508', 9.6714, 10.5429, 10.5429, 10.4271, 152043504 union 
 select '20060515', 9.2157, 9.7686, 9.7686, 9.6243, 193220992 union 
 select '20060522', 9.0786, 9.3129, 9.3129, 9.1243, 161287136 union 
 select '20060530', 8.8086, 9.0429, 9.0429, 9.0414, 217042176 union 
 select '20060605', 8.4629, 8.7943, 8.7943, 8.7357, 212782496  
