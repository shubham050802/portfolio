export const personalInfo = {
  name: "Shubham Kumar",
  title: "Software Developer | Hardware Enthusiast",
  subtitle: "B.Tech Electrical Engineering, IIT Jodhpur",
  email: "b22ee064@iitj.ac.in",
  alternateEmail: "arjunraj582shu@gmail.com",
  phone: "+91 9931649494",
  github: "https://github.com/shubham050802",
  linkedin: "https://www.linkedin.com/in/shubhamkumar582/",
  location: "IIT Jodhpur, India",
  summary: "Data-driven B.Tech Electrical Engineering student from IIT Jodhpur with a strong foundation in Machine Learning, Deep Learning, and statistical analysis. Eager to apply algorithm development and predictive modeling skills to solve complex business problems and enhance user experience through data-driven solutions."
};

export const education = [
  {
    institution: "IIT Jodhpur",
    degree: "B.Tech in Electrical Engineering",
    duration: "2022 - 2026 (Expected)",
    location: "Jodhpur, India",
    cgpa: "7.68/10.0",
    details: "CGPA up-till Semester VI"
  },
  {
    institution: "Creane Memorial",
    degree: "Class 12 | CBSE",
    duration: "March 2021",
    location: "Gaya, Bihar",
    percentage: "94.0%"
  },
  {
    institution: "D.A.V. Public School",
    degree: "Class 10 | CBSE",
    duration: "May 2019",
    location: "Gaya, Bihar",
    percentage: "95.8%"
  }
];

export const experience = [
  {
    title: "Quantum Computation Project",
    organization: "Inter-IIT Tech-Meet 12.0",
    duration: "Dec 2023",
    location: "Chennai, Tamil Nadu",
    type: "Competition",
    technologies: ["Python", "StreamLit", "D-Waves"],
    achievements: [
      "Built a Streamlit-based interface for rescheduling 20+ flights using D-Wave's hybrid quantum solvers",
      "Achieved <10% deviation from classical baselines, optimizing rerouting efficiency under real-time constraints",
      "Integrated backend solver with a dynamic UI supporting 15+ user-defined parameters, enhancing usability for airline operations",
      "Delivered live demo to Mphasis and IIT panel, contributing to top 10% team ranking among 23+ participating IITs"
    ],
    links: {
      github: "https://github.com/SameerSharma-57/Air_flight_rescheduler"
    }
  }
];

