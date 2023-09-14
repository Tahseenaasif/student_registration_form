let roll=$('#roll');
let namee=$('#name');
let marks=$('#marks');
$('#btn').on("click",function(event){
    if(roll.val()=='' || namee.val()=='' || marks.val()==''){
        alert("fill all the details")
    }else{
          
    let roll_element = " <span style='background-color:green; color:white'> " + roll.val() + " </span> ";
    let marks_element = " <span style='background-color:green; color:white'> " + marks.val() + " </span> ";
    let name_element = " <span style='background-color:green; color:white'> " + namee.val() + " </span> ";

    let final_string = "<div id='stu'> Roll no-&nbsp" + roll_element + ",&nbsp" + name_element + "&nbsphas scored&nbsp" + marks_element + "&nbspmarks.</div>";
    $('#rightside').append(final_string);
    }
})

//we can also uese the function to add element externallly by this way

// function show_output(roll, marks, name)
// {
//     let aside = $('aside');

//     let roll_element = " <span style='background-color:blue; color:white'> " + roll + " </span> ";
//     let marks_element = " <span style='background-color:blue; color:white'> " + marks + " </span> ";
//     let name_element = " <span style='background-color:blue; color:white'> " + name + " </span> ";

//     let final_string = "<div class='item'>Roll no-&nbsp" + roll_element + ",&nbsp" + name_element + "&nbsphas scored&nbsp" + marks_element + "&nbspmarks.</div>";
//     aside.append(final_string);
// }
