import { DecimalPipe } from "@angular/common";

export interface Companies{
    CompanyCode:String;
}
// export interface CompDetailsAll{
//     CompanyCode: String;
// }
export interface CompDetails{   
    CompanyCode: String;
    CompanyName: String;
    CompanyCEO: String;
    CompanyTurnover: String;
    CompanyWebsite: String;
    StockExchange: String;
}
export interface Stocks{
    CompanyId: string;
    Price: DecimalPipe;
    CreatedOn: Date;
}
// export interface StockDetails{
//     CompanyCode : String;
//     StockPrice : DecimalPipe;
//     CurrDateTime : Date;
// }
export interface StockKPI{
    AvgPrice : DecimalPipe;
    MinPrice : DecimalPipe;
    MaxPrice : DecimalPipe;
}
export interface CompanyListResponse{
    //CompDetailsAll:CompDetailsAll[];
    Companies:Companies[];
}
export interface CompanyInfoResponse{
    CompDetails:CompDetails[];  
}
export interface companyStockResponse {
    Stocks:Stocks[];
}
export interface stockKpisResponse {
    StockKPI:StockKPI[];
    //StockDetails:StockDetails[];
    //AvgMinMaxPrice:AvgMinMaxPrice[];
}
