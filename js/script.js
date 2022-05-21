const data = [
  {
    day: 'mon',
    amount: 17.45,
  },
  {
    day: 'tue',
    amount: 34.91,
  },
  {
    day: 'wed',
    amount: 52.36,
  },
  {
    day: 'thu',
    amount: 31.07,
  },
  {
    day: 'fri',
    amount: 23.39,
  },
  {
    day: 'sat',
    amount: 43.28,
  },
  {
    day: 'sun',
    amount: 25.48,
  },
];

const section = document.querySelector('.section');
data.forEach((item) => {
  const div = document.createElement('div');

  div.innerHTML = `
              <span class="amount">${item.amount}</span>
              <div class="bar"></div>
              <span class="day">${item.day}</span>
          `;
  section.appendChild(div);
});

const bar = document.querySelectorAll('.bar');
const amount = document.querySelectorAll('.amount');
const amounts = [];

amount.forEach((item) => amounts.push(item.textContent));

const maxValue = Math.max(...amounts);

bar.forEach((item, index) => {
  item.style = `height: ${Number(amount[index].innerText) * 2}px`;
  if (amount[index].textContent == maxValue) {
    item.classList.add('maxValue');
    item.parentElement.children[0].style.opacity = 1;
  }
});

const total = document.querySelector('.total');

total.innerText = amounts.reduce((total, valor) => total + Number(valor), 0);
