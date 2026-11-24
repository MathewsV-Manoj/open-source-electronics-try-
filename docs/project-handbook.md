# Electronics Project Handbook

Use this handbook to plan, build, test and document projects in OpenCircuit Academy. It is designed for beginner and intermediate learners. Follow the safety rules of your institution or laboratory and seek qualified supervision whenever the experiment involves hazardous energy, heat, chemicals, moving machinery or uncertain equipment.

## 1. Start with a problem statement

Describe the problem in 2–4 sentences. Avoid starting with a list of components.

A good problem statement identifies:
- the user or situation;
- the input or condition being observed;
- the output or action expected;
- the practical limitation the design must respect.

## 2. Convert the problem into requirements

Write requirements that can be checked. Examples:
- The board shall sample the sensor at 10 samples per second.
- The output shall update within 500 ms after an input change.
- The system shall operate from a regulated 5 V supply.
- The firmware shall report a sensor communication error rather than silently displaying a stale value.

Avoid vague requirements such as "fast", "accurate" or "low power" unless you define how they will be measured.

## 3. Draw the system before building it

Create a block diagram showing:
- power input and regulation;
- sensors and analogue front-end;
- processor or logic;
- communication interfaces;
- output drivers and actuators;
- protection and user interface.

Then create a schematic or wiring diagram. Label signal names, supply rails, connector pin numbers and ground references.

## 4. Prepare a bill of materials

| Field | What to record |
|---|---|
| Reference | Designator such as R1, U1 or J1 |
| Description | Part name and function |
| Value/rating | Resistance, capacitance, voltage, current, package, etc. |
| Manufacturer part number | Exact orderable identifier, if known |
| Quantity | Number required |
| Footprint | PCB package or physical size |
| Source | Datasheet or supplier reference |
| Notes | Substitutes, tolerances and special handling |

Do not select a component based only on its nominal value. Check absolute maximum ratings, operating conditions, thermal limits, pinout and package.

## 5. Build in controlled stages

1. Inspect components and confirm pinouts from datasheets.
2. Check the unpowered circuit for shorts and reversed polarity.
3. Verify the power supply independently.
4. Power the circuit using a current-limited supply where available.
5. Measure supply rails before connecting sensitive components.
6. Test one subsystem at a time.
7. Record actual measurements and compare them with predictions.
8. Add the next subsystem only after the previous stage passes.

For microcontrollers, first confirm the board powers up and can run a minimal test program. Then test each sensor or peripheral independently before integrating the complete application.

## 6. Write a test plan

A test should include an initial condition, action, expected result and observed result.

| Test ID | Initial condition | Action | Expected result | Observed result | Status |
|---|---|---|---|---|---|
| T-01 | Regulated supply disconnected | Inspect polarity and continuity | No unintended short; polarity correct | Record measurement | Pass/Fail |
| T-02 | Board powered from current-limited supply | Measure each rail | Within stated tolerance | Record voltage | Pass/Fail |
| T-03 | Sensor connected | Read known or controlled input | Value within stated tolerance | Record value | Pass/Fail |
| T-04 | Communication link active | Send known test message | Correct data received | Record output | Pass/Fail |

Do not write "tested successfully" without saying what was tested and what result was observed.

## 7. Troubleshoot systematically

Use the symptom to narrow the search. Change one variable at a time.

| Symptom | Checks to perform |
|---|---|
| Board does not power up | Supply polarity, cable, current limit, shorts and regulator output |
| Microcontroller is not detected | USB cable data support, driver, boot mode, port selection and board settings |
| Sensor returns no data | Supply voltage, common ground, address, pull-ups, wiring and library configuration |
| Readings are unstable | Sensor warm-up, sampling interval, grounding, noise, calibration and filtering |
| Output device does not switch | Driver topology, gate/base resistor, flyback protection, load current and supply |
| PCB heats unexpectedly | Power off; inspect shorts, wrong footprints, reversed parts and component ratings |
| Simulation differs from hardware | Model assumptions, parasitics, tolerance, loading, measurement setup and wiring |

## 8. Document software reproducibly

Include:
- target board and exact variant;
- compiler/IDE and version;
- required libraries and versions;
- build and upload commands;
- configuration values and pin mapping;
- sample input and expected output;
- known bugs and limitations.

Never include passwords, API keys, Wi-Fi credentials or private tokens in a public repository. Use an example configuration file with placeholder values.

## 9. Document measurements honestly

For every measurement, record:
- instrument and relevant settings;
- probe location and reference point;
- test conditions and supply voltage;
- number of samples or repetitions;
- units, resolution and uncertainty where known;
- whether the result is simulated, calculated or measured.

A graph should include axis labels, units, a descriptive title and enough context to reproduce it. Do not present simulated values as physical measurements.

## 10. Safety checklist

Before energising a project:
- [ ] Supply voltage and polarity are verified.
- [ ] Expected current is estimated.
- [ ] Component voltage, current and power ratings are checked.
- [ ] Capacitor polarity and voltage ratings are checked.
- [ ] Motor, relay and inductive loads have suitable driver/protection circuits.
- [ ] Exposed conductors and moving parts are controlled.
- [ ] The circuit is disconnected before rewiring.
- [ ] A suitable current limit and safe test area are used.

Do not work on mains voltage, high-voltage supplies, large energy-storage capacitors or high-current battery packs without qualified supervision, appropriate isolation and protective equipment.

## 11. Reusable project report template

Copy this structure into your project's README:

```markdown
# Project title

## 1. Overview
What problem does this project solve?

## 2. Requirements
List measurable functional and performance requirements.

## 3. System architecture
Add a block diagram and explain each subsystem.

## 4. Bill of materials
List parts, ratings, quantities and datasheet links.

## 5. Circuit and implementation
Add schematic, wiring diagram, pin map and PCB files if applicable.

## 6. Software
Explain dependencies, setup, build and run instructions.

## 7. Working principle
Explain the engineering concepts and important equations.

## 8. Testing and results
Add test cases, measured results, plots and photographs.
Clearly label simulated, calculated and measured data.

## 9. Troubleshooting
List observed problems and verified fixes.

## 10. Safety
State supply limits, hazards and precautions.

## 11. Limitations and future work
Be explicit about what is not yet implemented or validated.

## 12. References and licence
Cite datasheets, documentation and third-party assets.
```

## 12. Definition of done

A project is ready to share when another learner can understand its purpose, identify the required parts, reproduce the setup, run the code or simulation, verify the expected result and understand the limitations without asking the original author for missing essentials.
