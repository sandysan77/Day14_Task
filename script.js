
function create(tagname,att_name,att_value,content){

    var ele = document.createElement(tagname);
    ele.setAttribute(att_name,att_value);
    ele.innerHTML = content;
    return ele;

}

function input_create(tagname,att_name,att_value,id_val){

    var input = document.createElement(tagname);
    input.setAttribute(att_name,att_value);
    input.id = id_val;
    return input;

}

function break_t1(){
    var br = document.createElement("br");
    return br;

}

var firstName_label = create("label","for","firstName","first Name");
var break_t11 = break_t1();
var firstName = input_create("input","type","text","firstName");
var break_t12 = break_t1();

var middleName_label = create("label","for","middleName","middle Name");
var break_t13 = break_t1();
var middleName = input_create("input","type","text","middleName");
var break_t14 = break_t1();

var lastName_label = create("label","for","lastName","last Name");
var break_t15 = break_t1();
var lastName = input_create("input","type","text","lastName");
var break_t16 = break_t1();

var email_label = create("label","for","email","E-mail");
var break_t17 = break_t1();
var email = input_create("input","type","email","email");
var break_t18 = break_t1();

var password_label = create("label","for","password","Password");
var break_t19 = break_t1();
var password = input_create("input","type","password","password");
var break_t20 = break_t1();

var phoneNumber_label = create("label","for","phonenumber","Phone Number");
var break_t21 = break_t1();
var phoneNumber = input_create("input","type","phonenumber","phonenumber");
var break_t22 = break_t1();


document.body.append(firstName_label,break_t11,firstName,break_t12,middleName_label
    ,break_t13,middleName,break_t14,lastName_label,break_t15,lastName,break_t16,
    email_label,break_t17,email,break_t18,password_label,break_t19,password,break_t20
    ,phoneNumber_label,break_t21,phoneNumber,break_t22);
