import React from 'react';

function Resume() {
  const skillList = [
    {class:"skills-item skills-item-1-1", name: 'HTML', icon: 'html5.svg'},
    {class:"skills-item skills-item-2-1", name: 'CSS' , icon: 'css-5.svg'},
    {class:"skills-item skills-item-3-1", name: 'Javascript', icon: 'javascript.svg'},
    {class:"skills-item skills-item-4-1", name: 'Nodejs', icon: 'node-JS-01.svg'},
    {class:"skills-item skills-item-5-1", name: 'Bootstrap', icon: 'bootstrap-5-1.svg'},

    {class:"skills-item skills-item-1-2", name: 'MySQL', icon: 'mysql-5.svg'},
    {class:"skills-item skills-item-4-2", name: 'Sequelize', icon: 'sequelize.svg'},
    {class:"skills-item skills-item-2-2", name: 'MongoDB', icon: 'mongodb-icon-1.svg'},
    {class:"skills-item skills-item-3-2", name: 'npm', icon: 'npm-square-red-1.svg'},
    {class:"skills-item skills-item-5-2", name: 'React', icon: 'react-icon.svg'},

    {class:"skills-item skills-item-1-3", name: 'VisualStudioCode', icon: 'visual-studio-code-1.svg'},
    {class:"skills-item skills-item-4-3", name: 'VisualStudio', icon: 'visual-studio-2013.svg'},
    {class:"skills-item skills-item-2-3", name: 'Csharp', icon: 'c-Sharp-01.svg'},
    {class:"skills-item skills-item-3-3", name: 'Arduino', icon: 'arduino-1.svg'},
    {class:"skills-item skills-item-5-3", name: 'OpenCV', icon: 'openCV.svg'}
  ];


  return (
    <>
    <section className="my-5">
      <h1>Resume</h1>
      <a href="./assets/docs/Resume.pdf">Resume</a>
      <h2>My Skill Bag</h2>
      <div className="skills-container">
      {skillList.map((skill, i) => {
          return (
              <img 
              
              className={skill.class}
              title={skill.name}
              src={require(`../../assets/icons/${skill.icon}`).default} 
              alt={skill.name}
              key={i}
              />
          )
        })}
      </div>
    </section>
    </>
  );
}
export default Resume;