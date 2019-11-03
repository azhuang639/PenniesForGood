function modify_table() {
    if (document.title.indexOf("Place Your Order - Amazon.com Checkout") !== -1) {
        var table = document.getElementById("subtotals-marketplace-table");
        let newRow = table.insertRow(table.rows.length - 2);
        let newCell = newRow.insertCell(0);
        let newSpan = document.createElement('span')
        newSpan.innerHTML = 'Pennies4Good'
        newCell.appendChild(newSpan);
        let newCell1 = newRow.insertCell(1);
        newCell1.setAttribute("class", "a-text-right aok-nowrap a-nowrap");
        var donated = 1.23; //set this to the total donated for a shopping session.
        newCell1.innerHTML = "$" + donated;

        let total = table.rows[table.rows.length - 1].cells[1].innerHTML;
        let newTotal = Number(total.substring(total.indexOf("$") + 1)) + Number(donated);
        console.log(newTotal);
        table.rows[table.rows.length - 1].cells[1].innerHTML = "$" + newTotal;
    }
}

modify_table();