import React from 'react';
import styled from 'styled-components';
import home from '../../assets/icons/navigation/home.svg';
import all from '../../assets/icons/navigation/all.svg';
import more from '../../assets/icons/navigation/more.svg';
import notes from '../../assets/icons/navigation/notes.svg';
import add from '../../assets/icons/navigation/add.svg';

interface Navigation {
  name: string;
  icon: string;
}

export const navigation: Navigation[] = [
  {
    name: 'home',
    icon: home,
  },
  {
    name: 'all',
    icon: all,
  },
  {
    name: 'add',
    icon: add,
  },
  {
    name: 'notes',
    icon: notes,
  },
  {
    name: 'more',
    icon: more,
  },
];

const Wrapper = styled.div`
  /* styles for desktop version  */
  @media (max-width: 420px) {
  }
`;

const NavList = styled.ul`
  @media (max-width: 420px) {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.7rem 4rem;
    border-top: 2px solid var(--gray);
  }
`;

const BottomNav: React.FC = () => {
  return (
    <Wrapper>
      <NavList>
        {navigation.map((i) => (
          <li key={i.name}>
            <img src={i.icon} alt={i.name} />
          </li>
        ))}
      </NavList>
    </Wrapper>
  );
};

export default BottomNav;
