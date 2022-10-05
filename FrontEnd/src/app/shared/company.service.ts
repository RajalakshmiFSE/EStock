import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 
import { CompanyInfoResponse, CompanyListResponse, stockKpisResponse,companyStockResponse } from './company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  // private compcode="test103";
  // private sdate="2022-06-10";
  // private edate="2022-06-10";
  // baseUrl: string = `http://localhost:3000/api/v1.0/market/stock/get/${this.compcode}/${this.sdate}/${this.edate}`;

  //baseUrl: string = `http://35.88.79.177:3000/api/v1.0/market`
  newUrl: string="";


  
  constructor(private httpClient:HttpClient) { }

  getCompanyCode():Observable<CompanyListResponse>{
    //this.newUrl = `/company/getall`;   
    return this.httpClient.get<CompanyListResponse>(environment.localbaseUrl);
  }

  getCompanyInfo(CompanyCode:string):Observable<any>{
    this.newUrl = `/company/info/${CompanyCode}`;
    console.log("GetcompanyURL",environment.localbaseUrl+`/${CompanyCode}`);
    return this.httpClient.get<any>(environment.localbaseUrl+`/${CompanyCode}`);
  }

  getCompanyList(CompanyId:string,StartDate:Date,EndDate:Date):Observable<any>{
    //this.newUrl = `/stock/get/${CompanyId}/${StartDate}/${EndDate}`;
    //console.log("GetstockURL",this.stocklocalbaseUrl+`/${CompanyCode}/${StartDate}/${EndDate}`);
    return this.httpClient.get<any>(environment.stocklocalbaseUrl+`/${CompanyId}/${StartDate}/${EndDate}`, { withCredentials: false});
  }
  getStockKpisList(CompanyId:string,StartDate:Date,EndDate:Date):Observable<any>{
    //this.newUrl = `/stock/get/${CompanyId}/${StartDate}/${EndDate}`;
    //console.log("GetstockURL",this.stocklocalbaseUrl+`/${CompanyCode}/${StartDate}/${EndDate}`);
    return this.httpClient.get<any>(environment.stockkpislocalbaseUrl+`/${CompanyId}/${StartDate}/${EndDate}`, { withCredentials: false});
  }
  // getCompanyList():Observable<companyStockResponse>{
  //   return this.httpClient.get<companyStockResponse>(this.baseUrl);
  // }
}
