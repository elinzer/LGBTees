import './About.css'

const About = () => {
    return (
        <div>
            <h2>About LGBTees</h2>
            <div>
                LGBTees is a passion project built to show off my skills, teach myself new ones, all while highlighting some of my favorite things - queer businesses and t-shirts!
            </div>
            <h3>Built With</h3>
            <div className="tech-list">
                <div className='indv-icon'><i className="devicon-react-original-wordmark"></i></div>
                <div className='indv-icon'>
                    <i class="devicon-redux-original"></i>
                </div>
                <div className='indv-icon'>
                    <i class="devicon-express-original colored"></i>
                </div>
                <div className='indv-icon'>
                    <i class="devicon-sequelize-plain-wordmark"></i>
                </div>
                <div className='indv-icon'>
                    <i class="devicon-javascript-plain"></i>
                </div>
                <div className='indv-icon'>
                    <i class="devicon-bootstrap-plain-wordmark"></i>
                </div>
                <div className='indv-icon'><i class="devicon-html5-plain-wordmark"></i>
                </div>
                <div className='indv-icon'><i class="devicon-css3-plain-wordmark"></i>
                </div>
                <div className='indv-icon'><i class="devicon-heroku-original-wordmark"></i>
                </div>
            </div>
            <h2>About the Dev</h2>
            <div className='indv-icon'>
            <i class="devicon-github-original-wordmark"></i>
            </div>
            <div className='indv-icon'>
            <i class="devicon-linkedin-plain"></i>
            </div>
            <div>

            </div>
        </div>
    )
}

export default About;
