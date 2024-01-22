let create_form = document.createElement("div");
// create_form.setAttribute("method","get")
create_form.id = "create_form"


function label_name(label_name, tagname1, tagvalue1, value1) {
    let create_form = document.createElement(label_name);
    create_form.setAttribute(tagname1, tagvalue1);
    create_form.innerHTML = value1;
    return create_form;
}

function input(label_name, type_name, type_val, id_val) {
    let create_input = document.createElement(label_name);
    create_input.setAttribute(type_name, type_val)
    create_input.setAttribute("placeholder", id_val)
    create_input.id = id_val;
    create_input.name = id_val;
    return create_input;
}

function submit(label_name, id_val) {
    let submit_input = document.createElement(label_name);
    submit_input.innerHTML = id_val;
    submit_input.id = id_val;
    return submit_input;
}


function breakpoint() {
    let breakPoint = document.createElement("br");
    return breakPoint;
}

let FirstName_label = label_name("label", "for", "First Name", "First Name")
let breakpoint1 = breakpoint();
let FirstName_input = input("input", "type", "text", "First Name");
let breakpoint2 = breakpoint();

let LastName_label = label_name("label", "for", "Last Name", "Last Name")
let breakpoint3 = breakpoint();
let LastName_input = input("input", "type", "text", "Last Name");
let breakpoint4 = breakpoint();

let AddressLine1_label = label_name("label", "for", "Address Line 1", "Address Line 1")
let breakpoint5 = breakpoint();
let AddressLine1_input = input("input", "type", "text", "Address Line 1");
let breakpoint6 = breakpoint();

let AddressLine2_label = label_name("label", "for", "Address Line 2", "Address Line 2")
let breakpoint7 = breakpoint();
let AddressLine2_input = input("input", "type", "text", "Address Line 2");
let breakpoint8 = breakpoint();

let PIN_label = label_name("label", "for", "PIN", "PIN")
let breakpoint9 = breakpoint();
let PIN_input = input("input", "type", "text", "PIN");
let breakpoint10 = breakpoint();

let Gender_label = label_name("label", "for", "Gender", "Gender")
let breakpoint11 = breakpoint();
let Gender_male_input1 = input("input", "type", "radio", "Gender");
let Gender_male = label_name("label", "for", "Gender", "male")
let Gender_female_input2 = input("input", "type", "radio", "Gender");
let Gender_female = label_name("label", "for", "Gender", "female")
let breakpoint12 = breakpoint();

let foodchoice_label = label_name("label", "for", "Gender", "Choice of Food: (must choose at least 2out of 5 options)")
let breakpoint13 = breakpoint();
let northindian_input = input("input", "type", "checkbox", "North Indian");
let northindian_label = label_name("label", "for", "North Indian", "North Indian")
let breakpoint14 = breakpoint();
let Southindian_input = input("input", "type", "checkbox", "South Indian");
let Southindian_label = label_name("label", "for", "South Indian", "South Indian")
let breakpoint15 = breakpoint();
let Italian_input = input("input", "type", "checkbox", "Italian");
let Italian_label = label_name("label", "for", "Italian", "Italian")
let breakpoint16 = breakpoint();
let Contiental_input = input("input", "type", "checkbox", "Contiental");
let Contiental_label = label_name("label", "for", "Contiental", "Contiental")
let breakpoint17 = breakpoint();
let Arabic_input = input("input", "type", "checkbox", "Arabic");
let Arabic_label = label_name("label", "for", "Arabic", "Arabic")
let breakpoint18 = breakpoint();

let State_label = label_name("label", "for", "State", "State")
let breakpoint19 = breakpoint();
let State_input = input("input", "type", "text", "State");
let breakpoint20 = breakpoint();

let Country_label = label_name("label", "for", "Country", "Country")
let breakpoint21 = breakpoint();
let Country_input = input("input", "type", "text", "Country");
let breakpoint22 = breakpoint();
let submit_value = submit("button", "Submit");
let breakpoint23 = breakpoint();

let create_table = document.createElement("table");
let create_trow1 = document.createElement("tr");
let create_thead1 = document.createElement("th");
create_thead1.innerHTML = "First Name";

let create_thead2 = document.createElement("th");
create_thead2.innerHTML = "Last Name";

let create_thead3 = document.createElement("th");
create_thead3.innerHTML = "Address Line 1";

let create_thead4 = document.createElement("th");
create_thead4.innerHTML = "Address Line 2";

let create_thead5 = document.createElement("th");
create_thead5.innerHTML = "PIN";

let create_thead6 = document.createElement("th");
create_thead6.innerHTML = "State";

let create_thead7 = document.createElement("th");
create_thead7.innerHTML = "Country";

let create_trow2 = document.createElement("tr");

let table_first = document.createElement("td");
table_first.id = "table_first";

let table_last = document.createElement("td");
table_last.id = "table_last";

let table_add1 = document.createElement("td");
table_add1.id = "table_add1";

let table_add2 = document.createElement("td");
table_add2.id = "table_add2";

let table_pin = document.createElement("td");
table_pin.id = "table_pin";

let table_state = document.createElement("td");
table_state.id = "table_state";

let table_country = document.createElement("td");
table_country.id = "table_country";

create_form.append(FirstName_label, breakpoint1, FirstName_input, breakpoint2,
    LastName_label, breakpoint3, LastName_input, breakpoint4,
    AddressLine1_label, breakpoint5, AddressLine1_input, breakpoint6,
    AddressLine2_label, breakpoint7, AddressLine2_input, breakpoint8,
    PIN_label, breakpoint9, PIN_input, breakpoint10, Gender_label,
    breakpoint11, Gender_male_input1, Gender_male, Gender_female_input2,
    Gender_female, breakpoint12, foodchoice_label, breakpoint13,
    northindian_input, northindian_label, breakpoint14, Southindian_input,
    Southindian_label, breakpoint15, Italian_input, Italian_label, breakpoint16,
    Contiental_input, Contiental_label, breakpoint17, Arabic_input, Arabic_label,
    breakpoint18, State_label, breakpoint19, State_input, breakpoint20,
    Country_label, breakpoint21, Country_input, breakpoint22, submit_value, breakpoint23
)

create_trow1.append(create_thead1, create_thead2,
    create_thead3, create_thead4, create_thead5, create_thead6, create_thead7,
);

create_trow2.append(table_first, table_last,
    table_add1, table_add2, table_pin, table_state, table_country,
);

create_table.append(create_trow1, create_trow2);

document.body.append(create_form, create_table);


const getvalues = document.getElementById("Submit");
getvalues.addEventListener("click", foo)

function foo() {

    console.log(document.getElementById("First Name").value);
    document.getElementById("table_first").innerHTML = document.getElementById("First Name").value;

    document.getElementById("table_last").innerHTML = document.getElementById("Last Name").value;

    document.getElementById("table_add1").innerHTML = document.getElementById("Address Line 1").value;

    document.getElementById("table_add2").innerHTML = document.getElementById("Address Line 2").value;

    document.getElementById("table_pin").innerHTML = document.getElementById("PIN").value;

    document.getElementById("table_state").innerHTML = document.getElementById("State").value;

    document.getElementById("table_country").innerHTML = document.getElementById("Country").value;

}

