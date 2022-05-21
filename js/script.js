// async function fetchData() {
//   const result = await fetch('../data.json');

//   return await result.json();
// }

// console.log(fetchData());

// fetchData().then((data) => {
//   const section = document.querySelector('.section');

//   data.forEach((item) => {
//     const div = document.createElement('div');

//     div.innerHTML = `
//             <span class="amount">${item.amount}</span>
//             <div class="bar"></div>
//             <span class="day">${item.day}</span>
//         `;

//     section.appendChild(div);
//   });
// });

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
  console.log(bar);

  bar.forEach((item, index) => {
    item.style = `height: ${amount[index].innerText}px`;
  });
}, 100);

// const bar = document.querySelectorAll('.bar');
// const amount = document.querySelectorAll('.amount');
// console.log(bar);

// bar.forEach((item, index) => {
//   item.style = `height: ${amount[index].innerText}px`;
//   console.log(index);
// });
