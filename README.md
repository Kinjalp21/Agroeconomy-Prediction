# 🌾 Maharashtra Agroeconomy Prediction using Machine Learning

This project aims to forecast **crop prices** and estimate the **agroeconomic value** (total output worth in ₹) for districts across Maharashtra, India. It leverages real-world datasets (crop production, rainfall, and MSP prices) and machine learning to help stakeholders like farmers, analysts, and policymakers make informed decisions.

<img width="1499" height="907" alt="Screenshot 2025-04-06 172926" src="https://github.com/user-attachments/assets/76835e55-6a95-4941-b0a4-c3ce7ab6fa15" />

---

## 📌 Project Highlights

- 🔮 Predicts market **price per ton** of a selected crop.
- 💰 Calculates **agroeconomic value** = `Predicted Price × Production`.
- 🏞️ Accepts real district and crop names (e.g., `"PUNE"`, `"WHEAT"`).
- 📉 Uses encoded features + regression to ensure accurate predictions.
- ⚙️ Simple, responsive frontend + clean backend API.

## 📌 It integrates:

- 📊 Government crop production data
- ☁️ Rainfall statistics by district
- 💸 MSP (Minimum Support Price) market records

---

## 🧠 Technologies Used

| Layer      | Stack                              |
|------------|-------------------------------------|
| ML Model   | Python, scikit-learn, pandas        |
| Backend    | Flask, joblib, LabelEncoder         |
| Frontend   | HTML, CSS, Vanilla JavaScript       |
| Data Files | CSVs for rainfall, crop, and prices |

---
