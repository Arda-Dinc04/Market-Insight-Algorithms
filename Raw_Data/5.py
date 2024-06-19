import yfinance as yf
import pandas as pd


# Function to generate a large list of ticker symbols
def generate_large_ticker_list():
    exchanges = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META', 'TSLA', 'BRK-A', 'JNJ', 'V', 'WMT', 'JPM', 'PG', 'UNH', 'DIS', 'NVDA', 'HD', 'MA', 'VZ', 'PYPL', 'ADBE', 'NFLX', 'KO', 'PEP', 'PFE', 'INTC', 'CSCO', 'MRK', 'CMCSA', 'NKE', 'T', 'XOM', 'MCD', 'HON', 'IBM', 'BA', 'GE', 'SBUX', 'MMM', 'GS', 'CAT', 'AXP', 'CVX', 'ORCL', 'AMGN', 'QCOM', 'TXN', 'COST', 'WFC', 'MDT', 'BMY']
    # You can extend this list or add more exchanges
    return exchanges * 200  # Replicate the list to get a larger number of tickers


# Fetch latest stock split data for a given ticker
def fetch_latest_stock_split(ticker):
    try:
        # Fetch the ticker data
        ticker_data = yf.Ticker(ticker)

        # Get stock split history
        stock_splits = ticker_data.splits

        if not stock_splits.empty:
            # Convert to DataFrame for better readability
            stock_splits_df = pd.DataFrame(stock_splits, columns=['Stock Splits'])

            # Keep only the latest split
            latest_split = stock_splits_df.iloc[-1]
            latest_split['Ticker'] = ticker
            latest_split['Date'] = latest_split.name  # Add the date of the split

            return latest_split
        else:
            return None
    except Exception as e:
        print(f"Error fetching data for {ticker}: {e}")
        return None


def fetch_all_companies_splits(tickers):
    all_splits = []

    for ticker in tickers:
        latest_split = fetch_latest_stock_split(ticker)
        if latest_split is not None:
            all_splits.append(latest_split)

    combined_splits = pd.DataFrame(all_splits)
    return combined_splits


if __name__ == "__main__":
    # Generate a large list of ticker symbols
    tickers = generate_large_ticker_list()

    # Fetch and filter the stock split data
    combined_splits = fetch_all_companies_splits(tickers)

    # Reorder columns to have a consistent structure
    combined_splits = combined_splits[['Ticker', 'Date', 'Stock Splits']]

    # Print the combined data
    print(combined_splits)

    # Save the combined data to a CSV file
    combined_splits.to_csv('latest2_stock_splits.csv', index=False)
