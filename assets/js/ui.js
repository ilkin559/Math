import AddStudent from "./list.js";

import Maths from "./math.js";

const componentAddStudent = new AddStudent();

const componentMath = new Maths({
  selector: ".list__modal",
  close: ".listClose",
  addLessonBtn: "#listAddLesson",
  modalInfo: ".list__modal--info",
});

const input = document.getElementById("list__studentName");

const addBtn = document.querySelector(".list__addBtn");

const listBox = document.querySelector(".list__info");

addBtn.onclick = function (event) {
  const studentName = input.value;

  if (input.value !== "") {
    componentAddStudent.addStudent(studentName, listBox);
    componentMath.mathLesson(
      componentAddStudent,
      document.querySelectorAll(".openPopup"),
      studentName
    );
    input.value = "";
  }
};
