$( document ).ready( readyNow );
console.log(`in JQuery`);
let staff = [];

function readyNow(){
    $( '#addEmployeeButton' ).on( 'click', Submit )
} 

// function addItem(){
//     console.log( 'in addItem' );
//     let newItem = {
//         fname: $( '#fNameIN' ).val(),
//         lname: $( '#lNameIN' ).val(),
//         id: $( '#idIn' ).val(),
//         title: $( '#titleIn' ).val(),
//         salary: $( '#salaryIn' ).val(),
//     } // end newItem
//     staff.push( newItem );
//     console.log( 'Staff:', staff );
//     displayStaff();
// } // end addItem