import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { UserInterface } from '../interface/UserInterface';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { FundInterface } from '../interface/FundInterface';
import { ResponseModel } from '../interface/ResponseModel';
import { TransactionInterface } from '../interface/TransactionInterface';

const API_BTG_BASE_URL = 'http://localhost:8085';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  userSubject = new BehaviorSubject<UserInterface | null>(null);
  fundsSubject = new BehaviorSubject<FundInterface[] | null>(null);
  $myProfile = this.userSubject.asObservable();

  constructor(private http: HttpClient,
  ) {}

  getUser(): Observable<UserInterface>{
    return this.http.get<UserInterface>(`${API_BTG_BASE_URL}/btg/finance/users/demo`)
    .pipe(tap(response => this.userSubject.next(response)));
  }

  getFunds(): Observable<FundInterface[]>{
    return this.http.get<FundInterface[]>(`${API_BTG_BASE_URL}/btg/finance/funds`)
    .pipe(tap(response => this.fundsSubject.next(response)));
  }

  getSubscribe(id: string, amount: number):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(`${API_BTG_BASE_URL}/btg/finance/funds/subscribe`, {fundId: id, amount:amount})
  }

  getTransactions():Observable<TransactionInterface[]>{
    return this.http.get<TransactionInterface[]>(`${API_BTG_BASE_URL}/btg/finance/transactions`)
  }

  unsubscribeFund(transactionId: string): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${API_BTG_BASE_URL}/btg/finance/funds/unsubscribe/${transactionId}`, null);
  }
}
