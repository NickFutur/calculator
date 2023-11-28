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

const timeDiv = document.querySelector(".time");

const currentDate = new Date(); // Сегодняшняя дата

// Расчёт времени
function specificTimeFunc(time) {
  // Устанавливаем определенное время
  time.setHours(8); // Устанавливаем часы (от 0 до 23)
  time.setMinutes(0); // Устанавливаем минуты
  time.setSeconds(0); // Устанавливаем секунды
  // Выводим определенное время
  let specTime = time.toLocaleString();
  timeDiv.innerHTML = specTime; // выводим дату в html
  return time;
}
const specificTime = specificTimeFunc(currentDate);

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
    titleCustomerOrder: "Нет",
    titleGlue: "1",
    titlePlate: "1",
    titleRoll: "1",
    titleQuantity: 3,
    titleWorkOrder: "1",
    titleNeedWidth: 0,
    titleWinding: 0,
    titleAmount: 0,
    titleSpeed: 0,
    titleTimeProductionTime: "0",
    titleDateReady: "0",
    titleReadyTime: "0",
    titleCorrection: correction.value,
    titleCompletionMark: "",
    completed: false,
  },
  {
    titleTypeOfProduct: "Мелкосирийная",
    titleTypeOfTape: "МА30Б70",
    titleClient: "2",
    titleCustomerOrder: "Да",
    titleGlue: "2",
    titlePlate: "2",
    titleRoll: "2",
    titleQuantity: 2,
    titleWorkOrder: "2",
    titleNeedWidth: 0,
    titleWinding: 0,
    titleAmount: 2,
    titleSpeed: 0,
    titleTimeProductionTime: "0",
    titleDateReady: "0",
    titleReadyTime: "0",
    titleCorrection: correction.value,
    titleCompletionMark: "",
    completed: false,
  },
  {
    titleTypeOfProduct: "Нестандартная",
    titleTypeOfTape: "2БП",
    titleClient: "2",
    titleCustomerOrder: " ",
    titleGlue: "2",
    titlePlate: "2",
    titleRoll: "2",
    titleQuantity: 3,
    titleWorkOrder: "2",
    titleNeedWidth: 0,
    titleWinding: 0,
    titleAmount: 1,
    titleSpeed: 0,
    titleTimeProductionTime: "0",
    titleDateReady: "0",
    titleReadyTime: "0",
    titleCorrection: correction.value,
    titleCompletionMark: "",
    completed: false,
  },
];

// const parametersList = {
//   // список типов лент и их параметров [ширина, намотка, скорость,]
//   "МА-20": [1050, 1520, 50],
//   "МА-25": [1050, 1520, 50],
//   "МА-30": [1050, 1520, 50],
//   "МА-50": [1050, 910, 40],
//   "МА-100": [1050, 560, 35],
//   "МА-200": [1050, 510, 35],
//   "МТЛ-38": [1050, 1520, 40],
//   "МК-32": [1080, 1200, 40],
//   "МК-43": [1080, 1200, 40],
//   МК48: [1080, 1200, 40],
//   "МК многослойная": [1050, 500, 35],
//   "ЛМА-9": [1050, 1520, 50],
//   ЛМАС: [1050, 1520, 50],
//   "ММ-35": [1050, 510, 40],
//   ЛКС0925: [1050, 1000, 50],
//   Бумажная: [1050, 1010, 50],
//   ЛКБ: [1050, 100, 25],
//   ЛКА: [1050, 510, 35],
//   П600: [1050, 800, 50],
//   П1000: [1050, 1000, 50],
//   "ПЭ с релизом": [1050, 100, 50],
//   "ПЭ с лайнером": [1050, 800, 50],
//   Газетная: [1220, 1010, 50],
//   "ПЭТ 12 мкм": [1050, 1010, 50],
//   "ПСТ2023 1050": [1050, 300, 50],
//   "ПСТ2023 1240": [1240, 300, 50],
//   "ПСТ с печатью": [1240, 300, 50],
//   "ЛПА серая": [1040, 1000, 35],
//   "ЛПА черная": [1040, 1000, 35],
//   "ЛПА белая": [1040, 1000, 35],
//   "ЛПА синяя": [1040, 1000, 35],
//   "ЛПА красная": [1040, 1000, 35],
//   ВК3: [1000, 100, 30],
//   ВК6: [1000, 60, 25],
//   ВК9: [1000, 20, 25],
//   ВК19: [1000, 6, 15],
//   ВК32: [1000, 3, 15],
//   ВК40: [1000, 8, 15],
//   ВК50: [1000, 6, 15],
//   ППЭ1: [1050, 300, 50],
//   ППЭ2: [1050, 200, 50],
//   ППЭ3: [1050, 170, 40],
//   ППЭ4: [1050, 130, 40],
//   ППЭ5: [1050, 100, 40],
//   ППЭ8: [1050, 60, 35],
//   ППЭ10: [1050, 50, 30],
//   ППЭ20: [1000, 2, 10],
//   Войлочная: [1000, 100, 30],
//   Картон: [800, 1, 10],
//   Кромка: [650, 500, 35],
//   СТ: [1000, 100, 35],
//   ФТ: [1000, 100, 35],
//   СВЭМП: [1000, 100, 35],
//   "Лента 8500 (ЛПС)": [1000, 800, 12],
//   ППУ5: [1000, 120, 40],
//   ППУ10: [1000, 60, 30],
//   МА30Б70: [1000, 1000, 50],
//   "2БОПП": [1050, 1020, 50],
//   "2БП": [1050, 1020, 50],
//   "2НТ": [1050, 1020, 50],
//   "2ПЭТ": [1050, 1020, 50],
//   НТПЭТ1050: [1050, 1000, 40],
//   НТПЭТ1250: [1050, 1000, 40],
//   "2ППЭ1": [1050, 300, 30],
//   "2ППЭ2": [1050, 200, 40],
//   "2ППЭ3": [1050, 170, 40],
//   "2ППЭ5": [1050, 100, 40],
//   МКА: [1050, 910, 40],
//   "2ЛКА": [1050, 510, 35],
// };

