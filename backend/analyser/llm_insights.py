import openai
from decouple import config

openai.api_key = config('OPENAI_API_KEY')

def generate_insights(text_chunk):
    prompt = f\"\"\"{text_chunk}\n\n{FINANCE_PROMPT}\"\"\"
    response = openai.ChatCompletion.create(
        model=\"gpt-4o\",
        messages=[{\"role\": \"user\", \"content\": prompt}],
        max_tokens=800
    )
    return response.choices[0].message.content.strip()
