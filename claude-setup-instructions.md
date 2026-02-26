You are starting work on a new repo. The repo already has auto-merge enabled and branch protection configured, so you do not need to set those up. You are most likely already on the default branch since this is the initial setup of the codebase.

Do the following:

1. Create the file .github/workflows/auto-merge-claude.yml with this content:

```yaml
name: Auto-merge claude/* PRs

on:
  pull_request:
    types: [opened, synchronize, reopened]

jobs:
  auto-merge:
    if: startsWith(github.head_ref, 'claude/')
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
      - run: gh pr merge "$PR_URL" --squash --auto
        env:
          PR_URL: ${{ github.event.pull_request.html_url }}
          GH_TOKEN: ${{ github.token }}
```

2. Add the following to the CLAUDE.md file in the repo root (create it if it doesn't exist):

```
# Git Workflow

Commit and push to the assigned session branch. PRs from claude/* branches are auto-merged into the default branch.
After each push, rebase on the default branch so the next push stays mergeable.
This is a low-stakes personal project where iteration speed is the priority.
```

3. Commit and push all of this to the default branch before doing any other work.
