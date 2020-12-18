import React from "react";
import { motion } from "framer-motion"



class Header extends React.Component {
  render() {
    return (
      <div className="header-c">
        <section id="header">
          <div className="inner ">
            <motion.div
              initial={{ opacity: 0, y: '-100vh' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, stiffness: 15, type: "spring" }}
            >
              <motion.h1
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Hi, I'm <strong>Justin</strong> De Ocampo
            </motion.h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8 }}
            >
              <motion.h3
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Software Engineer | Undergraduate Computer Science Student at ASU
          </motion.h3>
            </motion.div>

            <motion.ul
              className="icons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.8 }}
            >
              <motion.li
                whileHover={{
                  scale: 1.4,
                  textShadow: "0px 0px 5px rgb(255,255,255)",
                }}
              >
                <a target="_blank" href="https://www.linkedin.com/in/justin-de-ocampo/" className="icon brands alt fa-linkedin">
                  <span className="label">Linkedin</span>
                </a>
              </motion.li>
              <motion.li whileHover={{
                scale: 1.4,
                textShadow: "0px 0px 5px rgb(255,255,255)",
              }}>
                <a target="_blank" href="https://github.com/jdeocampo99" className="icon brands alt fa-github">
                  <span className="label">GitHub</span>
                </a>
              </motion.li>
              <motion.li whileHover={{
                scale: 1.4,
                textShadow: "0px 0px 5px rgb(255,255,255)",
              }}>
                <a target="_blank" href="mailto:justindeocampo99@gmail.com" className="icon solid alt fa-envelope">
                  <span className="label">Email</span>
                </a>
              </motion.li>
            </motion.ul>

            <motion.ul
              className="actions special"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}
            >
              <li>
                <a href="#one" className="button scrolly">
                  Introduction
              </a>
              </li>
            </motion.ul>
          </div>
        </section>
      </div >
    );
  }
}

export default Header;
