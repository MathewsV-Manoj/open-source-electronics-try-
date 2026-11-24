# Electronics Resource Library

This page is a starting point for finding trustworthy documentation and tools. Prefer official documentation, datasheets, standards-body material and university teaching resources. Some tools have commercial editions, hardware requirements or regional availability; check current terms before use.

## Circuit theory and simulation

- [Falstad Circuit Simulator](https://falstad.com/circuit/) — browser-based interactive circuit experiments.
- [LTspice](https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html) — SPICE simulation for analogue and power circuits.
- [ngspice](https://ngspice.sourceforge.io/) — open-source SPICE simulator.
- [KiCad Documentation](https://docs.kicad.org/) — schematic capture, PCB layout and fabrication outputs.

**Suggested practice:** simulate an LED-resistor circuit, diode rectifier, RC filter and transistor switch. Calculate the expected result before running the simulator.

## Embedded systems and microcontrollers

- [Arduino Documentation](https://docs.arduino.cc/) — boards, language reference and tutorials.
- [Espressif ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/) — official ESP32 development framework documentation.
- [Raspberry Pi Documentation](https://www.raspberrypi.com/documentation/) — Raspberry Pi hardware and software guides.
- [PlatformIO Documentation](https://docs.platformio.org/) — embedded development workflow and supported platforms.
- [Zephyr Project Documentation](https://docs.zephyrproject.org/) — RTOS concepts and supported boards.

**Suggested practice:** build a GPIO project, read one sensor over I²C, transmit data over UART and document the exact board and software versions.

## Digital design and VLSI

- [Icarus Verilog](https://steveicarus.github.io/iverilog/) — Verilog simulation.
- [GTKWave](https://gtkwave.sourceforge.net/) — waveform viewing.
- [Verilator](https://verilator.org/guide/latest/) — Verilog/SystemVerilog linting and simulation.
- [Yosys](https://yosyshq.net/yosys/) — open-source synthesis framework.
- [OpenROAD](https://openroad.readthedocs.io/) — open-source RTL-to-GDS physical-design flow.
- [AMD Vivado Documentation](https://docs.amd.com/) — FPGA design and implementation documentation.

**Suggested practice:** implement a combinational block, add a self-checking testbench, inspect waveforms and record the simulator command and result.

## Signals, DSP and communications

- [NumPy Documentation](https://numpy.org/doc/) — numerical arrays and transforms.
- [SciPy Signal Processing](https://docs.scipy.org/doc/scipy/reference/signal.html) — filtering and signal-processing functions.
- [Matplotlib Documentation](https://matplotlib.org/stable/) — plots and visualisation.
- [GNU Radio Documentation](https://wiki.gnuradio.org/) — software-defined radio and signal-flow applications.
- [MATLAB Documentation](https://www.mathworks.com/help/) — MATLAB and signal-processing references.

**Suggested practice:** generate a sampled sine wave, demonstrate aliasing, compute an FFT, design a low-pass filter and simulate BPSK over an AWGN channel.

## Component datasheets and application notes

- [Texas Instruments](https://www.ti.com/) — product datasheets, application notes and reference designs.
- [Analog Devices](https://www.analog.com/) — analogue, mixed-signal and RF component documentation.
- [STMicroelectronics](https://www.st.com/) — microcontrollers, sensors and power components.
- [NXP Semiconductors](https://www.nxp.com/) — microcontrollers, processors and connectivity.
- [Microchip Technology](https://www.microchip.com/) — microcontrollers and embedded peripherals.
- [Espressif](https://www.espressif.com/) — ESP32 family documentation and hardware references.
- [Bosch Sensortec](https://www.bosch-sensortec.com/) — environmental and inertial sensor documentation.

**Datasheet reading checklist:** identify the exact part number and package; absolute maximum ratings; recommended operating conditions; pin functions; electrical characteristics; timing; thermal data; and typical application circuit. Absolute maximum ratings are stress limits, not normal operating targets.

## RF, antennas and measurement

- [Keysight Technical Support and Learning](https://www.keysight.com/) — measurement and RF application resources.
- [Rohde & Schwarz Knowledge+](https://www.rohde-schwarz.com/) — RF, wireless and test measurement learning material.
- [GNU Radio](https://www.gnuradio.org/) — SDR experimentation.
- [ARRL](https://www.arrl.org/) — amateur-radio learning and practical RF context.

**Suggested practice:** calculate wavelength and free-space path loss, interpret a simple S11 plot and explain the difference between return loss, gain and radiation efficiency.

## Engineering workflow and collaboration

- [Git Documentation](https://git-scm.com/doc) — version control fundamentals.
- [GitHub Docs](https://docs.github.com/) — repositories, issues, pull requests and collaboration.
- [Markdown Guide](https://www.markdownguide.org/) — writing readable project documentation.

**Suggested practice:** create a repository, write a reproducible README, track a bug as an issue and submit a focused pull request.

## How to evaluate a learning resource

Before recommending a link or using it in a lesson, check:
1. Is the publisher identifiable and technically credible?
2. Is the content current for the stated hardware/software version?
3. Does it explain assumptions, units and limitations?
4. Is the material legally reusable, or should it only be linked and cited?
5. Does it suit the learner's prerequisites?

OpenCircuit Academy should link to third-party material rather than copy proprietary lessons, diagrams, code or book chapters. Respect the licence and attribution terms of every external resource.
