document.addEventListener("DOMContentLoaded", () => {

  const recipes = {
    v60: [
      { id: "tetsu", name: "Tetsu Kasuya 4:6" },
      { id: "hoffmann", name: "Hoffmann V60" }
    ],
    aeropress: [
      { id: "ap-standard", name: "AeroPress (Inverted)" },
      { id: "ap-concentrate", name: "AeroPress Concentrate" }
    ],
    mokapot: [
      { id: "moka-classic", name: "Moka Pot (Classic)" }
    ]
  };

  let currentMethod = "v60";

  const recipeSelect = document.getElementById("recipe");
  const output = document.getElementById("output");

  function loadRecipes() {
    recipeSelect.innerHTML = "";
    recipes[currentMethod].forEach(r => {
      const opt = document.createElement("option");
      opt.value = r.id;
      opt.textContent = r.name;
      recipeSelect.appendChild(opt);
    });
  }

  document.querySelectorAll(".method").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".method").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentMethod = btn.dataset.method;
      loadRecipes();
      output.innerHTML = "<em>Select a recipe and dose.</em>";
    });
  });

  loadRecipes();

  window.calculate = function () {
    const recipe = recipeSelect.value;
    const coffee = parseFloat(document.getElementById("coffee").value);

    if (!coffee || coffee <= 0) {
      output.innerHTML = "<strong>Please enter a valid coffee dose.</strong>";
      return;
    }

    /* -------- V60 -------- */
if (recipe === "tetsu") {
  const ratio = "1:16.6";
  const temp = "90–92°C";
  const total = Math.round(coffee * 16.6);
  const first = Math.round(total * 0.4);
  const second = total - first;

  output.innerHTML = `
    <h3>Tetsu Kasuya 4:6 (V60)</h3>
    <ul>
      <li>Coffee: ${coffee} g</li>
      <li>Total water: ${total} g</li>
      <li>Ratio: ${ratio}</li>
      <li>Water temp: ${temp}</li>
      <li>Pour 1: ${Math.round(first * 0.25)} g</li>
      <li>Pour 2: ${Math.round(first * 0.75)} g</li>
      <li>Pour 3–5: ${Math.round(second / 3)} g each</li>
    </ul>
    <p><strong>Why this works:</strong><br>
    The split pours let you independently control sweetness and strength.The first 40% controls sweetness vs acidity, while the remaining pours
        adjust strength.
    Slightly lower temperatures preserve clarity and prevent bitterness.</p>
  `;
}

if (recipe === "hoffmann") {
  const ratio = "1:16.7";
  const temp = "96–98°C";
  const total = Math.round(coffee * 16.67);
  const bloom = coffee * 2;

  output.innerHTML = `
    <h3>Hoffmann V60</h3>
    <ul>
      <li>Coffee: ${coffee} g</li>
      <li>Total water: ${total} g</li>
      <li>Ratio: ${ratio}</li>
      <li>Water temp: ${temp}</li>
      <li>Bloom: ${bloom} g (30–45 sec)</li>
      <li>Single continuous pour</li>
    </ul>
    <p><strong>Why this works:</strong><br>
    Higher temperature and continuous pouring maximize extraction
    consistency, making this ideal for evaluating beans.</p>
  `;
}


    /* -------- AeroPress -------- */
if (recipe === "ap-standard") {
  const ratio = "1:15";
  const temp = "85–90°C";
  const water = Math.round(coffee * 15);

  output.innerHTML = `
    <h3>AeroPress (Inverted)</h3>
    <ul>
      <li>Coffee: ${coffee} g</li>
      <li>Water: ${water} g</li>
      <li>Ratio: ${ratio}</li>
      <li>Water temp: ${temp}</li>
      <li>Grind: Medium-fine</li>
      <li>Brew time: 2:00</li>
    </ul>
    <p><strong>Why this works:</strong><br>
    Immersion brewing with slightly cooler water reduces bitterness
    while maintaining body and sweetness.</p>
  `;
}

    if (recipe === "ap-concentrate") {
      const ratio = "1:4 (brew) + dilution";
      const temp = "85–90°C";
      const brewWater = Math.round(coffee * 4);
      const dilution = Math.round(coffee * 8);

      output.innerHTML = `
        <h3>AeroPress Concentrate</h3>
        <ul>
          <li>Coffee: ${coffee} g</li>
          <li>Brew water: ${brewWater} g</li>
          <li>Dilution water: ${dilution} g</li>
          <li>Effective ratio: ${ratio}</li>
          <li>Water temp: ${temp}</li>
        </ul>
        <p><strong>Why this works:</strong><br>
        Concentrated extraction preserves intensity, while dilution
        lets you fine-tune strength without over-extraction.</p>
      `;
    }

    /* -------- Moka Pot -------- */
if (recipe === "moka-classic") {
  const ratio = "≈1:10–1:15 (by yield)";
  const temp = "Boiling water in base";
  const water = Math.round(coffee * 15);

  output.innerHTML = `
    <h3>Moka Pot (Classic)</h3>
    <ul>
      <li>Coffee: ${coffee} g</li>
      <li>Water (boiler): ${water} g</li>
      <li>Ratio: ${ratio}</li>
      <li>Water temp: ${temp}</li>
      <li>Grind: Medium-fine (coarser than espresso)</li>
      <li>Heat: Medium–low</li>
    </ul>
    <p><strong>Why this works:</strong><br>
    Starting with hot water reduces time on heat, preventing
    bitterness and producing a sweeter, fuller-bodied cup.</p>
  `;
}

  };

});
