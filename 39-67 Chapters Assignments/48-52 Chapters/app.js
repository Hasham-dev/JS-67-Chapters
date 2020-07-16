
// function chatApp(id,element){
//   //////////get vendor name
//   var val = document.getElementById(id);
//   var parent = document.createElement("div");
//   var p = document.createElement(element);
//   var txtnode = document.createTextNode(val.value);
//   p.appendChild(txtnode);
//   parent.appendChild(p);
//   console.log(parent);
//   var main  = document.getElementById('main');
//   main.appendChild(parent);
//   val.value = "";
  
// }



// function myFunction() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more"; 
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less"; 
//     moreText.style.display = "inline";
//   }
// }




var arrHead = new Array();
    arrHead = ['', 'Emp. Name', 'Designation', 'Age']; // table headers.

    // first create a TABLE structure by adding few headers.
    function createTable() {
        var empTable = document.createElement('table');
        empTable.setAttribute('id', 'empTable');  // table id.

        var tr = empTable.insertRow(-1);

        for (var h = 0; h < arrHead.length; h++) {
            var th = document.createElement('th'); // the header object.
            th.innerHTML = arrHead[h];
            tr.appendChild(th);
        }

        var div = document.getElementById('cont');
        div.appendChild(empTable);    // add table to a container.
    }

    // function to add new row.
    function addRow() {
        var empTab = document.getElementById('empTable');

        var rowCnt = empTab.rows.length;    // get the number of rows.
        var tr = empTab.insertRow(rowCnt); // table row.
        tr = empTab.insertRow(rowCnt);

        for (var c = 0; c < arrHead.length; c++) {
            var td = document.createElement('td');          // TABLE DEFINITION.
            td = tr.insertCell(c);

            if (c == 0) {   // if its the first column of the table.
                // add a button control.
                var button = document.createElement('input');

                // set the attributes.
                button.setAttribute('type', 'button');
                button.setAttribute('value', 'Remove');

                // add button's "onclick" event.
                button.setAttribute('onclick', 'removeRow(this)');

                td.appendChild(button);
            }
            else {
                // the 2nd, 3rd and 4th column, will have textbox.
                var ele = document.createElement('input');
                ele.setAttribute('type', 'text');
                ele.setAttribute('value', '');

                td.appendChild(ele);
            }
        }
    }

    // function to delete a row.
    function removeRow(oButton) {
        var empTab = document.getElementById('empTable');
        empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr
    }

    // function to extract and submit table data.
    function submit() {
        var myTab = document.getElementById('empTable');
        var arrValues = new Array();

        // loop through each row of the table.
        for (row = 1; row < myTab.rows.length - 1; row++) {
            // loop through each cell in a row.
            for (c = 0; c < myTab.rows[row].cells.length; c++) {
                var element = myTab.rows.item(row).cells[c];
                if (element.childNodes[0].getAttribute('type') == 'text') {
                    arrValues.push("'" + element.childNodes[0].value + "'");
                }
            }
        }
        
        // finally, show the result in the console.
        console.log(arrValues);
    }