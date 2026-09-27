# Customer Churn Prediction — retail bank customers

Identifies which customers are likely to leave, and which characteristics are associated with
churn, so retention outreach can be prioritized.

- Notebook: `Customer_Churn_Prediction_Analysis.ipynb`
- Field documentation: `Bank_Churn_Data_Dictionary.csv`

## Data

10,000 customer records across 13 demographic and financial variables (credit score, geography,
age, tenure, balance, number of products, activity status, estimated salary), with `Exited` as
the target. Churn rate is 20.4%, so the classes are imbalanced and accuracy alone is misleading.

The raw CSV is not committed here — download the public "Churn Modeling" dataset and save it as
`Bank_Churn.csv` beside the notebook.

## Method

1. Profiling: structure, missing values, distributions, target balance, correlations.
2. Feature engineering: balance-to-income ratio, age bands, credit-score bands.
3. Preprocessing and a stratified train/test split.
4. Models: Logistic Regression baseline and a Random Forest tuned with RandomizedSearchCV.
5. Evaluation: accuracy, precision, recall, F1, confusion matrix, ROC and precision-recall
   curves, plus threshold analysis and permutation-style feature importance.

## Results (held-out test set)

| Model | Accuracy | Precision | Recall | F1 |
|---|---|---|---|---|
| Logistic Regression | 0.812 | 0.618 | 0.218 | 0.322 |
| Random Forest (tuned) | **0.860** | **0.788** | **0.428** | **0.555** |

The baseline's low recall is the interesting part: lowering its decision threshold to 0.34 lifts
recall to roughly 42% at the cost of more false positives — a useful illustration of why the
threshold should follow the cost of the error, not the default 0.5.

## What I would do next

Cross-validation and calibration, gradient boosting for comparison, cost-sensitive evaluation
against a retention-offer budget, and monitoring for drift if this ever went near production.
