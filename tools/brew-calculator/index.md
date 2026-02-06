---
layout: default
title: Brew Ratio Calculator
---

A simple calculator to help plan pour-over brews using well-known recipes.

---

## ☕ Brew Recipe

<label for="recipe">Recipe</label><br>
<select id="recipe">
  <option value="tetsu">Tetsu Kasuya 4:6 (V60)</option>
  <option value="hoffmann">Hoffmann V60</option>
</select>

<br><br>

<label for="coffee">Coffee dose (grams)</label><br>
<input type="number" id="coffee" value="15" min="5" step="0.5">

<br><br>

<button onclick="calculate()">Calculate</button>

---

## 📊 Brew Parameters

<div id="output">
  <em>Enter your dose and click calculate.</em>
</div>

<script src="{{ '/tools/brew-calculator/calculator.js' | relative_url }}"></script>
