const typeOfProduct = document.getElementById("typeOfProduct");
const typeOfTape = document.getElementById("typeOfTape");
const client = document.getElementById("client");
const сustomerOrder = document.getElementById("сustomerOrder");
const glue = document.getElementById("glue");
const plate = document.getElementById("plate");
const roll = document.getElementById("roll");
const quantity = document.getElementById("quantity");
const workOrder = document.getElementById("workOrder");
const needWidth = document.getElementById("needWidth");
const correction = document.getElementById("correction");

const calculateBtn = document.getElementById("calculate");
const tableTr = document.querySelectorAll("table_tr");
const resaultTable = document.getElementById("resaultTable");
const delTable = document.getElementById("delTable");
const sortTableBtn = document.getElementById("sortTable");

const changePlateBtn = document.getElementById("changePlate");
const changeGlueBtn = document.getElementById("changeGlue");
const changeRollBtn = document.getElementById("changeRoll");

// let widingTest = 1520;

const tableNotes = [
  {
    titleTypeOfProduct: "Вид продукции",
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
    titleCompletionMark: "Отметка о готовности",
    completed: false,
  },
  {
    titleTypeOfProduct: "Серийная",
    titleTypeOfTape: "МА-20",
    titleClient: 1,
    titleCustomerOrder: "1",
    titleGlue: "1",
    titlePlate: "1",
    titleRoll: "1",
    titleQuantity: 2,
    titleWorkOrder: "1",
    titleNeedWidth: 0,
    titleWinding: 0,
    titleAmount: 0,
    titleSpeed: "0",
    titleTimeProductionTime: "0",
    titleDateReady: "0",
    titleReadyTime: "0",
    titleCorrection: correction.value,
    titleCompletionMark: "",
    completed: false,
  },
  {
    titleTypeOfProduct: "Мелкосирийная",
    titleTypeOfTape: "Войлочная",
    titleClient: "2",
    titleCustomerOrder: "2",
    titleGlue: "2",
    titlePlate: "2",
    titleRoll: "2",
    titleQuantity: 1,
    titleWorkOrder: "2",
    titleNeedWidth: 0,
    titleWinding: 0,
    titleAmount: 2,
    titleSpeed: "0",
    titleTimeProductionTime: "0",
    titleDateReady: "0",
    titleReadyTime: "0",
    titleCorrection: correction.value,
    titleCompletionMark: "",
    completed: false,
  },
  {
    titleTypeOfProduct: "Нестандартная",
    titleTypeOfTape: "Кромка",
    titleClient: "2",
    titleCustomerOrder: "2",
    titleGlue: "2",
    titlePlate: "2",
    titleRoll: "2",
    titleQuantity: 0,
    titleWorkOrder: "2",
    titleNeedWidth: 0,
    titleWinding: 0,
    titleAmount: 1,
    titleSpeed: "0",
    titleTimeProductionTime: "0",
    titleDateReady: "0",
    titleReadyTime: "0",
    titleCorrection: correction.value,
    titleCompletionMark: "",
    completed: false,
  },
];

