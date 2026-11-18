import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";

import { createRoot } from "react-dom/client";

import { Canvas, useFrame } from "@react-three/fiber";

import { Cloud, Sparkles, Stars } from "@react-three/drei";

import { AnimatePresence, motion } from "framer-motion";

import {

  ArrowDown,

  ArrowUpRight,

  Volume2,

  VolumeX,

  Music2,

  Menu,

  X,

  Github,

  Linkedin,

  Mail,

  ExternalLink,

  ChevronRight,

  Flower2,

  Code2,

  BriefcaseBusiness,

  Award,

  Compass,

  Download,

  MapPin,

  GraduationCap,

  Layers3,

  Command,

  Volume1,

} from "lucide-react";

import * as THREE from "three";

import "./style.css";



const projects = [

  {

    id: "reclaim",

    n: "01",

    name: "RECLAIM",

    kind: "Chrome extension · Personalised discovery",

    status: "Ongoing",

    featured: true,

    desc: "A user-controlled personalisation layer for the YouTube feed. RECLAIM builds a Taste Passport from interests, keywords, genres, moods, favourite channels and topics to see less of, then applies a weighted relevance score to make the feed feel more intentional.",

    problem:

      "Recommendation feeds can become repetitive and difficult to steer. RECLAIM explores a transparent layer of user preferences rather than replacing the platform or hiding how choices are made.",

    approach:

      "A Taste Passport captures explicit preferences. A weighted, rule-based relevance score is applied to already-rendered feed items, with Light, Balanced and Strict modes. Preferences persist locally through Chrome Storage.",

    contribution:

      "Designed the concept and extension architecture; built the preference system, scoring logic, feed processing and ranking, persistent settings, Spotify taste-import flow using OAuth 2.0 PKCE, and dashboard/assistant experience.",

    stack: [

      "JavaScript",

      "Manifest V3",

      "Chrome Storage",

      "Spotify Web API",

      "OAuth 2.0 PKCE",

    ],

    url: "https\://github.com/Anushka-hiyu/reclaim",

    note: "Local unpacked extension; not published on the Chrome Web Store.",

  },

  {

    id: "forensic",

    n: "02",

    name: "VR FORENSIC CRIME SCENE",

    kind: "Godot · XR investigation simulation",

    status: "Completed",

    desc: "A simulated investigation experience in which a visitor explores a crime scene, examines suspicious objects and collects evidence. Built with Godot 4.6 and GDScript.",

    problem:

      "The project explores how an interactive 3D environment can guide a user through a structured evidence-gathering experience.",

    approach:

      "Scenes and environments were assembled programmatically, with interactive evidence points and collection logic forming the core investigation loop.",

    contribution:

      "Created the environments and scenes programmatically and implemented evidence collection and investigation interactions. Tested in simulation, not on a physical headset.",

    stack: ["Godot 4.6", "GDScript", "XR simulation"],

    url: "",

    note: "A headset-based test was not performed.",

  },

  {

    id: "coaching",

    n: "03",

    name: "COACHINGMS",

    kind: "Full-stack · Management system",

    status: "Completed",

    desc: "A coaching institute management system independently developed for an internship interview round, bringing admin, student and teacher workflows into one application.",

    problem:

      "Coaching operations involve different users and repeated administrative tasks. The project brings common institute workflows into one role-aware application.",

    approach:

      "Separate Admin, Student and Teacher access, supported by modules for attendance, batches, subjects, notifications and dashboards.",

    contribution:

      "Independently built the application, including role-based authentication and separate access for Admin, Student and Teacher, plus the core management modules.",

    stack: ["Python", "Flask", "SQLite3", "HTML", "CSS", "JavaScript"],

    url: "https\://github.com/Anushka-hiyu/coachingms",

    note: "Built independently as an interview-round project.",

  },

  {

    id: "jackers",

    n: "04",

    name: "JACKERS",

    kind: "Founder-led product initiative · Fintech concept",

    status: "Demo · Research phase",

    desc: "A gamified finance-management concept exploring how tiered experiences, savings challenges and rewards might make healthier financial habits more engaging.",

    problem:

      "Traditional money tracking can feel like a chore. JACKERS explores whether progress, challenge design and meaningful rewards can make saving feel more approachable.",

    approach:

      "The concept includes a four-tier Suites structure, savings challenges and reward mechanics. Product feasibility and payment integration paths were considered while shaping the initial demo.",

    contribution:

      "Founder since August 2024. Led ideation, product direction, UX and feasibility research, and development of the initial demo. Co-founded with Rushda; product thinking and selected decisions were shared across the founding team.",

    stack: [

      "Product strategy",

      "UX research",

      "Prototyping",

      "Feasibility research",

    ],

    url: "",

    note: "Currently paused at demo stage while psychometric analysis is explored. Outcomes are design intentions, not measured results.",

  },

  {

    id: "lyricsdump",

    n: "05",

    name: "LYRICSDUMP",

    kind: "Python · Terminal creative utility",

    status: "Completed",

    desc: "A terminal-based synchronized text display inspired by lyric-video timing. Lines and pauses are manually timestamped; listeners play the audio separately.",

    problem:

      "A small experiment in synchronising text presentation with a separately played track, using manually authored timing.",

    approach:

      "A lightweight Python terminal interface controls line-by-line display and pauses based on configured timestamps.",

    contribution:

      "Built the timing and terminal presentation flow using Rich and Python utilities. Song lyrics are intentionally not reproduced in this portfolio.",

    stack: ["Python", "Rich", "colorsys", "sys", "time"],

    url: "https\://github.com/Anushka-hiyu/Lyricsdump",

    note: "The application does not play or control music.",

  },

];

