import React from 'react';

function Projects() {
  const projectList = [
    {
      name: 'RewardBank',
      a_class: 'grid-item reward-bank',
      link: 'https://rocky-dawn-18669.herokuapp.com/',
      skillList: "MVC/REST Api/JavaScript"
    },
    {
      name: 'SaveTV',
      a_class: 'grid-item SaveTV',
      link: 'https://utbootcampgroup2.github.io/SaveTV/',
      skillList: "JavaScript"
    },
    {
      name: 'Weather Dashboard',
      a_class: 'grid-item weather-dashboard',
      link: 'https://brianckwang.github.io/weather-dashboard/',
      skillList: "JavaScript/OpenWeatherMap"
    },
    {
      name: 'Day Scheduler',
      a_class: 'grid-item day-scheduler',
      link: 'https://brianckwang.github.io/simple-day-scheduler/',
      skillList: "JavaScript"
    },
    {
      name: 'Task Mater Pro',
      a_class: 'grid-item task-master',
      link: 'https://brianckwang.github.io/task-master-pro/',
      skillList: "JavaScript"
    },
    {
      name: 'Airhockey Robot',
      a_class: 'grid-item airhockey-table',
      link: 'https://github.com/BrianCKWang/airhockey-table-robot',
      skillList: "C#/EMGU CV.NET/Arduino"
    }
  ]
  return (
    <>
      <section className="page-section project-page" id="work">
        <div className="grid-container">
          {projectList.map((project, i) => {
            return (
              <a href={project.link} className={project.a_class} target="_blank" rel="noreferrer" key={'a' + i}>
                <div>
                  <h3>{project.name}</h3><span>{project.skillList}</span> 
                </div>
              </a>
            )
          })}

        </div>
      </section>
    </>
  );
}

export default Projects;