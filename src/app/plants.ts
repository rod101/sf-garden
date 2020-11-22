export class Plants {
  id: string;
  commonNname: string;
  plantType: string;
  bloomTime: string;
  flowerColor: string;
  soilType: string;
  habitatValue: string;

  constructor(id, commonNname, plantType, bloomTime, flowerColor, soilType, habitatValue){
    this.id = id;
    this.commonNname = commonNname;
    this.plantType = plantType;
    this.bloomTime = bloomTime;
    this.flowerColor = flowerColor;
    this.soilType = soilType;
    this.habitatValue = habitatValue;
  }

}
