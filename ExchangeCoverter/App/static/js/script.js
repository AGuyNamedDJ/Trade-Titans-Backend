// Variable declaration
const c1 = document.getElementById("currency-one");
const c2 = document.getElementById("currency-two");
const amount1 = document.getElementById("amount-one");
const amount2 = document.getElementById("amount-one");
const swap = document.getElementById("swap");
const theRate = document.getElementById("rate");

// Calculate Fetch
function calculate(){
    const curr1 = c1.value;
    const curr2 = c2.value;
    
    fetch (`https://v6.exchangerate-api.com/v6/394a8a2d2149d596689c1940/latest/${curr1}`)
    .then((res) => res.json())
    .then((data) => {
        const rate = data.converstion_rates[curr2];
        theRate.innerText = `1 ${curr1} = ${rate} ${curr2}`;
        amount2.value = (amount1.value * rate).toFixed(2)
    });
}


// Event Listeners
c1.addEventListener("change", calculate);
amount1.addEventListener("input", calculate);
c2.addEventListener("change", calculate);
amount2.addEventListener("input", calculate);
swap.addEventListener("click", () => {
    const via = c1.value;
    c1.value = c2.value;
    c2.value = via;
    calculate();
})