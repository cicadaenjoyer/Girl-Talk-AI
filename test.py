
import requests

url = "https://api.hyperbolic.xyz/v1/chat/completions"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0b201NjR0b21AZ21haWwuY29tIiwiaWF0IjoxNzI5NDEyNTc0fQ.KgY38Ei_OdtDH1vR_YRbb-zQX6AABi0VBn7qowd5AA4"}

# Define your messages
data = {
    "messages": [
        {
            "role": "system",
            "content": """creating an AI "big sister" podcast-style platform for young girls

Generate empathetic, age-appropriate, friendly advice in a warm, “big sister” tone.

Convert that into a short “podcast script” (~1-2 min * 150 wpm)

Preface with:
“Hi! My name is Aisha, and this is Girl Talk AI, a safe space for girls to get advice on anything from school stress, friendship drama, or more personal matters. Let’s talk about what’s on your mind today…”

150wpm speaking, generate in 500 word blocks

just output the script, no fluff"""
        },
        {
            "role": "user",
            "content": "I feel left out at school when my friends hang out without me."
        }
    ],
    "model": "Qwen/Qwen3-235B-A22B",
    "max_tokens": 29820,
    "temperature": 0.1,
    "top_p": 0.9
}

# Send the request
response = requests.post(url, headers=headers, json=data)

# Print the result
print(response.json())

