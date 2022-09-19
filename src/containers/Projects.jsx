import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import ProjectSlider from '../components/Projects/ProjectSlider';

const Projects = () => {
    return (
        <section id='projects' className='pt-16'>
            <SectionTitle title="Projects"></SectionTitle>
            <ProjectSlider></ProjectSlider>
        </section>
    );
};

export default Projects;