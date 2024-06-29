import requests

# Example CIK for Nuburu, Inc.
cik = "0001760689"
url = f"https://data.sec.gov/submissions/CIK{cik}.json"

# Add headers to mimic a browser request
headers = {
    "User-Agent": "Mozilla/5.0",
    "Accept": "application/json"
}

response = requests.get(url, headers=headers)
response.raise_for_status()
data = response.json()

# Print the top-level keys
print(f"Top-level keys in the response: {list(data.keys())}")

# Check for recent filings
if 'filings' in data and 'recent' in data['filings']:
    recent_filings = data['filings']['recent']
    # Print the keys in the 'recent' filings
    print(f"Keys in 'recent' filings: {list(recent_filings.keys())}")

    # Iterate over the filings and print only 8-K forms
    if 'form' in recent_filings:
        forms = recent_filings['form']
        for i, form in enumerate(forms):
            if form == "8-K":
                print(f"Form: {form}")
                for key in recent_filings:
                    if key != 'form' and i < len(recent_filings[key]):
                        print(f"  {key}: {recent_filings[key][i]}")
else:
    print("Recent filings not found in the response.")
