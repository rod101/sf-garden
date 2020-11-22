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

  constructor(public rs: RestService) {

  }


  ngOnInit(): void {
    this.rs.getPlants().subscribe((response) => {
      this.plants = response;
      console.log(this.plants);
    });
  }

}
