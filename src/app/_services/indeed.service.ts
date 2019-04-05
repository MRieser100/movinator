import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { JobResult } from '../_models/job-result';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    // "cache-control": "max-age=0, private, must-revalidate",
    // "content-type": "application/json; charset=utf-8"
    // "Accept": "*/*",
    // "Accept-Encoding": "gzip, deflate",
    // "Accept-Language": "en-US,en;q=0.5",
    // "Connection": "keep-alive",
    // "Content-Length": "0",    
    // "Host": "derekevans.herokuapp.com"   // TODO/NOTE: believe this is what needs to be set - BUT, browser won't set unsafe header :(
      "Origin": "derekevans.herokuapp.com" // Browser won't set this, even when running Chrome with --diable-web-security flag => BUT IT WORKS!
  })
};

@Injectable({
  providedIn: 'root'
})
export class IndeedService {

  private apiUrl = 'http://derekevans.herokuapp.com/jobsite/search';

  constructor(
    private http: HttpClient
  ) { }

  getJobData(jobDescription, jobLocation): Observable<any> {
    return this.http.post<any>(this.apiUrl, {q: 'developer', l: 'san+francisco'}, httpOptions);
  }
}
