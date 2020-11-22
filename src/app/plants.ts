export class Plants {
  common_name: string;
  plant_type: string;
  bloom_time: string;
  flower_color: string;
  soil_type: string;
  habitat_value: string;

  constructor(common_name, plant_type, bloom_time, flower_color, soil_type, habitat_value){
    this.common_name = common_name;
    this.plant_type = plant_type;
    this.bloom_time = bloom_time;
    this.flower_color = flower_color;
    this.soil_type = soil_type;
    this.habitat_value = habitat_value;
  }

}
