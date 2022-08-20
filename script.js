
  /*
  for ( let i = 10; i >= 0 ; i--) {
    if (i === 10) {
     console.log("Countdown " + i);
     continue;
    }
    if (i === 0) {
     console.log("Blast off!");
     continue;
    } else {
    console.log(i);
    }
  }
*/
  const output = document.querySelector('.output');
  output.innerHTML = '';
  let i = 10;

  while (i >= 0) {
    const para = document.createElement('p');
    if (i === 10) {
      para.textContent = "Countdown " + i;
    }
    else if (i === 0) {
      para.textContent = "Blast off!";
    }
    else {
      para.textContent = i;
    }
    output.appendChild(para);
    i--;
  }
  