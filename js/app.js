const typeOfTape = document.getElementById('typeOfTape');
const client = document.getElementById('client');
const сustomerOrder = document.getElementById('сustomerOrder');
const glue = document.getElementById('glue');
const plate = document.getElementById('plate');
const roll = document.getElementById('roll');
const quantity = document.getElementById('quantity');
const workOrder = document.getElementById('workOrder');
const needWidth = document.getElementById('needWidth');
const correction = document.getElementById('correction');

const calculateBtn = document.getElementById('calculate');
const tableTr = document.querySelectorAll('table_tr');
const resaultTable = document.getElementById('resaultTable');
const delTable = document.getElementById('delTable');



const tableNotes = [{
        titleTypeOfTape: "Тип ленты",
        titleClient: "Заказчик",
        titleCustomerOrder: "Заказ покупателя",
        titleGlue: "Клей",
        titlePlate: "Пластина",
        titleRoll: "Вал",
        titleQuantity: "Количество, шт",
        titleWorkOrder: "Заказ наряд",
        titleNeedWidth: "Ширина",
        titleWinding: "Намотка",
        titleAmount: "Кол-во, пог.фм",
        titleSpeed: "Скорость полива",
        titleTimeProductionTime: "Время изготовления",
        titleDateReady: "Дата готовности",
        titleReadyTime: "Время готовности",
        titleCorrection: "Корректировка",
        titleCompletionMark: "Отметка о готовности"
    },
    {
        titleTypeOfTape: "1",
        titleClient: "1",
        titleCustomerOrder: "1",
        titleGlue: "1",
        titlePlate: "1",
        titleRoll: "1",
        titleQuantity: "1",
        titleWorkOrder: "1",
        titleNeedWidth: "1",
        titleWinding: "0",
        titleAmount: "0",
        titleSpeed: "0",
        titleTimeProductionTime: "0",
        titleDateReady: "0",
        titleReadyTime: "0",
        titleCorrection: correction.value,
        titleCompletionMark: "0"
    },
    {
        titleTypeOfTape: "2",
        titleClient: "2",
        titleCustomerOrder: "2",
        titleGlue: "2",
        titlePlate: "2",
        titleRoll: "2",
        titleQuantity: "2",
        titleWorkOrder: "2",
        titleNeedWidth: "2",
        titleWinding: "0",
        titleAmount: "0",
        titleSpeed: "0",
        titleTimeProductionTime: "0",
        titleDateReady: "0",
        titleReadyTime: "0",
        titleCorrection: correction.value,
        titleCompletionMark: "0"
    },
    {
        titleTypeOfTape: "3",
        titleClient: "2",
        titleCustomerOrder: "2",
        titleGlue: "2",
        titlePlate: "2",
        titleRoll: "2",
        titleQuantity: "2",
        titleWorkOrder: "2",
        titleNeedWidth: "2",
        titleWinding: "0",
        titleAmount: "0",
        titleSpeed: "0",
        titleTimeProductionTime: "0",
        titleDateReady: "0",
        titleReadyTime: "0",
        titleCorrection: correction.value,
        titleCompletionMark: "0"
    }
]


function render() {
    // добавление названий ячеек в таблицу
    resaultTable.innerHTML = '' // таким образом после выполнения функции мы очищаем выполенные записи
    for (let i = 0; i < tableNotes.length; i++) {
        resaultTable.insertAdjacentHTML('beforeend', getNotesTemplate(tableNotes[i], i)) // добавление значений из массива notes
    }
}

render();

calculateBtn.onclick = function() {
    // добавление строк в таблицу с проверкой на зполненность
    if (typeOfTape.value.length === 0 || client.value.length === 0 || сustomerOrder.value.length === 0 || glue.value.length === 0 || plate.value.length === 0 || roll.value.length === 0 || needWidth.value.length === 0) {
        alert("Заполните поля")
        return // данное условие предотврощает сохранение пустых значений
    }
    const newTableNote = {
        titleTypeOfTape: typeOfTape.value,
        titleClient: client.value,
        titleCustomerOrder: сustomerOrder.value,
        titleGlue: glue.value,
        titlePlate: plate.value,
        titleRoll: roll.value,
        titleQuantity: quantity.value,
        titleWorkOrder: workOrder.value,
        titleNeedWidth: needWidth.value,
        titleWinding: "0",
        titleAmount: "0",
        titleSpeed: "0",
        titleTimeProductionTime: "0",
        titleDateReady: "0",
        titleReadyTime: "0",
        titleCorrection: correction.value,
        titleCompletionMark: "0"
    }
    tableNotes.push(newTableNote) // push добавляет элементы в конец массива
    render()
    clearInputs()
    changeTableTitile()
    dragAndDropTable()
    delOneTr();
}

