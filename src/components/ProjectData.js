import React, { Component } from 'react';
import ProjectListing from "./Projects"
import ImgNav from './ImgNav';

class ProjectData extends Component {
    state = {}
    render() {

        let projectArray = [
            {
                "id": 1,
                "title": "delectus aut autem",
                "description": "blabla",
                "img": "http://jenniferthorpe.se/IMG_13372.jpg"
            },
            {
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "description": "blablabla",
                "img": "http://jenniferthorpe.se/IMG_13372.jpg"
            },
            {
                "id": 3,
                "title": "quis ut nam facilis et officia qui",
                "description": "blablabla",
                "img": "http://jenniferthorpe.se/IMG_13372.jpg"
            }
        ];

        return (
            <div>
                <ProjectListing
                    img={projectArray[0].img}
                    title={projectArray[0].title}
                    description={projectArray[0].description} />
                <ProjectListing
                    img={projectArray[1].img}
                    title={projectArray[1].title}
                    description={projectArray[1].description} />
                <ImgNav img={projectArray[0].img} />
            </div>
        );
    }
}

export default ProjectData;