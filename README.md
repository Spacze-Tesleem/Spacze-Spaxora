# SPACZE — Spaxora

First milestone: a responsive landing page and interactive commerce workspace preview.

## Run
Serve the repository with any static web server. For example, with Python installed:

```sh
python3 -m http.server 3000
```

Open http://localhost:3000. No build step or package installation is required.

## Structure
- index.html: landing page and accessible workspace shell
- styles.css: green brand foundation and responsive layouts
- app.js: four demo views and session-only approval interactions

## Scope
All business figures and tasks are sample data. Approval buttons only update memory in the browser. No authentication, database, real AI, publishing, billing, or integrations are implemented. No form collects personal data. Google Fonts is optional; system font fallbacks are included.

## Next milestones
1. Review the landing page direction.
2. Move the approved UI into the production application framework.
3. Implement authentication and founder onboarding.
4. Add persisted products, strategy, and campaign workflows.
5. Connect AI suggestions and approval-gated integrations.

## Verification
JavaScript syntax checked before commit. Browser rendering and runtime interaction checks are still required; this environment did not expose a browser or shell runtime.