const parametersList = {
  // список типов лент и их параметров [ширина, намотка]
  "МА-20": [1050, 9000],
  "МА-25": [1050, 9000],
  "МА-30": [1050, 9000],
  "МА-50": [1050, 9000],
  "МА-100": [1050, 5600],
  "МА-200": [1050, 5600],
  "МТЛ-38": [1050, 9000],
  "МК-32": [1080, 3575],
  "МК-43": [1080, 3575],
  МК48: [1080, 3575],
  "МК многослойная": [1050, 5600],
  "ЛМА-9": [1050, 9000],
  ЛМАС: [1050, 9000],
  "ММ-35": [1050, 9000],
  ЛКС0925: [1050, 9000],
  Бумажная: [1050, 9000],
  ЛКБ: [1050, 4600],
  ЛКА: [1050, 4600],
  П600: [1050, 5600],
  П1000: [1050, 9000],
  "ПЭ с релизом": [1050, 0],
  "ПЭ с лайнером": [1050, 9000],
  Газетная: [1220, 9000],
  "ПЭТ 12 мкм": [1050, 9000],
  "ПСТ2023 1050": [1050, 12_300],
  "ПСТ2023 1240": [1240, 12_300],
  "ПСТ с печатью": [1240, 12_300],
  "ЛПА серая": [1040, 3200],
  "ЛПА черная": [1040, 3200],
  "ЛПА белая": [1040, 3200],
  "ЛПА синяя": [1040, 3200],
  "ЛПА красная": [1040, 3200],
  ВК3: [1000, 5000],
  ВК6: [1000, 5000],
  ВК9: [1000, 5000],
  ВК19: [1000, 5000],
  ВК32: [1000, 5000],
  ВК40: [1000, 5000],
  ВК50: [1000, 5000],
  ППЭ1: [1050, 3000],
  ППЭ2: [1050, 3000],
  ППЭ3: [1050, 5600],
  ППЭ4: [1050, 5600],
  ППЭ5: [1050, 5600],
  ППЭ8: [1050, 5600],
  ППЭ10: [1050, 5600],
  ППЭ20: [1000, 5600],
  Войлочная: [1000, 5000],
  Картон: [800, 12_300],
  Кромка: [650, 3000],
  СТ: [1000, 5600],
  ФТ: [1000, 5600],
  СВЭМП: [1000, 5600],
  "Лента 8500 (ЛПС)": [1000, 5000],
  ППУ5: [1000, 5000],
  ППУ10: [1000, 5000],
  МА30Б70: [1000, 12_300],
  "2БОПП": [1050, 5600],
  "2БП": [1050, 5600],
  "2НТ": [1050, 5600],
  "2ПЭТ": [1050, 5600],
  НТПЭТ1050: [1050, 15_000],
  НТПЭТ1250: [1050, 15_000],
  "2ППЭ1": [1050, 5600],
  "2ППЭ2": [1050, 5600],
  "2ППЭ3": [1050, 5600],
  "2ППЭ5": [1050, 5600],
  МКА: [1050, 9000],
  "2ЛКА": [1050, 4600],
};
// расчет ширины
function calcNeedWidth(parameter) {
  return parametersList[parameter][0];
}

function addCalcNeedWidth() {
  for (let i = 1; i < tableNotes.length; i++) {
    let needWidth = calcNeedWidth(tableNotes[i].titleTypeOfTape);
    tableNotes[i].titleNeedWidth = needWidth;
  }
}
// расчет намотки
function calcWinding(parameter) {
  return parametersList[parameter][1];
}
function addCalcWindig() {
  for (let i = 1; i < tableNotes.length; i++) {
    let needwinding = calcWinding(tableNotes[i].titleTypeOfTape);
    tableNotes[i].titleWinding = needwinding;
  }
}

function render() {
  // добавление названий ячеек в таблицу
  resaultTable.innerHTML = ""; // таким образом после выполнения функции мы очищаем выполенные записи
  for (let i = 0; i < tableNotes.length; i++) {
    resaultTable.insertAdjacentHTML(
      "beforeend",
      getNotesTemplate(tableNotes[i], i)
    ); // добавление значений из массива notes
    addCalcNeedWidth();
    addCalcWindig();
    calcAmount();
  }
}

render();

function calcAmount() {
  // ф-ция расчёта кол-ва пог.фм
  for (let i = 1; i < tableNotes.length; i++) {
    let amount = tableNotes[i].titleQuantity * tableNotes[i].titleWinding;
    tableNotes[i].titleAmount = amount;
  }
}

function functionСall() {
  render();
  clearInputs();
  changeTableTitile();
  calcAmount();
  dragAndDropTable();
}

