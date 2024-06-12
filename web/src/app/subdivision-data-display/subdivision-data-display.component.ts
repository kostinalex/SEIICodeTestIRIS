import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-subdivision-data-display",
  templateUrl: "./subdivision-data-display.component.html",
  styleUrls: ["./subdivision-data-display.component.css"],
})
export class SubdivisionDataDisplayComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log("====>home");
    this.http.get(environment.api + "/v1/subdivisions").subscribe((resp) => {
      console.log("====>resp", resp);
    });
  }
}
