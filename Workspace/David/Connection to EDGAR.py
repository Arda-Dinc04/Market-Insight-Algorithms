import requests
from bs4 import BeautifulSoup
from datetime import datetime, timedelta


def fetch_latest_8k_filing_with_details(cik):
    headers = {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json"
    }

    url = f"https://data.sec.gov/submissions/CIK{cik}.json"
    response = requests.get(url, headers=headers)
    response.raise_for_status()
    data = response.json()

    if 'filings' in data and 'recent' in data['filings']:
        recent_filings = data['filings']['recent']
        forms = recent_filings.get('form', [])
        report_dates = recent_filings.get('reportDate', [])
        filing_dates = recent_filings.get('filingDate', [])
        accession_numbers = recent_filings.get('accessionNumber', [])
        primary_documents = recent_filings.get('primaryDocument', [])
        descriptions = recent_filings.get('primaryDocDescription', [])
        acceptance_date_times = recent_filings.get('acceptanceDateTime', [])
        acts = recent_filings.get('act', [])
        file_numbers = recent_filings.get('fileNumber', [])
        film_numbers = recent_filings.get('filmNumber', [])
        items = recent_filings.get('items', [])
        sizes = recent_filings.get('size', [])
        is_xbrl = recent_filings.get('isXBRL', [])
        is_inline_xbrl = recent_filings.get('isInlineXBRL', [])

        latest_filing = None
        latest_report_date = None

        for i, form in enumerate(forms):
            if form == "8-K":
                if latest_report_date is None or report_dates[i] > latest_report_date:
                    latest_report_date = report_dates[i]
                    latest_filing = {
                        "form": form,
                        "filing_date": filing_dates[i],
                        "report_date": report_dates[i],
                        "accession_number": accession_numbers[i],
                        "primary_document": primary_documents[i],
                        "description": descriptions[i],
                        "acceptance_date_time": acceptance_date_times[i],
                        "act": acts[i],
                        "file_number": file_numbers[i],
                        "film_number": film_numbers[i],
                        "items": items[i],
                        "size": sizes[i],
                        "is_xbrl": is_xbrl[i],
                        "is_inline_xbrl": is_inline_xbrl[i]
                    }

        return latest_filing
    else:
        print("Recent filings not found in the response.")
        return None


def scrape_filing_details(filing_url):
    response = requests.get(filing_url)
    soup = BeautifulSoup(response.content, 'html.parser')

    company_name = None
    reverse_split_date = None

    # Search for the company name
    for text in soup.stripped_strings:
        if 'inc.' in text.lower() and 'name' in text.lower():
            company_name = text.split('Inc.')[0].strip() + ' Inc.'
            break

    # Search for the reverse split date
    for text in soup.stripped_strings:
        if 'date of report' in text.lower() or 'date of earliest event reported' in text.lower():
            reverse_split_date = text.split(':')[-1].strip()
            break

    return company_name, reverse_split_date


# Nuburu, Inc. CIK
cik = "0001760689"

# Fetch and print the latest report date for 8-K filings
latest_filing = fetch_latest_8k_filing_with_details(cik)

if latest_filing:
    filing_url = f"https://www.sec.gov/Archives/edgar/data/{cik}/{latest_filing['accession_number'].replace('-', '')}/{latest_filing['primary_document']}"
    company_name, reverse_split_date = scrape_filing_details(filing_url)

    print(f"Form: {latest_filing['form']}")
    print(f"Accession Number: {latest_filing['accession_number']}")
    print(f"Filing Date: {latest_filing['filing_date']}")
    print(f"Report Date: {latest_filing['report_date']}")
    print(f"Acceptance DateTime: {latest_filing['acceptance_date_time']}")
    print(f"Act: {latest_filing['act']}")
    print(f"File Number: {latest_filing['file_number']}")
    print(f"Film Number: {latest_filing['film_number']}")
    print(f"Items: {latest_filing['items']}")
    print(f"Size: {latest_filing['size']}")
    print(f"isXBRL: {latest_filing['is_xbrl']}")
    print(f"isInlineXBRL: {latest_filing['is_inline_xbrl']}")
    print(f"Primary Document: {latest_filing['primary_document']}")
    print(f"Primary Doc Description: {latest_filing['description']}")
    print(f"Link: {filing_url}")
    print(f"Company Name: {company_name}")
    print(f"Reverse Split Date: {reverse_split_date}")
else:
    print("No 8-K filings found.")
