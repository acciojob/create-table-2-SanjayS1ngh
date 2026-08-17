function createTable() {
    //Write your code here
	let body=document.querySelector("body")
	let rn=prompt("Input number of rows")
	let cn=prompt("Input number of columns")
	let table=document.createElement("table")
	
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
