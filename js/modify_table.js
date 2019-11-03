function modify_table() {
    if (document.title.indexOf("Place Your Order - Amazon.com Checkout") !== -1) {

        chrome.storage.sync.get('sessionDonation', function(data) {
            var current_don = data.sessionDonation;
            var table = document.getElementById("subtotals-marketplace-table");
            let newRow = table.insertRow(table.rows.length - 2);
            let newCell = newRow.insertCell(0);
            let newSpan = document.createElement('span')
            newSpan.innerHTML = 'Pennies4Good'
            newCell.appendChild(newSpan);
            let newCell1 = newRow.insertCell(1);
            newCell1.setAttribute("class", "a-text-right aok-nowrap a-nowrap");
            var donated_total = current_don; //set this to the total donated for a shopping session.
            console.log('d'+donated_total);

            newCell1.innerHTML = "$" + donated_total;

            let total = table.rows[table.rows.length - 1].cells[1].innerHTML;
            let newTotal = Number(total.substring(total.indexOf("$") + 1)) + Number(donated_total);
            console.log(newTotal);
            table.rows[table.rows.length - 1].cells[1].innerHTML = "$" + newTotal.toFixed(2);
        });

        var btn = document.createElement("BUTTON");
        btn.setAttribute("id","clearSession");
        var t = document.createTextNode("CLICK ME");

        btn.appendChild(t);
        //Appending to DOM
        document.body.appendChild(btn);
        var clearSession = document.getElementById('clearSession');
        clearSession.addEventListener('click', function() {
            chrome.storage.sync.set({'sessionDonation': 0}, function() {
                alert("success resetting session!");
            })
        });
    }
}

modify_table();