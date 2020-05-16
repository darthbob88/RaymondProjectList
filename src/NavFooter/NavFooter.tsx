import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavFooter.module.css"

export const NavFooter = () => {
   return <footer className={styles.NavFooter}>
          &copy; {new Date().getFullYear()} Copyright: Raymond Price
          <a target="_blank" rel="noreferrer noopener" href="https://github.com/darthbob88/">Github</a>
          <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/darthbob88">Twitter</a>
          <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/raymond-price-10a3746b/">Linkedin</a>
        </footer>
  };