function clearInputs() {
    // обнуляем input после добавления в таблицу
    let inputs = document.querySelectorAll('input[type=text]');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    };
}

delTable.onclick = function clearTable() {
    // очистка таблицы по кнопке сбросить
    while (resaultTable.rows.length > 1) {
        resaultTable.deleteRow(1);
    }
    tableNotes.length = 1;
}

function getNotesTemplate(typeOfTapeVal) {
    // шаблон добавляемой строки в таблицу
    return `
    <tr class="table_tr">
        <td class="table_td table_td-drop">&#8230;</td>
        <td class="table_td">${typeOfTapeVal.titleTypeOfTape}</td>
        <td class="table_td">${typeOfTapeVal.titleClient}</td>
        <td class="table_td">${typeOfTapeVal.titleCustomerOrder}</td>
        <td class="table_td">${typeOfTapeVal.titleGlue}</td>
        <td class="table_td">${typeOfTapeVal.titlePlate}</td>
        <td class="table_td">${typeOfTapeVal.titleRoll}</td>
        <td class="table_td">${typeOfTapeVal.titleQuantity}</td>
        <td class="table_td">${typeOfTapeVal.titleWorkOrder}</td>
        <td class="table_td">${typeOfTapeVal.titleNeedWidth}</td>
        <td class="table_td">${typeOfTapeVal.titleWinding}</td>
        <td class="table_td">${typeOfTapeVal.titleAmount}</td>
        <td class="table_td">${typeOfTapeVal.titleSpeed}</td>
        <td class="table_td">${typeOfTapeVal.titleTimeProductionTime}</td>
        <td class="table_td">${typeOfTapeVal.titleDateReady}</td>
        <td class="table_td">${typeOfTapeVal.titleReadyTime}</td>
        <td class="table_td">${typeOfTapeVal.titleCorrection}</td>
        <td class="table_td">${typeOfTapeVal.titleCompletionMark}</td>
        <td class="table_td table_td-a"><a href="#" class="td-del">&#10060;</a></td>
    </tr>
    `
}


function changeTableTitile() {
    // заголовки таблице в первой строке
    var firstRow = document.querySelector('table tr:first-child');
    var firstRowTd = firstRow.querySelectorAll('td');
    firstRowTd.forEach(function(element) {
        element.style.cssText = 'font-weight:700';
        if (element.classList.contains("table_td-a")) {
            element.style.cssText = 'display:none!important';
        }
    })

}

changeTableTitile();


function delOneTr() {
    // Получаем кнопки удаления
    const deleteButtons = document.querySelectorAll('.td-del');

    // Назначаем обработчик событий на каждую кнопку удаления
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Получаем родительскую строку (tr) кнопки удаления
            const row = button.parentNode.parentNode;
            console.log(row)
                // Удаляем строку из таблицы, но при создании новой записи удалёеая возвращается - ЭТО БАГ!!!

            row.parentNode.removeChild(row);

        });
    });
}
delOneTr();


