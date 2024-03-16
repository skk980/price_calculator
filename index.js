
const mrp = document.querySelector("#mrp");
const mrp_in_type = document.querySelector("#mrp_in_type");
const b_weight_in_type = document.querySelector("#b_weight_in_type")
const b_weight = document.querySelector("#b_weight")
const b_amount = document.querySelector("#b_amount")


b_weight.addEventListener('keydown',()=>{
    b_amount.value = ""
})
b_amount.addEventListener('keydown',()=>{
    b_weight.value = ""
})
b_weight_in_type.addEventListener("change",()=>{
    b_weight.value = ""
})


document.querySelector("#submit").addEventListener("click",()=>{


    if(b_amount.value && !b_weight.value){
        b_weight.value =  calculator({
            broughtAmount:b_amount.value,
            totalPrice:mrp.value,
            totalPriceInType:mrp_in_type.value,
            weighInType:b_weight_in_type.value
        })  // weight
    }else{
        b_amount.value =  calculator({
            weight:b_weight.value,
            totalPrice:mrp.value,
            totalPriceInType:mrp_in_type.value,
            weighInType:b_weight_in_type.value
        }) //price
    }

   
})