const experience = [

  {

    date: "APR — OCT 2026",

    role: "Software Development Intern",

    org: "SDAC",

    desc: "Worked on an ERP for a Netherlands-based company managing import and export operations. Used Java, MySQL, Eclipse and Tomcat while learning more about networking, servers and cloud concepts. Implementation details remain confidential.",

    tags: ["Java", "MySQL", "Eclipse", "Tomcat"],

  },

  {

    date: "AUG 2025 — MAR 2026",

    role: "Software Development Intern",

    org: "Kaizennic",

    desc: "Contributed in a team environment to ERP development, working with the MERN ecosystem, PostgreSQL, Cloudinary, Postman, cron jobs and supporting libraries. Company implementation details remain private.",

    tags: ["MERN", "PostgreSQL", "Cloudinary", "Postman"],

  },

  {

    date: "FEB — JUL 2025",

    role: "Creative Intern · Video Editor",

    org: "Tasavvur Recruitment Services",

    desc: "Created reels, promotional videos, brochures and presentations, including subtitles and supporting visual content.",

    tags: ["Canva", "Video editing", "Visual communication"],

  },

];

const highlights = [

  {

    year: "2026",

    title: "Interview Ready: Building Your Professional Presence",

    role: "Planned & led · Tech Nexus",

    desc: "Independently planned and conducted a professional-readiness workshop for FY and SY students on 26 September 2026.",

  },

  {

    year: "2026",

    title: "WebCraft Cloning",

    role: "Event judge",

    desc: "Judged a website-cloning challenge for FY students, assessing UI accuracy and understanding of the underlying web technologies.",

  },

  {

    year: "2024",

    title: "Presentomania · Neuromorphic Computing",

    role: "Second place · Team of three",

    desc: "Presented neuromorphic computing with a three-person team in a CS-department competition.",

  },

  {

    year: "2024–",

    title: "JACKERS",

    role: "Founder",

    desc: "Led a gamified finance product concept; recognised in the interdepartmental ideation category and presented at an intercollegiate Shark Tank.",

  },

];

const skills = [

  ["Languages", ["Python", "Java", "C++", "JavaScript", "SQL"]],

  ["Frontend", ["React", "HTML", "CSS", "Tailwind CSS", "Bootstrap"]],

  ["Backend & APIs", ["Node.js", "Express", "Flask", "REST APIs"]],

  ["Data", ["PostgreSQL", "MySQL", "SQLite", "MongoDB"]],

  [

    "Tools & platforms",

    ["Git", "GitHub", "Postman", "Eclipse", "Godot", "Blender"],

  ],

  [

    "Current interests",

    ["Agentic AI", "System design", "DSA", "Computer networks"],

  ],

];

const chapters = [

  {

    label: "THE GARDEN GATE",

    place: "MISTY SHRINE PATH",

    sub: "A quiet beginning beneath the old trees.",

    image: "/images/1.jpeg",

  },

  {

    label: "A LITTLE ABOUT ME",

    place: "WISTERIA SANCTUARY",

    sub: "The person behind the projects.",

    image: "/images/2.jpeg",

  },

  {

    label: "SELECTED WORK",

    place: "THE LANTERN ARCHIVE",

    sub: "Things I have built, tested and explored.",

    image: "/images/3.jpeg",

  },

  {

    label: "EXPERIENCE",

    place: "THE MOUNTAIN VILLAGE",

    sub: "Learning through teams, internships and delivery.",

    image: "/images/4.jpeg",

  },

  {

    label: "JOURNEY & RECOGNITION",

    place: "SNOWFALL SHRINE",

    sub: "Leadership, collaboration and milestones.",

    image: "/images/5.jpeg",

  },

  {

    label: "LET’S CONNECT",

    place: "THE MOONLIT RIDGE",

    sub: "A place to continue the conversation.",

    image: "/images/6.jpeg",

  },

];



function Torii({ position = [0, 0, 0], scale = 1 }) {

  return (

    <group position={position} scale={scale}>

      <mesh position={[-1.55, 1.8, 0]} castShadow>

        <cylinderGeometry args={[0.12, 0.19, 3.6, 16]} />

        <meshStandardMaterial color="#49212b" roughness={0.58} />

      </mesh>

      <mesh position={[1.55, 1.8, 0]} castShadow>

        <cylinderGeometry args={[0.12, 0.19, 3.6, 16]} />

        <meshStandardMaterial color="#49212b" roughness={0.58} />

      </mesh>

      <mesh position={[0, 3.48, 0]} castShadow>

        <boxGeometry args={[4.65, 0.24, 0.72]} />

        <meshStandardMaterial color="#261b23" roughness={0.5} />

      </mesh>

      <mesh position={[0, 3.68, 0]} castShadow>

        <boxGeometry args={[5.1, 0.18, 0.78]} />

        <meshStandardMaterial color="#6a2637" roughness={0.42} />

      </mesh>

      <mesh position={[0, 3.2, 0]}>

        <boxGeometry args={[3.35, 0.13, 0.5]} />

        <meshStandardMaterial color="#8f3d53" />

      </mesh>

    </group>

  );

}