function dragAndDropTable() {
    // функция для того, чтобы перемещать строки в таблице методом drag&drop
    // взято с github https://github.com/phuocng/html-dom/blob/master/contents/drag-and-drop-table-row.mdx
    const table = document.getElementById('resaultTable');

    let draggingEle;
    let draggingRowIndex;
    let placeholder;
    let list;
    let isDraggingStarted = false;

    // The current position of mouse relative to the dragging element
    let x = 0;
    let y = 0;

    // Swap two nodes
    const swap = function(nodeA, nodeB) {
        const parentA = nodeA.parentNode;
        const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;

        // Move nodeA to before the nodeB
        nodeB.parentNode.insertBefore(nodeA, nodeB);

        // Move nodeB to before the sibling of nodeA
        parentA.insertBefore(nodeB, siblingA);
    };

    // Check if nodeA is above nodeB
    const isAbove = function(nodeA, nodeB) {
        // Get the bounding rectangle of nodes
        const rectA = nodeA.getBoundingClientRect();
        const rectB = nodeB.getBoundingClientRect();

        return rectA.top + rectA.height / 2 < rectB.top + rectB.height / 2;
    };

    const cloneTable = function() {
        const rect = table.getBoundingClientRect();
        const width = parseInt(window.getComputedStyle(table).width);

        list = document.createElement('div');
        list.classList.add('clone-list');
        list.style.position = 'absolute';
        list.style.left = rect.left + 'px';
        list.style.top = rect.top + 'px';
        table.parentNode.insertBefore(list, table);

        // Hide the original table
        table.style.visibility = 'hidden';

        table.querySelectorAll('tr').forEach(function(row) {
            // Create a new table from given row
            const item = document.createElement('div');
            item.classList.add('draggable');

            const newTable = document.createElement('table');
            newTable.setAttribute('class', 'clone-table');
            newTable.style.width = width + 'px';

            const newRow = document.createElement('tr');
            const cells = [].slice.call(row.children);
            cells.forEach(function(cell) {
                const newCell = cell.cloneNode(true);
                newCell.style.width = parseInt(window.getComputedStyle(cell).width) + 'px';
                newRow.appendChild(newCell);
            });

            newTable.appendChild(newRow);
            item.appendChild(newTable);
            list.appendChild(item);
        });
    };

    const mouseDownHandler = function(e) {
        // Get the original row
        const originalRow = e.target.parentNode;
        draggingRowIndex = [].slice.call(table.querySelectorAll('tr')).indexOf(originalRow);

        // Determine the mouse position
        x = e.clientX;
        y = e.clientY;

        // Attach the listeners to document
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function(e) {
        if (!isDraggingStarted) {
            isDraggingStarted = true;

            cloneTable();

            draggingEle = [].slice.call(list.children)[draggingRowIndex];
            draggingEle.classList.add('dragging');

            // Let the placeholder take the height of dragging element
            // So the next element won't move up
            placeholder = document.createElement('div');
            placeholder.classList.add('placeholder');
            draggingEle.parentNode.insertBefore(placeholder, draggingEle.nextSibling);
            placeholder.style.height = draggingEle.offsetHeight + 'px';
        }

        // Set position for dragging element
        draggingEle.style.position = 'absolute';
        draggingEle.style.top = (draggingEle.offsetTop + e.clientY - y) + 'px';
        draggingEle.style.left = (draggingEle.offsetLeft + e.clientX - x) + 'px';

        // Reassign the position of mouse
        x = e.clientX;
        y = e.clientY;

        // The current order
        // prevEle
        // draggingEle
        // placeholder
        // nextEle
        const prevEle = draggingEle.previousElementSibling;
        const nextEle = placeholder.nextElementSibling;

        // The dragging element is above the previous element
        // User moves the dragging element to the top
        // We don't allow to drop above the header
        // (which doesn't have previousElementSibling)
        if (prevEle && prevEle.previousElementSibling && isAbove(draggingEle, prevEle)) {
            // The current order    -> The new order
            // prevEle              -> placeholder
            // draggingEle          -> draggingEle
            // placeholder          -> prevEle
            swap(placeholder, draggingEle);
            swap(placeholder, prevEle);
            return;
        }

        // The dragging element is below the next element
        // User moves the dragging element to the bottom
        if (nextEle && isAbove(nextEle, draggingEle)) {
            // The current order    -> The new order
            // draggingEle          -> nextEle
            // placeholder          -> placeholder
            // nextEle              -> draggingEle
            swap(nextEle, placeholder);
            swap(nextEle, draggingEle);
        }
    };

    const mouseUpHandler = function() {
        // Remove the placeholder
        placeholder && placeholder.parentNode.removeChild(placeholder);

        draggingEle.classList.remove('dragging');
        draggingEle.style.removeProperty('top');
        draggingEle.style.removeProperty('left');
        draggingEle.style.removeProperty('position');

        // Get the end index
        const endRowIndex = [].slice.call(list.children).indexOf(draggingEle);

        isDraggingStarted = false;

        // Remove the list element
        list.parentNode.removeChild(list);

        // Move the dragged row to endRowIndex
        let rows = [].slice.call(table.querySelectorAll('tr'));
        draggingRowIndex > endRowIndex ?
            rows[endRowIndex].parentNode.insertBefore(rows[draggingRowIndex], rows[endRowIndex]) :
            rows[endRowIndex].parentNode.insertBefore(
                rows[draggingRowIndex],
                rows[endRowIndex].nextSibling
            );

        // Bring back the table
        table.style.removeProperty('visibility');

        // Remove the handlers of mousemove and mouseup
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    table.querySelectorAll('tr').forEach(function(row, index) {
        // Ignore the header
        // We don't want user to change the order of header
        if (index === 0) {
            return;
        }

        const firstCell = row.firstElementChild;
        firstCell.classList.add('draggable');
        firstCell.addEventListener('mousedown', mouseDownHandler);
    });
};

dragAndDropTable()