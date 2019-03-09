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
  for( let item of staff ){
     // for each item, create a new <li> in inventoryOut
    el.append( `<li>${ newEmployee.firstName } & ${ newEmployee.lastName } & ${ newEmployee.id } & ${ newEmployee.title } & ${ newEmployee.salary }</li>` );
    } // end loop
 } // display staff