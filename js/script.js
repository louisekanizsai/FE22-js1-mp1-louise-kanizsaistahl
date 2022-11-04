// raderna 1-5 (list items inuti en ul)

const rowList = document.createElement("ul");
document.body.appendChild(rowList);
rowList.style.padding = "0";

for (let i = 0; i < 5; i++) {
    const rows = document.createElement("li");
    rowList.appendChild(rows);
    rows.innerText = `Rad ${i+1}`;
    rows.style.marginBottom = `${15+(i*10)}px`;
    rows.style.color = "#6e6ef7";
    rows.style.fontSize = `${1+i}em`;
    rows.style.textAlign = "center";
    rows.style.width = "800px";
    rows.style.listStyle = "none";
    rows.style.backgroundColor = `hsl(${100+(i*25)},90%,85%)`;
}

// rektangeln med svart border som innehåller de tre listorna
const divContainer = document.createElement("div");
document.body.appendChild(divContainer);
divContainer.style.width = "800px";
divContainer.style.height = "300px";
divContainer.style.border = "1px solid black";
divContainer.style.display = "flex";
divContainer.style.justifyContent = "space-around";
divContainer.style.alignItems = "center";

for (let i = 0; i < 3; i++) { // yttre loop för att skapa tre listor

    const numbers = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];
    const purpleBorderColor = "#A8A8F0";

    const list = document.createElement("ul");
    divContainer.appendChild(list);
    list.style.width = "10px";
    list.style.border = `10px solid ${purpleBorderColor}`;
    list.style.listStyle = "none";
    list.style.boxSizing = "border-box";

    for (let j = 0; j < 10; j++) { // inre loop för att skapa listelement
        const li = document.createElement("li");
        list.appendChild(li);
        li.style.marginLeft = "-40px";

        if (i == 0) { // om vi befinner oss i första körningen av den yttre loopen
            li.innerText = j;
            if (j == 4) { 
                li.style.backgroundColor = purpleBorderColor;
                li.style.color = "white";
            } 
            else if (j%2 == 0) {
                li.style.backgroundColor = "black";
                li.style.color = "white";
            }
        }
        else if (i == 1) { // i andra körningen av yttre loopen
            li.innerText = (9+j)-(j*2); // börjar på 9 och räknar baklänges (genom att subtrahera med 2 mer för varje gång som j ökar)
            li.style.textAlign = "center";
            if (j == 1) {
                li.style.backgroundColor = purpleBorderColor;
                li.style.color = "white";
            }
            else if (j%2 == 1) { 
                li.style.backgroundColor = "black";
                li.style.color = "white";
            }
        }
        else { // tredje, sista körningen av yttre loopen
            li.innerText = numbers[j];
            li.style.textAlign = "right";
            if (j == 5) {
                li.style.backgroundColor = purpleBorderColor;
            }
            else if (j%2 == 0) {
                li.style.backgroundColor = "black";
                li.style.color = "white";
            }
        }
    }
}