function Lantern({ position, scale = 1 }) {

  return (

    <group position={position} scale={scale}>

      <mesh position={[0, 0.62, 0]} castShadow>

        <boxGeometry args={[0.52, 0.72, 0.52]} />

        <meshStandardMaterial color="#211a1c" roughness={0.6} />

      </mesh>

      <mesh position={[0, 0.62, 0]}>

        <boxGeometry args={[0.39, 0.56, 0.39]} />

        <meshStandardMaterial

          color="#ffc77f"

          emissive="#ff9b45"

          emissiveIntensity={2.4}

          transparent

          opacity={0.9}

        />

      </mesh>

      <mesh position={[0, 1.04, 0]}>

        <coneGeometry args={[0.4, 0.2, 4]} />

        <meshStandardMaterial color="#21191d" />

      </mesh>

      <mesh position={[0, 0.17, 0]}>

        <cylinderGeometry args={[0.055, 0.07, 0.24, 8]} />

        <meshStandardMaterial color="#2b2024" />

      </mesh>

      <pointLight

        position={[0, 0.7, 0]}

        color="#ffb96d"

        intensity={1.7}

        distance={5}

      />

    </group>

  );

}

function Wisteria({ position, seed = 0 }) {

  const strands = useMemo(

    () =>

      Array.from({ length: 17 }, (_, i) => ({

        x: (i - 8) * 0.14 + Math.sin(i * 7 + seed) * 0.06,

        len: 1.45 + (i % 6) * 0.34,

        phase: i * 0.8,

      })),

    [seed],

  );

  const root = useRef();

  useFrame(({ clock }) => {

    if (root.current)

      root.current.rotation.z =

        Math.sin(clock.elapsedTime * 0.34 + seed) * 0.018;

  });

  return (

    <group ref={root} position={position}>

      {strands.map((s, i) => (

        <group key={i} position={[s.x, 0, Math.sin(i * 3 + seed) * 0.13]}>

          <mesh position={[0, -s.len / 2, 0]}>

            <cylinderGeometry args={[0.014, 0.009, s.len, 5]} />

            <meshStandardMaterial color="#44304a" />

          </mesh>

          {Array.from({ length: Math.floor(s.len * 9) }, (_, j) => (

            <mesh

              key={j}

              position={[

                Math.sin(j * 1.7 + s.phase) * 0.1,

                -j * 0.105,

                Math.cos(j * 1.2 + s.phase) * 0.06,

              ]}

              rotation={[0, 0, Math.sin(j + s.phase) * 0.3]}

            >

              <sphereGeometry args={[0.065 + (j % 3) * 0.012, 8, 7]} />

              <meshStandardMaterial

                color={["#9f70bd", "#c99bda", "#76569d", "#e4c5e8"][i % 4]}

                emissive="#8b4ca7"

                emissiveIntensity={0.28}

                roughness={0.8}

              />

            </mesh>

          ))}

        </group>

      ))}

    </group>

  );

}

function Pine({ position, scale = 1 }) {

  return (

    <group position={position} scale={scale}>

      <mesh position={[0, 1.55, 0]} castShadow>

        <cylinderGeometry args={[0.09, 0.22, 3.1, 9]} />

        <meshStandardMaterial color="#302a28" />

      </mesh>

      {[1.15, 1.75, 2.35, 2.85].map((y, i) => (

        <mesh

          key={i}

          position={[0, y, 0]}

          scale={[1.35 - i * 0.13, 0.27, 1.15 - i * 0.12]}

          castShadow

        >

          <icosahedronGeometry args={[0.95, 2]} />

          <meshStandardMaterial

            color={i % 2 ? "#172d29" : "#203c33"}

            roughness={1}

          />

        </mesh>

      ))}

    </group>

  );

}

