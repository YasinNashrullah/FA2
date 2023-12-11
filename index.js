const openMenfess = document.getElementById("openMenfess");
const textMenfess = document.getElementById("textMenfess");
const closeMenfess = document.getElementById("closeMenfess");

function openTextMenfess() {
  textMenfess.style.display = 'block';
}

function closeTextMenfess() {
  textMenfess.style.display = 'none';
}

openMenfess.addEventListener('click', openTextMenfess);
closeMenfess.addEventListener('click', closeTextMenfess);
