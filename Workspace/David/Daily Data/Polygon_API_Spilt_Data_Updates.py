import requests
import pandas as pd
import os
from datetime import datetime, timedelta

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


def append_to_csv(file_path, new_data):
    if not new_data:
        print("No new data to append.")
        return

    new_df = pd.DataFrame(new_data)

    if os.path.exists(file_path):
        existing_df = pd.read_csv(file_path)
        combined_df = pd.concat([existing_df, new_df]).drop_duplicates().reset_index(drop=True)
    else:
        combined_df = new_df

    combined_df.to_csv(file_path, index=False)


# Main script
def main():
    # Define date range for today's data
    end_date = datetime.now().strftime('%Y-%m-%d')
    start_date = (datetime.now() - timedelta(days=1)).strftime('%Y-%m-%d')

    # Fetch new stock split data
    new_splits = get_stock_splits(start_date, end_date)

    # Append new data to the main CSV file
    main_csv_path = 'stock_splits.csv'
    append_to_csv(main_csv_path, new_splits)

    # Save new data to a separate CSV file
    if new_splits:
        new_data_csv_path = f'new_stock_splits_{end_date}.csv'
        pd.DataFrame(new_splits).to_csv(new_data_csv_path, index=False)
        print(f"New data saved to {new_data_csv_path}")
    else:
        print("No new stock splits found for today.")


if __name__ == "__main__":
    main()
