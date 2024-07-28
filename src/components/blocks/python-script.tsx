import React from 'react';

const PythonScript: React.FC = () => {
    const code = `
import openai
import os

# Initialize the OpenAI API client
openai.api_key = os.getenv("OPENAI_API_KEY")

# Read the committed code
with open("path/to/your/main_project_file.py", "r") as file:
    code = file.read()

# Generate a blog post using the AI
response = openai.Completion.create(
    engine="text-davinci-004",
    prompt=f"Write a blog post about the following project:\\n\\n{code}",
    max_tokens=500
)

# Save the generated blog post
with open("generated_blog_post.md", "w") as file:
    file.write(response.choices[0].text.strip())

print("Blog post generated successfully!")
`;

    return (
        <div className="border rounded-lg p-4 m-4 shadow-lg">
            <h3 className="text-lg font-bold mb-2">Python Script</h3>
            <pre className="whitespace-pre-wrap break-words bg-gray-100 p-4 rounded">
        <code>{code}</code>
      </pre>
        </div>
    );
};

export default PythonScript;
