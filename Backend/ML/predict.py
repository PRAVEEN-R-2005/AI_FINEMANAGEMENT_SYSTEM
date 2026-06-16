import os
import joblib
import sys

current_dir = os.path.dirname(os.path.abspath(__file__))

model_path = os.path.join(current_dir, "fine_model.pkl")

model = joblib.load(model_path)

description = sys.argv[1]

prediction = model.predict([description])

print(prediction[0])