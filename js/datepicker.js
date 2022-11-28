$(function() {
    $("#inputDate").datepicker({                  
        maxDate: moment().toDate(),
        minDate: '-7D',
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        changeYear: true,
        showAnim: 'slideDown',
        showButtonPanel: true,
        closeText: "Close",
    })
} );