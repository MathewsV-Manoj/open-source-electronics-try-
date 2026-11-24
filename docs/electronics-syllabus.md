# OpenCircuit Academy — Electronics Learning Syllabus

A structured, self-paced curriculum for progressing from no prior electronics knowledge to the ability to analyse, simulate and build introductory-to-intermediate electronics systems.

> **Scope note:** This is an independent learning roadmap, not an official university, KTU, GATE, certification-body or industry syllabus. It is designed around widely taught electronics and ECE fundamentals. Always check the current official syllabus for a specific examination or course.

## Who this is for

- Absolute beginners who have not studied electronics before.
- School and diploma learners preparing for engineering study.
- ECE/EEE students who want to strengthen fundamentals.
- Makers who want to connect theory, simulation and hardware.
- Learners exploring embedded systems, VLSI, communication, analog or power electronics.

## How to use the syllabus

Follow the recommended order if you are a beginner. If you already know a topic, take the relevant quiz or solve practice problems and move forward only when you can explain the concept and solve basic problems independently.

For every module:
1. Read the lesson and note unfamiliar terms.
2. Re-derive important equations and solve the worked examples.
3. Use the simulator or software exercise where available.
4. Attempt practice questions without viewing the solution.
5. Complete a mini-project or practical observation.
6. Record mistakes and revisit them after a few days.

## Stage 0 — Mathematical and scientific readiness

**Goal:** Become comfortable with the tools used to describe electrical systems.

Topics:
- SI units, prefixes, scientific notation and significant figures.
- Rearranging equations, ratios, percentages and proportionality.
- Basic algebra, powers, roots and logarithms.
- Coordinate graphs, slope and simple trigonometry.
- Introductory vectors and complex numbers before AC analysis.
- Scientific calculator use and dimensional checking.

**You should be able to:** convert mA to A, kΩ to Ω, calculate powers of ten, rearrange a formula and check whether an answer has the correct unit.

## Stage 1 — Foundations of electricity and circuits

**Goal:** Understand what voltage, current and resistance mean physically.

Topics:
- Charge, atoms, electrons, conductors, insulators and semiconductors.
- Voltage, current, resistance and electrical power.
- Ohm's law and power equations.
- Series and parallel resistors.
- Kirchhoff's Current Law (KCL) and Voltage Law (KVL).
- Sources, ground, open circuits and short circuits.
- Capacitors and inductors: introductory behaviour.
- Reading circuit diagrams and using a multimeter safely.

**Practical checkpoint:** Build and measure a low-voltage LED-resistor circuit. Predict the current before measuring it.

**Mastery check:** Explain the difference between voltage and current; solve a basic series/parallel network; identify unsafe component values.

## Stage 2 — Components and semiconductor fundamentals

**Goal:** Recognise common components and understand how semiconductor devices control current.

Topics:
- Resistors, potentiometers, capacitors and inductors.
- Switches, relays, fuses and connectors.
- Diodes, LED characteristics and rectification.
- PN junction, depletion region and biasing.
- Zener diode and voltage regulation.
- Bipolar junction transistors (BJT).
- MOSFET operation and switching.
- Datasheets, ratings, tolerances and package markings.

**Practical checkpoint:** Simulate a diode rectifier and a transistor switch; compare predicted and simulated behaviour.

## Stage 3 — Analog electronics

**Goal:** Analyse circuits that process continuously varying signals.

Topics:
- DC operating point and basic biasing.
- BJT and MOSFET amplifier fundamentals.
- Common-emitter and common-source stages.
- Operational amplifier ideal assumptions and limitations.
- Inverting, non-inverting and summing amplifiers.
- Comparators and basic instrumentation amplifiers.
- RC/RL circuits and transient response.
- Low-pass, high-pass and band-pass filters.
- Oscillators and feedback fundamentals.
- Power-supply blocks and ripple.

**Practical checkpoint:** Design and simulate a low-voltage sensor signal-conditioning stage. State the supply, input range and expected output range.

## Stage 4 — Digital electronics

**Goal:** Move from binary information to functional digital systems.

Topics:
- Binary, decimal, octal and hexadecimal number systems.
- Signed numbers and binary arithmetic.
- Boolean algebra and logic simplification.
- AND, OR, NOT, NAND, NOR, XOR and XNOR gates.
- Combinational circuits: adders, multiplexers, decoders and encoders.
- Latches, flip-flops and registers.
- Counters and finite-state machines.
- Memory basics.
- ADC and DAC fundamentals.
- Timing, propagation delay and logic families.
- Introductory Verilog/VHDL and FPGA workflow.

**Practical checkpoint:** Design a counter or traffic-light controller and verify its state transitions.

## Stage 5 — Embedded systems and microcontrollers

**Goal:** Interface software with real-world sensors and actuators.

Topics:
- Microcontroller architecture: CPU, memory, GPIO and timers.
- C/C++ foundations for embedded programming.
- Digital input/output and PWM.
- ADC sampling and sensor interfacing.
- Interrupts and debouncing.
- UART, I²C and SPI.
- Timers, watchdogs and basic real-time concepts.
- Arduino and ESP32 workflows.
- Raspberry Pi and embedded Linux introduction.
- Debugging, serial logs, power budgeting and firmware structure.

**Practical checkpoint:** Build a sensor-monitoring system that samples a sensor, filters or averages readings, and displays or transmits the result.

## Stage 6 — Signals and communication systems

**Goal:** Understand how information is represented, processed and transmitted.