// проверка на NaN, null, undefined
function checkVariable(value) {
  const checkValue = !value ? 0 : value;
  // if (!value) return 0;
  return checkValue;
}

// сложение массива с помощью метода reduce
function sumArray(arrName) {
  const sum = arrName.reduce((total, current) => total + current, 0);
  return sum;
}

function calculatedOperations() {
  for (let i = 1; i < tableNotes.length; i++) {
    const noteTitle = tableNotes[i].titleTypeOfTape;
    for (const operation of operations) {
      const quantity_to_jumbo_winding =
        tableNotes[i].titleQuantity * operation.operations_to_jumbo_winding; // константа расчёта количество на намотку

      // Расчёт Вал 1, Вал 2, Вал 3, буферный монтаж, буферный снятие
      function calcFirstFivePositions(
        // Вал 1, Вал 2, Вал 3, буферный монтаж, буферный снятие
        roll_1,
        roll_2,
        roll_3,
        buffer_installation,
        buffer_withdrawal,
        // намотка 1, намотка 2, намотка 3, буферный монтаж намотка, буферный снятие намотка
        winding1,
        winding2,
        winding3,
        bufferWinding1,
        bufferWinding2
      ) {
        let roll1 = roll_1 * Math.ceil(quantity_to_jumbo_winding / winding1);
        let roll2 = roll_2 * Math.ceil(quantity_to_jumbo_winding / winding2);
        let roll3 = roll_3 * Math.ceil(quantity_to_jumbo_winding / winding3);
        let bufferInstallation =
          buffer_installation *
          Math.ceil(quantity_to_jumbo_winding / bufferWinding1);
        let bufferWithdrawal =
          buffer_withdrawal *
          Math.ceil(quantity_to_jumbo_winding / bufferWinding2);
        // проверка на валидность (NaN и null)
        roll1 = checkVariable(roll1);
        roll2 = checkVariable(roll2);
        roll3 = checkVariable(roll3);
        bufferInstallation = checkVariable(bufferInstallation);
        bufferWithdrawal = checkVariable(bufferWithdrawal);

        const firstFiveCalc = [
          roll1,
          roll2,
          roll3,
          bufferInstallation,
          bufferWithdrawal,
        ];
        return firstFiveCalc;
      }

      // расчёт операции до и после полива
      function operationsWateringFunc(
        operationBeforeWatering,
        operationAfterWatering
      ) {
        let operBeforeWateringVar =
          operationBeforeWatering * tableNotes[i].titleQuantity;
        let operAfterWateringVar =
          operationAfterWatering * tableNotes[i].titleQuantity;
        const operationsWatering = [
          operBeforeWateringVar,
          operAfterWateringVar,
        ];
        // console.log(operationsWatering);
        return operationsWatering;
      }
      if (
        noteTitle === "Замена пластины" ||
        noteTitle === "Замена фильтров" ||
        noteTitle === "Замена клея" ||
        noteTitle === "Промывка" ||
        noteTitle === "Замена вала" ||
        noteTitle === "Обмотка большого вала" ||
        noteTitle === "Обмотка маленького вала" ||
        noteTitle === "Снятие головки" ||
        noteTitle === "Установка головки" ||
        noteTitle === "Уборка"
      ) {
        if (operation.typeName === noteTitle) {
          console.log(operation.typeName);
          const calc = operation.setting_final;

          let calcTime = (calc * 12) / 11;
          calcTime = Math.ceil(calcTime);
          console.log(calcTime);
          // вывод времени изготовления в часы и минуты
          const timeString = calcTimeFunc(calcTime);

          tableNotes[i].titleTypeOfProduct = "";
          tableNotes[i].titleTypeOfTape = operation.typeName;
          // tableNotes[i].titleClient = client.value;
          // tableNotes[i].titleCustomerOrder = сustomerOrder.value;
          // tableNotes[i].titleGlue = glue.value;
          // tableNotes[i].titlePlate = plate.value;
          // tableNotes[i].titleRoll = roll.value;
          // tableNotes[i].titleQuantity = quantity.value;
          // tableNotes[i].titleWorkOrder = workOrder.value;
          tableNotes[i].titleNeedWidth = "";
          tableNotes[i].titleWinding = "";
          tableNotes[i].titleAmount = "";
          tableNotes[i].titleSpeed = "";
          tableNotes[i].titleTimeProductionTime = timeString;
          tableNotes[i].titleDateReady = "";
          tableNotes[i].titleReadyTime = "";
          tableNotes[i].titleCorrection = correction.value;
          // tableNotes[i].titleCompletionMark = "";
          // tableNotes[i].completed = false;
        }
      } else if (
        noteTitle === "МА30Б70" ||
        noteTitle === "2БОПП" ||
        noteTitle === "2БП" ||
        noteTitle === "2НТ" ||
        noteTitle === "2ПЭТ" ||
        noteTitle === "НТПЭТ1050" ||
        noteTitle === "НТПЭТ1250" ||
        noteTitle === "2ППЭ1" ||
        noteTitle === "2ППЭ2" ||
        noteTitle === "2ППЭ3" ||
        noteTitle === "2ППЭ5" ||
        noteTitle === "МКА" ||
        noteTitle === "2ЛКА"
      ) {
        if (operation.typeName === noteTitle) {
          console.log(operation.typeName);

          // Расчёт Вал 1, Вал 2, Вал 3, буферный монтаж, буферный снятие - сторона 1
          const firstFiveCalc = calcFirstFivePositions(
            operation.roll_1,
            operation.roll_2,
            operation.roll_3,
            operation.buffer_liner_installation,
            operation.buffer_liner_withdrawal,
            operation.winding_1,
            operation.winding_2,
            operation.winding_3,
            operation.buffer_liner_winding_1,
            operation.buffer_liner_winding_2
          );
          const firstFiveCalcSum = sumArray(firstFiveCalc);

          // Расчёт Вал 1, Вал 2, Вал 3, буферный монтаж, буферный снятие - сторона 2
          const firstFiveCalc_line2 = calcFirstFivePositions(
            operation.roll_1_line_2,
            operation.roll_2_line_2,
            operation.roll_3_line_2,
            operation.buffer_liner_installation_line_2,
            operation.buffer_liner_withdrawal_line_2,
            operation.winding_1_line_2,
            operation.winding_2_line_2,
            operation.winding_3_line_2,
            operation.buffer_liner_winding_1_line_2,
            operation.buffer_liner_winding_2_line_2
          );
          const firstFiveCalcSum_line2 = sumArray(firstFiveCalc_line2);

          // расчёт операции до и после полива - сторона 1
          const operationsWatering = operationsWateringFunc(
            operation.operations_before_watering,
            operation.operations_after_watering
          );
          const operationsWateringSum = sumArray(operationsWatering);
          // расчёт операции до и после полива - сторона 2
          const operationsWatering_line2 = operationsWateringFunc(
            operation.operations_before_watering_line_2,
            operation.operations_after_watering_line_2
          );
          const operationsWateringSum_line2 = sumArray(
            operationsWatering_line2
          );
          // Расчёт полива
          function calcWatering(speedline1, speedline2) {
            let calcWateringLine1 = Math.ceil(
              (tableNotes[i].titleQuantity *
                operation.operations_to_jumbo_winding) /
                speedline1
            );
            calcWateringLine1 = calcWateringLine1 * 60;
            let calcWateringLine2 = Math.ceil(
              (tableNotes[i].titleQuantity *
                operation.operations_to_jumbo_winding) /
                speedline2
            );
            calcWateringLine2 = calcWateringLine2 * 60;
            const calcWatering = [calcWateringLine1, calcWateringLine2];
            return calcWatering;
          }

          const calcWateringParam = calcWatering(
            operation.speed,
            operation.speed_line_2
          );

          // Определение требуется ли упаковка (проверка по значению "Да")
          function customerOrderFunc(event) {
            if (event === "Да") {
              let operationPackageLine1 =
                operation.operations_to_jumbo_package *
                tableNotes[i].titleQuantity;
              let operationPackageLine2 =
                operation.operations_to_jumbo_winding_line_2 *
                tableNotes[i].titleQuantity;

              const operationPackage = [
                operationPackageLine1,
                operationPackageLine2,
              ];
              // console.log(operationPackage);
              return operationPackage;
            } else if (event === "Нет") {
              let operationPackage = [0, 0];
              return operationPackage;
            } else {
              let operationPackageLine1 = 0;
              let operationPackageLine2 =
                operation.operations_to_jumbo_winding_line_2 *
                tableNotes[i].titleQuantity;

              const operationPackage = [
                operationPackageLine1,
                operationPackageLine2,
              ];
              // console.log(operationPackage);
              return operationPackage;
            }
          }
          const operationPackage = customerOrderFunc(
            tableNotes[i].titleCustomerOrder
          );

          // расчёт значений для времени изготовления, сек. (двусторонняя)
          const calc =
            firstFiveCalcSum +
            operation.infusion_material_installation +
            operation.infusion_material_withdrawal +
            operation.setting_preliminary +
            operation.setting_final +
            operation.filling_the_work_order +
            operation.banan_roll_installation +
            operation.banan_roll_withdrawal +
            operationsWateringSum +
            operationPackage[0] +
            calcWateringParam[0] +
            firstFiveCalcSum_line2 +
            operation.infusion_material_installation_line_2 +
            operation.infusion_material_withdrawal_line_2 +
            operation.setting_preliminary_line_2 +
            operation.setting_final_line_2 +
            operation.filling_the_work_order_line_2 +
            operation.banan_roll_installation_line_2 +
            operation.banan_roll_withdrawal_line_2 +
            operationsWateringSum_line2 +
            operationPackage[1] +
            calcWateringParam[1];
          let calcTime = (calc * 12) / 11;
          calcTime = Math.round(calcTime);

          // вывод времени изготовления в часы и минуты
          const timeString = calcTimeFunc(calcTime);
          tableNotes[i].titleTimeProductionTime = timeString;

          calcReadyTimeFunc(i, specificTime, calcTime, 0);
          //  вывод ширины из объекта
          tableNotes[i].titleNeedWidth = operation.width;
          // вывод намотки из объекта
          tableNotes[i].titleWinding = operation.operations_to_jumbo_winding;
          // вывод скорости из объекта
          tableNotes[i].titleSpeed = operation.speed;
        }
        //   const calc =
        //     firstFiveCalc[0] +
        //     firstFiveCalc[1] +
        //     firstFiveCalc[2] +
        //     firstFiveCalc[3] +
        //     firstFiveCalc[4] +
        //     operation.infusion_material_installation +
        //     operation.infusion_material_withdrawal +
        //     operation.setting_preliminary +
        //     operation.setting_final +
        //     operation.filling_the_work_order +
        //     operation.banan_roll_installation +
        //     operation.banan_roll_withdrawal +
        //     operationsWatering[0] +
        //     operationsWatering[1] +
        //     operationPackage[0] +
        //     calcWateringParam[0] +
        //     firstFiveCalc_line2[0] +
        //     firstFiveCalc_line2[1] +
        //     firstFiveCalc_line2[2] +
        //     firstFiveCalc_line2[3] +
        //     firstFiveCalc_line2[4] +
        //     operation.infusion_material_installation_line_2 +
        //     operation.infusion_material_withdrawal_line_2 +
        //     operation.setting_preliminary_line_2 +
        //     operation.setting_final_line_2 +
        //     operation.filling_the_work_order_line_2 +
        //     operation.banan_roll_installation_line_2 +
        //     operation.banan_roll_withdrawal_line_2 +
        //     operationsWatering_line2[0] +
        //     operationsWatering_line2[1] +
        //     operationPackage[1] +
        //     calcWateringParam[1];
        //   let calcTime = (calc * 12) / 11;
        //   calcTime = Math.ceil(calcTime);
        //   tableNotes[i].titleTimeProductionTime = calcTime;
        // }
      } else if (
        noteTitle !== "МА30Б70" ||
        noteTitle !== "2БОПП" ||
        noteTitle !== "2БП" ||
        noteTitle !== "2НТ" ||
        noteTitle !== "2ПЭТ" ||
        noteTitle !== "НТПЭТ1050" ||
        noteTitle !== "НТПЭТ1250" ||
        noteTitle !== "2ППЭ1" ||
        noteTitle !== "2ППЭ2" ||
        noteTitle !== "2ППЭ3" ||
        noteTitle !== "2ППЭ5" ||
        noteTitle !== "МКА" ||
        noteTitle !== "2ЛКА"
      ) {
        if (operation.typeName === noteTitle) {
          console.log(operation.typeName);
          // Расчёт Вал 1, Вал 2, Вал 3, буферный монтаж, буферный снятие - односторнняя
          const firstFiveCalc = calcFirstFivePositions(
            operation.roll_1,
            operation.roll_2,
            operation.roll_3,
            operation.buffer_liner_installation,
            operation.buffer_liner_withdrawal,
            operation.winding_1,
            operation.winding_2,
            operation.winding_3,
            operation.buffer_liner_winding_1,
            operation.buffer_liner_winding_2
          );
          const firstFiveCalcSum = sumArray(firstFiveCalc);
          // расчёт операции до и после полива - односторнняя
          const operationsWatering = operationsWateringFunc(
            operation.operations_before_watering,
            operation.operations_after_watering
          );
          const operationsWateringSum = sumArray(operationsWatering);
          // Расчёт полива - односторнняя
          let calcWatering = Math.ceil(
            (tableNotes[i].titleQuantity *
              operation.operations_to_jumbo_winding) /
              operation.speed
          );
          calcWatering = calcWatering * 60;

          // Определение требуется ли упаковка (проверка по значению "Да") - односторнняя
          function customerOrderFunc(event) {
            if (event === "Да") {
              const operationPackage = operation.operations_to_jumbo_package;
              return operationPackage;
            } else {
              const operationPackage = 0;
              return operationPackage;
            }
          }

          const calc =
            firstFiveCalcSum +
            operation.infusion_material_installation +
            operation.infusion_material_withdrawal +
            operation.setting_preliminary +
            operation.setting_final +
            operation.filling_the_work_order +
            operation.banan_roll_installation +
            operation.banan_roll_withdrawal +
            operationsWateringSum +
            customerOrderFunc(tableNotes[i].titleCustomerOrder) +
            calcWatering;
          let calcTime = (calc * 12) / 11;
          calcTime = Math.ceil(calcTime);

          // вывод времени изготовления в часы и минуты
          const timeString = calcTimeFunc(calcTime);
          tableNotes[i].titleTimeProductionTime = timeString;
          calcReadyTimeFunc(i, specificTime, calcTime, 0);
          // const calc =
          //   firstFiveCalc[0] +
          //   firstFiveCalc[1] +
          //   firstFiveCalc[2] +
          //   firstFiveCalc[3] +
          //   firstFiveCalc[4] +
          //   operation.infusion_material_installation +
          //   operation.infusion_material_withdrawal +
          //   operation.setting_preliminary +
          //   operation.setting_final +
          //   operation.filling_the_work_order +
          //   operation.banan_roll_installation +
          //   operation.banan_roll_withdrawal +
          //   operationsWatering[0] +
          //   operationsWatering[1] +
          //   customerOrderFunc(tableNotes[i].titleCustomerOrder) +
          //   calcWatering;
          // let calcTime = (calc * 12) / 11;
          // calcTime = Math.round(calcTime);
          // tableNotes[i].titleTimeProductionTime = calcTime;
          // console.log(firstFiveCalc[0]);
          // console.log(firstFiveCalc[1]);
          // console.log(firstFiveCalc[2]);
          // console.log(firstFiveCalc[3]);
          // console.log(firstFiveCalc[4]);
          // console.log(operation.infusion_material_installation);
          // console.log(operation.infusion_material_withdrawal);
          // console.log(operation.setting_preliminary);
          // console.log(operation.setting_final);
          // console.log(operation.filling_the_work_order);
          // console.log(operation.banan_roll_installation);
          // console.log(operation.banan_roll_withdrawal);
          // console.log(operationsWatering[0]);
          // console.log(operationsWatering[1]);
          // console.log(customerOrderFunc(tableNotes[i].titleCustomerOrder));
          // console.log(calcWatering);
          //  вывод ширины из объекта
          tableNotes[i].titleNeedWidth = operation.width;
          // вывод намотки из объекта
          tableNotes[i].titleWinding = operation.operations_to_jumbo_winding;
          // вывод скорости из объекта
          tableNotes[i].titleSpeed = operation.speed;
        }
      } else {
        console.log("Не известный параметр");
      }
    }
  }
}
calculatedOperations();
// расчёт времени изготовления в часах и минутах
function calcTimeFunc(timeSec) {
  const hours = (timeSec / 3600) | 0; // часы
  console.log("часы: ", hours);
  // const minutes1 = timeSec;
  const minutes = Math.ceil(timeSec / 60 - hours * 60); // минуты
  // console.log(minutes1);
  const preparationTime = `${hours} ч ${minutes} мин`;
  return preparationTime;
}

