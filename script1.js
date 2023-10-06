document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "df1619cdaef9d40f82900abd    "; // Replace "your-api-key" with your actual API key
    const dropList = document.querySelectorAll(".drop-list select"),
    fromCurrency = document.querySelector(".from select"),
    toCurrency = document.querySelector(".to select"),
        getButton = document.getElementById("button_1");
        //const selectedValue_1 = dropdown_1.value;
        //const stringValue1 = String(selectedValue_1);
        //const dropdown_1 = document.getElementById("select_1");
        //const dropdown_2 = document.getElementById("select_2");
        //const selectedValue_2 = dropdown_2.value;
        //const stringValue2 = String(selectedValue_2);
        //toCurrency_value = document.getElementById("select_1").value;
        //fromCurrency_value = document.getElementById("select_2").value;
        //text_box_value = document.getElementById("input_1").value;
        //fromCurrency_value_string = String(fromCurrency_value);
        //toCurrency_value_string = String(toCurrency_value);
        const selectedValue_1 = fromCurrency.value;
        const selectedValue_2 = toCurrency.value;
        String_1 = String(selectedValue_1);
        String_2 = String(selectedValue_2);

    for (let i = 0; i < dropList.length; i++) {
        for (currency_code in country_list) {
            let selected;
            if (i == 0) {
                selected = currency_code == "USD" ? "selected" : "";
            } else if (i == 1) {
                selected = currency_code == "INR" ? "selected" : "";
            }

            let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
            dropList[i].insertAdjacentHTML("beforeend", optionTag);
        }
    }

    getButton.addEventListener("click", e => {
        e.preventDefault();
        getExchangeRate();
        console.log("Clicked!");
    });

    function getExchangeRate() {
        const amount = document.querySelector(".amount input");
        let amountVal = amount.value;
        if (amountVal == "" || amountVal == "0") {
            amount.value = "1";
            amountVal = 1;
        }
        let url = `https://v6.exchangerate-api.com/v6/df1619cdaef9d40f82900abd/latest/${fromCurrency.value}`;
        fetch(url).then(response => response.json()).then(result =>
            {
                let exchangeRate = result.conversion_rates[toCurrency.value];
                let totalExRate = (amountVal * exchangeRate).toFixed(2);
                console.log(totalExRate);
                console.log(selectedValue_1);
                document.querySelector(".exchange-rate").innerHTML = document.getElementById("input_1").value + " " + String_1 + "=" + totalExRate + " " + String_2;
            });
    }
});
