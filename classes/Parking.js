class Parking {
    constructor(container) {
        this.map = [
			["F","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","O"],
			["A",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"A"],
			["A",0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,"A"],
			["A",0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,"A"],
			["A",0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,"A"],
			["A",0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,"A"],
			["A",0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,"A"],
			["A",0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,"A"],
			["A",0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,"A"],
			["A",0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,"A"],
			["A",0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,"A"],
			["A",0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,"A"],
			["A",0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,"A"],
			["A",0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,"A"],
			["A",0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,"A"],
			["A",0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,"A"],
			["A",0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,"A"],
			["A",0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,"A"],
			["A",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"A"],
			["B","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","A","B"],
		];
        this.parkedCars = [];
        this.openEntries = [[0,10], [1,0], [19,15]];
        this.parkingType = ["SP", "MP", "LP"];
        this.container = container;
        return this;
    }

    render() {

        for(let i = 0; i < this.openEntries.length; i++) {
            this.map[this.openEntries[i][0]][this.openEntries[i][1]] = "E";
        }
        
        for(let i = 0; i < this.map.length; i++) {
            for(let j = 0; j < this.map[i].length; j++){
                if(this.map[i][j] === 1) {
                    this.map[i][j] = this.parkingType[Math.floor(Math.random() * 3)];
                }
            }
        }

        let worldHtml = "";
        for(let rows = 0; rows < this.map.length; rows++) {
            worldHtml += '<div class="row">';
            for(let cell = 0; cell < this.map[rows].length; cell++) {
                switch (true ) {
                    case this.map[rows][cell] == 1:
                        worldHtml += `<div class="cell red" data-row='${rows}' data-col='${cell}'><p>Parking</p></div>`;
                        break;
                    case this.map[rows][cell] == 3:
                        worldHtml += `
                            <div class="cell step" data-row='${rows}' data-col='${cell}'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                                </svg>
                            </div>`;
                        break;
                    case this.map[rows][cell] == "E":
                        worldHtml += `<div class="cell entry" data-row='${rows}' data-col='${cell}'><p>Entry</p></div>`;
                        break;
                    case this.map[rows][cell] == "A":
                        worldHtml += `
                        <div class="cell available" data-row='${rows}' data-col='${cell}'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
                            </svg>
                        </div>`;
                        break;
                    case this.map[rows][cell] == "B":
                        worldHtml += `<div class="cell block" data-row='${rows}' data-col='${cell}'></div>`;
                        break;
                    case this.map[rows][cell] == "F":
                        worldHtml += `
                        <div class="cell block function" data-row='${rows}' data-col='${cell}'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clip-rule="evenodd" />
                            </svg>
                        </div>`;
                        break;
                    case this.map[rows][cell] == "O":
                        worldHtml += `
                        <div class="cell block carHistory" data-row='${rows}' data-col='${cell}'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </div>`;
                        break;
                    case this.map[rows][cell].toString().includes('N'):
                        worldHtml += `<div class="cell parked ${this.map[rows][cell].toString()[this.map[rows][cell].toString().length - 1]}" data-row='${rows}' data-col='${cell}'><img src="/assets/img/${this.map[rows][cell].toString()[this.map[rows][cell].toString().length - 2]}car.png"></div>`;
                        break;
                    case this.map[rows][cell] == "R":
                        worldHtml += `
                            <div class="cell step right" data-row='${rows}' data-col='${cell}'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                                </svg>
                            </div>`;						break;
                    case this.map[rows][cell] == "L":
                        worldHtml += `
                            <div class="cell step left" data-row='${rows}' data-col='${cell}'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                                </svg>
                            </div>`;						break;
                    case this.map[rows][cell] == "U":
                        worldHtml += `
                            <div class="cell step up" data-row='${rows}' data-col='${cell}'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                                </svg>
                            </div>`;						break;
                    case this.map[rows][cell] == "D":
                        worldHtml += `
                            <div class="cell step down" data-row='${rows}' data-col='${cell}'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                    <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                                </svg>
                            </div>`;						break;
                    case this.map[rows][cell] == "SP":
                        worldHtml += `<div class="cell red" data-row='${rows}' data-col='${cell}'><p>SP</p></div>`;
                        break;
                    case this.map[rows][cell] == "MP":
                        worldHtml += `<div class="cell red" data-row='${rows}' data-col='${cell}'><p>MP</p></div>`;
                        break;
                    case this.map[rows][cell] == "LP":
                        worldHtml += `<div class="cell red" data-row='${rows}' data-col='${cell}'><p>LP</p></div>`;
                        break;
                    default:
                        worldHtml += `<div class="cell" data-row='${rows}' data-col='${cell}'></div>`;
                        break;
                }
            }
            worldHtml += '</div>';
        }
        for(let i = 0; i < this.map.length; i++) {
            for(let j = 0; j < this.map[i].length; j++){
                if(this.map[i][j] === "D" || this.map[i][j] === "U" || this.map[i][j] === "L" || this.map[i][j] === "R" ) {
                    this.map[i][j] = 0;
                }
            }
        }
        this.container.innerHTML = worldHtml;
        this.elementsFunction();
    }

    pathFinder(start = [13,0], end = "SP"){
        const visited = [];
        let parkingList = [...this.parkingType]
        for(let parks in parkingList) {
            if(parkingList[parks] == end){
                parkingList.splice(parks, 1);
            }
        }
        for(let rows = 0; rows < this.map.length; rows++) {
            visited.push([]);
            for(let columns = 0; columns < this.map[rows].length; columns++) {
                visited[rows].push(false);
            }
        }
        const queue = [[start[0], start[1], []]]; // [row, col, pathlist]
        const directions = [[1, 0],[-1, 0],[0, 1],[0, -1]];
        visited[start[0]][start[1]] = true;

        while(queue.length > 0) {
            const currentCell = queue.shift();
            const currentRow = currentCell[0];
            const currentCol = currentCell[1];
            const pathList = currentCell[2];

            const newPath = [];
            for(let path in pathList) {
                newPath.push(pathList[path]);
            }
            newPath.push([currentRow, currentCol]);
            if(this.map[currentRow][currentCol] == end){
                return newPath;
            }
            for (let i = 0; i < directions.length; i++) {
                const newRow = currentRow + directions[i][0];
                const newCol = currentCol + directions[i][1];
                if (
                    newRow >= 1 && newRow < this.map.length - 1 &&
                    newCol >= 1 && newCol < this.map[0].length - 1 &&
                    !parkingList.includes(this.map[newRow][newCol]) &&
                    !this.map[newRow][newCol].toString().includes('N') &&
                    !visited[newRow][newCol] 
                ) {
                    queue.push([newRow, newCol, newPath]);
                    visited[newRow][newCol] = true;
                }
            }
        }
        return null;
    }

    shortestPath(end = "SP"){
        let pathList = [];
        for(let i = 0; i < this.openEntries.length; i++) {
            pathList.push(this.pathFinder(this.openEntries[i], end));
        }
        let shortestPath = [0, pathList[0].length];
        for(let i = 1; i < pathList.length; i++){
            if(pathList[i].length < shortestPath[1]) {
                shortestPath = [i, pathList[i].length];
            }
        }
        return pathList[shortestPath[0]]
    }

    renderPath(end = "SP"){
        let type = end[0];
        if(end == "SP") {
            let sp = false;
            for(let i = 0; i < this.map.length; i++) {
                for(let j = 0; j < this.map[i].length; j++){
                    if(this.map[i][j] === "SP") {
                        sp = true;
                        break;
                    }
                }
            }
            if(!sp) {
                end = "MP"
            }
        }
        if(end == "MP") {
            let mp = false;
            for(let i = 0; i < this.map.length; i++) {
                for(let j = 0; j < this.map[i].length; j++){
                    if(this.map[i][j] === "MP") {
                        mp = true;
                        break;
                    }
                }
            }
            if(!mp) {
                end = "LP"
            }
        }
        if(end == "LP") {
            let lp = false;
            for(let i = 0; i < this.map.length; i++) {
                for(let j = 0; j < this.map[i].length; j++){
                    if(this.map[i][j] === "LP") {
                        lp = true;
                        break;
                    }
                }
            }
            if(!lp) {
                this.render();
                return false;
            }
        }

        let paths = this.shortestPath(end);
			for(let i = 1; i < paths.length - 1; i++) {
				if(paths[i+1][0] > paths[i][0]) {
					this.map[paths[i][0]][paths[i][1]] = "D";
				}
				else if (paths[i+1][0] < paths[i][0] ){
					this.map[paths[i][0]][paths[i][1]] = "U";
				}
				else if(paths[i+1][1] > paths[i][1]) {
					this.map[paths[i][0]][paths[i][1]] = "R";

				}
				else if (paths[i+1][1] < paths[i][1] ){
					this.map[paths[i][0]][paths[i][1]] = "L";
				}
			}
            this.map[paths[paths.length - 1][0]][paths[paths.length - 1][1]] += "N";
            this.map[paths[paths.length - 1][0]][paths[paths.length - 1][1]] += type;
            this.map[paths[paths.length - 1][0]][paths[paths.length - 1][1]] += this.map[paths[paths.length - 2][0]][paths[paths.length - 2][1]];
			this.render();
            return [end, [paths[paths.length - 1][0], paths[paths.length - 1][1]]];
    }
    
    elementsFunction(){
        for(let available of document.querySelectorAll(".available svg")){
            available.addEventListener("click",  () => {
                this.openEntries.push([parseInt(available.parentElement.getAttribute("data-row")), parseInt(available.parentElement.getAttribute("data-col"))]);
                this.render();
            });
        }

        for(let entry of  document.querySelectorAll(".entry")) {
            entry.addEventListener("click", ()=>{
                if(this.openEntries.length <= 3) {
                    return false;
                }
                for(let i = 0; i < this.openEntries.length; i++){
                    if(parseInt(entry.getAttribute("data-row")) == this.openEntries[i][0] && parseInt(entry.getAttribute("data-col")) == this.openEntries[i][1]){
                        this.map[this.openEntries[i][0]][this.openEntries[i][1]] = "A";
                        this.openEntries.splice(i, 1);
                        break;
                    }
                }
                this.render();
            });
        }
        document.querySelector(".function svg").addEventListener("click", ()=>{
            document.querySelector(".actionForm").style.display = "block";
        });
        for(let parked of document.querySelectorAll(".parked")){
            parked.addEventListener("click", ()=>{
                document.querySelector(".parkForm").style.display = "block";
                const id = parked.getAttribute("data-row") + parked.getAttribute("data-col");
                for(let cars of this.parkedCars){
                    if(id == cars.id && cars.parked){
                        document.querySelector("#parkStart").textContent = formatDateTime(cars.parkedStartTime);
                        document.querySelector("#parkDur").textContent = formatTimeDifference(cars.parkedStartTime, new Date());
                        let parkingType = "";
                        let vehicleType = "";
                        switch (cars.parkingType) {
                            case "LP":
                                parkingType = "Large Parking";
                                break;
                            case "MP":
                                parkingType = "Medium Parking";
                                break;
                            default:
                                parkingType = "Small Parking"
                                break;
                        }
                        switch (cars.type) {
                            case "L":
                                vehicleType = "Large";
                                break;
                            case "M":
                                vehicleType = "Medium";
                                break;
                            default:
                                vehicleType = "Small"
                                break;
                        }
                        document.querySelector("#parkType").textContent = parkingType;
                        document.querySelector("#vType").textContent = vehicleType;
                        document.querySelector("#feeTotal").textContent = this.calculateParkingFee(getDurationInHours(cars.parkedStartTime, new Date()), cars.parkingType);
                        document.querySelector(".unpark").id = cars.id;
                        break;
                    }
                }
            });
        }

        document.querySelector(".carHistory svg").addEventListener("click", ()=> {
            const carList = document.querySelector(".carList");
            if(carList.style.display == "block") {
                carList.style.display = "none"
            }
            else{
                carList.style.display = "block"
            }
            let html = '';
            for(let i = 0; i < this.parkedCars.length; i++){
                if(!this.parkedCars[i].parked) {
                    html += `
                    <div>
                        <div>Vehicle <span>${this.parkedCars[i].id}</span>:</div>
                        <div>${formatDateTime(this.parkedCars[i].lastParkedTime)}</div>
                        <div>${this.parkedCars[i].type}</div>
                        <div id='${i}' class="parkAgain">Park Again</div>
                    </div>`
                }
            }
      
            carList.innerHTML = html;
            for(let parkAgain of document.querySelectorAll(".parkAgain")){
                parkAgain.addEventListener("click", ()=>{
                    let car = this.parkedCars[parseInt(parkAgain.id)];
                    let parkInfo = this.renderPath(car.type + "P");
                    if(parkInfo) {
                        if(getDurationInHours(car.lastParkedTime, new Date()) > 1) {
                            car.park(parkInfo);
                        }
                        else {
                            car.repark(parkInfo);
                        }
                    }
                    else {
                        alert("Parking Full, No Vacant for your car");
                    }
                    carList.style.display = "none"
                
                });
            }
            
        });
    }

    calculateParkingFee(durationHours, slotSize) {
        durationHours = Math.ceil(durationHours);

        const flatRate = 40;
        const exceedingRates = {
            SP: 20,
            MP: 60,
            LP: 100
        };
        const fullDayFee = 5000;
        let totalFee = 0;

        if(durationHours >= 24) {
            let full = Math.floor(durationHours / 24 );
            totalFee += fullDayFee * full;
            if(durationHours - (full * 24) > 0){
                let remainder = Math.ceil(durationHours - (full * 24));
                totalFee += remainder * exceedingRates[slotSize];
            }
        }
        else{
            if(durationHours > 3){
                durationHours -= 3;
                totalFee += flatRate;
                totalFee += durationHours * exceedingRates[slotSize];
            }
            else {
                totalFee += flatRate;
            }
        }
        return totalFee;


    }
}