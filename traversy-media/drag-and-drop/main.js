const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Drag functions for fill
function dragStart() {
  // this.className += 'hold';
  // this.className = 'invisible';
  console.log('fill: start');
  this.className += ' hold'; // mind the space
  setTimeout(() => { this.className = 'invisible' }, 0); // makes it invisible in the first box
}

function dragEnd() {
  console.log('fill: end');
  this.className = 'fill';
}

// Loop through empties
for(const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag functions for empties
function dragOver(e) {
  e.preventDefault(); // comment and try out
  console.log('over');
}

function dragEnter() {
  console.log('enter');
  this.className += ' hovered';
}

function dragLeave() {
  console.log('leave');
  this.className = 'empty';
}

function dragDrop() {
  console.log('drop');
  this.className = 'empty';
  this.append(fill);
}