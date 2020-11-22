import { Component, OnInit } from '@angular/core';
import { Plants } from '../plants';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-plantlist',
  templateUrl: './plantlist.component.html',
  styleUrls: ['./plantlist.component.css']
})
export class PlantlistComponent implements OnInit {
  plants: Plants[] = [];
  common_name: any;
  p:number = 1;

  constructor(public rs: RestService) {

  }


  ngOnInit(): void {
    this.rs.getPlants().subscribe((response) => {
      this.plants = response;
    });
  }

  Search(){
    if (!this.common_name ) {
      this.plants = this.plants;
    } else {
      const filteredResults = this.plants.filter(hero => {
        return Object.values(hero)
          .reduce((prev, curr) => {
            return prev || curr.toString().toLowerCase().includes(this.common_name.toLowerCase());
          }, false);
      });
      this.plants = filteredResults;
    }
  }

}
