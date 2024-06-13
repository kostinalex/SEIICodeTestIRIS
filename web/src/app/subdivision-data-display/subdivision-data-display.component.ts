import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-subdivision-data-display",
  templateUrl: "./subdivision-data-display.component.html",
  styleUrls: ["./subdivision-data-display.component.css"],
})
export class SubdivisionDataDisplayComponent implements OnInit {
  page = 1;
  loading = true;
  subdivisions: Array<any> = [];
  subdivisionsCopy: Array<any> = [];
  toggler = 1;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loading = true;
    this.http.get(environment.api + "/v1/subdivisions").subscribe(
      (resp) => {
        this.subdivisions = resp["subdivisions"];
        this.subdivisionsCopy = JSON.parse(JSON.stringify(this.subdivisions));
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  sort(property) {
    this.subdivisions = JSON.parse(JSON.stringify(this.subdivisionsCopy));
    this.toggler = -this.toggler;
    this.subdivisions = this.subdivisions.sort((a, b) =>
      a[property] > b[property] ? this.toggler : -this.toggler
    );
  }

  applyFilter(event) {
    this.page = 1;
    this.subdivisions = JSON.parse(JSON.stringify(this.subdivisionsCopy));

    if (event.target.value != "All") {
      this.subdivisions = this.subdivisions.filter(
        (c) => c.subdivisionStatusCode == event.target.value
      );
    }
  }

  pageChanged(event) {
    this.page = event;
  }
  //
}
