import pandas as pd

from sklearn.feature_extraction.text import TfidfVectorizer

from sklearn.naive_bayes import MultinomialNB

from sklearn.pipeline import Pipeline

import joblib


import os

current_dir = os.path.dirname(os.path.abspath(__file__))

dataset_path = os.path.join(current_dir, "dataset.csv")

data = pd.read_csv(dataset_path)

# X and Y
X = data["description"]

y = data["category"]

# Build pipeline
model = Pipeline([
    ("tfidf", TfidfVectorizer()),
    ("classifier", MultinomialNB())
])

# Train model
model.fit(X, y)

# Save model
joblib.dump(model, "fine_model.pkl")

print("Model Trained Successfully")