$( document ).ready( readyNow );
console.log(`in JQuery`);
let staff = [];
let salaries = [];
//arrays

function readyNow(){
    $( '#addEmployeeButton' ).on( 'click', addEmployee );
    $( '#addEmployeeButton' ).on( 'click', addSalary );
    $( '#deletebutton' ).on('click', removeEmployee );
} // end ready now


function addEmployee(){
    console.log( 'in addStaff' );
    let newEmployee = {
        firstName: $( '#fNameIN' ).val(),
        lastName: $( '#lNameIN' ).val(),
        id: $( '#idIn' ).val(),
        title: $( '#titleIn' ).val(),
        salary: $( '#salaryIn' ).val(),
    } // end new item
    staff.push( newEmployee );
    //push new employee to staff array
    console.log( 'staff:', staff );
    displayStaff();
} // end add item


function addSalary(){
    let newSalary = {
        salary: $( '#salaryIn' ).val(),
    }
 salaries.push( newSalary );
 console.log( 'salaries:', salaries );
 $('#salaryIn').val('');//clearing salary input field
 salariesConvert();
 }


 function displayStaff(){
    console.log( 'in displayStaff' );
    let el = $( '#staffOut' );
    el.empty();
     // loop staff
  for( let newEmployee of staff ){
     // for each item, create a new <td></td> in inventoryOut
    el.append( `<tr><td>${ newEmployee.firstName }</td><td>${ newEmployee.lastName }</td><td>${ newEmployee.id }</td><td>${ newEmployee.title }</td><td>${ newEmployee.salary }</td></tr>` );
    $('#fNameIN').val('');
    $('#lNameIN').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    // $('#salaryIn').val(''); //leaving input field for salaries array
    } // end loop
 } // display staff

function removeEmployee(){
        let el = $( '#staffOut' );
        el.empty();
        removeFromStaff();
    }
function removeFromStaff(){
    staff.pop();
}

function salariesConvert(){
    myJSON = JSON.stringify( salaries );
    salariesMath();
}

 function salariesMath(){
     console.log( 'in salariesMath' );
     let tot = $( '#monthlyTotal' );
     tot.empty();
     accumulator = 0;
     for(let i=[0]; i < salaries.length; i++) {
     accumulator + salaries[i];
     }
 }