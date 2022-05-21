fetch('../data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
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
  });

setTimeout(() => {
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
}, 600);
