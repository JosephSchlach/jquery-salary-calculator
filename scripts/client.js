$( document ).ready( readyNow );
console.log(`in JQuery`);
let staff = [];
//array

function readyNow(){
    $( '#addEmployeeButton' ).on( 'click', addEmployee )
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
    $('#salaryIn').val('');
    } // end loop
 } // display staff