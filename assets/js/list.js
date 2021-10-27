class AddStudent {
  constructor() {
    this.studentList = [];
    this.index = 1;
  }

  addStudent(data, element) {
    const filtered = this.studentList.filter((e) => e.name === data);

    if (filtered.length === 0) {
      this.studentList.push({
        id: this.index++,
        name: data,
        props: {
          minAmount: null,
          maxAmount: null,
          middleAmount: null,
        },
      });
    } else {
      return false;
    }
    element.innerHTML = "";

    this.studentList.forEach((item) => {
      element.innerHTML += `<div class="list__box" data-count=${item.id}>
      <p>${item.name}</p>
      <a href="#" class="openPopup" data-id=${item.id}> Imtahan </a>
      <p></p>
      <p></p>
      <p></p>
    </div>`;
    });
  }
}

export default AddStudent;
