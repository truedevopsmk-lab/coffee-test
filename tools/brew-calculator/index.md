## ☕ Brewing Method

<div id="methods">
  <button class="method active" data-method="v60">V60</button>
  <button class="method" data-method="aeropress">AeroPress</button>
  <button class="method" data-method="mokapot">Moka Pot</button>
</div>

<br>

<label for="recipe">Recipe</label><br>
<select id="recipe"></select>

<br><br>

<label for="coffee">Coffee dose (grams)</label><br>
<input type="number" id="coffee" value="12" min="5" step="0.5">

<br><br>

<button onclick="calculate()">Calculate</button>

---

## 📊 Brew Parameters

<div id="output">
<div id="brew-log-actions" style="display:none; margin-top:1rem;">
  <button onclick="openBrewLogBuilder()">Create Brew Log</button>
</div>

<div id="brew-log-builder" style="display:none; margin-top:1.5rem;">
  <h3>📝 Brew Log Builder</h3>

  <label>Bean</label><br>
  <select id="bean-select"></select><br><br>

  <label>Strength</label><br>
  <input type="text" id="strength" placeholder="e.g. Medium"><br><br>

  <label>Acidity</label><br>
  <input type="text" id="acidity" placeholder="e.g. Juicy, bright"><br><br>

  <label>Sweetness</label><br>
  <input type="text" id="sweetness" placeholder="e.g. High"><br><br>

  <label>Notes</label><br>
  <textarea id="notes" rows="4" placeholder="Your tasting notes..."></textarea><br><br>

  <button onclick="generateBrewMarkdown()">Generate Brew Log</button>
</div>

<pre id="brew-markdown-output" style="display:none; margin-top:1.5rem;"></pre>

  <em>Select a method, recipe, and dose.</em>
</div>
<script src="{{ '/tools/brew-calculator/calculator.js' | relative_url }}"></script>
<script>
  window.beans = [
    {% assign beans = site.pages | where_exp:"p","p.path contains 'beans/'" | where_exp:"p","p.name != 'index.md'" %}
    {% for bean in beans %}
      {
        title: "{{ bean.title }}",
        url: "{{ bean.url | relative_url }}"
      }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];
</script>
