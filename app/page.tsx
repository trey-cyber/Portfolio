'use client'

import { motion } from 'framer-motion'
import Terminal from '@/components/Terminal'

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4 text-glow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-terminal-green">K0rh4cks</span>
              <span className="text-terminal-cyan animate-blink">_</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-terminal-green/80 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Junior Penetration Tester
            </motion.p>
            <motion.p
              className="text-terminal-green/60 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-terminal-cyan">&gt;</span> Finding vulnerabilities. Strengthening defenses. Securing the digital world.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Terminal />
          </motion.div>

          <motion.div
            className="mt-12 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="#about"
              className="px-6 py-3 border border-terminal-green/50 text-terminal-green hover:bg-terminal-green/10 transition-all hover:text-glow-sm"
            >
              Explore
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-terminal-green/10 border border-terminal-green text-terminal-green hover:bg-terminal-green/20 transition-all hover:text-glow-sm"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-8 text-terminal-green text-glow-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-terminal-cyan">[root@korax]</span># whoami
          </motion.h2>
          <motion.div
            className="prose prose-invert max-w-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-terminal-green/90 text-lg mb-4">
              Hi! I'm <span className="text-terminal-cyan font-bold">Philemon Sakpani</span>, also known as{' '}
              <span className="text-terminal-green font-bold">K0rh4cks</span>. I'm a passionate cybersecurity professional
              specializing in penetration testing and bug bounty hunting.
            </p>
            <p className="text-terminal-green/80 mb-4">
              Currently working as a <span className="text-terminal-cyan">Bug Bounty Hunter</span>,
              I continuously sharpen my offensive security skills through hands-on practice, certifications, and real-world
              vulnerability research.
            </p>
            <p className="text-terminal-green/80 mb-4">
              My journey in cybersecurity focuses on understanding attack vectors, exploiting vulnerabilities responsibly,
              and helping organizations strengthen their security posture. I'm particularly interested in web application
              security, network penetration testing, Active Directory attacks, and privilege escalation techniques.
            </p>
            <div className="mt-8 p-4 border-l-4 border-terminal-green/50 bg-terminal-green/5">
              <p className="text-terminal-green/90 font-mono text-sm">
                <span className="text-terminal-cyan">$</span> cat mission.txt
              </p>
              <p className="text-terminal-green/80 mt-2">
                To continuously learn, practice, and contribute to the cybersecurity community while helping organizations
                identify and remediate security vulnerabilities before malicious actors can exploit them.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-terminal-bg/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-terminal-green text-glow-sm text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-terminal-cyan">[root@korax]</span># ls -la skills/
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="border border-terminal-green/30 bg-terminal-bg/80 p-6 hover:border-terminal-green/60 transition-all hover:bg-terminal-green/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-terminal-cyan text-xl font-bold mb-4 flex items-center gap-2">
                  <span>{skill.icon}</span> {skill.title}
                </h3>
                <ul className="space-y-2 text-terminal-green/80 text-sm">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-terminal-green">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-terminal-green text-glow-sm text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-terminal-cyan">[root@korax]</span># cat projects/
          </motion.h2>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="border border-terminal-green/30 bg-terminal-bg/80 p-8 hover:border-terminal-green/60 transition-all"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-terminal-cyan text-2xl font-bold mb-2 flex items-center gap-2">
                  <span>{project.icon}</span> {project.title}
                </h3>
                <p className="text-terminal-green/60 text-sm mb-4">
                  {project.role} | {project.stack}
                </p>
                <p className="text-terminal-green/80 mb-4">{project.description}</p>
                <div className="mt-4">
                  <h4 className="text-terminal-green text-sm font-bold mb-2">Key Learnings:</h4>
                  <ul className="space-y-1 text-terminal-green/70 text-sm">
                    {project.learnings.map((learning) => (
                      <li key={learning} className="flex items-start gap-2">
                        <span className="text-terminal-cyan">→</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-terminal-bg/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-terminal-green text-glow-sm text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-terminal-cyan">[root@korax]</span># cat certifications.txt
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                className="border border-terminal-green/30 bg-terminal-bg/80 p-6 text-center hover:border-terminal-green/60 transition-all hover:bg-terminal-green/5"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-terminal-cyan text-xl font-bold mb-2">{cert.name}</h3>
                <p className="text-terminal-green/60 text-sm mb-2">{cert.issuer}</p>
                <span className={`text-xs px-3 py-1 ${
                  cert.status === 'Completed' 
                    ? 'bg-terminal-green/20 text-terminal-green border border-terminal-green/50'
                    : 'bg-terminal-blue/20 text-terminal-blue border border-terminal-blue/50'
                }`}>
                  {cert.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-8 text-terminal-green text-glow-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-terminal-cyan">[root@korax]</span># contact
          </motion.h2>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-terminal-green/80 text-lg">
              Interested in collaborating on security research or penetration testing projects?
            </p>
            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://linkedin.com/in/philemon-sakpani"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-terminal-green/50 text-terminal-green hover:bg-terminal-green/10 transition-all hover:text-glow-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/trey-cyber"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-terminal-green/50 text-terminal-green hover:bg-terminal-green/10 transition-all hover:text-glow-sm"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const skills = [
  {
    title: 'Web Application Pentesting',
    icon: '🌐',
    items: [
      'OWASP Top 10 (XSS, SQLi, IDOR, SSRF, etc.)',
      'Authentication & Session Management',
      'API Security Testing',
      'Manual & Automated Testing',
    ],
  },
  {
    title: 'Network Pentesting',
    icon: '🔍',
    items: [
      'Reconnaissance & Enumeration',
      'Exploitation & Post-Exploitation',
      'Lateral Movement',
      'Privilege Escalation',
    ],
  },
  {
    title: 'Active Directory',
    icon: '🛡️',
    items: [
      'BloodHound Analysis',
      'Kerberoasting & AS-REP Roasting',
      'DCSync Attacks',
      'ACL & GPO Abuse',
    ],
  },
  {
    title: 'Privilege Escalation',
    icon: '⬆️',
    items: [
      'Linux: SUID/SGID, PATH hijacking',
      'Windows: Token Impersonation, UAC bypass',
      'Kernel Exploitation',
      'Service Misconfigurations',
    ],
  },
  {
    title: 'Bug Bounty',
    icon: '💰',
    items: [
      'Burp Suite Workflow',
      'Subdomain Enumeration',
      'Automated Scanning (Nuclei, etc.)',
      'API Testing & Exploitation',
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: '⚙️',
    items: [
      'Burp Suite, OWASP ZAP, Nmap',
      'Metasploit, CrackMapExec, Impacket',
      'BloodHound, WinPEAS, LinPEAS',
      'Nuclei, ffuf, Gobuster',
    ],
  },
]

const projects = [
  {
    title: 'HTB CPTS Certification Journey',
    icon: '🎯',
    role: 'Offensive Security Trainee',
    stack: 'Penetration Testing | Active Directory | Post-Exploitation',
    description:
      'Embarked on the HTB CPTS journey to master practical penetration testing skills. Completed hands-on labs involving realistic Windows and Linux systems, focusing on internal network pentesting, Windows privilege escalation, Active Directory enumeration, and chaining multiple vulnerabilities to achieve domain or root access.',
    learnings: [
      'Real-world red teaming tactics and attack paths',
      'Advanced enumeration techniques (Snaffler, BloodHound, manual methods)',
      'Situational awareness and exploitation methodology',
      'Deep technical understanding of privilege escalation vectors',
    ],
  },
  {
    title: 'Secure Web Application Development',
    icon: '🛡️',
    role: 'Full-Stack Developer & Security Architect',
    stack: 'Next.js | JWT | Role-Based Access Control',
    description:
      'Built a full-stack web application with a strong focus on security. Implemented secure authentication and authorization flows, protected routes, secure cookie-based token storage (HttpOnly, Secure, SameSite=Strict), and role-based access control using server-side middleware.',
    learnings: [
      'Secure frontend–backend integration architecture',
      'Advanced JWT session handling and middleware protection',
      'Building modular, reusable UI components',
      'Role-based access in production environments',
    ],
  },
  {
    title: 'AWS Serverless Security Research',
    icon: '☁️',
    role: 'Cloud Security Researcher',
    stack: 'AWS Lambda | SES | API Gateway | IAM',
    description:
      'Designed and deployed a serverless email-sending service using AWS tools. The architecture implemented secure environment variable handling and IAM role separation following least-privilege principles. Researched potential security misconfigurations and attack vectors in serverless environments.',
    learnings: [
      'Serverless architecture design and event-driven computing',
      'Secure IAM policy design and permission scoping',
      'Real-world usage of AWS SES, Lambda, and API Gateway',
      'API security, deployment automation, and logging for observability',
    ],
  },
]

const certifications = [
  {
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    status: 'Completed',
    icon: '🔐',
  },
  {
    name: 'HTB Certified Penetration Tester',
    issuer: 'Hack The Box',
    status: 'In Progress',
    icon: '🎯',
  },
  {
    name: 'HTB Certified Bug Hunter',
    issuer: 'Hack The Box',
    status: 'In Progress',
    icon: '🐛',
  },
]

