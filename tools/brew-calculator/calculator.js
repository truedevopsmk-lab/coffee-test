const recipes = {
  v60: [
    { id: "tetsu", name: "Tetsu Kasuya 4:6" },
    { id: "hoffmann", name: "Hoffmann V60" }
  ],
  aeropress: [
    { id: "ap-standard", name: "AeroPress (Inverted)" },
    { id: "ap-concentrate", name: "AeroPress Concentrate" }
  ]
};

let currentMethod = "v60";

function loadRecipes() {
  const select = document.getElementById("recipe");
  select.innerHTML = "";

  recipes[currentMethod].forEach(r => {
    const opt = document.createElement("option");
    opt.value = r.id;
    opt.textContent = r.name;
    select.appendChild(opt);
  });
}

document.querySelectorAll(".method").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".method").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentMethod = btn.dataset.method;
    loadRecipes();
  });
});

loadRecipes();

function calculate() {
  const recipe = document.getElementById("recipe").value;
  const coffee = parseFloat(document.getElementById("coffee").value);
  const out = document.getElementById("output");

  if (!coffee || coffee <= 0) {
    out.innerHTML = "<strong>Please enter a valid coffee dose.</strong>";
    return;
  }

  // -------- V60 --------
  if (recipe === "tetsu") {
    const total = Math.round(coffee * 16.6);
    const first = Math.round(total * 0.4);
    const second = total - first;

    out.innerHTML = `
      <h3>Tetsu Kasuya 4:6 (V60)</h3>
      <p><strong>Total water:</strong> ${total} g</p>
      <ul>
        <li>Pour 1: ${Math.round(first * 0.25)} g</li>
        <li>Pour 2: ${Math.round(first * 0.75)} g</li>
        <li>Pour 3: ${Math.round(second / 3)} g</li>
        <li>Pour 4: ${Math.round(second / 3)} g</li>
        <li>Pour 5: ${Math.round(second / 3)} g</li>
      </ul>
      <em>Adjust sweetness with pours 1–2, strength with pours 3–5.</em>
    `;
  }

  if (recipe === "hoffmann") {
    const total = Math.round(coffee * 16.67);
    const bloom = coffee * 2;

    out.innerHTML = `
      <h3>Hoffmann V60</h3>
      <p><strong>Total water:</strong> ${total} g</p>
      <ul>
        <li>Bloom: ${bloom} g (30–45 sec)</li>
        <li>Single continuous pour to ${total} g</li>
      </ul>
      <em>Aim for ~2:30–3:00 total brew time.</em>
    `;
  }

  // -------- AeroPress --------
  if (recipe === "ap-standard") {
    const water = Math.round(coffee * 15);

    out.innerHTML = `
      <h3>AeroPress (Inverted)</h3>
      <ul>
        <li>Coffee: ${coffee} g</li>
        <li>Water: ${water} g</li>
        <li>Grind: Medium-fine</li>
        <li>Brew time: 2:00</li>
      </ul>
      <em>Stir gently, flip, press slowly.</em>
    `;
  }

  if (recipe === "ap-concentrate") {
    const brewWater = Math.round(coffee * 4);
    const dilution = Math.round(coffee * 8);

    out.innerHTML = `
      <h3>AeroPress Concentrate</h3>
      <ul>
        <li>Coffee: ${coffee} g</li>
        <li>Brew water: ${brewWater} g</li>
        <li>Dilution water: ${dilution} g</li>
        <li>Total yield: ${brewWater + dilution} g</li>
      </ul>
      <em>Great for milk drinks or iced coffee.</em>
    `;
  }
}
