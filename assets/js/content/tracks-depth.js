/* Extra depth for each branch page: prerequisites, outcomes, a day in the
   life, interview topics, standard textbooks and free resources. */
(function () {
  const more = {
    foundations: {
      prereq: "None. Basic school maths (multiplication and division) is enough.",
      outcomes: ["Explain voltage, current, resistance and power, and use V = IR and P = VI", "Read resistor colour codes and choose LED resistors", "Analyse series, parallel and voltage-divider circuits with Kirchhoff's laws", "Read a simple schematic and build it on a breadboard", "Measure voltage, current and resistance safely with a multimeter"],
      day: "Foundations isn't a job by itself — it's the language every electronics engineer speaks all day. A test engineer checks voltages on a board, a firmware engineer works out a pull-up resistor, a chip designer reasons about current in a transistor: all of them use exactly these ideas.",
      interview: ["Ohm's law and power calculations", "Series vs parallel resistors and capacitors", "Voltage divider design", "What a capacitor does at DC and at high frequency", "Why an LED needs a resistor", "How to measure current with a multimeter"],
      books: ["Practical Electronics for Inventors — Paul Scherz & Simon Monk", "Electronic Devices and Circuit Theory — Robert Boylestad & Louis Nashelsky", "The Art of Electronics — Paul Horowitz & Winfield Hill (reference)"],
      online: ["All About Circuits — free online electronics textbook", "Falstad Circuit Simulator — runs in the browser", "Tinkercad Circuits — virtual breadboard and Arduino"],
    },
    analog: {
      prereq: "Foundations branch. Comfort with graphs and logarithms helps for decibels.",
      outcomes: ["Explain PN junctions, BJTs and MOSFETs and use them as switches", "Design a simple linear power supply and estimate its ripple", "Bias a common-emitter amplifier and measure its gain and bandwidth", "Design op-amp amplifiers and RC filters for a given gain or cut-off", "Explain how oscillators start and what sets their frequency"],
      day: "An analog hardware engineer might start the morning simulating a sensor amplifier in LTspice, spend the afternoon at the bench with an oscilloscope finding why a prototype is noisy, and end the day reviewing a PCB layout to keep sensitive traces away from a switching regulator.",
      interview: ["BJT operating regions and biasing", "MOSFET as a switch: threshold voltage, RDS(on)", "Op-amp golden rules; inverting and non-inverting gain", "RC filter cut-off frequency; first-order roll-off", "Rectifier ripple and regulator dissipation", "Negative vs positive feedback", "Gain-bandwidth product"],
      books: ["Microelectronic Circuits — Adel Sedra & Kenneth Smith", "Fundamentals of Microelectronics — Behzad Razavi", "Integrated Electronics — Jacob Millman & Christos Halkias"],
      online: ["NPTEL courses on analog electronic circuits (free video lectures from IITs)", "LTspice or ngspice for simulating every circuit you study", "Razavi's lecture videos on analog circuit design (free online)"],
    },
    digital: {
      prereq: "Foundations branch. No programming needed to start.",
      outcomes: ["Convert between binary, decimal and hexadecimal", "Design combinational circuits from truth tables and simplify them", "Explain flip-flops, counters and shift registers", "Draw and implement a finite state machine", "Choose between an ADC type, a memory type, an FPGA and a microcontroller for a job"],
      day: "A digital or FPGA engineer writes Verilog for a block — say, a data interface for a radar — simulates it, synthesises it for an FPGA, then uses a logic analyser or an on-chip debugger to find why one bit is arriving a clock cycle late.",
      interview: ["Boolean algebra and K-maps", "Universal gates", "Half and full adders", "Latch vs flip-flop; setup and hold", "Counter and FSM design (sequence detectors)", "Moore vs Mealy", "SRAM vs DRAM vs Flash", "FPGA vs microcontroller vs ASIC"],
      books: ["Digital Design — M. Morris Mano & Michael Ciletti", "Digital Fundamentals — Thomas Floyd", "Digital Design and Computer Architecture — David Harris & Sarah Harris"],
      online: ["HDLBits — hundreds of small Verilog exercises, checked automatically", "Nand2Tetris — build a computer from NAND gates, free course", "EDA Playground — simulate Verilog in the browser"],
    },
    embedded: {
      prereq: "Foundations and Digital (first module). Basic C programming helps a lot — learn it alongside.",
      outcomes: ["Write Arduino programs that read sensors and drive outputs", "Use PWM, the ADC, interrupts and timers correctly", "Manipulate hardware registers with bit operations", "Connect devices over UART, I²C and SPI", "Choose between Arduino, ESP32, Pico and Raspberry Pi, and build Wi-Fi projects"],
      day: "An embedded engineer might write a driver for a new sensor in C in the morning, debug a timing bug with a logic analyser after lunch, and join a meeting with hardware engineers about a board revision. Much of the job is reading datasheets carefully.",
      interview: ["volatile, const and bit manipulation in C", "Interrupts vs polling; what an ISR must not do", "UART vs I²C vs SPI", "Pull-up resistors and debouncing", "ADC resolution and sampling", "Stack vs heap; memory on small MCUs", "RTOS tasks, priorities, mutexes and semaphores", "How to debug firmware without a debugger"],
      books: ["Making Embedded Systems — Elecia White", "The AVR Microcontroller and Embedded Systems — Muhammad Ali Mazidi et al.", "Embedded Systems: Introduction to ARM Cortex-M Microcontrollers — Jonathan Valvano", "The C Programming Language — Kernighan & Ritchie"],
      online: ["Official Arduino and Espressif (ESP-IDF) documentation", "FreeRTOS documentation and tutorials", "Wokwi — simulate Arduino, ESP32 and Pico in the browser"],
    },
    vlsi: {
      prereq: "Digital Electronics branch (both modules). Some device physics from Analog helps for CMOS.",
      outcomes: ["Explain CMOS logic and why it uses little static power", "Describe the full chip design flow from specification to tape-out", "Write synthesizable Verilog following industry RTL rules", "Calculate maximum clock frequency from setup, hold and path delays", "Write self-checking testbenches and explain constrained-random verification and UVM"],
      day: "A design verification engineer writes SystemVerilog tests and coverage for a block, runs thousands of regressions overnight on a compute farm, and spends the next morning debugging waveforms of the few that failed — deciding whether the bug is in the design or the test.",
      interview: ["Blocking vs non-blocking assignments", "Latch inference and how to avoid it", "Setup/hold time, slack and maximum frequency", "Clock domain crossing and synchronisers", "FSM coding styles", "CMOS inverter operation and power", "Synthesis, STA, DRC and LVS in the flow", "Verification basics: coverage, assertions, UVM components"],
      books: ["Verilog HDL — Samir Palnitkar", "CMOS VLSI Design — Neil Weste & David Harris", "SystemVerilog for Verification — Chris Spear & Greg Tumbush", "Digital Integrated Circuits — Jan Rabaey"],
      online: ["HDLBits — Verilog practice", "ChipVerify — free SystemVerilog and UVM tutorials", "Tiny Tapeout and the open-source OpenLane flow — get a real chip made", "NPTEL courses on VLSI design"],
    },
    communication: {
      prereq: "Foundations and Analog. Comfort with sine waves, logarithms and basic probability.",
      outcomes: ["Work in dB and dBm and calculate SNR and Shannon capacity", "Explain AM, FM and the superheterodyne receiver", "Apply the sampling theorem and calculate PCM bit rates", "Compare ASK, FSK, PSK and QAM and read a constellation diagram", "Do a radio link budget, and compare wireless standards, satellites and radar"],
      day: "An RF or wireless engineer might run a link-budget and coverage simulation in the morning, measure a prototype's transmit spectrum and sensitivity on a spectrum analyser in the afternoon, and tune a filter or antenna match until it passes the standard's limits.",
      interview: ["Nyquist sampling and aliasing", "dB, dBm and link budget", "AM vs FM bandwidth and noise", "BPSK/QPSK/QAM and bit error rate", "Shannon capacity", "OFDM and why modern systems use it", "Antenna gain and path loss", "Radar range and Doppler"],
      books: ["Communication Systems — Simon Haykin", "Modern Digital and Analog Communication Systems — B. P. Lathi & Zhi Ding", "Digital Communications — John Proakis (advanced)", "Signals and Systems — Alan Oppenheim & Alan Willsky"],
      online: ["PySDR — a free, practical guide to wireless and software-defined radio in Python", "GNU Radio tutorials", "NPTEL courses on communication systems and digital communication"],
    },
    power: {
      prereq: "Foundations and Analog (Semiconductors). PWM from the Embedded branch helps.",
      outcomes: ["Explain why switching converters beat linear regulators", "Calculate buck and boost output voltages from the duty cycle", "Describe how inverters and motor drives work", "Explain the parts of an EV powertrain and a solar system", "Handle high-energy circuits safely"],
      day: "A power electronics engineer might calculate inductor and capacitor values for a converter, simulate the control loop, then test a prototype at full load — measuring efficiency, temperature and switching waveforms, and checking it stays stable when the load suddenly changes.",
      interview: ["Buck, boost and buck-boost equations", "Inductor ripple current and choosing L", "Conduction vs switching losses in MOSFETs", "Why a flyback diode is needed", "PWM and sinusoidal PWM", "BLDC vs induction vs PMSM motors", "Battery management systems", "MPPT in solar"],
      books: ["Power Electronics: Converters, Applications and Design — Ned Mohan, Tore Undeland & William Robbins", "Power Electronics — Muhammad H. Rashid", "Fundamentals of Power Electronics — Robert Erickson & Dragan Maksimović"],
      online: ["Semiconductor manufacturers' free application notes and training (TI, Infineon, ST)", "NPTEL courses on power electronics", "LTspice with manufacturers' regulator models"],
    },
    careers: {
      prereq: "None — useful at any stage, and worth re-reading before internships.",
      outcomes: ["Describe how a product goes from idea to mass production", "Explain the PCB design and assembly process", "Name the tests and certifications electronics must pass", "Map the main electronics careers and the skills each needs", "Plan your own four-year roadmap"],
      day: "In a product team, you'll work with people from hardware, firmware, mechanical, test, supply chain and quality. Engineers who understand each other's work make better decisions and are the ones who get promoted.",
      interview: ["Tell me about a project you built — what went wrong and how you fixed it", "How would you test this product?", "Walk me through your PCB (if you designed one)", "Why this role and this company?", "Core fundamentals for your chosen branch"],
      books: ["The Art of Electronics — Horowitz & Hill (for practical design wisdom)", "Printed Circuit Board Designer's Reference — Chris Robertson"],
      online: ["KiCad — free PCB design software and its getting-started guide", "GATE official website for syllabus and past papers", "NPTEL — free IIT courses with optional certificates"],
    },
  };
  window.TRACKS.forEach((t) => Object.assign(t, more[t.id] || {}));
})();