// расчёт времени готовности specificTime (Не готово!)
function calcReadyTimeFunc(index, timeDate, timeSec, correction) {
  const millSeconds = (timeSec * 1000) | 0; // милисекунды
  const timeDateMilSec = timeDate.getTime();
  const correctionMilSec = correction * 1000;
  let readyTimeDate = timeDateMilSec + (millSeconds + correctionMilSec);
  console.log(readyTimeDate);

  let readyTime = new Date(readyTimeDate);
  if (readyTime.getSeconds() > 0) {
    readyTime.setMinutes(readyTime.getMinutes() + 1);
    readyTime.setSeconds(0);
    if (readyTime.getMinutes() >= 60) {
      readyTime.setHours(readyTime.getHours() + 1);
      readyTime.setMinutes(0);
    }
  }
  // console.log("readyTime: ", readyTime);
  if (index === 1) {
    // вывод даты готовности и времени готовности в таблицу
    const day = readyTime.getDate();
    const month = readyTime.getMonth() + 1;
    const year = readyTime.getFullYear();
    tableNotes[index].titleDateReady = `${day}.${month}.${year}`;
    tableNotes[
      index
    ].titleReadyTime = `${readyTime.getHours()} ч. ${readyTime.getMinutes()} мин.`;
    return readyTime;
  }
}

