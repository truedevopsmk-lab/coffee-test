## ☕ Brewing Method

<div id="methods">
  <button class="method active" data-method="v60">V60</button>
  <button class="method" data-method="aeropress">AeroPress</button>
</div>

<br>

<label for="recipe">Recipe</label><br>
<select id="recipe"></select>

<br><br>

<label for="coffee">Coffee dose (grams)</label><br>
<input type="number" id="coffee" value="15" min="5" step="0.5">

<br><br>

<button onclick="calculate()">Calculate</button>

---

## 📊 Brew Parameters

<div id="output">
  <em>Select a method, recipe, and dose.</em>
</div>