function JapaneseHouse({ position = [0, 0, 0], scale = 1 }) {

  return (

    <group position={position} scale={scale}>

      <mesh position={[0, 1.25, 0]} castShadow>

        <boxGeometry args={[3.1, 2.5, 2.8]} />

        <meshStandardMaterial color="#392b2b" roughness={0.85} />

      </mesh>

      <mesh position={[0, 2.65, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>

        <coneGeometry args={[2.45, 0.95, 4]} />

        <meshStandardMaterial color="#151923" roughness={0.65} />

      </mesh>

      {[-0.95, -0.32, 0.32, 0.95].map((x, i) => (

        <mesh key={i} position={[x, 1.25, 1.42]}>

          <boxGeometry args={[0.09, 2.25, 0.1]} />

          <meshStandardMaterial color="#5a3430" />

        </mesh>

      ))}

      <mesh position={[0, 1.15, 1.47]}>

        <boxGeometry args={[0.8, 1.55, 0.06]} />

        <meshStandardMaterial

          color="#d69c65"

          emissive="#a65d32"

          emissiveIntensity={0.7}

        />

      </mesh>

      <mesh position={[0, 1.15, 1.52]}>

        <boxGeometry args={[0.7, 1.4, 0.035]} />

        <meshStandardMaterial

          color="#f6c58c"

          emissive="#e7a15b"

          emissiveIntensity={1.3}

        />

      </mesh>

      <mesh position={[0, 2.1, 1.5]}>

        <boxGeometry args={[3.5, 0.1, 0.12]} />

        <meshStandardMaterial color="#211b20" />

      </mesh>

    </group>

  );

}

function Temple() {

  return (

    <group position={[0, -0.12, -10]}>

      <mesh position={[0, 1.55, 0]} castShadow>

        <boxGeometry args={[5.8, 2.8, 4.2]} />

        <meshStandardMaterial color="#30262c" roughness={0.82} />

      </mesh>

      <mesh position={[0, 3.12, 0]} castShadow>

        <coneGeometry args={[4.4, 1.2, 4]} />

        <meshStandardMaterial color="#171923" roughness={0.55} />

      </mesh>

      <mesh position={[0, 1.2, 2.14]}>

        <boxGeometry args={[1.05, 1.8, 0.08]} />

        <meshStandardMaterial

          color="#d69b63"

          emissive="#b96b3d"

          emissiveIntensity={1.1}

        />

      </mesh>

      <mesh position={[0, 2.18, 2.22]}>

        <boxGeometry args={[0.28, 0.44, 0.06]} />

        <meshStandardMaterial

          color="#ffc77b"

          emissive="#ff9c42"

          emissiveIntensity={2.5}

        />

      </mesh>

      <mesh position={[0, 0.08, 2.8]}>

        <boxGeometry args={[7, 0.18, 2.5]} />

        <meshStandardMaterial color="#35272c" />

      </mesh>

      {[-2.3, -1.15, 0, 1.15, 2.3].map((x, i) => (

        <Lantern key={i} position={[x, 0.15, 3.25]} scale={0.65} />

      ))}

    </group>

  );

}

function Moon() {

  return (

    <group position={[5, 8, -18]}>

      <mesh>

        <sphereGeometry args={[1.45, 32, 32]} />

        <meshBasicMaterial color="#f0e5db" />

      </mesh>

      <pointLight color="#c4c4f7" intensity={1.8} distance={18} />

    </group>

  );

}

function MistBanks() {

  const refs = useRef([]);

  useFrame((_, d) =>

    refs.current.forEach((r, i) => {

      if (r) {

        r.position.x += d * (i % 2 ? 0.075 : -0.055);

        if (r.position.x > 15) r.position.x = -15;

        if (r.position.x < -15) r.position.x = 15;

      }

    }),

  );

  return (

    <>

      {Array.from({ length: 8 }, (_, i) => (

        <Cloud

          key={i}

          ref={(el) => (refs.current[i] = el)}

          position={[(i - 3.5) * 3.6, ((i % 3) - 1) * 0.25, -5 - (i % 4) * 3.5]}

          speed={0.08}

          opacity={0.16}

          segments={22}

          bounds={[4.2, 0.85, 2]}

        />

      ))}

    </>

  );

}

function PetalField() {

  const ref = useRef();

  const positions = useMemo(

    () =>

      new Float32Array(

        Array.from({ length: 520 }, () => [

          (Math.random() - 0.5) * 34,

          Math.random() * 12 - 2,

          (Math.random() - 0.5) * 30,

        ]).flat(),

      ),

    [],

  );

  useFrame(({ clock }, d) => {

    if (!ref.current) return;

    const a = ref.current.geometry.attributes.position;

    for (let i = 0; i < a.count; i++) {

      a.setY(i, a.getY(i) - d * (0.12 + (i % 7) * 0.02));

      a.setX(i, a.getX(i) + Math.sin(clock.elapsedTime * 0.4 + i) * d * 0.025);

      if (a.getY(i) < -3) a.setY(i, 9);

    }

    a.needsUpdate = true;

  });

  return (

    <points ref={ref}>

      <bufferGeometry>

        <bufferAttribute

          attach="attributes-position"

          count={positions.length / 3}

          array={positions}

          itemSize={3}

        />

      </bufferGeometry>

      <pointsMaterial

        color="#edc8ed"

        size={0.045}

        transparent

        opacity={0.7}

        sizeAttenuation

      />

    </points>

  );

}

function Scene({ chapter }) {

  const world = useRef();

  useFrame((s, d) => {

    if (world.current) {

      world.current.rotation.y = THREE.MathUtils.damp(

        world.current.rotation.y,

        Math.sin(s.pointer.x * 0.2) * 0.035,

        1.4,

        d,

      );

      world.current.position.y = THREE.MathUtils.damp(

        world.current.position.y,

        Math.sin(s.clock.elapsedTime * 0.2) * 0.035,

        1.2,

        d,

      );

    }

  });

  const wisteria = chapter === 1 || chapter === 0 || chapter === 4;

  return (

    <group ref={world}>

      <color

        attach="background"

        args={[chapter === 3 ? "#07111c" : "#080b15"]}

      />

      <fog

        attach="fog"

        args={[

          chapter === 3 ? "#101d2a" : "#171326",

          chapter === 0 ? 8 : 10,

          chapter === 3 ? 34 : 39,

        ]}

      />

      <ambientLight intensity={0.62} color="#aeb0dc" />

      <hemisphereLight intensity={0.62} color="#d5c4ed" groundColor="#101b1b" />

      <directionalLight

        position={[-8, 13, 5]}

        intensity={1.25}

        color="#d9d9f3"

        castShadow

      />

      <pointLight

        position={[0, 5, -7]}

        intensity={chapter === 2 ? 19 : 13}

        color={chapter === 2 ? "#a96be4" : "#a3a9e9"}

        distance={28}

      />

      <pointLight

        position={[-5, 2, 2]}

        intensity={8}

        color="#ffae70"

        distance={14}

      />

      <Stars

        radius={100}

        depth={70}

        count={1900}

        factor={2.4}

        fade

        speed={0.12}

      />

      <Sparkles

        count={chapter === 2 ? 210 : 140}

        scale={[25, 11, 25]}

        size={1.7}

        speed={0.18}

        color={wisteria ? "#e4c5ff" : "#d5e1ff"}

        opacity={0.55}

      />

      <Moon />

      <group position={[0, -1.35, 0]}>

        <mesh

          rotation={[-Math.PI / 2, 0, 0]}

          position={[0, 0, -5]}

          receiveShadow

        >

          <planeGeometry args={[70, 70]} />

          <meshStandardMaterial

            color={chapter === 3 ? "#17211e" : "#171823"}

            roughness={0.9}

          />

        </mesh>

        {chapter === 0 && (

          <>

            <Torii position={[0, 0, -8]} scale={1.08} />

            <Temple />

            {Array.from({ length: 13 }, (_, i) => (

              <Pine

                key={i}

                position={[

                  (i % 2 ? 1 : -1) * (4.5 + Math.floor(i / 2) * 1.1),

                  -0.2,

                  -2 - (i % 5) * 3.1,

                ]}

                scale={0.85 + (i % 3) * 0.2}

              />

            ))}

            {[-3.8, -2.5, 2.5, 3.8].map((x, i) => (

              <Lantern key={i} position={[x, -0.05, -2.4 - (i % 2) * 2]} />

            ))}

          </>

        )}

        {chapter === 1 && (

          <>

            <Torii position={[0, 0, -7]} scale={0.9} />

            <Temple />

            {[-5, -3, 3, 5].map((x, i) => (

              <Wisteria

                key={i}

                position={[x, 5.2, -3 - (i % 2) * 2]}

                seed={i + 3}

              />

            ))}

            {[-5, -3.2, 3.2, 5].map((x, i) => (

              <Pine

                key={i}

                position={[x, -0.2, -5 - (i % 2) * 2]}

                scale={0.95}

              />

            ))}

            {[-3.6, -2.3, 2.3, 3.6].map((x, i) => (

              <Lantern key={i} position={[x, 0, -2.2 - (i % 2) * 2]} />

            ))}

          </>

        )}

        {chapter === 2 && (

          <>

            <Temple />

            {[-6, -3, 3, 6].map((x, i) => (

              <JapaneseHouse

                key={i}

                position={[x, -0.1, -7 - (i % 2) * 2]}

                scale={0.8}

              />

            ))}

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.04, -3]}>

              <planeGeometry args={[3, 15]} />

              <meshStandardMaterial color="#30283a" roughness={0.8} />

            </mesh>

          </>

        )}

        {chapter === 3 && (

          <>

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.015, -4]}>

              <planeGeometry args={[12, 28]} />

              <meshStandardMaterial

                color="#172c31"

                roughness={0.24}

                metalness={0.25}

              />

            </mesh>

            {[-6, -3.4, 3.4, 6].map((x, i) => (

              <JapaneseHouse

                key={i}

                position={[x, -0.1, -5 - (i % 2) * 3]}

                scale={0.82}

              />

            ))}

            {[-4.5, -2.5, 2.5, 4.5].map((x, i) => (

              <Lantern key={i} position={[x, 0, -1.5 - (i % 2) * 2]} />

            ))}

          </>

        )}

        {chapter === 4 && (

          <>

            <Temple />

            {[-5, -2.5, 2.5, 5].map((x, i) => (

              <Wisteria

                key={i}

                position={[x, 5, -4 - (i % 2) * 2]}

                seed={i + 8}

              />

            ))}

            {Array.from({ length: 8 }, (_, i) => (

              <Pine

                key={i}

                position={[

                  (i % 2 ? 1 : -1) * (4 + Math.floor(i / 2) * 1.3),

                  -0.2,

                  -4 - (i % 4) * 2.5,

                ]}

                scale={0.85 + (i % 3) * 0.15}

              />

            ))}

            {[-3, -1.5, 1.5, 3].map((x, i) => (

              <Lantern key={i} position={[x, 0.05, -1.8 - (i % 2) * 2]} />

            ))}

          </>

        )}

        {chapter === 5 && (

          <>

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.015, -4]}>

              <planeGeometry args={[18, 30]} />

              <meshStandardMaterial

                color="#142d2c"

                roughness={0.2}

                metalness={0.3}

              />

            </mesh>

            <JapaneseHouse position={[-4, -0.1, -7]} scale={0.9} />

            <JapaneseHouse position={[4, -0.1, -9]} scale={0.9} />

            <Pine position={[0, -0.2, -8]} scale={1.5} />

            {[-5, -3, -1, 1, 3, 5].map((x, i) => (

              <Lantern key={i} position={[x, 0, -2.5 - (i % 2) * 2]} />

            ))}

          </>

        )}

      </group>

      <MistBanks />

      <PetalField />

    </group>

  );

}



