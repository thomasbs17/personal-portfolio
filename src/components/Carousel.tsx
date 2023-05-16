import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectList from './project_details.json'

function ProjectCarousel() {
  return (
    <Carousel>
      {Object.keys(projectList).map((projectName, i) =>
        <Carousel.Item>
          <img
            className="mx-auto d-block w-50"
            src={'project_logos/' + projectList[projectName]['img']}
            alt={'slide_' + i}
          />
          <Carousel.Caption style={{ background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(252,70,107,0) 100%)", marginTop: '100px' }}>
            <h3>{projectName}</h3>
            <p style={{ whiteSpace: 'pre' }}>{projectList[projectName]['description']}</p>
            <a href={projectList[projectName]['link']} target='_blank'>More details</a>
          </Carousel.Caption>
        </Carousel.Item>)}
    </Carousel>
  );
}

export default ProjectCarousel;