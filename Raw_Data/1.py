import yfinance as yf
import pandas as pd


# Function to get S&P 500 tickers using yfinance
def get_sp500_tickers():
    sp500_tickers = pd.read_html('https://en.wikipedia.org/wiki/List_of_S%26P_500_companies')[0]
    return sp500_tickers['Symbol'].tolist()


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
    # Get list of S&P 500 tickers
    tickers = get_sp500_tickers()

    # Fetch and filter the stock split data
    combined_splits = fetch_all_companies_splits(tickers)

    # Reorder columns to have a consistent structure
    combined_splits = combined_splits[['Ticker', 'Stock Splits']]

    # Print the combined data
    print(combined_splits)

    # Save the combined data to a CSV file
    combined_splits.to_csv('latest_stock_splits.csv', index=False)
