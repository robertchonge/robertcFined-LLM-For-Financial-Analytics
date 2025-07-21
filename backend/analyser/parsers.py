import pandas as pd
import pdfplumber

def parse_csv(file):
    return pd.read_csv(file)

def parse_excel(file):
    return pd.read_excel(file)

def parse_pdf(file):
    tables = []
    with pdfplumber.open(file) as pdf:
        for page in pdf.pages:
            tables.extend(page.extract_tables())
    return pd.DataFrame(tables[0]) if tables else pd.DataFrame()
