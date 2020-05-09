import React from "react";
import { Link } from "react-router-dom";


export const NavFooter = () => {
   return <footer>
          &copy; {new Date().getFullYear()} Copyright: Raymond Price
          <a target="_blank" rel="noreferrer noopener" href="https://github.com/darthbob88/">Github</a>
          <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/darthbob88">Twitter</a>
          <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/raymond-price-10a3746b/">Linkedin</a>
        </footer>
  };
