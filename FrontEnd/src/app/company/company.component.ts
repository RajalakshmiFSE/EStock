import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StockKPI, Companies, CompanyInfoResponse, CompanyListResponse,stockKpisResponse,companyStockResponse, CompDetails, Stocks } from '../shared/company.model';
import { CompanyService } from '../shared/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers: [CompanyService]
})
export class CompanyComponent implements OnInit {
  companyStockDetails: any = [];
  stockKpisDetails:any=[];
  loadCompanyCode: any = [];
  companyInfo: any = [];
  Stocks: Stocks[] = [];
  StockKPI: StockKPI[] = [];
  //StockDetails:StockDetails[]=[];
  //AvgMinMaxPrice:AvgMinMaxPrice[]=[];
  //CompDetailsAll:CompDetailsAll[]=[];
  CompDetails: CompDetails[] = [];

  Companies: Companies[] = [];

  CompanyId: string = "";
  CompanyCode: string = "";
  CompanyName: string = "";
  CompanyCodeSelected: string | undefined;
  StartDateSelected: Date | undefined;
  EndDateSelected: Date | undefined;
  StartDate!: Date;
  EndDate!: Date;
  errorTextMsg: string = "";

  avgPrice!: DecimalPipe;
  minPrice!: DecimalPipe;
  maxPrice!: DecimalPipe;

  p: number = 1;
  count: number = 2;

  constructor(private compService: CompanyService) { }

  ngOnInit(): void {
    this.listCompanyCode();
  }

  validateDates(StartDate: Date, EndDate: Date) {
    this.errorTextMsg = "";
    if (!StartDate || StartDate == null) {
      this.errorTextMsg = this.errorTextMsg + '* Start date is required\n';
    }
    if (!EndDate || EndDate == null) {
      this.errorTextMsg = this.errorTextMsg + '* End date is required\n';
    }
    if (StartDate > EndDate) {
      this.errorTextMsg = this.errorTextMsg + '* Start date should be less than End date\n';
    }
  }

  listCompanyCode() {
    this.compService.getCompanyCode().subscribe((data: CompanyListResponse) => {
      this.loadCompanyCode = data;
      console.log('data : ', this.loadCompanyCode.CompDetailsAll)
      console.log('companyDetails_list : ', this.loadCompanyCode)
    });
  }

  showCompanyInfo(CompanyCode: string) {
    this.compService.getCompanyInfo(CompanyCode).subscribe((data: any) => {
      this.companyInfo = data;
      console.log("Data:", data.name)
      //this.CompanyName=this.companyInfo.CompDetails[0].CompanyName;
      this.CompanyName = data.name;
      this.CompanyId = data.id;
      console.log("Data:", data.id)
      console.log('companyDetails_Info : ', this.companyInfo)
    });
  }

  showCompanyList(CompanyId: string, StartDate: Date, EndDate: Date) {
    this.compService.getCompanyList(CompanyId, StartDate, EndDate).subscribe((data: any) => {
      this.companyStockDetails = data;
      console.log("Data_show:", data)
      // this.avgPrice = data.AvgPrice;
      // this.maxPrice = data.MaxPrice;
      // this.minPrice = data.MinPrice;
      // console.log('startDate',StartDate)
      // console.log('enddate',EndDate)
      // console.log(' companyStockDetails : ', this.companyStockDetails)
      // this.avgPrice = data.AvgPrice.$numberDecimal;
      // this.maxPrice = data.MaxPrice.$numberDecimal;
      // this.minPrice = data.MinPrice.$numberDecimal;

      // this.avgPrice = this.companyStockDetails.StockKPI[0].AvgPrice.$numberDecimal;
      //  this.maxPrice = this.companyStockDetails.StockKPI[0].MaxPrice.$numberDecimal;
      // this.minPrice = this.companyStockDetails.StockKPI[0].MinPrice.$numberDecimal;

      //console.log('companyDetails : ', this.companyStockDetails, 'avgPrice : ',this.avgPrice)
    });

    this.compService.getStockKpisList(CompanyId, StartDate, EndDate).subscribe((data: any) => {
      this.stockKpisDetails = data;
      this.avgPrice = (data.avgPrice).toFixed(2);
      this.maxPrice = (data.maxPrice).toFixed(2);
      this.minPrice = (data.minPrice).toFixed(2);
      console.log('startDate', StartDate)
      console.log('enddate', EndDate)
      console.log('data.minPrice :  ',data.minPrice)
      console.log(' StockkpisDetails : ', this.stockKpisDetails)
    });
  }

  onSelectCompanyCode(CompanyCode: string) {
    this.showCompanyInfo(CompanyCode);
  }

  onClickCompanySearch(CompanyId: string, StartDate: Date, EndDate: Date) {
    this.validateDates(StartDate, EndDate);
    this.showCompanyList(CompanyId, StartDate, EndDate);
  }

}
