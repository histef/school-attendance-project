
/********Model*******/
let model = {
	students: [
	{name: 'A', count: 0},
	{name: 'B', count: 0},
	{name: 'C', count: 0},
	{name: 'D', count: 0},
	{name: 'E', count: 0},
	]
};

/********View********/
let view = {
	render: function(){
		let allStudents = controller.getNames(); //model.students		
		const table = document.querySelector('table');
		const tbody = document.querySelector('tbody');
		tbody.innerHTML = '';
		let stud, row, cell, daysMissedCell;

		//generate input grid
		for(let i=0; i<allStudents.length;i++){
			stud = allStudents[i];
			row = tbody.insertRow();
			row.id = 'row' + (i);

			//student name column
			let cell1 = row.insertCell(0);
			cell1.innerHTML= stud.name;
			cell1.classList.add("name-col");
			//attendance columns, where user checks any absences
			for (let i=0; i<12;i++){
				cell = row.insertCell();
				cell.innerHTML= `<input type="checkbox">`;
				cell.classList.add("attend-col");
			}
			//days missed column, adds up all days missed per student
			daysMissedCell = row.insertCell();
			daysMissedCell.classList.add("missed-col");
			daysMissedCell.textContent = stud.count;
		}

		//Student A's days missed total
		const row0 = document.querySelector('#row0');
		const missedCol0 = document.querySelector('#row0 .missed-col');
		row0.addEventListener('change', (e) => { 
			if(e.target.checked){
				allStudents[0].count++;
				missedCol0.textContent = allStudents[0].count;
			} else if(!e.target.checked){
				allStudents[0].count--;
				missedCol0.textContent = allStudents[0].count;
			}
		});

		//Student B's days missed total
		const row1 = document.querySelector('#row1');
		const missedCol1 = document.querySelector('#row1 .missed-col');
		row1.addEventListener('change', (e)=>{ 
			if(e.target.checked){
				allStudents[1].count++;
				missedCol1.textContent = allStudents[1].count;
			} else if(!e.target.checked){
				allStudents[1].count--;
				missedCol1.textContent = allStudents[1].count;
			}
		});

		//Student C's days missed total
		const row2 = document.querySelector('#row2');
		const missedCol2 = document.querySelector('#row2 .missed-col');
		row2.addEventListener('change', (e)=>{ 
			if(e.target.checked){
				allStudents[2].count++;
				missedCol2.textContent = allStudents[2].count;
			} else if(!e.target.checked){
				allStudents[2].count--;
				missedCol2.textContent = allStudents[2].count;
			}
		});

		//Student D's days missed total
		const row3 = document.querySelector('#row3');
		const missedCol3 = document.querySelector('#row3 .missed-col');
		row3.addEventListener('change', (e)=>{ 
			if(e.target.checked){
				allStudents[3].count++;
				missedCol3.textContent = allStudents[3].count;
			} else if(!e.target.checked){
				allStudents[3].count--;
				missedCol3.textContent = allStudents[3].count;
			}
		});

		//Student E's days missed total
		const row4 = document.querySelector('#row4');
		const missedCol4 = document.querySelector('#row4 .missed-col');
		row4.addEventListener('change', (e)=>{ 
			if(e.target.checked){
				allStudents[4].count++;
				missedCol4.textContent = allStudents[4].count;
			} else if(!e.target.checked){
				allStudents[4].count--;
				missedCol4.textContent = allStudents[4].count;
			}
		});
	},
	init: function(){
		this.render();
	}
};


/*****Controller*****/
let controller = {
	init: ()=>{
		view.init();
	},
	getNames: ()=>{
		return model.students;
	}
	/*,
	countChecks: ()=>{ 
	}*/
};

window.onload = ()=>{
	controller.init();
};