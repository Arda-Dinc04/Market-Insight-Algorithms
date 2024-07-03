import requests
import pandas as pd

polygon_api_key = 'JOLy_7GmGcMczPwKGCu5EtrZ40CAkeqt'

def get_stock_splits(start_date, end_date):
    base_url = 'https://api.polygon.io/v3/reference/splits'
    params = {
        'apiKey': polygon_api_key,
        'start_date': start_date,
        'end_date': end_date,
        'limit': 1000  # Adjust the limit as needed
    }
    try:
        response = requests.get(base_url, params=params)
        response.raise_for_status()
        data = response.json()
        return data.get('results', [])
    except requests.exceptions.RequestException as e:
        print(f"HTTP Request failed: {e}")
        return []

# Example usage
start_date = '2024-01-01'
end_date = '2024-12-31'
splits = get_stock_splits(start_date, end_date)

# Convert the result to a DataFrame for easier handling
df_splits = pd.DataFrame(splits)

# Ensure the 'execution_date' column is in datetime format
df_splits['execution_date'] = pd.to_datetime(df_splits['execution_date'])

# Filter the DataFrame to include only rows within the specified date range
df_splits = df_splits[(df_splits['execution_date'] >= start_date) & (df_splits['execution_date'] <= end_date)]

# Save to a CSV file
if not df_splits.empty:
    df_splits.to_csv('stock_splits.csv', index=False)

print(df_splits)
