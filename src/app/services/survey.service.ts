import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  http: any;

  constructor() { }
  Getchartinfo(){
    return this.http.get("http://localhost:8085/api/data");
  }
}
