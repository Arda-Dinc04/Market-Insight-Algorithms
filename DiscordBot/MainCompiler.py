import nbformat
from nbconvert import PythonExporter
from nbconvert.preprocessors import ExecutePreprocessor
import pandas as pd

print('Bot will take about a minute')
def run_notebook(notebook_path):
    with open(notebook_path) as f:
        nb = nbformat.read(f, as_version=4)
    
    ep = ExecutePreprocessor(timeout=600, kernel_name='python3')
    try:
        ep.preprocess(nb, {'metadata': {'path': './'}})
    except Exception as e:
        print(f"Error executing {notebook_path}: {e}")

notebook_files = [
    '/Users/ardadinc/Desktop/Market-Insight/DiscordBot/RevSplitBotVersion/API_Parse.ipynb',
    '/Users/ardadinc/Desktop/Market-Insight/DiscordBot/RevSplitBotVersion/Web_Parse.ipynb',
    '/Users/ardadinc/Desktop/Market-Insight/DiscordBot/RevSplitBotVersion/AlphaPRIABot/Web_Parse_PRIA.ipynb'
]

for notebook_file in notebook_files:
    run_notebook(notebook_file)

# Path to the CSV file
csv_file_path = '/Users/ardadinc/Desktop/Market-Insight/DiscordBot/RevSplitBotVersion/AlphaPRIABot/Results.csv'  # Replace with the actual path to your x.csv file

# Read and print the CSV file
try:
    df = pd.read_csv(csv_file_path)
    print(df)
except Exception as e:
    print(f"Error reading {csv_file_path}: {e}")