// расчет ширины
// function calcNeedWidth(parameter) {
//   return parametersList[parameter][0];
// }

// function addCalcNeedWidth() {
//   for (let i = 1; i < tableNotes.length; i++) {
//     let needWidth = calcNeedWidth(tableNotes[i].titleTypeOfTape);
//     tableNotes[i].titleNeedWidth = needWidth;
//   }
// }
// расчет намотки
// function calcWinding(parameter) {
//   return parametersList[parameter][1];
// }
// function addCalcWindig() {
//   for (let i = 1; i < tableNotes.length; i++) {
//     let needwinding = calcWinding(tableNotes[i].titleTypeOfTape);
//     tableNotes[i].titleWinding = needwinding;
//   }
// }
// расчет скорости
// function calcSpeed(parameter) {
//   return parametersList[parameter][2];
// }

// function addCalcSpeed() {
//   for (let i = 1; i < tableNotes.length; i++) {
//     let needSpeed = calcSpeed(tableNotes[i].titleTypeOfTape);
//     tableNotes[i].titleSpeed = needSpeed;
//   }
// }

function render() {
  // добавление названий ячеек в таблицу
  resaultTable.innerHTML = ""; // таким образом после выполнения функции мы очищаем выполенные записи
  for (let i = 0; i < tableNotes.length; i++) {
    resaultTable.insertAdjacentHTML(
      "beforeend",
      getNotesTemplate(tableNotes[i], i)
    ); // добавление значений из массива notes
    calcAmount();
    calculatedOperations();
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
    typeOfTape.value === "Замена пластины" ||
    typeOfTape.value === "Замена фильтров" ||
    typeOfTape.value === "Замена клея" ||
    typeOfTape.value === "Промывка" ||
    typeOfTape.value === "Замена вала" ||
    typeOfTape.value === "Обмотка большого вала" ||
    typeOfTape.value === "Обмотка маленького вала" ||
    typeOfTape.value === "Снятие головки" ||
    typeOfTape.value === "Установка головки" ||
    typeOfTape.value === "Уборка"
  ) {
    render();
  } else if (
    // typeOfTape.value !== operation.typeName ||
    typeOfProduct.value.length === 0 ||
    typeOfTape.value.length === 0 ||
    client.value.length === 0 ||
    сustomerOrder.value.length === 0 ||
    glue.value.length === 0 ||
    plate.value.length === 0 ||
    roll.value.length === 0
  ) {
    alert("Поля заполнены некорректно! Пожайлуйста, проверьте их ещё раз");
    return; // данное условие предотврощает сохранение пустых значений
  }
  // }

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
    titleSpeed: 0,
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

// changePlateBtn.onclick = function () {
//   const newTableNote = {
//     titleTypeOfProduct: "",
//     titleTypeOfTape: "Замена пластины",
//     titleClient: "",
//     titleCustomerOrder: "",
//     titleGlue: "",
//     titlePlate: "",
//     titleRoll: "",
//     titleQuantity: "",
//     titleWorkOrder: "",
//     titleNeedWidth: "",
//     titleWinding: "",
//     titleAmount: "",
//     titleSpeed: "",
//     titleTimeProductionTime: "",
//     titleDateReady: "",
//     titleReadyTime: "",
//     titleCorrection: correction.value,
//     titleCompletionMark: "",
//     completed: false,
//   };
//   tableNotes.push(newTableNote);
//   functionСall();
// };

// changeGlueBtn.onclick = function () {
//   const newTableNote = {
//     titleTypeOfProduct: "",
//     titleTypeOfTape: "Замена клея",
//     titleClient: "",
//     titleCustomerOrder: "",
//     titleGlue: "",
//     titlePlate: "",
//     titleRoll: "",
//     titleQuantity: "",
//     titleWorkOrder: "",
//     titleNeedWidth: "",
//     titleWinding: "",
//     titleAmount: "",
//     titleSpeed: "",
//     titleTimeProductionTime: "Время выполнения",
//     titleDateReady: "",
//     titleReadyTime: "",
//     titleCorrection: correction.value,
//     titleCompletionMark: "",
//     completed: false,
//   };
//   tableNotes.push(newTableNote);
//   functionСall();
// };

// changeRollBtn.onclick = function () {
//   const newTableNote = {
//     titleTypeOfProduct: "",
//     titleTypeOfTape: "Замена вала",
//     titleClient: "",
//     titleCustomerOrder: "",
//     titleGlue: "",
//     titlePlate: "",
//     titleRoll: "",
//     titleQuantity: "",
//     titleWorkOrder: "",
//     titleNeedWidth: "",
//     titleWinding: "",
//     titleAmount: "",
//     titleSpeed: "",
//     titleTimeProductionTime: "",
//     titleDateReady: "",
//     titleReadyTime: "",
//     titleCorrection: correction.value,
//     titleCompletionMark: "",
//     completed: false,
//   };
//   tableNotes.push(newTableNote);
//   functionСall();
// };

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

function getNotesTemplate(typeOfTapeVal, index) {
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
    render();
    changeTableTitile();
    dragAndDropTable();
  }
};

// function sortOfGreen() {
//   for (let tableNote of tableNotes) {
//     if (tableNote.completed === true) {
//       // условие
//       console.log(tableNote.completed);
//     } else {
//       console.log(tableNote.completed);
//     }
//   }
//   return;
// }
// sortOfGreen();

function changeTableTitile() {
  // заголовки таблицы в первой строке
  let firstRow = document.querySelector("table tr:first-child");
  let firstRowTd = firstRow.querySelectorAll("td");
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
