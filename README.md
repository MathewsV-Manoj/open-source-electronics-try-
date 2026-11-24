# OpenCircuit Academy

**A free, open learning path for electronics — from absolute beginner to confident builder.**

[**Start learning →**](https://mathewsv-manoj.github.io/open-source-electronics-try-/) · [**Read the learning syllabus →**](docs/electronics-syllabus.md) · [**Contribute →**](CONTRIBUTING.md)

![OpenCircuit Academy home page](docs/screenshots/home.png)

OpenCircuit Academy helps learners move from *understanding a concept* to *using it in a circuit or project*. It is designed for self-learners, school and college students, makers, and anyone curious about electronics. You do not need prior electronics knowledge to begin.

The learning sequence is deliberate: build foundations first, learn components and circuits, then choose a pathway such as embedded systems, VLSI, communication, analog design or power electronics. Each pathway connects theory with worked examples, interactive experiments, practice and projects.

## Start from zero — or choose a pathway

1. **Start here:** Foundations — charge, voltage, current, resistance, components and basic circuits.
2. **Build core skills:** Analog and Digital Electronics — semiconductors, transistors, amplifiers, logic, sequential circuits and conversion.
3. **Choose a specialisation:** Embedded Systems, VLSI & Chip Design, Communication Systems or Power Electronics.
4. **Build and demonstrate:** Complete practical projects, document your work and explore the Industry & Careers branch.

The detailed [curriculum and suggested study sequence](docs/electronics-syllabus.md) includes prerequisites, learning outcomes, a suggested 24-week pace, project milestones and self-assessment checkpoints. The course is a learning resource, not an accredited qualification or a substitute for supervised laboratory safety training.

## What's inside

The course is organised into **8 learning branches**:

| Branch | What you will learn |
|---|---|
| Foundations | Electricity, components and circuit fundamentals |
| Analog Electronics | Semiconductor devices, amplifiers, filters and oscillators |
| Digital Electronics | Number systems, logic, sequential circuits, ADC/DAC and FPGAs |
| Embedded Systems | Arduino, C/C++, microcontrollers, interfaces and development boards |
| VLSI & Chip Design | CMOS, Verilog, RTL design, verification and physical-design concepts |
| Communication Systems | Signals, modulation, digital communication, wireless, antennas and radar |
| Power Electronics | Converters, inverters, motor drives, batteries and renewable energy |
| Industry & Careers | PCB design, product development, testing, careers and engineering workflows |

The current course catalogue contains 17 modules. The repository also includes lesson recaps, practice material, quizzes, GATE-oriented notes, a searchable glossary and interactive browser-based simulators. Counts can change as community contributions are reviewed; the live course is the source of truth.

![A logic gate simulator inside a lesson](docs/screenshots/simulator.png)

## Learn by doing: projects and experiments

Projects connect the lesson to a practical outcome. The current collection spans:

- **Microcontroller projects:** Arduino, ESP32, Raspberry Pi Pico and Raspberry Pi.
- **VLSI projects:** Verilog designs with testbench-oriented workflows.
- **Simulation projects:** signal processing, modulation and circuit simulation.
- **Lab exercises:** rectifiers, regulators, amplifiers, oscillators, logic ICs and 555 timer circuits.

![The projects page](docs/screenshots/projects.png)

Before building hardware, check component ratings, power limits, wiring and datasheets. Mains-voltage and high-energy experiments must only be performed with qualified supervision and appropriate lab facilities.

## Go deeper: specialisation roadmaps

Once you have the fundamentals, use the pathway guides to plan a focused learning sprint:

| Pathway | Focus |
|---|---|
| [Embedded systems](docs/specialisation-roadmaps.md#1-embedded-systems-and-firmware) | C, microcontrollers, peripherals, RTOS and firmware debugging |
| [VLSI and RTL](docs/specialisation-roadmaps.md#2-vlsi-rtl-design-and-verification) | Verilog, testbenches, timing, synthesis and verification |
| [DSP and communication](docs/specialisation-roadmaps.md#3-dsp-and-digital-communication) | Sampling, FFT, filters, modulation and BER |
| [RF and antennas](docs/specialisation-roadmaps.md#4-rf-antennas-and-wireless-systems) | Transmission lines, S-parameters, antennas and link budgets |
| [PCB and hardware](docs/specialisation-roadmaps.md#5-pcb-design-and-hardware-engineering) | KiCad, component selection, layout, fabrication and bring-up |
| [Power electronics](docs/specialisation-roadmaps.md#6-power-electronics-and-motor-control) | Converters, switching devices, motor control and protection |

These guides include prerequisites, a suggested topic sequence, tools, portfolio projects, evidence to publish and common mistakes.

## Build projects that others can reproduce

A working prototype is only one part of an engineering project. Good documentation should let another learner understand the requirements, identify the parts, reproduce the setup and verify the results.

Use the [Electronics Project Handbook](docs/project-handbook.md) for requirements, block diagrams, BOMs, staged bring-up, test plans, troubleshooting, measurement records, safety checks and a reusable project report template.

## Recommended technical resources

The [Resource Library](docs/resource-library.md) links to official documentation for circuit simulation, embedded development, digital design, DSP, RF, component datasheets, PCB design and Git/GitHub. Prefer datasheets and official tool documentation when checking pinouts, ratings, commands and version-specific behaviour.

## A practical study method

For each topic, follow this loop:

1. **Understand:** Read the explanation and identify the key principle.
2. **Work through:** Reproduce the example and calculate the expected result.
3. **Experiment:** Change one simulator parameter at a time and observe the effect.
4. **Practise:** Attempt questions without looking at the solution first.
5. **Build:** Complete a related mini-project or lab exercise.
6. **Explain:** Write a short note or teach the concept to someone else.

Use the progress indicator to continue where you left off. Progress is stored locally in your browser; clearing browser storage may erase it.

## Quizzes and completion certificate

Module quizzes are intended as self-checks. The current site generates a browser-side completion certificate after the required quiz results are achieved.

**Important:** This is a self-issued record of course completion. It is not an accredited academic credential, professional certification or externally verified assessment. Certificate data is generated in the learner's browser and is not backed by a central verification service.

![Sample certificate](docs/screenshots/certificate.png)

## Open source means you can help shape it

We want learners, educators and makers to improve this resource together. You can contribute by:

- correcting an explanation, formula, diagram or worked solution;
- adding a beginner-friendly lesson with prerequisites and learning outcomes;
- creating a simulator or improving an existing one;
- adding a tested project with a bill of materials, wiring, code and safety notes;
- writing quiz questions with explanations for every answer;
- improving accessibility, mobile usability, documentation or translations.

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. Beginner-friendly starter tasks are welcome. If you are unsure where to begin, open an issue describing the topic or improvement you want to work on.

## Run locally

This is a static site and does not require a build step:

```bash
git clone https://github.com/MathewsV-Manoj/open-source-electronics-try-.git
cd open-source-electronics-try-
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser.

### Where content lives

- Lessons and module quizzes: `assets/js/content/NN-*.js`
- Shared lesson helpers: `assets/js/core.js`
- Interactive simulators: `assets/js/widgets.js`
- Learning branches: `assets/js/content/tracks.js` and `tracks-depth.js`
- Practice questions: `assets/js/content/practice.js`
- Projects: `assets/js/content/projects.js` and `projects-more.js`
- Lesson recaps: `assets/js/content/recaps.js` and `recaps-more.js`
- Curriculum guide: `docs/electronics-syllabus.md`

## Project principles

- **Beginner-first:** define terms before using them; explain the physical intuition before the mathematics.
- **Accurate:** use standard symbols and SI units, show assumptions and check worked answers.
- **Practical:** connect concepts to simulations, measurements, datasheets and projects.
- **Accessible:** keep the core learning experience free and usable on ordinary devices.
- **Collaborative:** welcome constructive contributions and give contributors clear credit.
- **Safe:** flag hazardous experiments and never encourage unsupervised work with dangerous voltages or stored energy.

## Maintainer

Created by **Mathews V Manoj**, Electronics & Communication Engineering student at Muthoot Institute of Technology and Science, Kerala.

- GitHub: [@MathewsV-Manoj](https://github.com/MathewsV-Manoj)
- LinkedIn: [Mathews V Manoj](https://www.linkedin.com/in/mathews-v-manoj)

## Licence

This project is distributed under the MIT License. See [LICENSE](LICENSE). Third-party assets and references retain their respective licences and attribution requirements.
