/*jshint esversion: 6 */
// When size is submitted by the user, call makeGrid()
const table = document.getElementById("pixel_canvas");
document.getElementById('sizePicker').addEventListener('submit', function makeGrid(e) {
    e.preventDefault();
    clearGrid();
    const input_heightValue = document.getElementById("input_height").value;
    const input_widthValue = document.getElementById("input_width").value;
    console.log("Test");
    console.log(input_heightValue, input_widthValue);
    for (let i = 0; i < input_heightValue; i++) {
        let rows = document.createElement("tr");
        let j = 0;
        while (j < input_widthValue) {
            let cells = document.createElement("td");
            j++;
            rows.appendChild(cells);
        }
        table.appendChild(rows);
    }
    Cellcolor();
});

//Clear the grid
function clearGrid() {
    console.log(table.rows.length);
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}

//Traverse the table and call the changeColour function on the selected table cell
function Cellcolor() {
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].addEventListener("click", changeColor);

        }
    }
}

function changeColor() {
    const colorPickerValue = document.getElementById("colorPicker").value;
    this.style.backgroundColor = colorPickerValue;
}