import pandas as pd
import quandl

# Install the quandl package if it's not already installed
# !pip install quandl

# Set the API key
quandl.ApiConfig.api_key = "xyrEL2EBKf8XvGzp1YdA"

# Load the CSV file
robinhood_profit_df = pd.read_csv('Robinhood_Profit.csv')

# Extract the unique tickers from the CSV file
tickers = robinhood_profit_df['Instrument'].unique()

# Function to check if a ticker is valid
def is_valid_ticker(ticker):
    try:
        # Try fetching a single row of data to validate the ticker
        quandl.get(f"WIKI/{ticker}", rows=1)
        return True
    except Exception:
        return False

# Filter out invalid tickers
valid_tickers = [ticker for ticker in tickers if is_valid_ticker(ticker)]

# Prepare an empty DataFrame to store the data
data_frames = []

# Fetch the data for each valid ticker and store it in the DataFrame
for ticker in valid_tickers:
    try:
        # Fetch the current data for the ticker
        stock_data = quandl.get(f"WIKI/{ticker}", rows=1)
        stock_data['Ticker'] = ticker
        data_frames.append(stock_data)
    except Exception as e:
        print(f"Error fetching data for {ticker}: {e}")

# Concatenate all the individual DataFrames into one
if data_frames:
    data = pd.concat(data_frames, ignore_index=True)
    # Display the collected data
    print(data)
else:
    print("No valid data fetched.")

# Check if the data was collected and concatenate it into a DataFrame
if data_frames:
    data = pd.concat(data_frames, ignore_index=True)
    # Display the collected data
    print(data)
else:
    print("No valid data fetched.")
