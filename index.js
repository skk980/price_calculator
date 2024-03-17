
const mrp = document.querySelector("#mrp");
const mrp_in_type = document.querySelector("#mrp_in_type");
const b_weight_in_type = document.querySelector("#b_weight_in_type")
const b_weight = document.querySelector("#b_weight")
const b_amount = document.querySelector("#b_amount")


mrp.addEventListener('keydown',()=>{
    b_amount.value = ""
    b_weight.value = ""
})

mrp_in_type.addEventListener("change",()=>{
    mrp.value = ""
})

b_weight.addEventListener('keydown',()=>{
    if(mrp.value)
    b_amount.value = ""
})
b_amount.addEventListener('keydown',()=>{
    if(mrp.value)
    b_weight.value = ""
})
b_weight_in_type.addEventListener("change",()=>{
    if(mrp.value)
    b_weight.value = ""
})


// document.querySelectorAll('input').forEach(e => {
//     e.addEventListener('focus', (ev) => {
//         ev.preventDefault();
//         document.querySelectorAll('.digit').forEach(btn => {
//             btn.addEventListener('click', (ce) => {
//                 if ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].includes(ce.target.textContent))
//                     ev.target.value += ce.target.textContent;
//                 if (ce.target.textContent === ".")
//                     ev.target.value = ce.target.textContent;
//             });
//         });
//     });
// });

document.querySelector("#clear").addEventListener("click",()=>{
    document.querySelectorAll('input').forEach(e => {
        e.value = ""
    })
})

document.querySelector("#submit").addEventListener("click",()=>{


    if(b_amount.value && !b_weight.value){
        b_weight.value =  calculator({
            broughtAmount:b_amount.value,
            totalPrice:mrp.value,
            totalPriceInType:mrp_in_type.value,
            weighInType:b_weight_in_type.value
        })  // weight
    }else if(!b_amount.value && b_weight.value){
        b_amount.value =  calculator({
            weight:b_weight.value,
            totalPrice:mrp.value,
            totalPriceInType:mrp_in_type.value,
            weighInType:b_weight_in_type.value
        }) //brought price
    }else{
        mrp.value = calculator({
            weight:b_weight.value,
            weighInType:b_weight_in_type.value,
            broughtAmount:b_amount.value,
            totalPriceInType:mrp_in_type.value,
        }) //mrp price
    }

   
})