calculateBtn.onclick = function () {
  // добавление строк в таблицу с проверкой на заполненность
  if (
    typeOfProduct.value.length === 0 ||
    typeOfTape.value.length === 0 ||
    client.value.length === 0 ||
    сustomerOrder.value.length === 0 ||
    glue.value.length === 0 ||
    plate.value.length === 0 ||
    roll.value.length === 0
  ) {
    alert("Заполните поля");
    return; // данное условие предотврощает сохранение пустых значений
  }
  const newTableNote = {
    titleTypeOfProduct: typeOfProduct.value,
    titleTypeOfTape: typeOfTape.value,
    titleClient: client.value,
    titleCustomerOrder: сustomerOrder.value,
    titleGlue: glue.value,
    titlePlate: plate.value,
    titleRoll: roll.value,
    titleQuantity: quantity.value,
    titleWorkOrder: workOrder.value,
    titleNeedWidth: 0,
    titleWinding: 0,
    titleAmount: 0,
    titleSpeed: "0",
    titleTimeProductionTime: "0",
    titleDateReady: "0",
    titleReadyTime: "0",
    titleCorrection: correction.value,
    titleCompletionMark: "",
    completed: false,
  };
  tableNotes.push(newTableNote); // push добавляет элементы в конец массива
  functionСall();
};

changePlateBtn.onclick = function () {
  const newTableNote = {
    titleTypeOfProduct: "Замена пластины",
    titleTypeOfTape: "",
    titleClient: "",
    titleCustomerOrder: "",
    titleGlue: "",
    titlePlate: "",
    titleRoll: "",
    titleQuantity: "",
    titleWorkOrder: "",
    titleNeedWidth: "",
    titleWinding: "",
    titleAmount: "",
    titleSpeed: "",
    titleTimeProductionTime: "Время выполнения",
    titleDateReady: "",
    titleReadyTime: "",
    titleCorrection: correction.value,
    titleCompletionMark: "",
    completed: false,
  };
  tableNotes.push(newTableNote);
  functionСall();
};

changeGlueBtn.onclick = function () {
  const newTableNote = {
    titleTypeOfProduct: "Замена клея",
    titleTypeOfTape: "",
    titleClient: "",
    titleCustomerOrder: "",
    titleGlue: "",
    titlePlate: "",
    titleRoll: "",
    titleQuantity: "",
    titleWorkOrder: "",
    titleNeedWidth: "",
    titleWinding: "",
    titleAmount: "",
    titleSpeed: "",
    titleTimeProductionTime: "Время выполнения",
    titleDateReady: "",
    titleReadyTime: "",
    titleCorrection: correction.value,
    titleCompletionMark: "",
    completed: false,
  };
  tableNotes.push(newTableNote);
  functionСall();
};

changeRollBtn.onclick = function () {
  const newTableNote = {
    titleTypeOfProduct: "Замена вала",
    titleTypeOfTape: "",
    titleClient: "",
    titleCustomerOrder: "",
    titleGlue: "",
    titlePlate: "",
    titleRoll: "",
    titleQuantity: "",
    titleWorkOrder: "",
    titleNeedWidth: "",
    titleWinding: "",
    titleAmount: "",
    titleSpeed: "",
    titleTimeProductionTime: "Время выполнения",
    titleDateReady: "",
    titleReadyTime: "",
    titleCorrection: correction.value,
    titleCompletionMark: "",
    completed: false,
  };
  tableNotes.push(newTableNote);
  functionСall();
};

