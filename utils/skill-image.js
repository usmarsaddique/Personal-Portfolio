import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import css from '../app/assets/svg/skills/css.svg';
import git from '../app/assets/svg/skills/git.svg';
import html from '../app/assets/svg/skills/html.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import react from '../app/assets/svg/skills/react.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';

// Node aur Express ke naye imports jo list mein add kiye hain
// import node from '../app/assets/svg/skills/node.svg';
// import express from '../app/assets/svg/skills/express.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    // case 'node':
    //   return node;
    // case 'express':
    //   return express;
    case 'mongodb':
      return mongoDB;
    case 'tailwind':
      return tailwind;
    case 'bootstrap':
      return bootstrap;
    case 'git':
      return git;
    default:
      break;
  }
}