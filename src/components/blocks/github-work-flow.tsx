import React from 'react';

const GitHubActionsWorkflow: React.FC = () => {
    const code = `
name: Generate Blog Post

on:
  push:
    branches:
      - new-branch

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Generate Blog Post
        id: generate_post
        run: |
          echo "Generating blog post..."
          python generate_blog_post.py
`;

    return (
        <div className="border rounded-lg p-4 m-4 shadow-lg">
            <h3 className="text-lg font-bold mb-2">GitHub Actions Workflow</h3>
            <pre className="whitespace-pre-wrap break-words bg-gray-100 p-4 rounded">
        <code>{code}</code>
      </pre>
        </div>
    );
};

export default GitHubActionsWorkflow;