function clearInputs() {
  // обнуляем input после добавления в таблицу
  let inputs = document.querySelectorAll("input[type=text]");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

delTable.onclick = function clearTable() {
  // очистка таблицы по кнопке сбросить
  while (resaultTable.rows.length > 1) {
    resaultTable.deleteRow(1);
  }
  tableNotes.length = 1;
};

function getNotesTemplate(typeOfTapeVal, index, needAmount) {
  // шаблон добавляемой строки в таблицу
  return `
    <tr class="table_tr ${typeOfTapeVal.completed ? "tr-ready" : ""}">
        <td class="table_td table_td-drop">&#8230;</td>
        <td class="table_td" data-index="${index}" data-type="TypeOfProduct">${
    typeOfTapeVal.titleTypeOfProduct
  }</td>
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
        <td class="table_td" data-index="${index}" data-type="ready-date">${
    typeOfTapeVal.titleCompletionMark
  }</td>
        <td class="table_td table_td-ready"  style="background:${
          typeOfTapeVal.completed ? "green" : "yellow"
        }!important"><a href="#" class="td-edit" data-index="${index}" data-type="toggle">&#x2714;</a></td>
        <td class="table_td table_td-a"><a href="#" class="td-del" data-index="${index}" data-type="remove">&#10060;</a></td>
    </tr>
    `;
}

resaultTable.onclick = function (event) {
  // функция отвечает за определение кнопок готово и удалить
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index); // переводим строку в число
    const type = event.target.dataset.type;
    if (type === "toggle") {
      tableNotes[index].completed = !tableNotes[index].completed;
      if (tableNotes[index].completed === true) {
        // вывод и форматирование даты через точку
        function join(formatDateType, dateType, readyDate) {
          function format(m) {
            let formatDate = new Intl.DateTimeFormat("en", m);
            return formatDate.format(formatDateType);
          }
          return dateType.map(format).join(readyDate);
        }
        let dateType = [
          { day: "numeric" },
          { month: "numeric" },
          { year: "numeric" },
        ];
        let readyDate = join(new Date(), dateType, ".");
        tableNotes[index].titleCompletionMark = readyDate;
      } else {
        tableNotes[index].titleCompletionMark = " ";
      }
    } else if (type === "remove") {
      tableNotes.splice(index, 1); // удаление строки по кнопке без багов
    }
  }
  render();
  changeTableTitile();
  dragAndDropTable();
};

function sortOfGreen() {
  for (let tableNote of tableNotes) {
    if (tableNote.completed === true) {
      // условие
      console.log(tableNote.completed);
    } else {
      console.log(tableNote.completed);
    }
  }
  return;
}
sortOfGreen();

function changeTableTitile() {
  // заголовки таблице в первой строке
  var firstRow = document.querySelector("table tr:first-child");
  var firstRowTd = firstRow.querySelectorAll("td");
  firstRowTd.forEach(function (element) {
    element.style.cssText = "font-weight:700";
    if (element.classList.contains("table_td-a")) {
      element.style.cssText = "display:none!important";
    }
    if (element.classList.contains("table_td-ready")) {
      element.style.cssText = "display:none!important";
    }
  });
}

changeTableTitile();

