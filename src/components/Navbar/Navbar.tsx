import React, {ReactElement} from 'react';
import Container from './Container';
import LabelText from './LabelText';
import Row from '../common/Row';
import GithubLogo from './GithubLogo';
import Star from './Star';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';

interface NavbarProps {
  changeTheme: Function;
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps): ReactElement => {
  return (
    <Container>
      <LabelText>Graph Algorithms Visualizer</LabelText>
      <Row justifyContent="space-between" margin="0 18px">
        <ThemeSwitch changeTheme={props.changeTheme}></ThemeSwitch>
        <GithubLogo></GithubLogo>
        <Star></Star>
      </Row>
    </Container>
  );
};

export default Navbar;
