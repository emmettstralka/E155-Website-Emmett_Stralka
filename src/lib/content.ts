export const person = {
  name: "Emmett Stralka",
  short: "ES",
  title: "Embedded Systems & Product Builder",
  thesis: "I design systems that move",
  location: "Claremont, CA",
  graduateSchool: "Georgia Tech",
  graduateDegree: "AI & Robotics",
  school: "Harvey Mudd College",
  degree: "Engineering, Economics",
  designSchool: "Carnegie Mellon University",
  designProgram: "Design",
  designContext: "Design process, 2021",
  email: "estralka@g.hmc.edu",
  linkedin: "https://www.linkedin.com/in/emmett-stralka-b41575213/",
  github: "https://github.com/emmettstralka",
  resume: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume.pdf`,
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/creative", label: "Creative" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
] as const;

export const experience = [
  {
    company: "Soft Goods",
    role: "Controls Engineer",
    dates: "Aug 2025 – Present",
    location: "California",
    summary:
      "Soft-goods polishing automation: algorithms, embedded systems, and force-based dynamic control on a team of seven.",
    points: [
      "Working on a team of 7 focused on soft-goods polishing, manufacturing automation, embedded systems, and force-based dynamic control.",
    ],
  },
  {
    company: "Ford Motor Company",
    role: "Technical Product Manager, AI-ML Intern",
    dates: "May 2025 – Aug 2025",
    location: "Palo Alto, CA",
    summary:
      "Shaped a next-generation vehicle assistant and a $200M platform decision with an in-house SLM prototype.",
    points: [
      "Collaborated with 40+ ML engineers on an in-house demo that informed executive platform decisions on a $200M contract.",
      "Designed and deployed a custom embedded small language model with cloud fallback for Ford’s next-generation Vehicle Assistant, using live CAN bus and structured API calls.",
      "Evaluated agentic architecture with RAG and built routing success metrics in BigQuery.",
    ],
  },
  {
    company: "Trilobio",
    role: "Electrical Engineering Intern",
    dates: "Aug 2024 – Dec 2024",
    location: "San Francisco, CA",
    summary:
      "High-resolution mass sensing through capacitive PCBs, flexure mechanics, and embedded signal integrity.",
    points: [
      "Built an automated mass-sensing prototype combining capacitive sensing, flexure mechanics, and robotic control.",
      "Designed parallel-plate and fringe capacitor PCBs in KiCad for differential capacitance measurement.",
      "Developed viscoelastic damping for polymer fixtures, enabling 0.1 mg measurement resolution.",
      "Integrated 24-bit ADCs, signal conditioning, and RF shielding for noisy lab environments.",
    ],
  },
  {
    company: "Ford Motor Company",
    role: "Data Science Intern",
    dates: "May 2024 – Aug 2024",
    location: "Palo Alto, CA",
    summary:
      "Brought energy-aware routing to E-Transit and coordinated EV pairing across CarPlay and SYNC.",
    points: [
      "Integrated Ford’s protobuf Vehicle Energy Model onto the V363 EV platform for 20,000+ E-Transit vans.",
      "Validated VEM predictions against fleet telemetry in SQL for reliable state of charge.",
      "Architected forward-compatible VEM tuning with hyperparameter optimization across usage patterns.",
      "Coordinated with CarPlay UX and SYNC engineering for 200,000+ electric vehicles.",
    ],
  },
] as const;

export const projects = [
  {
    slug: "invisible-drumset",
    title: "Invisible Drumset",
    kicker: "E155 Capstone",
    subtitle: "Gesture to sound, at hardware speed",
    description:
      "A dual-hand embedded system that turns air gestures into drum hits. BNO085 IMUs, ESP32, FPGA, and STM32: isolated sticks, custom SPI packets, DAC audio.",
    href: "/work/invisible-drumset",
    external: false,
    image: "/images/drumset-product.png",
    alt: "Studio still of dual-stick IMU drum modules",
    tags: ["IMU", "FPGA", "STM32", "SPI"],
  },
  {
    slug: "soft-goods",
    title: "Soft goods polishing",
    kicker: "Manufacturing · Soft goods",
    subtitle: "Automation and robotics, on the line",
    description:
      "Soft-goods polishing automation and robotics: algorithms, embedded systems, and force-based dynamic control on a team of seven.",
    href: "/experience",
    external: false,
    image: "/images/apple-controls-watch-blank.png",
    alt: "Space gray smartwatch with black sport band on a dark studio background, display fully off",
    tags: ["Controls", "Embedded", "Manufacturing"],
  },
  {
    slug: "e155",
    title: "E155 Labs",
    kicker: "Microcontrollers & FPGA",
    subtitle: "From GPIO to a complete embedded system",
    description:
      "A documented sequence of ARM microcontroller, interrupt, FPGA, and hardware/software co-design labs on Nucleo STM32 and UPduino iCE40.",
    href: "/work/e155",
    external: false,
    image: "/images/fpga-board.png",
    alt: "FPGA development board in studio light",
    tags: ["STM32", "SystemVerilog", "IoT"],
  },
  {
    slug: "creative",
    title: "Creative Works",
    kicker: "Creative",
    subtitle: "Packaging, furniture, and the shop",
    description:
      "Making from 2021 to 2026: packaging, furniture, shop work, and the boards that got them there. Studio and shop pieces from the process, not a finished product line.",
    href: "/creative",
    external: false,
    image: "/creative/img-1811-clean.png",
    alt: "Isolated studio still of a glass-top tensegrity coffee table on intersecting wooden arches",
    tags: ["Packaging", "Furniture", "Process"],
  },
  {
    slug: "ford-energy",
    title: "E-Transit Energy Model",
    kicker: "Ford · Data Science",
    subtitle: "State of charge, at fleet scale",
    description:
      "Created and enabled electric routing with battery-% estimates for the E-Transit fleet, so routes reflected real remaining range under actual usage.",
    href: "/experience",
    external: false,
    image: "/images/ford-fleet-routing-alt.png",
    alt: "Night Ford Transit fleet with cyan routing overlays",
    tags: ["EV", "SQL", "Protobuf"],
  },
  {
    slug: "ford-assistant",
    title: "Vehicle Assistant SLM",
    kicker: "Ford · AI-ML",
    subtitle: "On-vehicle language, with cloud fallback",
    description:
      "Designed a custom embedded small language model for Ford’s next-generation Vehicle Assistant, using live CAN bus context and structured API calls to inform a $200M platform decision.",
    href: "/experience",
    external: false,
    image: "/images/ford-cabin-v2.png",
    alt: "Night Ford cabin with logo on the steering wheel",
    tags: ["SLM", "CAN", "RAG"],
  },
  {
    slug: "trilobio",
    title: "Capacitive Mass Sensing",
    kicker: "Trilobio",
    subtitle: "0.1 mg through flexure and noise",
    description:
      "An automated mass-sensing prototype combining capacitive PCBs, viscoelastic damping, 24-bit ADCs, and RF shielding for high-resolution measurement in a noisy lab.",
    href: "/experience",
    external: false,
    image: "/images/trilobio-pipette-v2.png",
    alt: "Eight-channel pipette head over a microplate on a precision lab stage",
    tags: ["KiCad", "ADC", "Mechanics"],
  },
  {
    slug: "teampulse",
    title: "TeamPulse",
    kicker: "watchOS · HealthKit",
    subtitle: "Live athlete data, under two seconds",
    description:
      "A team analytics dashboard for tracking and managing team health, with live Watch and HealthKit recovery metrics streamed to the coach view.",
    href: "https://github.com/emmettstralka/TeamPulse",
    external: true,
    image: "/images/teampulse-watch-v2.png",
    alt: "Smartwatch on a dark studio surface showing a live health workout waveform",
    tags: ["Swift", "HealthKit", "WebSocket"],
  },
  {
    slug: "riscv",
    title: "RISC-V Multicyle CPU",
    kicker: "Digital Design",
    subtitle: "A controller, built from the ISA up",
    description:
      "A complete multicycle RISC-V controller and datapath with instruction decode, memory cycles, and control sequencing, from the personal systems portfolio.",
    href: "https://github.com/emmettstralka/Emmett-Stralka-Portfolio/tree/main/RISCV-Complete_MultiCycle_Controller",
    external: true,
    image: "/images/riscv-die.png",
    alt: "Silicon wafer and processor die under a hard studio spotlight",
    tags: ["RISC-V", "Architecture"],
  },
  {
    slug: "robot80",
    title: "E80 robot",
    kicker: "Robotics",
    subtitle: "Navigation and control, on the chassis",
    description:
      "Autonomous navigation and control firmware from the robotics portfolio: sensing, path logic, and closed-loop motion on a custom mobile platform.",
    href: "https://github.com/emmettstralka/Emmett-Stralka-Portfolio/tree/main/Robot80-Autonomous-Main",
    external: true,
    image: "/images/e80-robot.png",
    alt: "Simple student E80 AUV with PVC frame and a few thrusters in a pool",
    tags: ["Controls", "Navigation"],
  },
  {
    slug: "ros2",
    title: "ROS 2 Manipulation",
    kicker: "MoveIt · Gazebo",
    subtitle: "Arms in simulation, then on the bench",
    description:
      "A ROS 2 Humble playground for ROBOTIS OpenMANIPULATOR-X and Franka Panda MoveIt demos, with Gazebo bring-up on Ubuntu 22.04.",
    href: "https://github.com/emmettstralka/Ros2PlayGround",
    external: true,
    image: "/images/ros2-manipulator.png",
    alt: "Dark six-axis collaborative manipulator with Robotiq gripper on black studio background",
    tags: ["ROS 2", "MoveIt", "Gazebo"],
  },
  {
    slug: "powerball",
    title: "PowerBall ML",
    kicker: "Machine Learning",
    subtitle: "When prediction is the wrong tool",
    description:
      "A TensorFlow and scikit-learn study of lottery prediction, built to show why truly random systems resist models, and what expected value actually means.",
    href: "https://github.com/emmettstralka/Power_Ball_ML_ATTEMPT",
    external: true,
    image: "/images/powerball-ml.png",
    alt: "Matte black lottery spheres in dark studio light",
    tags: ["TensorFlow", "Probability"],
  },
  {
    slug: "facial-recog",
    title: "Eigenfaces",
    kicker: "Linear Algebra · ML",
    subtitle: "Recognition as a change of basis",
    description:
      "Facial recognition from principal components: a linear-algebra treatment of identity in image space, from the systems and ML portfolio.",
    href: "https://github.com/emmettstralka/Emmett-Stralka-Portfolio/tree/main/LinearAlgerba_Facial_Recog.",
    external: true,
    image: "/images/facial-recog.png",
    alt: "Paired monochrome portraits beside a dark glass cube",
    tags: ["PCA", "Python"],
  },
] as const;

export const creative = {
  kicker: "Creative",
  title: "Packaging, furniture, and the mill.",
  origin: "Creative Work · 2021–2026",
  description:
    "Photos of packaging, furniture, CNC and mill work, manufacturing fixtures, custom boards, and shop process from 2021 to 2026.",
} as const;

export type CreativeProminence = "float" | "large";

export type CreativeWork = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  /**
   * Soft visual emphasis inside CSS multi-column masonry.
   * - float: tensegrity set — slight lift + shadow
   * - large: featured furniture/boards — stronger presence, no column-span
   */
  prominence?: CreativeProminence;
};

/**
 * Named top-band captions, in priority order. Anything not listed here is
 * gallery-only and must render in a second masonry block below.
 */
export const CREATIVE_FEATURED_CAPTIONS = [
  "Tensegrity",
  "Tensegrity process",
  "Mark",
  "Breath",
  "Wall panels",
  "Coffee table",
  "Monument",
  "Speaker",
  "Rocket bottle design",
  "House build design",
] as const;

function creativeFeaturedRank(caption: string): number {
  const named = CREATIVE_FEATURED_CAPTIONS.map((c) => c.toLowerCase());
  const idx = named.indexOf(caption.toLowerCase());
  return idx === -1 ? Number.POSITIVE_INFINITY : idx;
}

export function isCreativeFeatured(work: CreativeWork): boolean {
  return Number.isFinite(creativeFeaturedRank(work.caption));
}

/** Featured works sorted by named priority; gallery works keep relative order. */
export function partitionCreativeWorks(works: readonly CreativeWork[]) {
  const featured = works
    .filter(isCreativeFeatured)
    .slice()
    .sort((a, b) => creativeFeaturedRank(a.caption) - creativeFeaturedRank(b.caption));
  const gallery = works.filter((w) => !isCreativeFeatured(w));
  return { featured, gallery };
}

/**
 * Creative gallery works. Featured pieces are listed first; the Creative page
 * also partitions into two sequential masonry blocks so unnamed works cannot
 * appear beside / above the named top band (CSS columns alone cannot guarantee that).
 */
export const creativeWorks: CreativeWork[] = [
  {
    src: "/creative/img-9987-clean.png",
    alt: "Isolated studio still of a plywood tensegrity sculpture: oval base, parabolic arch, circular hoop held by a geometric network of dark tension strings",
    caption: "Tensegrity",
    width: 1024,
    height: 1536,
    prominence: "float",
  },
  {
    src: "/creative/img-9853.jpg",
    alt: "Plywood interlocking elliptical rings stacked on a workbench",
    caption: "Tensegrity process",
    width: 4032,
    height: 3024,
    prominence: "float",
  },
  {
    src: "/creative/img-0347.jpg",
    alt: "Layered wood lightning-bolt mark in front of a blue resin inlay",
    caption: "Mark",
    width: 1842,
    height: 4000,
  },
  {
    src: "/creative/img-0456.jpg",
    alt: "Twisted wire sculpture with white discs rooted in a mossy ceramic dish",
    caption: "Breath",
    width: 4005,
    height: 3396,
  },
  {
    src: "/creative/img-9938-clean.png",
    alt: "Studio still of four black-framed brown textured relief panels in a 2x2 grid",
    caption: "Wall panels",
    width: 1024,
    height: 1536,
    prominence: "large",
  },
  {
    src: "/creative/img-1811-clean.png",
    alt: "isolated studio still of a glass-top table on intersecting wooden arches with tensegrity strings",
    caption: "Coffee table",
    width: 1536,
    height: 1024,
    prominence: "large",
  },
  {
    src: "/creative/img-0353.jpg",
    alt: "C-shaped walnut table with a blue epoxy river inlay on black",
    caption: "Monument",
    width: 4000,
    height: 4000,
    prominence: "large",
  },
  {
    src: "/creative/img-0765.jpg",
    alt: "two-tone wooden speaker with a circular white mesh grille, monstera leaves, studio backdrop",
    caption: "Speaker",
    width: 4986,
    height: 3712,
    prominence: "large",
  },
  {
    src: "/creative/rocket-bottle-board.jpg",
    alt: "Rocket pump bottle product design board with amber renders, CAD views, and sketches",
    caption: "Rocket bottle design",
    width: 4000,
    height: 5010,
    prominence: "large",
  },
  {
    src: "/creative/mondrian-house-board.jpg",
    alt: "Mondrian-style architecture design board with 3D renders, elevations, and color palette",
    caption: "House build design",
    width: 3281,
    height: 4096,
    prominence: "large",
  },
  {
    src: "/creative/cad-ring-sculpture.jpg",
    alt: "CAD study of interlocking oval and ring forms on an elliptical base",
    caption: "Tensegrity ideation",
    width: 727,
    height: 1212,
  },
  {
    src: "/creative/img-9844-clean.png",
    alt: "VCarve toolpaths for an oval CNC part",
    caption: "Tensegrity toolpaths",
    width: 1536,
    height: 1024,
  },
  {
    src: "/creative/img-bench.png",
    alt: "Electronics lab bench with oscilloscopes, a breadboard, and a person in frame",
    caption: "In the lab",
    width: 1024,
    height: 654,
  },
  {
    src: "/creative/img-9072.jpg",
    alt: "Live-edge wood slab resting on a yellow lid",
    caption: "Raw slab from the Palisades Fire, LA",
    width: 4032,
    height: 3024,
  },
  {
    src: "/creative/img-9832-clean.png",
    alt: "Isolated studio still of a glossy live-edge wood slab on a matte black sculptural pedestal base",
    caption: "Live-edge console",
    width: 1536,
    height: 1024,
  },
  {
    src: "/creative/img-1616-clean.png",
    alt: "circular nested-curve wood sculpture with a suspended honeycomb-banded ellipsoid, photographed in a room corner",
    caption: "Orbit",
    width: 1024,
    height: 1024,
  },
  {
    src: "/creative/img-9022-clean.png",
    alt: "Sketchbook page for a carbon-fiber longboard with a boardz logo sticker",
    caption: "boardz sketchbook",
    width: 1536,
    height: 1024,
  },
  {
    src: "/creative/studio-05.jpg",
    alt: "Two dusty-blue cardboard blueberry cartons on a white studio surface",
    caption: "BRRY cartons",
    width: 1440,
    height: 1795,
  },
  {
    src: "/creative/img-0341.jpg",
    alt: "BRRY process board with five studio photographs of the cardboard prototype",
    caption: "BRRY process board",
    width: 688,
    height: 1000,
  },
  {
    src: "/creative/img-0472.jpg",
    alt: "Blue digital sketch of a glass-top table with a steel-cable ring",
    caption: "Tension Table",
    width: 2033,
    height: 1452,
  },
  {
    src: "/creative/img-0681.jpg",
    alt: "Digital ideation sketches of a segmented desk lamp with a charging base",
    caption: "Lamp ideation",
    width: 3739,
    height: 2464,
  },
  {
    src: "/creative/img-0533.jpg",
    alt: "CAD rendering of an articulated desk lamp with a phone on the base",
    caption: "Lamp, CAD",
    width: 1424,
    height: 1426,
  },
  {
    src: "/creative/img-0354.jpg",
    alt: "CNC-milled wooden slab reproducing a hundred-dollar bill in halftone pits",
    caption: "Halftone bill",
    width: 4096,
    height: 1714,
  },
  {
    src: "/creative/discovery-star-translation-v2.png",
    alt: "Photographic concept art of a white-armored figure in a minimalist corridor with a phone AR translation inset",
    caption: "Discovery Star, Mandalorian translation",
    width: 1536,
    height: 1024,
  },
  {
    src: "/creative/img-0916.jpg",
    alt: "Grey digital massing study of interlocking volumes on black",
    caption: "Roberts Pavilion mass study",
    width: 2108,
    height: 1419,
  },
  {
    src: "/creative/oreo-message.png",
    alt: "Wooden Oreo that opens to a spiraling paper strip with a hidden code, shown closed, unfolding, and as laser-cut wafers",
    caption: "Oreo, winner",
    width: 1024,
    height: 785,
  },
  {
    src: "/creative/oreo-01.jpg",
    alt: "Hand lifting a wooden Oreo so a chain of paper discs unfolds, some letter-cut, one printed with a code, against a blue backdrop",
    caption: "Oreo",
    width: 2400,
    height: 1600,
  },
  {
    src: "/creative/oreo-03.jpg",
    alt: "Hands pulling apart a large ridged Oreo prototype with a wooden cream ring; a white paper spiral unfurls with printed text including CMU, against a blue studio backdrop",
    caption: "Oreo",
    width: 5568,
    height: 3712,
  },
  {
    src: "/creative/img-9642.jpg",
    alt: "ESP32 development board held in hand, showing the microcontroller and pin headers",
    caption: "Custom manufactured ESP32",
    width: 4032,
    height: 3024,
  },
  {
    src: "/creative/studio-04.jpg",
    alt: "Hands holding a small blue cardboard tray of blueberries",
    caption: "Serving size",
    width: 1440,
    height: 1795,
  },
  {
    src: "/creative/img-0487.jpg",
    alt: "Oreo process collage of sketches, laser tests, CNC, and finished wooden cookies",
    caption: "Oreo process board",
    width: 4000,
    height: 4000,
  },
  {
    src: "/creative/img-9692.jpg",
    alt: "ShopBot CNC mill cutting guitar outlines in plywood",
    caption: "On the mill",
    width: 4032,
    height: 3024,
  },
  {
    src: "/creative/studio-07.jpg",
    alt: "Kerf-bent plywood frame on a woodshop bench",
    caption: "Kerf bend",
    width: 1440,
    height: 1078,
  },
  {
    src: "/creative/img-0945.jpg",
    alt: "Pink and grey architectural sketch of a cantilevered building signed ES",
    caption: "Roberts Pavilion",
    width: 5628,
    height: 3752,
  },
  {
    src: "/creative/soft-mallet.jpg",
    alt: "Dual-face nylon and soft-face mallet with a wooden handle on a gray surface",
    caption: "Hard and Soft face hammer",
    width: 951,
    height: 1848,
  },
  {
    src: "/creative/machined-part.jpg",
    alt: "Small machined metal part with etched number 21 resting on wood",
    caption: "Machined part hammer head",
    width: 4032,
    height: 3024,
  },
  {
    src: "/creative/fixtures-desk.jpg",
    alt: "Two precision fixtures and jigs on a desk beside a monitor",
    caption: "Fixtures and optical stage",
    width: 4032,
    height: 3024,
  },
  {
    src: "/creative/sculpture-sketch-ink.jpg",
    alt: "Ink sketch of a courtyard with a central sculpture and tree branch",
    caption: "Courtyard sketch",
    width: 3024,
    height: 4032,
  },
  {
    src: "/creative/courtyard-sketch.jpg",
    alt: "Pencil courtyard sketch with statue, value scale, and tree limb",
    caption: "Scripps value study",
    width: 4032,
    height: 3024,
  },
  {
    src: "/creative/cad-curved-form.jpg",
    alt: "CAD sculpture of curved bars passing through a horizontal ring on a rectangular base",
    caption: "Curved form ideation",
    width: 1504,
    height: 906,
  },
  {
    src: "/creative/cad-cylinder-nozzle.jpg",
    alt: "Dual-view CAD of a gray cylinder with a dark nozzle and circular face",
    caption: "Spout design",
    width: 1540,
    height: 1270,
  },
  {
    src: "/creative/laminated-wood-pieces.jpg",
    alt: "Hand holding interlocking laminated walnut and maple zig-zag wood pieces",
    caption: "SparkPass logo",
    width: 4032,
    height: 3024,
  },
];

export const labs = [
  {
    n: "01",
    title: "Microcontroller Basics",
    body: "GPIO, timers, and low-level register work as a foundation for real-time systems.",
    href: "/labs/MicroP_Lab1.pdf",
  },
  {
    n: "02",
    title: "Interrupts & State Machines",
    body: "Interrupt-driven firmware and finite-state architectures for robust hardware control.",
    href: "/labs/MicroP_Lab2.pdf",
  },
  {
    n: "03",
    title: "FPGA Digital Design",
    body: "Synchronous circuits on FPGA, validated in simulation and on the board.",
    href: "/labs/MicroP_Lab3.pdf",
  },
  {
    n: "04",
    title: "Hardware / Software Co-Design",
    body: "Partitioning between firmware and hardware accelerators for performance and power.",
    href: "/labs/MicroP_Lab4.pdf",
  },
  {
    n: "05",
    title: "Capstone Embedded System",
    body: "Sensors, communication, and control from requirements through demo.",
    href: "/labs/MicroP_Lab5.pdf",
  },
  {
    n: "06",
    title: "IoT & SPI",
    body: "ESP8266, SPI temperature sensing, CMSIS drivers, and a remote web interface.",
    href: "/labs/MicroP_Lab6.pdf",
  },
] as const;

export const focus = [
  "Embedded systems",
  "Product design and manufacturing",
  "Electrical engineering",
  "Digital circuit design",
  "Hardware–software integration",
  "Python, MATLAB, C, SystemVerilog",
  "Controls engineering",
] as const;

export const coursework = [
  { name: "E155: Microcontrollers & FPGA Design", desc: "Embedded systems and digital design" },
  { name: "Digital Electronics", desc: "Circuit design and analysis" },
  { name: "Product Management", desc: "Strategy, experimentation, market analysis" },
  { name: "Economic Data Science", desc: "Quantitative decision frameworks" },
] as const;