export const projects = [
  {
    id: 1,
    title: "Spam Email Classification using Naive Bayes",
    category: "Machine Learning",
    technologies: ["Python", "NumPy", "Pandas", "SciPy", "Scikit-learn"],
    description: "Developed and evaluated probabilistic models for classifying emails as spam or not spam, leveraging scikit-learn.",
    achievements: [
      "Implemented both GaussianNB and BernoulliNB classifiers",
      "Achieved test accuracy of 87.2% with GaussianNB and 94.8% with BernoulliNB on 1000 test emails",
      "Demonstrated practical application of ML for core NLP task"
    ],
    links: {
      github: "https://github.com/shubham050802/data_science"
    },
    featured: true
  },
  {
    id: 2,
    title: "Wine Cultivator Classification using Neural Networks",
    category: "Machine Learning",
    technologies: ["Python", "NumPy", "Pandas", "Scikit-learn"],
    description: "Built and trained a Multi-layer Perceptron neural network to classify wine cultivators from physicochemical features.",
    achievements: [
      "Engineered complete ML pipeline with data splitting, feature scaling, model training, and evaluation",
      "Achieved perfect 100% accuracy on unseen test set",
      "Zero misclassifications validated with confusion matrix"
    ],
    links: {
      github: "https://github.com/shubham050802/data_science"
    },
    featured: true
  },
  {
    id: 3,
    title: "Wine Quality Prediction",
    category: "Machine Learning",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
    description: "Implemented Logistic Regression and K-Nearest Neighbors models to predict wine quality scores from chemical attributes.",
    achievements: [
      "Performed 10-fold cross-validation over range of 1 to 49 neighbors",
      "Identified K=48 as optimal parameter",
      "Showcased research-oriented approach to model selection and hyperparameter tuning"
    ],
    links: {
      github: "https://github.com/shubham050802/data_science"
    },
    featured: false
  },
  {
    id: 4,
    title: "Prometeo'24 App",
    category: "App Development",
    technologies: ["Flutter", "Django", "REST APIs"],
    description: "Assistant Head of App Development - Primary Utility & User Management System for college fest with 10k+ attendees.",
    achievements: [
      "Managed UI-UX, backend APIs, event management, and payment gateway",
      "Served 10k+ attendees during the fest",
      "Collaborated with team of 2 to deliver complete solution"
    ],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.promete24.iitj"
    },
    featured: true
  },
  {
    id: 5,
    title: "Digital Clock",
    category: "Hardware",
    technologies: ["Vivado", "Verilog", "PYNQ-Z2", "RPI Addon"],
    description: "Head of Project - Designed multifunctional digital clock with four modes: clock, timer, stopwatch, and alarm.",
    achievements: [
      "Configured and synchronized clock with precision within one-second accuracy",
      "Integrated four seven-segment displays using only one output port for efficiency",
      "Complete hardware implementation on FPGA"
    ],
    links: {
      github: "https://github.com/shubham050802/DigitalClock",
      youtube: "https://www.youtube.com/watch?si=AlCPOBBvXx7L_t5v&v=eaWMT5FJE9Y&feature=youtu.be"
    },
    featured: true
  },
  {
    id: 6,
    title: "Analog Signal Sampling Circuit Design",
    category: "Hardware",
    technologies: ["Virtuoso", "LTspice", "Op-amps", "Oscilloscope"],
    description: "Designed and simulated Natural Sampling, Sample-and-Hold, and Flat-Top Sampling circuits.",
    achievements: [
      "Built hardware prototypes and sampled real audio music file",
      "Analyzed output using oscilloscope",
      "Compared simulation vs hardware results for timing accuracy and waveform distortion"
    ],
    links: {
      drive: "https://drive.google.com/drive/folders/1uOi-WTKYH8sZHstgwyFylHc8TTzVK_s5?usp=sharing"
    },
    featured: false
  },
  {
    id: 7,
    title: "Varchas'23 App",
    category: "App Development",
    technologies: ["Flutter", "Firebase"],
    description: "Assistant Head of App Development - Flutter and Firebase-powered app for college sports fest.",
    achievements: [
      "Coordinated 10+ colleges managing 15+ sports events over 3 days",
      "Real-time updates, leaderboards, event notifications, and Pronight entry",
      "Integrated secure payment and event registration functionalities"
    ],
    links: {},
    featured: false
  },
  {
    id: 8,
    title: "Analog Circuit Design Lab",
    category: "Hardware",
    technologies: ["LTspice", "PSpice", "ALD1105", "2N7000 MOSFETs"],
    description: "Core Analog Lab Coursework - Built and analyzed MOS-based current mirrors, amplifiers.",
    achievements: [
      "Simulated circuits in LTspice and PSpice",
      "Validated results through hands-on experiments with oscilloscopes and function generators",
      "Performed DC/small-signal analysis measuring gain, bias points, and swing"
    ],
    links: {},
    featured: false
  },
  {
    id: 9,
    title: "Music Recommendation System",
    category: "Machine Learning",
    technologies: ["Python", "Scikit-learn", "Librosa", "Spotify API"],
    description: "Pattern Recognition & ML Project - ML model for music genre classification and personalized recommendations.",
    achievements: [
      "Extracted and analyzed audio features from GTZAN and Spotify datasets",
      "Improved classification accuracy through feature engineering",
      "Built CLI for users to classify songs and get recommendations"
    ],
    links: {
      github: "https://github.com/rahulrangers/Music-Recommendation-System"
    },
    featured: false
  },
  {
    id: 10,
    title: "Flutter Animations",
    category: "App Development",
    technologies: ["Flutter", "Dart"],
    description: "Self-made project showcasing custom animations using Flutter and Dart.",
    achievements: [
      "Developed series of custom animations demonstrating Flutter proficiency",
      "Tailored animations to specific UI/UX requirements",
      "Documented and shared via GitHub for open-source community"
    ],
    links: {
      github: "https://github.com/shubham050802/AnimationInFlutter"
    },
    featured: false
  }
];

export const skills = {
  "Programming Languages": [
    "Python", "C", "C++", "Java", "SQL", "Rust", "Verilog", "ARM", "x86", "MIPS"
  ],
  "Machine Learning & AI": [
    "Scikit-learn", "TensorFlow", "OpenCV", "Pandas", "NumPy", "Classification", 
    "Regression", "Neural Networks", "Deep Learning", "Computer Vision", "NLP"
  ],
  "Hardware & Systems": [
    "Verilog", "VLSI Design", "Embedded Systems", "Digital Logic Design", 
    "Analog Circuit Design", "FPGA", "Computer Architecture"
  ],
  "Development Tools": [
    "Git", "Firebase", "StreamLit", "MATLAB", "LaTeX", "Simulink", "D-Waves"
  ],
  "App & Web Development": [
    "Flutter", "Django", "REST APIs", "Swift"
  ],
  "High Performance Computing": [
    "Hardware Acceleration", "Parallel Computing", "OpenMP", "MPI"
  ]
};

export const positions = [
  {
    title: "Class Representative",
    organization: "Electrical'26 batch, IIT Jodhpur",
    duration: "Aug 2023 - Present"
  },
  {
    title: "Assistant Head",
    organization: "Prometeo'24, IIT Jodhpur",
    duration: "Nov 2023 - Jan 2024"
  },
  {
    title: "Assistant Head",
    organization: "Varchas'23, IIT Jodhpur",
    duration: "Oct 2023 - Nov 2023"
  }
];

export const extracurricular = [
  {
    title: "Core Member",
    organization: "Literature Society",
    description: "Literary club of IIT Jodhpur"
  },
  {
    title: "Core Member",
    organization: "Devlup Labs",
    description: "Open Source Organisation of IIT Jodhpur"
  },
  {
    title: "Core Member",
    organization: "RAID",
    description: "AI, ML, and DL club of IIT Jodhpur"
  }
];

export const coursework = [
  "Pattern Recognition & Machine Learning",
  "Computer Vision",
  "Artificial Intelligence",
  "Data Structure and Algorithms",
  "Computer Architecture",
  "Control System",
  "Linear Algebra",
  "Probability & Statistics",
  "Analog Electronics Circuit",
  "Semiconductor Devices",
  "VLSI Design",
  "Digital Logic Design",
  "Embedded System"
];
