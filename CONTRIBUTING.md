# Contributing to OpenCircuit Academy

Thank you for helping make electronics easier to learn. Contributions from beginners, students, educators, engineers and makers are welcome.

## Ways to contribute

- Fix a typo, unclear explanation, incorrect formula or broken link.
- Add a worked numerical example or practice question.
- Improve an existing simulator or add a small, focused one.
- Add a project with a tested bill of materials, wiring, code and expected result.
- Improve mobile usability, keyboard navigation, accessibility or documentation.
- Suggest a new lesson, translation or learning pathway.

If you are new to GitHub, documentation fixes and carefully checked quiz questions are excellent first contributions.

## Before you start

1. Search existing issues and pull requests to avoid duplicate work.
2. For a substantial change, open an issue first and describe the learner problem it solves.
3. Keep changes focused. One pull request should address one topic or improvement.
4. Do not copy textbook pages, paid course material, diagrams, code or images unless the licence explicitly permits reuse. Cite sources and respect attribution requirements.

## Local setup

This is a static website with no build step:

```bash
git clone https://github.com/MathewsV-Manoj/open-source-electronics-try-.git
cd open-source-electronics-try-
python3 -m http.server 8000
```

Open http://localhost:8000.

## Where to make changes

- Lessons and quizzes: `assets/js/content/`
- Simulators: `assets/js/widgets.js`
- Shared markup helpers: `assets/js/core.js`
- Projects: `assets/js/content/projects.js` and `projects-more.js`
- Branch structure: `assets/js/content/tracks.js` and `tracks-depth.js`
- Curriculum guide: `docs/electronics-syllabus.md`
- Main documentation: `README.md`

Follow the existing content structure and helper functions rather than introducing a new framework or dependency for a small change.

## Quality checklist for educational content

Every new or substantially revised lesson should, where appropriate:

- state prerequisites and measurable learning outcomes;
- define symbols, abbreviations and technical terms before using them;
- use SI units and standard notation consistently;
- show assumptions and intermediate steps in derivations;
- include at least one worked example;
- distinguish ideal models from real component behaviour;
- include a misconception or common mistake where useful;
- provide a practice question with an explained answer;
- link to a simulator, experiment or project when it adds learning value;
- cite trustworthy sources for non-obvious technical claims.

For numerical answers, independently verify calculations. For code, state the target board, toolchain and required libraries. For circuit projects, include supply voltage, expected current, component ratings and connection details.

## Simulator and project checklist

- A simulator should have clear controls, units, sensible defaults and a visible output.
- It should handle invalid or boundary inputs without breaking the page.
- A hardware project should include a parts list, wiring or schematic, code, expected behaviour and troubleshooting notes.
- Flag any hazardous voltage, heat, moving parts, batteries or stored energy prominently. Do not present dangerous experiments as beginner activities.
- Never imply that a simulation guarantees real-world hardware performance.

## Pull request process

1. Fork the repository and create a descriptive branch.
2. Make a focused change with clear filenames and comments where needed.
3. Run the site locally and test the affected pages and interactions.
4. Check browser console errors and verify mobile layout when relevant.
5. Update documentation if the change affects the course structure or setup.
6. Open a pull request describing the problem, solution, files changed and tests performed. Include screenshots for visual changes.

A maintainer may request changes or clarification before merging. Please be respectful in review discussions.

## Commit and pull request style

Use concise messages such as:

- `docs: clarify the diode lesson`
- `content: add worked RC transient example`
- `fix: handle invalid simulator input`
- `project: add ESP32 sensor logger`

## Code of conduct

By participating, you agree to follow [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). Be constructive, patient and respectful. The goal is to help learners succeed.
