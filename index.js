"use strict";

const characters = {
    lowerCase: 'abcdefghijkmnopqrstuvwxyz',
    upperCase: 'ABCDEFGHJKLMNPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!#$%~`,.'
};

const passwordOutputEL = document.getElementById('passwordOutput');
const lengthEL = document.getElementById('length');
const copyBtnEL = document.getElementById('copyBtn');

function generatePassword() {
  const includeLowerCase = document.getElementById('includeLowercase').checked;
  const includeUpperCase = document.getElementById('includeUppercase').checked;
  const includeNumbers   = document.getElementById('includeNumbers').checked;
  const includeSymbols   = document.getElementById('includeSymbols').checked;

  const length = Number(lengthEL.value);

  const groups = [];
  if (includeLowerCase) groups.push(characters.lowerCase);
  if (includeUpperCase) groups.push(characters.upperCase);
  if (includeNumbers)   groups.push(characters.numbers);
  if (includeSymbols)   groups.push(characters.symbols);

  if (groups.length === 0) {
    passwordOutputEL.value = 'Select at least one option';
    return;
  }

  /* trenutno nepotrebno jer je input length min=4, charGroupsLength max=4
  if (length < groups.length) {
    passwordOutputEL.value = 'Length too short for selected options';
    return;
  }*/

  let passwordChars = [];

  // 1️⃣ Guarantee one from each group
  for (const group of groups) {
    passwordChars.push(
      group[Math.floor(Math.random() * group.length)]
    );
  }

  // 2️⃣ Fill the rest randomly
  const allChars = groups.join('');
  while (passwordChars.length < length) {
    passwordChars.push(
      allChars[Math.floor(Math.random() * allChars.length)]
    );
  }

  // 3️⃣ Shuffle (Fisher–Yates)
  for (let i = passwordChars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [passwordChars[i], passwordChars[j]] =
    [passwordChars[j], passwordChars[i]];
  }

  passwordOutputEL.value = passwordChars.join('');
}

copyBtn.addEventListener('click', async () => {
  const password = passwordOutputEL.value;

  if (!password) return;

  try {
    await navigator.clipboard.writeText(password);
    copyBtn.innerHTML = '<i class="fa-solid fa-check"></i>';

    setTimeout(() => {
      copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>';
    }, 1200);
  } catch (err) {
    alert('Copy failed');
  }
});