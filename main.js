const current = [
  'working on DecodeMe, a site that teaches internet users about their data',
  'building a game to help students improve their JavaScript skills',
  'leading research for Dartmouth Sports Analytics'
];
let currentTextIdx = 0;

const previous = [
  'conducted research analyzing the reaction to COVID-19 by Governments and Twitter',
  'was a TA for \"Full Stack Web Development\"',
  'built a morse code sender on an FPGA',
  'helped people who are at-risk for COVID-19 get their pharmecuticals delivered through Stop the Spread'
];
let prevTextIdx = 0;

const changeCurrent = () => {
  currentTextIdx = (currentTextIdx + 1) % current.length;
  const text = current[currentTextIdx]
  const span = document.getElementById('currently');
  span.className = "fadeOut";
  setTimeout(() => {
    span.className = "";
    span.innerHTML = text;
  }, 1500);
};

const changePrev = () => {
  prevTextIdx = (prevTextIdx + 1) % previous.length;
  const text = previous[prevTextIdx]
  const span = document.getElementById('previously');
  span.className = "fadeOut";
  setTimeout(() => {
    span.className = "";
    span.innerHTML = text;
  }, 1500);
};

setInterval(changeCurrent, 3000);
setInterval(changePrev, 3000);