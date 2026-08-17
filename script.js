function createTable() {
    //Write your code here
	let table=document.querySelector("#myTable")
	let body=document.querySelector("body")
	let rn=prompt(Number("Input number of rows"))
	if(isNaN(rn) || rn<= 0){
		alert("can not create the table, not a valid input ");
		return;
	}
	let cn=prompt(Number("Input number of columns"))
	if(isNaN(cn) || cn<= 0){
		alert("can not create the table, not a valid input ");
		return;
	}
	for(let i=0;i<rn;i++){
		let row=document.createElement("tr")
		for(let j=0;j<cn;j++){
			let td=document.createElement("td")
			td.innerText=`Row-${i} Column-${j}`
			row.appendChild(td);
		}
		table.appendChild(row);
	}
	body.appendChild(table);
  
}
