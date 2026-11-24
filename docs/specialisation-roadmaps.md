# ECE Specialisation Roadmaps

These roadmaps help learners move from shared electronics fundamentals into a focused engineering discipline. They are guidance, not guarantees of employment or a substitute for a university syllabus. Tool versions, hiring requirements and prerequisites vary; check current official documentation before installing software or purchasing hardware.

## How to use a roadmap

1. Complete the relevant foundations in [the main syllabus](electronics-syllabus.md).
2. Choose one pathway for a first 6–10 week learning sprint.
3. Build the small projects in order. Do not skip measurement, verification or documentation.
4. Keep a portfolio repository with schematics, source code, test evidence and a short explanation of design decisions.
5. Revisit mathematics and fundamentals whenever a project exposes a gap.

A useful weekly rhythm is: concept study, worked problems, simulation, implementation, review and documentation. Adjust the pace to your available time and access to lab equipment.

---

## 1. Embedded systems and firmware

**What the field involves:** Firmware that reads inputs, controls hardware and communicates reliably under timing, memory and power constraints.

**Prerequisites:** Basic circuits, digital logic, C programming and binary arithmetic.

**Learning sequence**
1. C fundamentals: types, operators, functions, arrays, pointers, structures and bitwise operations.
2. Microcontroller architecture: CPU, flash, SRAM, GPIO, clocks, timers and interrupts.
3. Peripheral interfaces: UART, I²C, SPI, ADC, PWM and GPIO.
4. Firmware structure: state machines, modular drivers, error handling and watchdogs.
5. Debugging: serial logs, multimeter, oscilloscope, logic analyser and debugger basics.
6. RTOS concepts: tasks, queues, semaphores, scheduling and timing.
7. Connectivity and low-power design: Wi-Fi/BLE basics, sleep modes and power budgeting.

**Suggested tools:** Arduino IDE for first experiments; PlatformIO or vendor SDKs for structured projects; ESP-IDF for ESP32; STM32CubeIDE for STM32; Git for version control.

**Portfolio projects**
- Beginner: debounced button, LED patterns and PWM dimmer.
- Intermediate: sensor logger using I²C with timestamped serial output.
- Advanced: multi-task environmental monitor with a documented communication protocol, watchdog recovery and measured power consumption.

**Evidence to publish:** board and toolchain versions, pin map, wiring diagram, build instructions, serial output, test cases and known limitations.

**Common pitfalls:** using blocking delays in time-sensitive code, assuming an ADC is perfectly linear, ignoring pull-ups on open-drain buses, exceeding GPIO current limits and failing to handle sensor errors.

## 2. VLSI, RTL design and verification

**What the field involves:** Describing, verifying and implementing digital hardware, from small logic blocks to integrated circuits.

**Prerequisites:** Boolean algebra, combinational/sequential logic, number systems and basic digital timing.

**Learning sequence**
1. CMOS inverter, logic levels, noise margins and switching behaviour.
2. Verilog or SystemVerilog: modules, ports, data types, operators and always blocks.
3. Combinational logic and synthesizable coding style.
4. Sequential logic: registers, counters, finite-state machines and reset strategies.
5. Testbenches: stimulus, expected results, assertions and waveform inspection.
6. Timing: clock period, setup time, hold time, latency and clock-domain crossing concepts.
7. Synthesis and implementation: constraints, mapping, area, timing and power trade-offs.
8. Verification methodology: coverage, reusable testbenches and debugging.

**Suggested tools:** Icarus Verilog and GTKWave for accessible simulation; Verilator for fast linting/simulation; Yosys and OpenROAD for open-source synthesis and physical-design exploration; vendor FPGA tools when using a supported board.

**Portfolio projects**
- Beginner: half-adder, full-adder and multiplexer with testbenches.
- Intermediate: UART transmitter or SPI controller with self-checking tests.
- Advanced: small pipelined datapath or bus-connected peripheral with timing notes and verification evidence.

**Evidence to publish:** RTL source, testbench, simulator command, waveform screenshot, pass/fail log, constraints and a short design explanation.

**Common pitfalls:** confusing simulation success with synthesizability, incomplete sensitivity/assignment behaviour, incorrect reset assumptions and testing only the expected path.

## 3. DSP and digital communication

**What the field involves:** Representing, analysing and transforming sampled signals, then transmitting information through noisy channels.

**Prerequisites:** Algebra, trigonometry, complex numbers, calculus basics, circuit fundamentals and introductory programming.

**Learning sequence**
1. Signal descriptions: amplitude, phase, frequency, energy and power.
2. Sampling: sampling frequency, Nyquist criterion, aliasing and quantisation.
3. Discrete-time systems: impulse response, convolution, LTI properties and difference equations.
4. Frequency analysis: Fourier series/transform, DFT, FFT, spectral leakage and windowing.
5. Digital filters: FIR/IIR, frequency response, stability and implementation effects.
6. Communication chain: source bits, mapping, modulation, channel, synchronisation and detection.
7. Performance: SNR, (E_b/N_0), BER, bandwidth and constellation diagrams.
8. Implementation: fixed-point formats, quantisation noise, overflow and computational cost.

**Suggested tools:** Python with NumPy, SciPy and Matplotlib; MATLAB/Simulink where available; GNU Radio for software-defined radio experiments.

