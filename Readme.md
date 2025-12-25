# 🔐 Password Generator

A simple **educational JavaScript project** that generates secure random passwords based on user-selected criteria.
The goal of this project is not only functionality, but also **understanding JavaScript fundamentals** such as scope, randomness, DOM manipulation, and common pitfalls like accidental globals.

---

## ✨ Features

* Set password length (4–24)
* Include or exclude:

  * Uppercase letters //exclude O becouse is similar to 0
  * Lowercase letters //exclude I and l becouse they are in some fonts similar to 1
  * Numbers
  * Symbols // include only that they are on same position on English and Serbian Keyboard
* Guarantees **at least one character from each selected group**
* Randomized order using **Fisher–Yates shuffle**
* Copy generated password to clipboard
* Clean, minimal UI

---

## 🧠 Educational Focus

This project demonstrates:

* Reading values from form inputs
* Avoiding accidental global variables
* Using `"use strict"`
* Generating random values in JavaScript
* Enforcing constraints in random algorithms
* Shuffling arrays correctly (Fisher–Yates)
* Using the Clipboard API

---

## 📂 Project Structure

```
.
├── index.html
├── index.css
├── index.js
└── README.md
```

---

## 🚀 How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/password-generator.git
   ```

2. Open `index.html` in your browser

No build tools or dependencies are required.

---

## 🛠️ How It Works (High Level)

1. User selects password options
2. One character is guaranteed from each selected group
3. Remaining characters are chosen randomly
4. The final password is shuffled to remove predictability
5. Password is displayed and can be copied to clipboard

---

## 📋 Example

```
Length: 12
Options: Uppercase, Lowercase, Numbers, Symbols
Result: %A9m$K7bQ@2
```

---

## 🔒 Why Fisher–Yates Shuffle?

Without shuffling, forced characters would always appear at the beginning.
The Fisher–Yates algorithm ensures:

* Uniform randomness
* No bias
* Predictable performance

---

## ⚠️ Notes

* Clipboard API requires a secure context (HTTPS or localhost)
* This project uses modern JavaScript (ES6+)
* Intended for learning, not production security auditing

---

## 📌 Possible Improvements

* Password strength meter
* Cryptographically secure randomness (`crypto.getRandomValues`)
* Mobile-first UI
* Unit tests

---

## 📜 License

MIT License — feel free to use, modify, and learn from it.

---

## 👤 Author

Created as an educational mini-project for learning JavaScript fundamentals.
