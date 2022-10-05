create database CompanyDb
create database StockDb

use CompanyDb
create table Companies 
(
Id uniqueidentifier,
CEO nvarchar(max),
Code nvarchar(max),
CreatedBy nvarchar(max),
LatestStockPrice decimal(18,2),
Name nvarchar(max),
TurnOver decimal(18,2),
Website nvarchar(max)
);

use StockDb
create table Stocks
(
Id uniqueidentifier,
CompanyId uniqueidentifier,
--CompanyCode nvarchar(max),
CreatedBy nvarchar(max),
CreatedOn datetime2,
Price decimal(18,2),
)
