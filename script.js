const nxtBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const circles = document.querySelectorAll('.circle');

let activeIndex = 0;

// Disable prev initially
prevBtn.disabled = true;

const updateUI = () => {
  circles.forEach((c, i) => {
    c.classList.toggle('active', i === activeIndex);
  });

  // disable/enable buttons
  prevBtn.disabled = activeIndex === 0;
  nxtBtn.disabled = activeIndex === circles.length - 1;
};

nxtBtn.addEventListener('click', () => {
  if (activeIndex < circles.length - 1) {
    activeIndex++;
    updateUI();
  }
});

prevBtn.addEventListener('click', () => {
  if (activeIndex > 0) {
    activeIndex--;
    updateUI();
  }
});

// Initial call
updateUI();
