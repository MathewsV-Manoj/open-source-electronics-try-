/* Worked practice problems for every lesson: { q, a } with step-by-step answers. */
window.PRACTICE = {
  "basics/atoms": [
    { q: "How many electrons make up a charge of 1 coulomb?", a: "Each electron carries 1.6 × 10⁻¹⁹ C. Number = 1 ÷ (1.6 × 10⁻¹⁹) = <b>6.25 × 10¹⁸ electrons</b>." },
    { q: "A current of 2 A flows for 5 seconds. How much charge passes, and how many electrons is that?", a: "Q = I × t = 2 × 5 = <b>10 C</b>. Electrons = 10 × 6.25 × 10¹⁸ = <b>6.25 × 10¹⁹</b>." },
  ],
  "basics/vir": [
    { q: "3 C of charge passes a point in 1.5 s. What is the current?", a: "I = Q ÷ t = 3 ÷ 1.5 = <b>2 A</b>." },
    { q: "In a circuit, the voltage is doubled while the resistance stays the same. What happens to the current? And if instead the resistance doubles?", a: "Current is proportional to voltage, so doubling V <b>doubles</b> I. Current is inversely proportional to resistance, so doubling R <b>halves</b> I." },
  ],
  "basics/ohm": [
    { q: "5 V is applied across a 250 Ω resistor. Find the current and the power it dissipates.", a: "I = V ÷ R = 5 ÷ 250 = <b>20 mA</b>. P = V × I = 5 × 0.02 = <b>0.1 W</b> — a ¼ W resistor is fine." },
    { q: "A kettle is rated 1000 W at 230 V. What current does it draw, and what is its element's resistance?", a: "I = P ÷ V = 1000 ÷ 230 ≈ <b>4.35 A</b>. R = V² ÷ P = 230² ÷ 1000 = 52 900 ÷ 1000 ≈ <b>52.9 Ω</b>." },
  ],
  "basics/acdc": [
    { q: "Indian mains is 230 V RMS. What is its peak voltage?", a: "V<sub>peak</sub> = V<sub>RMS</sub> × √2 = 230 × 1.414 ≈ <b>325 V</b>. That's why mains is so dangerous." },
    { q: "Mains frequency is 50 Hz. What is its period, and how many times per second does the current change direction?", a: "T = 1 ÷ 50 = <b>20 ms</b>. It reverses twice per cycle, so <b>100 times per second</b>." },
  ],
  "components/resistors": [
    { q: "What is the value and range of a resistor banded Red–Red–Orange–Gold?", a: "Red = 2, Red = 2, Orange = ×1000 → 22 000 Ω = <b>22 kΩ</b>. Gold = ±5%, so it can be anywhere from <b>20.9 kΩ to 23.1 kΩ</b>." },
    { q: "Which colour bands mark a 4.7 kΩ resistor?", a: "4.7 kΩ = 4700 = 47 × 100 → <b>Yellow (4), Violet (7), Red (×100)</b>, then the tolerance band." },
  ],
  "components/capacitors": [
    { q: "A 470 µF capacitor is charged to 12 V. How much charge and energy does it store?", a: "Q = C × V = 470 × 10⁻⁶ × 12 = <b>5.64 mC</b>. Energy = ½CV² = 0.5 × 470 × 10⁻⁶ × 144 ≈ <b>33.8 mJ</b>." },
    { q: "A 10 µF capacitor charges from 5 V through 47 kΩ. Find τ, the voltage after one τ, and the time to be nearly full.", a: "τ = RC = 47 000 × 10 × 10⁻⁶ = <b>0.47 s</b>. After 1τ: 63% of 5 V ≈ <b>3.16 V</b>. Nearly full after 5τ ≈ <b>2.35 s</b>." },
  ],
  "components/inductors": [
    { q: "What is the reactance of a 10 mH inductor at 1 kHz? And at DC?", a: "X<sub>L</sub> = 2πfL = 2π × 1000 × 0.01 ≈ <b>62.8 Ω</b>. At DC, f = 0 so X<sub>L</sub> = <b>0 Ω</b> — just a wire." },
    { q: "What is the reactance of a 1 µF capacitor at 50 Hz and at 5 kHz?", a: "X<sub>C</sub> = 1 ÷ (2πfC). At 50 Hz: 1 ÷ (2π × 50 × 10⁻⁶) ≈ <b>3183 Ω</b>. At 5 kHz it's 100× smaller: <b>31.8 Ω</b>. Capacitors pass high frequencies." },
  ],
  "components/diodes": [
    { q: "A white LED (V<sub>f</sub> = 3.2 V) should run at 20 mA from 9 V. Choose the resistor.", a: "R = (9 − 3.2) ÷ 0.02 = <b>290 Ω</b>. Round <i>up</i> to the E12 value <b>330 Ω</b>: actual current = 5.8 ÷ 330 ≈ 17.6 mA — safe and bright." },
    { q: "A silicon diode and a 1 kΩ resistor are in series across 5 V, diode forward-biased. What current flows? What if the diode is reversed?", a: "Forward: I = (5 − 0.7) ÷ 1000 = <b>4.3 mA</b>. Reversed: the diode blocks, so current is <b>practically zero</b> (a few nA of leakage)." },
  ],
  "components/tools": [
    { q: "You want to measure the current through an LED. Where does the multimeter go, and which socket do you use?", a: "Break the circuit and put the meter <b>in series</b> with the LED, so the current flows through it. Move the red lead to the <b>mA</b> socket and set the dial to mA. Move it back afterwards, or your next voltage reading will short the circuit." },
    { q: "A voltmeter reads 3 V across a 1 kΩ resistor. What current flows through it?", a: "Use Ohm's law: I = 3 ÷ 1000 = <b>3 mA</b>. Measuring voltage across a known resistor is a handy way to find current without breaking the circuit." },
  ],
  "circuits/series-parallel": [
    { q: "100 Ω, 220 Ω and 330 Ω are in series across 9 V. Find the current and the voltage across the 330 Ω.", a: "R<sub>total</sub> = 650 Ω. I = 9 ÷ 650 ≈ <b>13.8 mA</b>. V<sub>330</sub> = 0.0138 × 330 ≈ <b>4.57 V</b>." },
    { q: "6 kΩ and 3 kΩ are in parallel across 12 V. Find the total resistance and each branch current.", a: "R = (6 × 3) ÷ (6 + 3) = <b>2 kΩ</b>. Total I = 12 ÷ 2000 = 6 mA. Branches: 12 ÷ 6k = <b>2 mA</b> and 12 ÷ 3k = <b>4 mA</b> (they add to 6 mA — KCL)." },
  ],
  "circuits/divider": [
    { q: "Design a divider that turns 5 V into about 3.3 V, with R2 = 20 kΩ.", a: "V<sub>out</sub> = V<sub>in</sub> × R2 ÷ (R1 + R2) → R1 = R2 × (V<sub>in</sub>/V<sub>out</sub> − 1) = 20k × (5/3.3 − 1) ≈ 10.3 kΩ. Use <b>R1 = 10 kΩ</b>: V<sub>out</sub> = 5 × 20/30 = <b>3.33 V</b>." },
    { q: "A 10 kΩ / 10 kΩ divider from 10 V gives 5 V. What happens if you connect a 10 kΩ load to the output?", a: "The load is in parallel with R2: 10k ∥ 10k = 5 kΩ. Now V<sub>out</sub> = 10 × 5 ÷ (10 + 5) ≈ <b>3.33 V</b>. The load 'pulls down' the output — that's why dividers are for signals, not for powering things." },
  ],
  "circuits/kirchhoff": [
    { q: "10 mA flows into a node. One wire leaves carrying 4 mA. How much leaves through the other wire?", a: "KCL: in = out → 10 = 4 + I → <b>I = 6 mA</b>." },
    { q: "A 9 V battery drives a 1 kΩ resistor, a 2 kΩ resistor and a red LED (2 V) in series. Find the current and the voltage across the 2 kΩ.", a: "KVL: 9 = I × 1k + I × 2k + 2 → I = 7 ÷ 3000 ≈ <b>2.33 mA</b>. V<sub>2k</sub> = 2.33 mA × 2 kΩ ≈ <b>4.67 V</b>. Check: 2.33 + 4.67 + 2 = 9 ✓." },
  ],
  "circuits/schematics": [
    { q: "On a schematic, two wires cross with no dot, and elsewhere two wires meet in a T with a dot. Which are connected?", a: "The <b>T-junction with a dot is connected</b>. Wires that simply cross without a dot are <b>not</b> connected." },
    { q: "A battery drives two resistors in series. How many electrical nodes does the circuit have?", a: "<b>3 nodes</b>: the battery's + terminal and top of R1; the junction between R1 and R2; and the bottom of R2 with the battery's − (ground)." },
  ],
  "semiconductors/semis": [
    { q: "Arsenic has 5 outer electrons. Adding it to silicon makes which type of semiconductor?", a: "The fifth electron is left free, so it's <b>N-type</b> (like phosphorus)." },
    { q: "Two silicon diodes are in series, forward-biased, with a 1 kΩ resistor across 5 V. What current flows?", a: "Each diode drops about 0.7 V: I = (5 − 1.4) ÷ 1000 = <b>3.6 mA</b>." },
  ],
  "semiconductors/bjt": [
    { q: "A transistor (β = 150) must switch a 300 mA load fully on from a 5 V Arduino pin. Choose the base resistor.", a: "Minimum I<sub>B</sub> = 300 ÷ 150 = 2 mA. Drive it about 3× harder to ensure saturation: 6 mA. R<sub>B</sub> = (5 − 0.7) ÷ 0.006 ≈ 717 Ω → use <b>680 Ω</b>. (6 mA is within the pin's 20 mA limit.)" },
    { q: "I<sub>B</sub> = 50 µA, β = 200, R<sub>C</sub> = 1 kΩ, V<sub>CC</sub> = 12 V. Find I<sub>C</sub> and V<sub>CE</sub>. Is the transistor in the active region?", a: "I<sub>C</sub> = 200 × 50 µA = <b>10 mA</b>. V<sub>CE</sub> = 12 − 10 mA × 1 kΩ = <b>2 V</b>. Since V<sub>CE</sub> > 0.2 V, it's in the <b>active region</b>." },
  ],
  "semiconductors/mosfet": [
    { q: "A MOSFET with R<sub>DS(on)</sub> = 20 mΩ carries 5 A. How much power does it dissipate?", a: "P = I² × R = 25 × 0.02 = <b>0.5 W</b>. Compare that with a BJT dropping 0.2 V: 0.2 × 5 = 1 W." },
    { q: "Can a 3.3 V ESP32 pin fully switch on a standard MOSFET rated 'R<sub>DS(on)</sub> at V<sub>GS</sub> = 10 V'?", a: "<b>No.</b> Its threshold may be 2–4 V, and it's only fully on near 10 V. At 3.3 V it would be half-on and overheat. Use a <b>logic-level</b> MOSFET specified at V<sub>GS</sub> = 2.5–4.5 V, or a gate driver." },
  ],
  "semiconductors/opamp": [
    { q: "A non-inverting amplifier has R<sub>f</sub> = 47 kΩ and R<sub>1</sub> = 4.7 kΩ. What's the output for a 0.2 V input?", a: "Gain = 1 + 47/4.7 = <b>11</b>. V<sub>out</sub> = 11 × 0.2 = <b>2.2 V</b>." },
    { q: "An inverting amplifier (R<sub>1</sub> = 2 kΩ, R<sub>f</sub> = 10 kΩ) on ±5 V supplies gets 1.5 V in. What comes out?", a: "Ideal: −10/2 × 1.5 = −7.5 V. But the output can't go beyond its supply rails, so it <b>saturates</b> at roughly <b>−4 V</b> (a little inside −5 V). Always check the answer fits the supply." },
  ],
  "digital/binary": [
    { q: "Convert 200 (decimal) to binary and hexadecimal.", a: "200 = 128 + 64 + 8 → <b>1100 1000</b>. Split into nibbles: 1100 = C, 1000 = 8 → <b>0xC8</b>." },
    { q: "What decimal number is 0x3F? And what's the largest unsigned 16-bit number?", a: "0x3F = 3 × 16 + 15 = <b>63</b>. 16 bits: 2¹⁶ − 1 = <b>65 535</b>." },
  ],
  "digital/gates": [
    { q: "How do you make a NOT gate from a single 2-input NAND?", a: "Tie both inputs together: Y = (A · A)̅ = <b>A̅</b>. That's one reason NAND is 'universal'." },
    { q: "Evaluate Y = (A + B) · C for A = 0, B = 1, C = 1, and for A = 0, B = 0, C = 1.", a: "First: (0 + 1) · 1 = <b>1</b>. Second: (0 + 0) · 1 = <b>0</b>." },
  ],
  "digital/combinational": [
    { q: "Add 0111 + 0101 in binary. Is there a carry out of 4 bits?", a: "7 + 5 = 12 = <b>1100</b>. 12 fits in 4 bits (max 15), so there's <b>no carry out</b>." },
    { q: "How many select lines does an 8-to-1 multiplexer need? How many outputs does a 3-to-8 decoder have?", a: "2³ = 8, so a MUX needs <b>3 select lines</b>. A 3-to-8 decoder has <b>8 outputs</b>, exactly one active at a time." },
  ],
  "digital/sequential": [
    { q: "What is the clock period of a 16 MHz Arduino?", a: "T = 1 ÷ 16 × 10⁶ = <b>62.5 ns</b>." },
    { q: "How many flip-flops does a 4-bit register need, and how many states can a 4-bit counter have?", a: "<b>4 flip-flops</b> — one per bit. A 4-bit counter has 2⁴ = <b>16 states</b> (0 to 15)." },
  ],
  "arduino/mcu": [
    { q: "Why does a washing machine use a microcontroller rather than a laptop-style processor?", a: "It needs to do one job <b>reliably</b>, start <b>instantly</b>, use very <b>little power</b> and cost only a <b>few rupees</b>. An MCU has everything on one chip; a laptop CPU needs separate memory, an OS and far more power." },
    { q: "At 16 MHz, roughly how many single-cycle instructions can an Uno execute in 1 millisecond?", a: "16 × 10⁶ cycles/s × 0.001 s = <b>16 000</b> instructions (most AVR instructions take 1 cycle)." },
  ],
  "arduino/board": [
    { q: "Can one Uno pin drive three LEDs in parallel at 15 mA each?", a: "3 × 15 = <b>45 mA</b> — above the 20 mA recommended and the 40 mA absolute maximum. <b>No.</b> Use separate pins, or switch them with a transistor." },
    { q: "Which Uno pins support analogWrite() (PWM)?", a: "The pins marked ~: <b>3, 5, 6, 9, 10 and 11</b>." },
  ],
  "arduino/blink": [
    { q: "With delay(250) after HIGH and delay(750) after LOW, what's the blink frequency and duty cycle?", a: "One cycle = 250 + 750 = 1000 ms → <b>1 Hz</b>. On for 250 of 1000 ms → <b>25% duty</b>." },
    { q: "Write loop() so the LED blinks 3 times quickly, then pauses for 2 seconds.", a: `Use a for loop:${H.code("void loop() {\n  for (int i = 0; i < 3; i++) {\n    digitalWrite(13, HIGH); delay(150);\n    digitalWrite(13, LOW);  delay(150);\n  }\n  delay(2000);\n}")}` },
  ],
  "arduino/input": [
    { q: "With INPUT_PULLUP, your button reads HIGH all the time, even when pressed. What's the most likely wiring mistake?", a: "The button must connect the pin to <b>GND</b>. If it's wired to 5 V, pressing it changes nothing — the pin is already pulled HIGH." },
    { q: "Write code that toggles an LED on each button press (not while held).", a: `Detect the <b>change</b> from HIGH to LOW, and debounce:${H.code("bool last = HIGH, led = false;\n\nvoid loop() {\n  bool now = digitalRead(2);\n  if (last == HIGH && now == LOW) {   // just pressed\n    led = !led;\n    digitalWrite(13, led);\n    delay(50);                        // simple debounce\n  }\n  last = now;\n}")}` },
  ],
  "arduino/analog": [
    { q: "analogRead() returns 614. What voltage is on the pin (5 V reference)?", a: "V = 614 × 5 ÷ 1023 ≈ <b>3.0 V</b>." },
    { q: "An LM35 temperature sensor outputs 10 mV per °C. analogRead() gives 62. What's the temperature?", a: "V = 62 × 5 ÷ 1023 ≈ 0.303 V = 303 mV → 303 ÷ 10 ≈ <b>30.3 °C</b>. (Resolution is about 0.5 °C per step — use the 1.1 V internal reference for better precision.)" },
  ],
  "arduino/pwm": [
    { q: "What duty cycle and average voltage does analogWrite(9, 191) give?", a: "191 ÷ 255 ≈ <b>75%</b>. Average = 0.75 × 5 ≈ <b>3.75 V</b>." },
    { q: "You want an LED to fade from off to full brightness in about 1 second using 256 steps. What delay per step?", a: "1000 ms ÷ 256 ≈ <b>4 ms</b> per step (use delay(4))." },
  ],
  "arduino/serial": [
    { q: "How long does it take to send \"Hello\\n\" (6 bytes) at 9600 baud?", a: "Each byte is 10 bits on the wire (start + 8 data + stop): 60 bits ÷ 9600 ≈ <b>6.25 ms</b>." },
    { q: "The Serial Monitor shows random garbage characters. What's the usual cause?", a: "A <b>baud-rate mismatch</b>: Serial.begin() and the monitor's dropdown must match (e.g. both 9600)." },
  ],
  "embedded/what": [
    { q: "Which constraints matter most for a pacemaker, and which for a smart TV remote?", a: "Pacemaker: <b>reliability, safety and years of battery life</b>. Remote: <b>cost and battery life</b>; occasional delays don't matter." },
    { q: "An airbag controller must react within 30 ms, but its main loop takes 50 ms because of delay() calls. What's wrong, and how do you fix it?", a: "A crash could be detected up to 50 ms late — <b>missing the deadline</b>. Remove blocking delays and use <b>interrupts</b> (or a fast, prioritised RTOS task) for the crash sensor." },
  ],
  "embedded/registers": [
    { q: "PORTB = 0b00100100. What is it after PORTB |= (1 << 1), and then after PORTB &= ~(1 << 5)?", a: "Set bit 1: <b>0b00100110</b>. Clear bit 5: <b>0b00000110</b>." },
    { q: "Write a condition that is true when bit 3 of PINB is HIGH.", a: `${H.code("if (PINB & (1 << 3)) {\n  // bit 3 is HIGH\n}")} The AND keeps only bit 3; any non-zero result is true.` },
  ],
  "embedded/interrupts": [
    { q: "Why must a variable shared between an ISR and loop() be declared volatile?", a: "Without it, the compiler may keep the variable in a register and never re-read memory, so loop() <b>never sees</b> the ISR's change. volatile forces a fresh read every time." },
    { q: "millis() is an unsigned long that wraps back to 0 after about 49.7 days. Does <code>if (millis() - last >= 500)</code> still work across the wrap?", a: "<b>Yes.</b> Unsigned subtraction wraps too, so the difference stays correct. (Writing <code>millis() >= last + 500</code> would break at the wrap.)" },
  ],
  "embedded/protocols": [
    { q: "How many addresses does 7-bit I²C allow, and why are only about 112 usable?", a: "2⁷ = <b>128</b> addresses. Some are <b>reserved</b> (for general call, 10-bit addressing and future use), leaving about 112 for devices." },
    { q: "An SPI bus has three devices. How many signal wires are needed?", a: "Shared MOSI, MISO and SCK (3) plus one CS per device (3) = <b>6 wires</b>, plus ground." },
  ],
  "embedded/beyond": [
    { q: "A sensor node sleeps at 10 µA and wakes every 10 s for 50 ms at 20 mA. Estimate its average current and life on a 1000 mAh battery.", a: "Awake fraction = 0.05 ÷ 10 = 0.005. Average ≈ 20 × 0.005 + 0.01 = <b>0.11 mA</b>. Life ≈ 1000 ÷ 0.11 ≈ 9000 h ≈ <b>1 year</b>." },
    { q: "A drone must read its IMU every 1 ms, update the display every 100 ms and send telemetry every 1 s. Why use an RTOS?", a: "With an RTOS, each job is a <b>task with its own priority</b>. The IMU task preempts the others and always meets its 1 ms deadline, even if the display or radio code is slow." },
  ],
  "vlsi/intro": [
    { q: "The Intel 4004 (1971) had 2300 transistors. If the count doubled every 2 years for 50 years, how many would we have?", a: "50 years = 25 doublings: 2300 × 2²⁵ ≈ 2300 × 33.5 million ≈ <b>77 billion</b> — close to today's largest chips." },
    { q: "Is a '3 nm' transistor really 3 nm wide?", a: "<b>No.</b> Node names are now labels for a technology generation. The actual feature sizes (like gate pitch) are larger, but density keeps improving." },
  ],
  "vlsi/cmos": [
    { q: "A chip has α = 0.1, switched capacitance C = 1 nF, V = 1 V and f = 1 GHz. What's the dynamic power? What if V drops to 0.5 V?", a: "P = α C V² f = 0.1 × 10⁻⁹ × 1 × 10⁹ = <b>0.1 W</b>. At 0.5 V: V² is ¼, so <b>0.025 W</b>. That's why lowering voltage is so effective." },
    { q: "How many transistors does a CMOS inverter, a 2-input NAND and a 2-input AND need?", a: "Inverter: <b>2</b>. NAND: <b>4</b>. AND = NAND + inverter: <b>6</b>. That's why designers prefer NAND/NOR logic." },
  ],
  "vlsi/flow": [
    { q: "Put these in order: synthesis, RTL design, tape-out, verification, place & route, specification.", a: "<b>Specification → RTL design → verification → synthesis → place & route → tape-out</b> (with sign-off checks before tape-out)." },
    { q: "Why do companies spend more effort on verification than on design?", a: "A bug found after fabrication means a <b>respin</b>: new masks costing crores and months of delay, or chips recalled from products. Finding it in simulation is vastly cheaper." },
  ],
  "vlsi/verilog": [
    { q: "Write a 2-to-1 multiplexer in one line of Verilog.", a: `${H.code("assign y = sel ? b : a;   // sel = 1 → b, sel = 0 → a", "verilog")}` },
    { q: "In the 4-bit counter, what happens on the clock edge after count = 15?", a: "15 + 1 = 16 = 10000 in binary, but only 4 bits are stored, so it <b>wraps to 0</b>." },
  ],
  "boards/choose": [
    { q: "Pick a board for: (a) a camera doorbell with face detection, (b) a battery soil sensor sending data over Wi-Fi.", a: "(a) <b>Raspberry Pi</b> — camera and computer vision need Linux and lots of RAM. (b) <b>ESP32</b> — Wi-Fi plus deep sleep for long battery life." },
    { q: "A sensor outputs 0–5 V, but your ESP32 pin accepts only 3.3 V. Design a simple fix.", a: "Use a voltage divider: R1 = 10 kΩ on top, R2 = 20 kΩ to ground. 5 V → 5 × 20/30 = <b>3.33 V</b> at the pin." },
  ],
  "boards/esp32": [
    { q: "The ESP32's 12-bit ADC (3.3 V range) reads 2048. What's the voltage?", a: "2048 ÷ 4095 × 3.3 ≈ <b>1.65 V</b>. (The ESP32 ADC is a little non-linear near the ends; calibrate it for accurate work.)" },
    { q: "Network A shows RSSI −67 dBm, network B −80 dBm. Which is stronger, and by how much?", a: "−67 is higher, so <b>A is stronger</b> by 13 dB — about <b>20×</b> the power (10 dB = 10×, 3 dB ≈ 2×)." },
  ],
  "boards/webserver": [
    { q: "Your phone can't open the ESP32's page. List three things to check.", a: "1) The phone is on the <b>same Wi-Fi network</b>. 2) You typed the exact <b>IP address</b> from the Serial Monitor. 3) The network is <b>2.4 GHz</b> and loop() keeps calling handleClient()." },
    { q: "Add a /status route that returns the LED state as JSON.", a: `${H.code('server.on("/status", []() {\n  server.send(200, "application/json",\n              ledOn ? "{\\"led\\":true}" : "{\\"led\\":false}");\n});')}` },
  ],
  "boards/pico": [
    { q: "On a Pico, adc.read_u16() returns 32768. What's the voltage?", a: "32768 ÷ 65535 × 3.3 ≈ <b>1.65 V</b>." },
    { q: "What value gives 25% duty with pwm.duty_u16()?", a: "0.25 × 65535 ≈ <b>16384</b>." },
  ],
  "boards/raspi": [
    { q: "Why can't a Raspberry Pi read a potentiometer directly, and what's the fix?", a: "The Pi has <b>no ADC</b> — its pins are digital only. Add an ADC chip such as the <b>MCP3008</b> (SPI) or ADS1115 (I²C), or pair it with a Pico." },
    { q: "Write gpiozero code to blink an LED on GPIO 17 twice a second.", a: `${H.code("from gpiozero import LED\nfrom signal import pause\n\nled = LED(17)\nled.blink(on_time=0.25, off_time=0.25)\npause()", "python")}` },
  ],
  "analog/psu": [
    { q: "A transformer takes 230 V RMS down to 12 V RMS. What's the turns ratio, and the DC after a bridge rectifier (no load)?", a: "Ratio ≈ 230 ÷ 12 ≈ <b>19 : 1</b>. Peak = 12 × 1.414 ≈ 17 V. After two diode drops: 17 − 1.4 ≈ <b>15.6 V</b>." },
    { q: "A full-wave supply feeds 1 A through a 4700 µF capacitor into a 7805. Estimate the ripple and the 7805's heat.", a: "Ripple ≈ I ÷ (2fC) = 1 ÷ (100 × 0.0047) ≈ <b>2.1 V</b>. Average input ≈ 14.5 V, so P ≈ (14.5 − 5) × 1 ≈ <b>9.5 W</b> — it needs a big heatsink, or a switching regulator." },
  ],
  "analog/amplifiers": [
    { q: "An amplifier turns 10 mV into 2 V. What is its gain in dB?", a: "Gain = 2 ÷ 0.01 = 200. In dB: 20 × log₁₀(200) ≈ <b>46 dB</b>." },
    { q: "Two stages with 20 dB and 26 dB gain are cascaded. What's the total, as a ratio?", a: "dB add: 20 + 26 = <b>46 dB</b>. As ratios: 10 × 20 = <b>200</b>. Same answer, easier in dB." },
  ],
  "analog/filters": [
    { q: "Design an RC low-pass filter with f<sub>c</sub> = 1 kHz using C = 100 nF.", a: "R = 1 ÷ (2π f<sub>c</sub> C) = 1 ÷ (2π × 1000 × 10⁻⁷) ≈ <b>1.59 kΩ</b> → use 1.6 kΩ (E24) or 1.5 kΩ." },
    { q: "For that 1 kHz filter, how big is a 10 kHz signal at the output? And 100 kHz?", a: "20 dB per decade beyond f<sub>c</sub>: 10 kHz is one decade → <b>−20 dB (×0.1)</b>; 100 kHz is two → <b>−40 dB (×0.01)</b>." },
  ],
  "analog/oscillators": [
    { q: "What frequency does an RC phase-shift oscillator with R = 4.7 kΩ and C = 10 nF produce?", a: "f = 1 ÷ (2π R C √6) = 1 ÷ (2π × 4700 × 10⁻⁸ × 2.449) ≈ <b>1.38 kHz</b>." },
    { q: "An LC tank has L = 10 µH and C = 100 pF. What's its resonant frequency?", a: "f = 1 ÷ (2π √(LC)) = 1 ÷ (2π × √(10⁻¹⁵)) = 1 ÷ (2π × 3.16 × 10⁻⁸) ≈ <b>5.03 MHz</b>." },
  ],
  "digital2/counters": [
    { q: "How many flip-flops does a mod-10 (decade) counter need?", a: "It needs 10 states: 2³ = 8 is too few, 2⁴ = 16 is enough, so <b>4 flip-flops</b> (it resets after 9)." },
    { q: "Three 74HC595 shift registers are chained. How many outputs, from how many Arduino pins?", a: "3 × 8 = <b>24 outputs</b> from just <b>3 pins</b> (data, clock, latch)." },
  ],
  "digital2/fsm": [
    { q: "How many flip-flops does an FSM with 5 states need (binary encoding)?", a: "2² = 4 is too few, 2³ = 8 is enough → <b>3 flip-flops</b>." },
    { q: "How many states does a Mealy machine need to detect the sequence 101 (overlapping allowed)?", a: "<b>3 states</b>: 'nothing matched', 'seen 1', 'seen 10'. On input 1 in 'seen 10', output 1 and go to 'seen 1'. (A Moore version needs 4.)" },
  ],
  "digital2/memory": [
    { q: "How many address lines does a 32 KB × 8-bit memory need?", a: "32 KB = 32 768 = 2¹⁵ → <b>15 address lines</b>." },
    { q: "A DRAM has 8192 rows and must refresh all of them every 64 ms. How often is one row refreshed?", a: "64 ms ÷ 8192 ≈ <b>7.8 µs</b> per row." },
  ],
  "digital2/adc-fpga": [
    { q: "What is the step size of a 12-bit ADC with a 3.3 V reference?", a: "3.3 ÷ 4096 ≈ <b>0.806 mV</b> per step." },
    { q: "What's the data rate of 16-bit stereo audio sampled at 48 kHz?", a: "48 000 × 16 bits × 2 channels = <b>1.536 Mbit/s</b>." },
  ],
  "vlsi2/rtl": [
    { q: "Find the bug: <code>always @(*) if (en) y = a;</code>", a: `When en = 0, y isn't assigned, so it must 'remember' → a <b>latch</b> is inferred. Fix:${H.code("always @(*) begin\n  if (en) y = a;\n  else    y = 1'b0;   // every branch assigns y\nend", "verilog")}` },
    { q: "In a clocked block, what's the difference between <code>a &lt;= b; b &lt;= a;</code> and <code>a = b; b = a;</code>?", a: "Non-blocking reads both old values first, so it <b>swaps</b> a and b — two flip-flops exchanging data. Blocking runs in order: a becomes b, then b becomes the <i>new</i> a, so <b>both end up equal to b</b>." },
  ],
  "vlsi2/timing": [
    { q: "t<sub>clk→q</sub> = 0.15 ns, t<sub>logic</sub> = 2.5 ns, t<sub>setup</sub> = 0.1 ns. What's f<sub>max</sub>?", a: "T<sub>min</sub> = 0.15 + 2.5 + 0.1 = 2.75 ns → f<sub>max</sub> = 1 ÷ 2.75 ns ≈ <b>364 MHz</b>." },
    { q: "Pipeline that path by splitting the logic into 1.3 ns and 1.2 ns stages. What's the new f<sub>max</sub>, and what's the cost?", a: "Slowest stage: 0.15 + 1.3 + 0.1 = 1.55 ns → about <b>645 MHz</b>. The cost: one extra clock cycle of <b>latency</b> and some extra flip-flops." },
  ],
  "vlsi2/verification": [
    { q: "How many input combinations must you test to check an adder with two 8-bit inputs exhaustively? Two 32-bit inputs?", a: "8-bit: 2¹⁶ = <b>65 536</b> — easy. 32-bit: 2⁶⁴ ≈ <b>1.8 × 10¹⁹</b> — impossible to run, so industry uses constrained-random tests plus coverage and formal methods." },
    { q: "Your tests pass, but coverage shows the 'FIFO full' condition was never reached. What does that mean?", a: "It's a <b>coverage hole</b>: that behaviour was never exercised, so bugs there are still possible. Add tests (or constraints) that fill the FIFO." },
  ],
  "vlsi2/physical": [
    { q: "Why must the clock tree be balanced?", a: "If the clock reaches flip-flops at different times (<b>skew</b>), data can arrive too late (setup violation) or too early (hold violation). A balanced tree keeps skew tiny." },
    { q: "Classify: TSMC, Cadence, Qualcomm, Texas Instruments.", a: "TSMC — <b>foundry</b>. Cadence — <b>EDA tools</b>. Qualcomm — <b>fabless</b> design. TI — <b>IDM</b> (designs and manufactures)." },
  ],
  "comm/signals": [
    { q: "What is the period and wavelength of a 2.4 GHz Wi-Fi signal?", a: "T = 1 ÷ 2.4 × 10⁹ ≈ <b>0.417 ns</b>. λ = c ÷ f = 3 × 10⁸ ÷ 2.4 × 10⁹ = <b>12.5 cm</b>." },
    { q: "A telephone channel passes 300 Hz to 3400 Hz. What's its bandwidth?", a: "3400 − 300 = <b>3.1 kHz</b>." },
  ],
  "comm/noise": [
    { q: "Convert 20 W to dBm, and −100 dBm to watts.", a: "20 W = 20 000 mW → 10 log₁₀(20 000) ≈ <b>43 dBm</b>. −100 dBm = 10⁻¹⁰ mW = <b>10⁻¹³ W</b> (0.1 picowatt)." },
    { q: "Find the Shannon capacity of a 20 MHz channel with 20 dB SNR.", a: "20 dB = 100. C = 20 × 10⁶ × log₂(101) ≈ 20 × 10⁶ × 6.66 ≈ <b>133 Mbit/s</b>." },
  ],
  "comm/am": [
    { q: "A 1 MHz carrier is AM-modulated by a 5 kHz tone. Where are the sidebands and what's the bandwidth?", a: "Sidebands at <b>995 kHz and 1005 kHz</b>. Bandwidth = 2 × 5 = <b>10 kHz</b>." },
    { q: "Carrier power 100 W, μ = 0.8. Find the total transmitted power and the power in the sidebands.", a: "P<sub>total</sub> = P<sub>c</sub>(1 + μ²/2) = 100 × 1.32 = <b>132 W</b>. Sidebands carry <b>32 W</b> — only 24% of the total carries the message." },
  ],
  "comm/fm-radio": [
    { q: "FM with Δf = 5 kHz and f<sub>m</sub> = 3 kHz. Estimate the bandwidth.", a: "Carson's rule: 2(Δf + f<sub>m</sub>) = 2 × 8 = <b>16 kHz</b>." },
    { q: "An FM receiver (IF = 10.7 MHz, oscillator above the signal) tunes to 98.3 MHz. What are the oscillator and image frequencies?", a: "LO = 98.3 + 10.7 = <b>109.0 MHz</b>. The image is the same distance above the LO: 98.3 + 2 × 10.7 = <b>119.7 MHz</b> — the RF filter must block it." },
  ],
  "dcomm/sampling": [
    { q: "A 7 kHz tone is sampled at 10 kHz. What frequency appears after reconstruction?", a: "f<sub>s</sub>/2 = 5 kHz, so 7 kHz is too high and aliases to 10 − 7 = <b>3 kHz</b>." },
    { q: "What's the minimum sampling rate for audio up to 15 kHz, and why do real systems sample higher?", a: "Nyquist: <b>30 kHz</b>. Real anti-aliasing filters can't cut off instantly, so a margin is needed (e.g. <b>32 kHz or more</b>)." },
  ],
  "dcomm/pcm": [
    { q: "What's the bit rate of CD audio (44.1 kHz, 16 bit, stereo), and the size of one minute?", a: "44 100 × 16 × 2 = <b>1.411 Mbit/s</b>. × 60 s ≈ 84.7 Mbit ≈ <b>10.6 MB</b>." },
    { q: "An 8-bit quantiser covers −1 V to +1 V. Find the step size and the SQNR.", a: "Step = 2 V ÷ 256 ≈ <b>7.8 mV</b>. SQNR ≈ 6.02 × 8 + 1.76 ≈ <b>49.9 dB</b>." },
  ],
  "dcomm/digital-mod": [
    { q: "A link sends 1 million symbols per second using 64-QAM. What's the bit rate?", a: "64-QAM carries log₂(64) = 6 bits per symbol → <b>6 Mbit/s</b>." },
    { q: "At the same SNR, why does 256-QAM make more errors than QPSK?", a: "With the same average power, 256 points must be packed <b>much closer together</b> than 4, so a smaller amount of noise pushes a symbol past the decision boundary." },
  ],
  "dcomm/coding-mux": [
    { q: "A Hamming (7,4) code sends 4 data bits in 7. What's its code rate, and how many errors can it correct per block?", a: "Rate = 4/7 ≈ <b>0.57</b>. It corrects <b>1 bit error</b> per 7-bit block." },
    { q: "A 270 kbit/s channel is shared by 8 users with TDMA. Roughly what rate does each get?", a: "270 ÷ 8 ≈ <b>33.8 kbit/s</b> each, before overhead such as guard times and control bits." },
  ],
  "wireless/antennas": [
    { q: "How long is a quarter-wave antenna for 433 MHz?", a: "λ = 3 × 10⁸ ÷ 433 × 10⁶ ≈ 0.693 m → λ/4 ≈ <b>17.3 cm</b>." },
    { q: "Compared with a 0 dBi antenna, how much stronger is a 6 dBi antenna in its best direction?", a: "6 dB ≈ <b>4×</b> the power — focused in that direction, taken from others." },
  ],
  "wireless/link-budget": [
    { q: "Find the free-space path loss over 10 km at 900 MHz.", a: "FSPL = 20 log(10) + 20 log(900) + 32.44 = 20 + 59.1 + 32.44 ≈ <b>111.5 dB</b>." },
    { q: "A LoRa link: 14 dBm transmit, 2 dBi antennas at each end, that path loss, and −120 dBm sensitivity. What's the margin?", a: "P<sub>rx</sub> = 14 + 2 + 2 − 111.5 = <b>−93.5 dBm</b>. Margin = −93.5 − (−120) = <b>26.5 dB</b> — plenty of room for walls and trees." },
  ],
  "wireless/standards": [
    { q: "Choose a technology for: a smartwatch, city parking sensors, a home CCTV camera.", a: "Smartwatch: <b>Bluetooth LE</b>. Parking sensors: <b>NB-IoT or LoRaWAN</b>. CCTV: <b>Wi-Fi</b> (it needs high data rates)." },
    { q: "How much more free-space path loss is there at 28 GHz than at 2.8 GHz over the same distance?", a: "10× the frequency → 20 log(10) = <b>20 dB</b> more loss — 100× less power. That's one reason 5G mm-wave needs many small cells." },
  ],
  "wireless/sat-radar": [
    { q: "Estimate the delay for a signal to go up to a GEO satellite and back down.", a: "35 786 km ÷ 300 000 km/s ≈ 0.12 s each way → about <b>0.24 s</b> ground to ground (more if the station isn't directly below)." },
    { q: "A 24 GHz police radar sees a car approaching at 30 m/s. What's the Doppler shift?", a: "f<sub>d</sub> = 2 v f ÷ c = 2 × 30 × 24 × 10⁹ ÷ 3 × 10⁸ = <b>4.8 kHz</b>." },
  ],
  "power/why-switch": [
    { q: "A linear regulator takes 24 V down to 5 V at 2 A. How much power does it waste? What would a 90% efficient buck waste?", a: "Linear: (24 − 5) × 2 = <b>38 W</b> of heat. Buck: output 10 W, input 10 ÷ 0.9 ≈ 11.1 W → loss ≈ <b>1.1 W</b>." },
    { q: "Why does an ideal switch dissipate no power?", a: "P = V × I across the switch. When it's <b>on</b>, V = 0; when it's <b>off</b>, I = 0. Either way P = 0. Real losses come from on-resistance and the brief switching transitions." },
  ],
  "power/buck-boost": [
    { q: "What duty cycle does an ideal buck need to make 3.3 V from 12 V?", a: "D = V<sub>out</sub> ÷ V<sub>in</sub> = 3.3 ÷ 12 ≈ <b>0.275 (27.5%)</b>." },
    { q: "A boost converter makes 5 V from a 3.7 V cell and delivers 1 A. Find D and the (ideal) battery current.", a: "D = 1 − V<sub>in</sub>/V<sub>out</sub> = 1 − 3.7/5 = <b>0.26</b>. Power in = power out: I<sub>in</sub> = 5 × 1 ÷ 3.7 ≈ <b>1.35 A</b>." },
  ],
  "power/inverters-motors": [
    { q: "A 12 V inverter supplies a 500 W load at 90% efficiency. What current does it draw from the battery?", a: "P<sub>in</sub> = 500 ÷ 0.9 ≈ 556 W. I = 556 ÷ 12 ≈ <b>46 A</b> — thick cables needed." },
    { q: "A BLDC fan uses 28 W instead of 75 W, running 10 hours a day. How much energy does it save in a year?", a: "(75 − 28) × 10 × 365 = 171 550 Wh ≈ <b>172 kWh</b> (172 units) per fan per year." },
  ],
  "power/ev-solar": [
    { q: "An EV has a 30 kWh pack and uses 150 Wh/km. Estimate its range, and the charge time on a 7.4 kW charger.", a: "Range ≈ 30 000 ÷ 150 = <b>200 km</b>. Charging ≈ 30 ÷ 7.4 ≈ <b>4 hours</b> (a bit more with losses)." },
    { q: "A 400 W solar panel gets 5 peak-sun hours a day. How much energy does it produce daily?", a: "400 × 5 = <b>2 kWh</b> per day (before inverter and wiring losses)." },
  ],
  "industry/lifecycle": [
    { q: "A product sells 10 000 units. An engineer cuts ₹10 from the bill of materials. What's the saving?", a: "10 × 10 000 = <b>₹1 lakh</b> — and ₹1 crore at a million units. That's why component choices get scrutinised." },
    { q: "Your prototype works on a breadboard. Name three steps before it can be sold.", a: "For example: <b>PCB design and prototype builds</b>, <b>validation and stress testing</b>, <b>certification</b> (BIS, EMC, WPC for radios), then trial production." },
  ],
  "industry/pcb": [
    { q: "Where should a chip's 100 nF decoupling capacitor go on the PCB?", a: "<b>As close as possible to the chip's power pin</b>, with short, direct connections to power and ground. Far away, the track's inductance makes it useless at high frequencies." },
    { q: "Which files does a PCB factory and assembler need?", a: "<b>Gerber files</b> (copper, mask, silkscreen layers), the <b>drill file</b>, the <b>BOM</b> (bill of materials) and a <b>pick-and-place</b> (centroid) file." },
  ],
  "industry/testing": [
    { q: "An outdoor IoT sensor with a radio will be sold in India. Name four tests or approvals it needs.", a: "For example: <b>environmental</b> (heat, cold, humidity, water ingress), <b>EMC</b>, <b>ESD</b>, and <b>WPC</b> approval for the radio (plus BIS if its category requires it)." },
    { q: "Why do defence projects require full traceability of every part?", a: "If a part fails, engineers must find <b>every system containing parts from the same batch</b>, prove how each was tested, and rule out counterfeits. Lives and missions depend on it." },
  ],
  "industry/careers": [
    { q: "Match each skill set to a role: (a) SystemVerilog and UVM, (b) C, RTOS and protocols, (c) link budgets and antennas.", a: "(a) <b>Design verification engineer</b>. (b) <b>Embedded / firmware engineer</b>. (c) <b>RF / wireless engineer</b>." },
    { q: "You're aiming for embedded systems. Suggest three portfolio projects from this site, in increasing difficulty.", a: "For example: the <b>Morse code transmitter</b> (Arduino), the <b>IoT weather dashboard</b> (ESP32), then the <b>MPU6050 attitude indicator</b> with a complementary filter. Put each on GitHub with a write-up." },
  ],
};
