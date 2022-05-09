import React from 'react';
import { DiFirebase, DiJava, DiJavascript, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I have worked with a range of technologies throughout my journey.</SectionText>
    <List>
      <ListItem>
        <DiReact size={'3rem'}/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size={'3rem'}/>
        <ListContainer>
          <ListTitle>Data Structures & Algorithms</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Implementing <br/> Data Structures <br/> and 
            Algorithms in Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size={'3rem'}/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
