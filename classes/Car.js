class Car {
    constructor(type){
        this.id = "";
        this.type = type;
        this.parked = false;
        this.parkingLoc = [0,0];
        this.parkingFee = 0;
        this.parkedStartTime = 0;
        this.parkingType = ""
        this.lastParkedTime = 0;
    }

    park(info){
        this.parked = true;
        this.parkingLoc = info[1];
        this.id = info[1].join("");
        this.parkedStartTime = new Date();
        this.parkingType = info[0]; 
        this.lastParkedTime = 0;
    }

    unpark(fee){
        this.parked = false;
        this.parkingFee = fee;
        this.id = "";
        this.lastParkedTime = new Date();
    }

    repark(info){
        this.parked = true;
        this.parkingLoc = info[1];
        this.id = info[1].join("");
        this.parkingType = info[0]; 
    }
}