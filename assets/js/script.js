const btn = document.getElementById('btn');
let students = [];

function renderStudent(student) {
  const table = document.querySelector('.table');
  const passClass = student.status === 'Pass' ? 'pass' : 'notpass';

  table.insertAdjacentHTML(
    /*html*/
    'beforeend',
    `
    <div class="student">
      <span>${student.studentName}</span>
      <span>${student.mean}</span>
      <span class="${passClass}">${student.status}</span>
    </div>
  `,
  );
}

function thereIsEmptyFields(studentName) {
  return !studentName;
}

function renderNotification() {
  const notification = document.querySelector('.notification');

  notification.insertAdjacentHTML(
    /*html*/
    'beforeend',
    `
    <div class="error">
      <span>Empty fields do not are added to list</span>
    </div>
  `,
  );

  let interval = setInterval(() => {
    const error = document.querySelector('.error');
    notification.removeChild(error);
    clearInterval(interval);
  }, 3000);
}

function getStudentStatus() {
  const studentName = document.getElementById('studentName').value;
  const score1 = Number(document.getElementById('score1').value);
  const score2 = Number(document.getElementById('score2').value);
  const mean = (score1 + score2) / 2;
  const status = mean >= 70 ? 'Pass' : 'Not pass';

  if (thereIsEmptyFields(studentName)) {
    renderNotification();
  } else {
    const student = {
      studentName,
      mean,
      status,
    };

    students.push(student);
    renderStudent(students[students.length - 1]);
  }
}

btn.addEventListener('click', getStudentStatus);
