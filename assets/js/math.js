class Maths {
  constructor({ selector, close, addLessonBtn, modalInfo }) {
    this.selector = document.querySelector(selector);
    this.addLessonBtn = document.querySelector(addLessonBtn);
    this.close = document.querySelector(close);
    this.lessonArray = [];
    this.index = 1;
    this.modalInfo = document.querySelector(modalInfo);
    this.addLesson = this.mathLesson();
    this.obj = {};
    this.componentAddLesson = null;
    this.id = null;
    this.compareAmount = [];
    this.state = null;
  }

  mathLesson(component, element) {
    if (component !== undefined) {
      this.componentAddLesson = component;

      element.forEach((item) => {
        item.onclick = () => {
          this.obj = {};
          this.lessonArray = [];
          this.index = 1;
          this.obj.name = "Riyaziyyat";
          document.querySelector("#listLessonInput").value = "";
          this.modalInfo.innerHTML = "";
          this.selector.style.display = "block";
          this.id = item.getAttribute("data-id") - 1;
        };
      });
      this.close.onclick = () => {
        this.selector.style.display = "none";
      };

      document.querySelector(".listSelect").onchange = (event) => {
        this.obj.name = event.target.value;
      };

      document.querySelector("#listLessonInput").onkeyup = (event) => {
        this.obj.lessonAmount = event.target.value;
      };

      this.addLessonBtn.onclick = () => {
        this.addLesson(this.obj.name, this.obj.lessonAmount, this.modalInfo);
      };
    }

    return (name, amount, elem) => {
      const filtered = this.lessonArray.filter((e) => e.name === name);

      if (filtered.length === 0) {
        this.compareAmount.push(Number(amount));
        this.lessonArray.push({
          id: this.index++,
          name: name,
          lessonAmount: Number(amount),
        });
      } else {
        return false;
      }

      const minAmount = Math.min.apply(null, this.compareAmount);

      const maxAmount = Math.max.apply(null, this.compareAmount);

      const total = (previousValue, currentValue) =>
        previousValue + currentValue;

      const middleAmount = this.compareAmount.reduce(total) / 3;

      this.componentAddLesson.studentList[this.id].props.minAmount = minAmount;
      this.componentAddLesson.studentList[this.id].props.maxAmount = maxAmount;
      this.componentAddLesson.studentList[this.id].props.middleAmount =
        middleAmount;

      elem.innerHTML = "";
      this.lessonArray.forEach((item) => {
        elem.innerHTML += `<div class="list__modal--item" data-count=${item.id}>
        <p>
          <span>${item.name}</span>
          <span>${item.lessonAmount}</span>
        </p>
      </div>`;
      });
    };
  }
}

export default Maths;
