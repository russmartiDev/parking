document.addEventListener("DOMContentLoaded", ()=> {
    const container = document.querySelector(".container")
    const parking = new Parking(container);
    parking.render();
    
    const actionForm = document.querySelector(".actionForm");
    actionForm.querySelector("#close").addEventListener("click", ()=>{
        actionForm.style.display ="none";
    });

    for(let newBtn of document.querySelectorAll(".newCar")){
        newBtn.addEventListener("click", ()=>{
            let parkInfo = parking.renderPath(newBtn.id + "P");
            if(parkInfo) {
                let car = new Car(newBtn.id);
                car.park(parkInfo);
                parking.parkedCars.push(car);
            }
            else {
                alert("Parking Full, No Vacant for your car");
            }
        })
    }
    document.querySelector("#refresh").addEventListener("click", ()=>{
        parking.render();
    });
    document.querySelector(".parkForm .close").addEventListener("click", ()=>{
        document.querySelector(".parkForm").style.display ="none";
    });
    document.querySelector(".unpark").addEventListener("click", function () {
    
        for(let cars of parking.parkedCars){
            if(this.id == cars.id && cars.parked){
                parking.map[cars.parkingLoc[0]][cars.parkingLoc[1]] = cars.parkingType;
                parking.render();
                cars.unpark(parking.calculateParkingFee(getDurationInHours(cars.parkedStartTime, new Date()), cars.parkingType));
                document.querySelector(".parkForm").style.display ="none";
            }
        }
    });
    
});

function formatDateTime(date) {
    const padZero = (num) => (num < 10 ? '0' : '') + num;
    
    const day = padZero(date.getDate());
    const month = padZero(date.getMonth() + 1); // Months are zero-based
    const year = date.getFullYear();
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function formatTimeDifference(startDate, endDate) {
    const diffMs = endDate - startDate;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffMs % (1000 * 60)) / 1000);
    
    let formattedString = '';
    
    if (diffHours > 0) {
        formattedString += `${diffHours}hr${diffHours > 1 ? 's' : ''} `;
    } else {
        if (diffMinutes > 0) {
            formattedString += `${diffMinutes}min${diffMinutes > 1 ? 's' : ''} `;
        }
        if (diffSeconds > 0 && diffHours === 0) {
            formattedString += `${diffSeconds}sec${diffSeconds > 1 ? 's' : ''}`;
        }
    }
    
    return formattedString.trim();
}

function getDurationInHours(startDate, endDate) {
    const differenceMs = Math.abs(endDate - startDate);
    const differenceHours = differenceMs / (1000 * 60 * 60);
    return differenceHours;
}