function dragAndDropTable() {
  // функция для того, чтобы перемещать строки в таблице методом drag&drop
  // взято с github https://github.com/phuocng/html-dom/blob/master/contents/drag-and-drop-table-row.mdx
  const table = document.getElementById("resaultTable");

  let draggingEle;
  let draggingRowIndex;
  let placeholder;
  let list;
  let isDraggingStarted = false;

  // The current position of mouse relative to the dragging element
  let x = 0;
  let y = 0;

  // Swap two nodes
  const swap = function (nodeA, nodeB) {
    const parentA = nodeA.parentNode;
    const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;

    // Move nodeA to before the nodeB
    nodeB.parentNode.insertBefore(nodeA, nodeB);

    // Move nodeB to before the sibling of nodeA
    parentA.insertBefore(nodeB, siblingA);
  };

  // Check if nodeA is above nodeB
  const isAbove = function (nodeA, nodeB) {
    // Get the bounding rectangle of nodes
    const rectA = nodeA.getBoundingClientRect();
    const rectB = nodeB.getBoundingClientRect();

    return rectA.top + rectA.height / 2 < rectB.top + rectB.height / 2;
  };

  const cloneTable = function () {
    const rect = table.getBoundingClientRect();
    const width = parseInt(window.getComputedStyle(table).width);

    list = document.createElement("div");
    list.classList.add("clone-list");
    list.style.position = "absolute";
    list.style.left = rect.left + "px";
    list.style.top = rect.top + "px";
    table.parentNode.insertBefore(list, table);

    // Hide the original table
    table.style.visibility = "hidden";

    table.querySelectorAll("tr").forEach(function (row) {
      // Create a new table from given row
      const item = document.createElement("div");
      item.classList.add("draggable");

      const newTable = document.createElement("table");
      newTable.setAttribute("class", "clone-table");
      newTable.style.width = width + "px";

      const newRow = document.createElement("tr");
      const cells = [].slice.call(row.children);
      cells.forEach(function (cell) {
        const newCell = cell.cloneNode(true);
        newCell.style.width =
          parseInt(window.getComputedStyle(cell).width) + "px";
        newRow.appendChild(newCell);
      });

      newTable.appendChild(newRow);
      item.appendChild(newTable);
      list.appendChild(item);
    });
  };

  const mouseDownHandler = function (e) {
    // Get the original row
    const originalRow = e.target.parentNode;
    draggingRowIndex = [].slice
      .call(table.querySelectorAll("tr"))
      .indexOf(originalRow);

    // Determine the mouse position
    x = e.clientX;
    y = e.clientY;

    // Attach the listeners to document
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    if (!isDraggingStarted) {
      isDraggingStarted = true;

      cloneTable();

      draggingEle = [].slice.call(list.children)[draggingRowIndex];
      draggingEle.classList.add("dragging");

      // Let the placeholder take the height of dragging element
      // So the next element won't move up
      placeholder = document.createElement("div");
      placeholder.classList.add("placeholder");
      draggingEle.parentNode.insertBefore(placeholder, draggingEle.nextSibling);
      placeholder.style.height = draggingEle.offsetHeight + "px";
    }

    // Set position for dragging element
    draggingEle.style.position = "absolute";
    draggingEle.style.top = draggingEle.offsetTop + e.clientY - y + "px";
    draggingEle.style.left = draggingEle.offsetLeft + e.clientX - x + "px";

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
    if (
      prevEle &&
      prevEle.previousElementSibling &&
      isAbove(draggingEle, prevEle)
    ) {
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

  const mouseUpHandler = function () {
    // Remove the placeholder
    placeholder && placeholder.parentNode.removeChild(placeholder);

    draggingEle.classList.remove("dragging");
    draggingEle.style.removeProperty("top");
    draggingEle.style.removeProperty("left");
    draggingEle.style.removeProperty("position");

    // Get the end index
    const endRowIndex = [].slice.call(list.children).indexOf(draggingEle);

    isDraggingStarted = false;

    // Remove the list element
    list.parentNode.removeChild(list);

    // Move the dragged row to endRowIndex
    let rows = [].slice.call(table.querySelectorAll("tr"));
    draggingRowIndex > endRowIndex
      ? rows[endRowIndex].parentNode.insertBefore(
          rows[draggingRowIndex],
          rows[endRowIndex]
        )
      : rows[endRowIndex].parentNode.insertBefore(
          rows[draggingRowIndex],
          rows[endRowIndex].nextSibling
        );

    // Bring back the table
    table.style.removeProperty("visibility");

    // Remove the handlers of mousemove and mouseup
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  table.querySelectorAll("tr").forEach(function (row, index) {
    // Ignore the header
    // We don't want user to change the order of header
    if (index === 0) {
      return;
    }

    const firstCell = row.firstElementChild;
    firstCell.classList.add("draggable");
    firstCell.addEventListener("mousedown", mouseDownHandler);
  });
}

dragAndDropTable();

// сохранение таблицы в Excel взято с https://gist.github.com/insin/1031969
var tableToExcel = (function () {
  var uri = "data:application/vnd.ms-excel;base64,",
    template =
      '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
    base64 = function (s) {
      return window.btoa(unescape(encodeURIComponent(s)));
    },
    format = function (s, c) {
      return s.replace(/{(\w+)}/g, function (m, p) {
        return c[p];
      });
    };
  return function (table, name) {
    if (!table.nodeType) table = document.getElementById(table);
    var ctx = { worksheet: name || "Worksheet", table: table.innerHTML };
    window.location.href = uri + base64(format(template, ctx));
  };
})();
