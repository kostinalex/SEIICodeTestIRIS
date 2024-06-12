import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-subdivision-data-display",
  templateUrl: "./subdivision-data-display.component.html",
  styleUrls: ["./subdivision-data-display.component.css"],
})
export class SubdivisionDataDisplayComponent implements OnInit {
  loading = true;
  subdivisions: Array<any> = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loading = true;
    this.http.get(environment.api + "/v1/subdivisions").subscribe(
      (resp) => {
        this.subdivisions = resp["subdivisions"];
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }
}
