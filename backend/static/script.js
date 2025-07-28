document.getElementById("predictionForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const district = String(document.getElementById("district").value);
    const crop = String(document.getElementById("crop").value);
    const year = parseInt(document.getElementById("year").value);
    const rainfall = parseFloat(document.getElementById("rainfall").value);
    const yield_val = parseFloat(document.getElementById("yield").value);
    const production = parseFloat(document.getElementById("production").value); // <-- NEW

    try {
        const response = await fetch("/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                district,
                crop,
                year,
                rainfall,
                yield: yield_val,
                production,
            }),
        });

        const result = await response.json();

        if (result.predicted_price && result.predicted_agroeconomy) {
            document.getElementById("result").innerHTML = `
            🌾 <strong>Predicted Price:</strong> ₹${result.predicted_price} /ton<br>
            💰 <strong>Predicted Agroeconomy:</strong> ₹${result.predicted_agroeconomy}
        `;
        } else if (result.error) {
            document.getElementById("result").innerText = "❌ Error: " + result.error;
            console.error("Error details:", result.details);
        } else {
            document.getElementById("result").innerText = "❌ Something went wrong.";
        }
    } catch (err) {
        document.getElementById("result").innerText = "❌ Error predicting. Check console.";
        console.error(err);
    }
});
