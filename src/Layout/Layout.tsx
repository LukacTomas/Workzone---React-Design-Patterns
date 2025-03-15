import { PropsWithChildren } from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { SiSiemens } from 'react-icons/si';
import './Layout.css';

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="layout">
      <div className="left-navigation">
        <div className="left-navigation-content">
          <NavigationContent />
        </div>
      </div>
      <div className="main-container">
        <div className="top-navigation">
          <Heading />
        </div>
        <div className="main-content">
          {children}
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <h1>Workzone - React Design Patterns</h1>
  );
}

const naviationItems = [
  {
    id: 2,
    href: 'https://www.siemens-healthineers.com/sk/development-center/summer-dev-academy',
    icon: <SiSiemens />,
  },
  {
    id: 1,
    href: 'https://github.com/LukacTomas/Workzone---React-Design-Patterns',
    icon: <FaGithubAlt />,
  },
];

function NavigationContent() {
  return (
    <ul>
      {
        naviationItems.map((item) => (
          <li key={item.id} className="nav-li">
            <a target="_blank" href={item.href}>{item.icon}</a>
          </li>
        ))
      }
    </ul>
  );
}