**Portfolio projects**
- Beginner: sample and reconstruct a sine wave; demonstrate aliasing.
- Intermediate: compare FIR and IIR filters on a noisy signal.
- Advanced: BPSK/QPSK link simulation over AWGN, with theoretical and simulated BER curves and a reproducible random seed.

**Evidence to publish:** equations, parameter table, code, plots, interpretation and limitations. Label simulation assumptions clearly.

**Common pitfalls:** mixing Hz and rad/s, confusing bit energy with symbol energy, using an incorrect noise variance, overlooking filter delay and drawing conclusions from too few Monte Carlo bits.

## 4. RF, antennas and wireless systems

**What the field involves:** Generating, guiding, radiating and measuring electromagnetic signals.

**Prerequisites:** AC circuit analysis, complex numbers, phasors, waves and introductory electromagnetics.

**Learning sequence**
1. Transmission-line concepts: characteristic impedance, reflection coefficient, VSWR and return loss.
2. S-parameters: meaning of S11 and S21, reference impedance and calibration awareness.
3. Antenna fundamentals: radiation pattern, gain, directivity, efficiency, polarisation and bandwidth.
4. Resonance and impedance matching: quarter-wave transformers and simple matching networks.
5. RF measurements: spectrum analyser, VNA, calibration and measurement uncertainty.
6. Wireless link basics: path loss, received power, noise figure and link budget.
7. System context: cellular, Wi-Fi, satellite, radar and software-defined radio.

**Suggested tools:** open-source electromagnetic and circuit tools where suitable, MATLAB/Python for analysis, GNU Radio for SDR, and a VNA only when safe access and supervision are available.

**Portfolio projects**
- Beginner: calculate wavelength, quarter-wave length and free-space path loss for stated assumptions.
- Intermediate: simulate a simple matching network and plot input impedance.
- Advanced: document an antenna or RF experiment with geometry, substrate/material assumptions, S11, radiation-pattern method and measurement uncertainty.

**Evidence to publish:** geometry, frequency range, boundary/material assumptions, calibration method, plots with units and a clear distinction between simulated and measured results.

**Common pitfalls:** treating S11 as a complete measure of antenna performance, ignoring cable/connector losses, comparing measurements with different reference planes and claiming bandwidth without stating the criterion.

## 5. PCB design and hardware engineering

**What the field involves:** Translating a circuit into a manufacturable board and verifying that the assembled hardware behaves as intended.

**Prerequisites:** Circuit analysis, component datasheets, basic soldering knowledge and schematic literacy.

**Learning sequence**
1. Requirements and block diagrams.
2. Schematic capture, symbols, footprints and net labels.
3. Component selection: voltage/current ratings, tolerances, package and availability.
4. PCB placement, return paths, grounding and decoupling.
5. Trace width, copper weight, clearances and design-rule checks.
6. Gerber, drill files, BOM and assembly drawings.
7. Bring-up: visual inspection, continuity, current-limited power-up and staged testing.
8. Revision control: issue tracking, board revisions and test records.

**Suggested tools:** KiCad, manufacturer datasheets, a multimeter and (when available) an oscilloscope and current-limited bench supply.

**Portfolio projects**
- Beginner: simple LED driver or connector breakout.
- Intermediate: regulated low-voltage sensor board with programming/debug header.
- Advanced: microcontroller sensor board with power budget, protection, test points and a documented bring-up plan.

**Evidence to publish:** schematic PDF, board renders, fabrication outputs, BOM with manufacturer part numbers, design-rule-check result, assembly notes and measured test results.

**Common pitfalls:** choosing footprints by appearance alone, omitting decoupling capacitors, forgetting mounting/connector clearances, routing without a return-path plan and powering an uninspected board at full current.

## 6. Power electronics and motor control

**What the field involves:** Efficiently converting and controlling electrical energy using switching devices, magnetics, control and protection.

**Prerequisites:** Circuit analysis, semiconductor devices, PWM and basic control concepts.

**Learning sequence**
1. Power, energy, efficiency and thermal concepts.
2. Diodes, MOSFETs, gate drivers and switching losses.
3. Rectifiers and DC-link concepts.
4. Buck, boost and buck-boost converter operation.
5. Inductor/capacitor ripple and component stress.
6. Feedback control and loop stability at an introductory level.
7. Motor fundamentals, H-bridges and PWM control.
8. Battery protection and BMS concepts.

**Suggested tools:** LTspice/ngspice, MATLAB/Simulink where available and low-voltage educational motor-driver boards.

**Portfolio projects**
- Beginner: calculate and simulate a buck converter.
- Intermediate: low-voltage PWM motor-speed controller with current and temperature checks.
- Advanced: compare converter simulation with low-voltage measured results and discuss efficiency and thermal limits.

**Safety boundary:** Begin with low-voltage, current-limited simulations and supervised lab work. Do not build mains-connected converters, high-voltage inverters or high-current battery systems as unsupervised beginner projects.

## Turning a pathway into a portfolio

For each project, publish:
- Problem statement and measurable requirements.
- Block diagram and design choices.
- Hardware/software versions and dependencies.
- Schematic, source code and reproducible setup steps.
- Test plan, actual results and evidence.
- Known limitations, safety notes and future improvements.

A small, well-tested project with honest documentation is more useful than a large project that cannot be reproduced.
