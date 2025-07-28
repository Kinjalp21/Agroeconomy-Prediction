from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__, static_folder="static", template_folder="templates")
CORS(app)

model = joblib.load("crop_model.pkl")
le_district = joblib.load("district_encoder.pkl")
le_crop = joblib.load("crop_encoder.pkl")

@app.route("/")
def home():
    return render_template("index.html")
@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    try:
        district_encoded = le_district.fit_transform([data["district"].upper()])[0]
        crop_encoded = le_crop.fit_transform([data["crop"].upper()])[0]
        year = int(data["year"])
        rainfall = float(data["rainfall"])
        yield_val = float(data["yield"])
        production = float(data["production"])
        features = np.array([[district_encoded, crop_encoded, year, rainfall, yield_val, production]])
        predicted_price = model.predict(features)[0]
        predicted_agroeconomy = predicted_price * production

        return jsonify({
            "predicted_price": round(float(predicted_price), 2),
            "predicted_agroeconomy": round(float(predicted_agroeconomy), 2)
        })
    except Exception as e:
        print("❌ Prediction error:", e)
        return jsonify({"error": "Prediction failed", "details": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
