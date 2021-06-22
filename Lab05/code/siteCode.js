// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var cleaned = ('' + a).replace(/\D/g, '');
  var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return true;
    }
    else {
        return false;
    }
}

function validateCardNumber(cardNumber) {
    var a = document.getElementById(cardNumber).value;
    var cleaned = ('' + a).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{4})(\d{4})(\d{4})(\d{4})$/);
    if (match) {
        return true;
    }
    else {
        return false;
    }
}

function validateCVV(cardNumber) {
    var a = document.getElementById(cardNumber).value;
    var cleaned = ('' + a).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})$/);
    if (match) {
        return true;
    }
    else {
        return false;
    }
}

function validateName(name) {
    var a = document.getElementById(name).value;

    if (a == ""){
        return false;
    }
    else{
        return true;
    }
}
    
var unavailableDates = ["06/29/2021","07/29/2021","08/29/2021"];
const setDateFormat = "mm/dd/yy";
const setDateFormatCard = "mm/yy";


function disableDates(date) {

    var getValue = document.getElementById("inputGroupSelect01").selectedOptions[0].value;
    if (getValue == 1){
        if (date.getDay() === 4)
        return [false];
    }
    else if(getValue == 2){
        if ((date.getDay() === 1) || (date.getDay() === 2))
        return [false];
    }
    else if (getValue == 3){
        if ((date.getDay() === 3) || (date.getDay() === 5))
        return [false];
    }
    else if(getValue === "Choose:"){
        if ((date.getDay() === 1) || (date.getDay() === 2)|| (date.getDay() === 3)|| (date.getDay() === 4)|| (date.getDay() === 5)|| (date.getDay() === 6))
        return [false];
    }
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}

// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)

// HERE, JQuery "LISTENING" starts
$(document).ready(function(){
    $('#alertFNAME').hide();
    $('#alertLNAME').hide();
    $('#alertPHONE').hide();
    $('#alertCARDNAME').hide();
    $('#alertCARDNUMBER').hide();
    $('#alertCVV').hide();
    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    
    $("#btnSubmit").on("click", function(){
        if (!validateName("firstName")){
            $('#alertFNAME').show();
        }
        else {
            $('#alertFNAME').hide();
       }

        if (!validateName("lastName")){
            $('#alertLNAME').show();
        }
        else{
            $('#alertLNAME').hide();
        }

        if (!validatePhone("phoneNumber")){
            $('#alertPHONE').show();
        }
        else{
            $('#alertPHONE').hide();
        }

        if (!validateCardNumber("cardNumber")){
            $('#alertCARDNUMBER').show();
        }
        else{
            $('#alertCARDNUMBER').hide();
        }

        if (!validateName("cardHoldersName")){
            $('#alertCARDNAME').show();
        }
        else{
            $('#alertCARDNAME').hide();
        }

        if (!validateName("cvv")){
            $('#alertCVV').show();
        }
        else{
            $('#alertCVV').hide();
        }
    });
 
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date(),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates,
            //beforeShowDay: disableDatesBased($("#inputGroupSelect01").val()),
        }
    );

    $( "#dateInputCard" ).datepicker(
        {
            dateFormat: setDateFormatCard,
            // no calendar before June 1rst 2020
        }
    );
    //$('.alert').alert()

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#cardNumber").on("mouseenter", function(){
        $("#cardNumber").addClass("showInput");
    });

    $("#cardNumber").on("mouseleave", function(){
        $("#cardNumber").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#cardNumber").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });


});