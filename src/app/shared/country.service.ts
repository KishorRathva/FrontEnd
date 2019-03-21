import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Country } from "../country";

@Injectable({
  providedIn: "root"
})
export class CountryService {
  private country: Country;
  private baseURI: string = "http://localhost:8080/";
  private headers = new HttpHeaders().set("Content-Type", "application/json");
  constructor(private http: HttpClient) {}

  createCountry(country: Country) {
    return this.http.post(this.baseURI, country, {
      headers: this.headers
    });
  }
  readCountries() {
    return this.http.get(this.baseURI, { headers: this.headers });
  }

  updateCountry(country: Country) {
    return this.http.put(this.baseURI, country, {
      headers: this.headers
    });
  }
  deleteCountry(id: string) {
    return this.http.delete(this.baseURI + id, { headers: this.headers });
  }

  setter(country: Country) {
    this.country = country;
  }

  getter() {
    return this.country;
  }
}