function App() {

  const [entered, setEntered] = useState(false),

    [chapter, setChapter] = useState(0),

    [panel, setPanel] = useState(""),

    [menu, setMenu] = useState(false),

    [music, setMusic] = useState(false),

    [volume, setVolume] = useState(0.13),

    [musicError, setMusicError] = useState(false);

  const greeting = useRef(null),

    track = useRef(null);

  useEffect(() => {

    if (track.current) {

      track.current.volume = volume;

      track.current.loop = true;

    }

  }, [volume]);

  useEffect(() => {

    let touchY = 0;

    const key = (e) => {

      if (!entered) return;

      if (e.key === "Escape") {

        setPanel("");

        setMenu(false);

      }

      if (["ArrowDown", "PageDown"].includes(e.key)) {

        e.preventDefault();

        setChapter((v) => Math.min(5, v + 1));

        setPanel("");

      }

      if (["ArrowUp", "PageUp"].includes(e.key)) {

        e.preventDefault();

        setChapter((v) => Math.max(0, v - 1));

        setPanel("");

      }

    };

    const wheel = (e) => {

      if (!entered || panel || menu) return;

      if (Math.abs(e.deltaY) > 40) {

        setChapter((v) =>

          Math.max(0, Math.min(5, v + (e.deltaY > 0 ? 1 : -1))),

        );

      }

    };

    const start = (e) => {

      touchY = e.changedTouches[0].clientY;

    };

    const end = (e) => {

      if (!entered || panel || menu) return;

      const delta = touchY - e.changedTouches[0].clientY;

      if (Math.abs(delta) > 55)

        setChapter((v) => Math.max(0, Math.min(5, v + (delta > 0 ? 1 : -1))));

    };

    window.addEventListener("keydown", key);

    window.addEventListener("wheel", wheel, { passive: true });

    window.addEventListener("touchstart", start, { passive: true });

    window.addEventListener("touchend", end, { passive: true });

    return () => {

      window.removeEventListener("keydown", key);

      window.removeEventListener("wheel", wheel);

      window.removeEventListener("touchstart", start);

      window.removeEventListener("touchend", end);

    };

  }, [entered, panel, menu]);

  const startMusic = async () => {

    try {

      if (track.current) {

        track.current.volume = volume;

        await track.current.play();

        setMusic(true);

        setMusicError(false);

      }

    } catch {

      setMusic(false);

      setMusicError(true);

    }

  };

  const enter = async () => {

    setEntered(true);

    try {

      if (greeting.current) {

        greeting.current.currentTime = 0;

        await greeting.current.play();

      } else await startMusic();

    } catch {

      setMusicError(true);

    }

  };

  const onGreetingEnd = () => startMusic();

  const toggleMusic = async () => {

    if (!track.current) return;

    if (music) {

      track.current.pause();

      setMusic(false);

    } else await startMusic();

  };

  const nav = [

    ["WORLD", 0],

    ["ABOUT", 1],

    ["WORK", 2],

    ["EXPERIENCE", 3],

    ["JOURNEY", 4],

    ["CONTACT", 5],

  ];

  const go = (n) => {

    setChapter(n);

    setPanel("");

    setMenu(false);

  };

  const selected = projects.find((p) => p.id === panel);

  return (

    <main className="app-shell">

      <audio

        ref={greeting}

        src="/audio/shinobu-greeting.mp3"

        preload="auto"

        onEnded={onGreetingEnd}

      />

      <audio ref={track} src="/audio/ambient-track.mp3" preload="none" loop />

      <div

        className="cinematic-bg"

        style={{ backgroundImage: `url(${chapters[chapter].image})` }}

        key={chapter}

      />

      <div className="world-canvas" aria-hidden="true">
        <Canvas camera={{ position: [0, 4.2, 13], fov: 48 }} dpr={[1, 1.7]} gl={{ antialias: true, alpha: false }}>
          <Suspense fallback={null}>
            <Scene chapter={chapter} />
          </Suspense>
        </Canvas>
      </div>

      <div className="grain" />

      <div className="vignette" />

      <div className="mist-layer mist-one" />

      <div className="mist-layer mist-two" />

      <div className="petal-layer" aria-hidden="true" />

      <header className="topbar">

        <button className="brand" onClick={() => go(0)}>

        </button>

        <button

          className="icon-button menu-toggle"

          onClick={() => setMenu(!menu)}

          aria-label="Toggle menu"

        >

          {menu ? <X /> : <Menu />}

        </button>

      </header>

      {!entered ? (

        <section className="entry-screen">

          <div className="entry-copy">

            <div className="eyebrow">

              <span /> A WORLD BETWEEN CODE & CURIOSITY

            </div>

            <h1>

              ANUSHKA

              <br />

              <em>SHRIKANT</em>

              <br />

              CHOUBEY<span className="title-dot">.</span>

            </h1>

            <button className="enter-button" onClick={enter}>

              <span className="enter-icon">✦</span> ENTER THE WORLD{" "}

              <ArrowUpRight size={16} />

            </button>

          </div>

          <img

            className="shinobu-figure"

            src="/images/shinobu.png"

          />

          <div className="entry-side-note">

            A PERSONAL DIGITAL SPACE <span>—</span> EST. 2024

          </div>

          <div className="entry-bottom">

            <span>SCROLL OR USE ↑ ↓ AFTER ENTERING</span>

          </div>

        </section>

      ) : (

        <>

          <nav className={`world-nav ${menu ? "open" : ""}`}>

            {nav.map(([label, n]) => (

              <button

                key={label}

                className={chapter === n ? "active" : ""}

                onClick={() => go(n)}

              >

                <span>0{n + 1}</span>

                {label}

              </button>

            ))}

          </nav>

          <section className="scene-heading">

            <div>

              <div className="eyebrow">

                <span /> {chapters[chapter].label}

              </div>

              <div className="scene-subtitle">{chapters[chapter].sub}</div>

            </div>

            <div className="chapter-count">

              0{chapter + 1} <i>/</i> 06

            </div>

          </section>

          <div className="content-layer">

            {chapter === 0 && (

              <motion.div

                className="hero-copy"

                initial={{ opacity: 0, y: 24 }}

                animate={{ opacity: 1, y: 0 }}

              >

                <div className="hero-kicker">

                  COMPUTER SCIENCE · FULL-STACK DEVELOPER

                </div>

                <h2>

                  Curious by nature.

                  <br />

                  <em>Builder by practice.</em>

                </h2>

                <p>

                  I like understanding how things work — then turning that

                  understanding into useful, thoughtful applications.

                </p>

                <div className="hero-actions">

                  <button className="primary-button" onClick={() => go(2)}>

                    EXPLORE MY WORK <ArrowUpRight size={15} />

                  </button>

                  <button className="text-button" onClick={() => go(1)}>

                    A LITTLE ABOUT ME <ChevronRight size={15} />

                  </button>

                </div>

              </motion.div>

            )}

            {chapter === 1 && (

              <motion.div

                className="info-panel"

                initial={{ opacity: 0, y: 20 }}

                animate={{ opacity: 1, y: 0 }}

              >

                <div className="panel-label">01 — ABOUT</div>

                <h2>

                  Learning how things work.

                  <br />

                  <em>Building what could.</em>

                </h2>

                <p>

                  I'm Anushka, a Computer Science student and developer

                  interested in the systems behind the interfaces — how

                  applications are structured, how data moves, and how

                  thoughtful engineering can make everyday experiences better.

                </p>

                <p>

                  I've worked across full-stack applications, browser extensions

                  and interactive 3D environments. I'm currently exploring

                  agentic AI, system design, data structures and algorithms, and

                  computer networks.

                </p>

                <div className="facts-row">

                  <div>

                    <b>01</b>

                    <span>

                      Full-stack

                      <br />

                      development

                    </span>

                  </div>

                  <div>

                    <b>02</b>

                    <span>

                      Product

                      <br />

                      thinking

                    </span>

                  </div>

                  <div>

                    <b>03</b>

                    <span>

                      Learning across

                      <br />

                      the stack

                    </span>

                  </div>

                </div>

                <div className="about-subhead">TECHNICAL TOOLKIT</div>

                <div className="skill-grid">

                  {skills.map(([group, items]) => (

                    <div className="skill-group" key={group}>

                      <b>{group}</b>

                      <div>

                        {items.map((item) => (

                          <span key={item}>{item}</span>

                        ))}

                      </div>

                    </div>

                  ))}

                </div>

                <div className="about-subhead education-heading">EDUCATION</div>

                <div className="education-row">

                  <div>

                    <b>TY B.Sc. Computer Science</b>

                    <span>

                      Thakur College of Science and Commerce · Current

                    </span>

                  </div>

                  <div>

                    <b>SY B.Sc. · Thakur College</b>

                    <span>Sem 3: 9.0 CGPA · Sem 4: 8.09 CGPA</span>

                  </div>

                  <div>

                    <b>FY B.Sc. · Royal College</b>

                    <span>Sem 1: 9.45 CGPA · Sem 2: 9.55 CGPA</span>

                  </div>

                  <div>

                    <b>Earlier academics</b>

                    <span>HSC: 89.5% · SSC: 90%</span>

                  </div>

                </div>

                <button className="primary-button" onClick={() => go(2)}>

                  VIEW SELECTED WORK <ArrowUpRight size={15} />

                </button>

              </motion.div>

            )}

            {chapter === 2 && (

              <motion.div

                className="work-panel"

                initial={{ opacity: 0, y: 18 }}

                animate={{ opacity: 1, y: 0 }}

              >

                <div className="panel-label">

                  02 — SELECTED PROJECTS 

                </div>

                <div className="project-list">

                  {projects.map((p) => (

                    <button

                      key={p.id}

                      className="project-row"

                      onClick={() => setPanel(p.id)}

                    >

                      <span className="project-no">{p.n}</span>

                      <span className="project-main">

                        <b>{p.name}</b>

                        <small>{p.kind}</small>

                      </span>

                      <span className="project-status">{p.status}</span>

                      <ArrowUpRight className="project-arrow" size={18} />

                    </button>

                  ))}

                </div>

                <div className="panel-footnote">

                  SELECTED WORK | CONFIDENTIAL INTERNSHIP SYSTEMS ARE NOT SHOWN

                </div>

              </motion.div>

            )}

            {chapter === 3 && (

              <motion.div

                className="info-panel experience-panel"

                initial={{ opacity: 0, y: 18 }}

                animate={{ opacity: 1, y: 0 }}

              >

                <div className="panel-label">03 — EXPERIENCE</div>

                <h2>

                  Learning through

                  <br />

                  <em>real work.</em>

                </h2>

                <div className="timeline">

                  {experience.map((e) => (

                    <div className="timeline-item" key={e.org}>

                      <div className="timeline-date">{e.date}</div>

                      <div>

                        <h3>{e.role}</h3>

                        <b>{e.org}</b>

                        <p>{e.desc}</p>

                        <div className="mini-tags">

                          {e.tags.map((t) => (

                            <span key={t}>{t}</span>

                          ))}

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </motion.div>

            )}

            {chapter === 4 && (

              <motion.div

                className="info-panel journey-panel"

                initial={{ opacity: 0, y: 18 }}

                animate={{ opacity: 1, y: 0 }}

              >

                <div className="panel-label">04 — LEADERSHIP & RECOGNITION</div>

                <h2>

                  More than

                  <br />

                  <em>the code.</em>

                </h2>

                <div className="highlight-list">

                  {highlights.map((h) => (

                    <article key={h.title}>

                      <time>{h.year}</time>

                      <div>

                        <h3>{h.title}</h3>

                        <b>{h.role}</b>

                        <p>{h.desc}</p>

                      </div>

                    </article>

                  ))}

                </div>

                <div className="leadership-note">

                  <span>COMMUNITY</span> Tech Nexus | Coding Club | Thakur

                  Placement Cell

                </div>

              </motion.div>

            )}

            {chapter === 5 && (

              <motion.div

                className="info-panel contact-panel"

                initial={{ opacity: 0, y: 18 }}

                animate={{ opacity: 1, y: 0 }}

              >

                <div className="panel-label">05 — CONTACT</div>

                <h2>

                  Have something

                  <br />

                  <em>worth building?</em>

                </h2>

                <p>

                  I'm open to internship and entry-level opportunities,

                  collaborations and conversations about thoughtful software.

                </p>

                <a

                  className="contact-email"

                  href="mailto:chaubeyanush2006\@gmail.com"

                >

                  chaubeyanush2006\@gmail.com <ArrowUpRight size={17} />

                </a>

                <div className="social-links">

                  <a href="/docs/Anushka-Choubey-Resume.pdf" download>

                    <Download size={16} /> RESUME

                  </a>

                  <a

                    href="https\://github.com/Anushka-hiyu"

                    target="_blank"

                    rel="noreferrer"

                  >

                    <Github size={16} /> GITHUB

                  </a>

                  <a

                    href="https\://www.linkedin.com/in/chaturvedi-080495297/"

                    target="_blank"

                    rel="noreferrer"

                  >

                    <Linkedin size={16} /> LINKEDIN

                  </a>

                </div>

                <div className="contact-note">

                  OPEN TO INTERNSHIPS | ENTRY-LEVEL ROLES | COLLABORATIONS

                </div>

              </motion.div>

            )}

          </div>

          <div className="world-controls">

            <button

              onClick={() => go(Math.max(0, chapter - 1))}

              disabled={chapter === 0}

              aria-label="Previous scene"

            >

              ↑

            </button>

            <div className="progress-track">

              <span style={{ height: `${((chapter + 1) / 6) * 100}%` }} />

            </div>

            <button

              onClick={() => go(Math.min(5, chapter + 1))}

              disabled={chapter === 5}

              aria-label="Next scene"

            >

              ↓

            </button>

          </div>

          <div className="bottom-right">

            <div className="audio-widget">

              <button

                className="sound-control"

                onClick={toggleMusic}

                aria-label={

                  music ? "Pause background music" : "Play background music"

                }

              >

                {music ? <Volume2 size={16} /> : <VolumeX size={16} />}{" "}

                <span>{music ? "MUSIC ON" : "MUSIC OFF"}</span>

              </button>

              <input

                aria-label="Background music volume"

                type="range"

                min="0"

                max="0.3"

                step="0.01"

                value={volume}

                onChange={(e) => setVolume(Number(e.target.value))}

              />

            </div>

            <span className="bottom-divider" />

            <span>SCROLL / ↑ ↓</span>

          </div>

          {musicError && (

            <div className="audio-warning">

              Audio couldn't start. Use the music control to try again.

            </div>

          )}

          <AnimatePresence>

            {panel && selected && (

              <motion.div

                className="detail-backdrop"

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                exit={{ opacity: 0 }}

                onClick={() => setPanel("")}

              >

                <motion.article

                  className="detail-card"

                  initial={{ x: 45, opacity: 0 }}

                  animate={{ x: 0, opacity: 1 }}

                  exit={{ x: 45, opacity: 0 }}

                  onClick={(e) => e.stopPropagation()}

                >

                  <button

                    className="detail-close"

                    onClick={() => setPanel("")}

                    aria-label="Close project"

                  >

                    <X />

                  </button>

                  <div className="panel-label">

                    PROJECT {selected.n} <span>{selected.status}</span>

                  </div>

                  <h2>{selected.name}</h2>

                  <div className="detail-kind">{selected.kind}</div>

                  <p>{selected.desc}</p>

                  <h4>THE IDEA</h4>

                  <p>{selected.problem}</p>

                  <h4>APPROACH</h4>

                  <p>{selected.approach}</p>

                  <h4>MY CONTRIBUTION</h4>

                  <p>{selected.contribution}</p>

                  <h4>TECHNOLOGIES & METHODS</h4>

                  <div className="tag-list">

                    {selected.stack.map((s) => (

                      <span key={s}>{s}</span>

                    ))}

                  </div>

                  <p className="detail-note">{selected.note}</p>

                  {selected.url && (

                    <a

                      className="primary-button inline"

                      href={selected.url}

                      target="_blank"

                      rel="noreferrer"

                    >

                      VIEW REPOSITORY <ArrowUpRight size={15} />

                    </a>

                  )}

                </motion.article>

              </motion.div>

            )}

          </AnimatePresence>

        </>

      )}


    </main>

  );

}

createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <App />

  </React.StrictMode>,

);
