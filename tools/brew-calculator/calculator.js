function calculate() {
  const recipe = document.getElementById("recipe").value;
  const coffee = parseFloat(document.getElementById("coffee").value);

  if (!coffee || coffee <= 0) {
    document.getElementById("output").innerHTML =
      "<strong>Please enter a valid coffee dose.</strong>";
    return;
  }

  let html = "";

  if (recipe === "tetsu") {
    const totalWater = Math.round(coffee * 16.6);
    const firstPhase = Math.round(totalWater * 0.4);
    const secondPhase = totalWater - firstPhase;

    html = `
      <h3>Tetsu Kasuya 4:6 (V60)</h3>
      <p><strong>Total water:</strong> ${totalWater} g</p>

      <ul>
        <li>Pour 1 (Bloom): ${Math.round(firstPhase * 0.25)} g</li>
        <li>Pour 2: ${Math.round(firstPhase * 0.75)} g</li>
        <li>Pour 3: ${Math.round(secondPhase / 3)} g</li>
        <li>Pour 4: ${Math.round(secondPhase / 3)} g</li>
        <li>Pour 5: ${Math.round(secondPhase / 3)} g</li>
      </ul>

      <p>
        <em>
        Adjust sweetness/acidity using pours 1–2.<br>
        Control strength using pours 3–5.
        </em>
      </p>
    `;
  }

  if (recipe === "hoffmann") {
    const totalWater = Math.round(coffee * 16.67);
    const bloom = coffee * 2;

    html = `
      <h3>Hoffmann V60</h3>
      <p><strong>Total water:</strong> ${totalWater} g</p>

      <ul>
        <li>Bloom: ${bloom} g (30–45 sec)</li>
        <li>Single continuous pour to ${totalWater} g</li>
      </ul>

      <p>
        <em>
        Keep slurry height consistent.<br>
        Aim for ~2:30–3:00 total brew time.
        </em>
      </p>
    `;
  }

  document.getElementById("output").innerHTML = html;
}
