# Milestone 0 validation

Checked on 15 September 2026 with Node.js 24.14.0 on Windows.

| Check | Result |
| --- | --- |
| ESLint | Passed with ESLint 9.39.5 and the Next.js rules |
| TypeScript standalone check | Passed |
| Production build | Passed with the documented Windows worker setting |
| Production server | Started at http://127.0.0.1:3000 |
| Browser check | Correct title, owner name, headline, and roles rendered at 1280 × 720 |
| Browser console | No warnings or errors captured in the checked page |
| Lovable visual parity | Pending; this is the foundation lesson |

## This restricted Windows workspace

The ordinary installation failed when Windows blocked a package postinstall subprocess (`spawn EPERM`). Installation completed using `--ignore-scripts`; no user-level npm settings were changed. The installed dependencies successfully linted, compiled, type-checked, generated pages, and served the page afterward.

The default production build also encountered `spawn EPERM`. Setting `NEXT_WORKER_THREADS=1` activates the conditional options in `next.config.mjs`: worker threads and API-based TypeScript checking. The full production build then passed, with type checking enabled.

The equivalent direct commands used in this workspace were:

```powershell
node node_modules/eslint/bin/eslint.js .
node node_modules/typescript/bin/tsc --noEmit
$env:NEXT_WORKER_THREADS = '1'
node node_modules/next/dist/bin/next build
node node_modules/next/dist/bin/next start --hostname 127.0.0.1 --port 3000
```

Ordinary VS Code terminals can first use the npm commands in the README. The environment setting applies only to that terminal process and its children. No production deployment has been performed.

ESLint 10.10.0 was tested and failed because a bundled React lint rule still uses an older ESLint API. Version 9.39.5 is pinned for compatibility; its upstream support warning is documented in the lesson.

## GitHub publishing status

The foundation was committed locally. The push failed because the restricted workspace could not run Git's credential helper. The connected GitHub integration also rejected the write with HTTP 403, `Resource not accessible by integration`. No files were published by either attempt.

Open this project folder in VS Code, open its terminal, and run:

```powershell
git push -u origin main
```

That terminal can use your ordinary GitHub sign-in. `-u` remembers the remote branch, allowing future pushes to use just `git push`. Successful publication still needs to be verified after this step.
