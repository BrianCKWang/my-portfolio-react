import React from 'react';

function About() {

  return (
    <>
      <section className="hero-banner">
        <img src={require(`../../assets/images/cover/01-profile-pic.jpg`).default} alt="brian" />
        <div>
          <h2>Full Stack Developer</h2>
        </div>
      </section>
      <section className="page-section about-page" id="about">
        <h2>About Me</h2>
        <div>
          <p>
            Hi, the name is Brian.
          </p>
          <p>
            I am a self-learner, a problem solver, and an enthusiast of performance and efficiency. 
            I thrive on challenges and firmly believe in neuroplasticity. 
          </p>
          <p>
            With many years of experience working in an engineering environment,
            I can transform your application from idea to reality with timely manner.
            Let's work together to make your dream come true and this world a better place.
          </p>
          <p>
            Take a look at my work and let's connect!
          </p>
        </div>
      </section>

    </>
  );
}

export default About;