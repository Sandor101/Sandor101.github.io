/*
                        <tr>
                            <td>1</td>
                            <td>Török</td>
                            <td>Sándor</td>
                            <td>20</td>
                            <td> 
                                <div class="btn-group">
                                    <button class="btn-info btn">
                                    ismétlés
                                    </button>
                                    <button class="btn-danger btn">
                                        törlés
                                    </button>
                                </td>
                        </tr>
*/

let users = [
    { surname: "Alexander", firstname: "Turkovic", age: 2 },
    { surname: "Kiss", firstname: "Bence", age: 35 },
    { surname: "Nagy", firstname: "Andrea", age: 29 },
    { surname: "Közepes", firstname: "Barbara", age: 19 },
    { surname: "Oláh", firstname: "Béla", age: 72 },
    { surname: "Sápatarcú", firstname: "Olga", age: 42 },
    { surname: "Fehér", firstname: "Armand", age: 45 },
    { surname: "Doe", firstname: "John", age: 21 },
    { surname: "Huálmigel", firstname: "Apófisz", age: 500 }
];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};
let createButtonGroup = parent => {
    let group = document.createElement("div");
    group.className = "btn-group";

    let btnInfo = document.createElement("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHtml = 'Ismétlés';
    
    let btnDanger = document.createElement("button");
    btnDanger.className = "btn btn-danger";
    btnDanger.innerHtml = 'Törlés';
    

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

}

for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for(let value of Object.values(users[k])) {
        createTD(value, tr);
    }
    createButtonGroup(tr);
    tableBody.appendChild(tr);
}