Topics:
- Continuous-time and discrete-time signals.
- Amplitude, frequency, phase and time period.
- Sine waves, phase difference and superposition.
- Sampling theorem and aliasing.
- Quantisation, PCM and signal-to-quantisation-noise ratio.
- Noise, bandwidth and signal-to-noise ratio.
- AM and FM fundamentals.
- Digital modulation: ASK, FSK, PSK, BPSK, QPSK and QAM.
- Bit error rate and introductory channel coding.
- Antenna basics, radiation patterns and link budget.
- Wireless systems and an overview of cellular generations.

**Practical checkpoint:** Simulate a simple digital modulation chain and plot a signal or constellation. Explain how noise affects the received signal.

## Stage 7 — VLSI and chip design

**Goal:** Understand how digital logic becomes an integrated circuit.

Topics:
- MOSFET and CMOS inverter fundamentals.
- Combinational and sequential RTL design.
- Verilog modules, testbenches and simulation.
- Finite-state-machine design.
- Timing constraints and setup/hold concepts.
- Functional verification and debugging.
- Synthesis and technology mapping.
- Floorplanning, placement, clock-tree and routing concepts.
- Power, performance and area (PPA) trade-offs.
- Introduction to open-source EDA tools.

**Practical checkpoint:** Write and simulate a small RTL block with a testbench and document expected versus observed waveforms.

## Stage 8 — Power electronics

**Goal:** Understand how electronic converters control electrical energy.

Topics:
- Power semiconductor devices and switching concepts.
- Rectifiers and DC power supplies.
- Buck, boost and buck-boost converters.
- Inverters and PWM.
- Gate driving and switching losses.
- Inductor and capacitor selection fundamentals.
- Motor-drive concepts.
- Battery basics and battery-management systems.
- Solar photovoltaic system blocks.
- Efficiency, thermal design and protection.

**Practical checkpoint:** Simulate a low-voltage DC-DC converter and compare input power, output power and ideal versus non-ideal efficiency.

## Stage 9 — Engineering practice, PCB design and careers

**Goal:** Turn a working circuit into a documented, testable engineering prototype.

Topics:
- Requirements and block diagrams.
- Component selection from datasheets.
- Schematic capture and PCB layout fundamentals.
- Grounding, decoupling, trace width and design-rule checks.
- BOM preparation and revision control.
- Prototype bring-up and systematic debugging.
- Measurement equipment: multimeter, oscilloscope and logic analyser.
- Design documentation, test plans and reproducibility.
- Git, GitHub and collaborative engineering.
- Portfolio building, technical communication and career pathways.

**Capstone checkpoint:** Build or simulate a complete small system, publish its schematic/code, list the BOM, document test results and explain limitations.

## Suggested 24-week study plan

This is a pacing suggestion, not a promise of mastery. A learner studying 5–7 focused hours per week may need longer depending on maths background and practical access.

| Weeks | Focus | Evidence of learning |
|---|---|---|
| 1–2 | Maths readiness and electrical foundations | Solve Ohm's law, power and basic network problems |
| 3–4 | Components and semiconductor basics | Explain and simulate diode and transistor circuits |
| 5–7 | Analog electronics | Analyse an amplifier and filter |
| 8–9 | Digital fundamentals | Design logic and sequential circuits |
| 10–12 | Embedded systems | Interface a sensor and actuator |
| 13–15 | Signals and communication | Plot sampled signals and simulate modulation |
| 16–18 | VLSI and RTL | Simulate a small Verilog design |
| 19–20 | Power electronics | Analyse a converter simulation |
| 21–22 | PCB and engineering practice | Produce a schematic, BOM and test plan |
| 23–24 | Capstone and revision | Demonstrate, document and review a complete project |

## Assessment and progression

Use these checkpoints to decide whether to move on:

- **Explain:** Describe the concept in your own words without copying a definition.
- **Calculate:** Solve a new numerical problem and show units and assumptions.
- **Predict:** State what should happen before running a simulation.
- **Verify:** Compare the prediction with simulation or measurement and explain differences.
- **Build:** Complete a small task and document what worked, what failed and why.
- **Teach:** Explain the concept to a beginner or write a clear contribution for the course.

A quiz score is useful feedback, but it is not proof of practical competence. For hardware topics, combine quizzes with calculations, simulation and supervised hands-on work.

## Recommended free tools

- Circuit simulation: Falstad Circuit Simulator, LTspice and ngspice.
- Embedded development: Arduino IDE and PlatformIO.
- Firmware and debugging: vendor IDEs and serial monitor tools.
- Digital design: Icarus Verilog, GTKWave and supported FPGA toolchains.
- PCB design: KiCad.
- Numerical and signal work: Python with NumPy/Matplotlib or MATLAB where available.
- Collaboration: Git and GitHub.

Check each tool's current licence, platform support and installation requirements before use.

## Safety

- Begin with battery-powered, current-limited, low-voltage circuits.
- Disconnect power before changing wiring.
- Check polarity, current ratings, resistor power ratings and capacitor voltage ratings.
- Never connect a microcontroller GPIO directly to a load that exceeds its pin limits.
- Do not experiment with mains voltage, high-voltage supplies, large capacitors or high-current battery packs without qualified supervision, suitable isolation and appropriate protective equipment.
- A simulator does not replace safe laboratory practice.

## Contributing to the syllabus

Help make the roadmap more useful by opening an issue or pull request. Good contributions include clearer explanations, corrected calculations, diagrams with appropriate licences, practice questions with worked solutions, accessible translations and practical projects with verified parts lists and safety notes.

See [CONTRIBUTING.md](../CONTRIBUTING.md) for the contribution workflow.
