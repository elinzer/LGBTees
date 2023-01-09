import './About.css'
import profcrop from '../../imgs/profcrop.png'

const About = () => {
    return (
        <body class="d-flex flex-column">
            <main class="flex-shrink-0">
                {/* <!-- Navigation--> */}
                {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container px-5">
                    <a class="navbar-brand" href="index.html">Start Bootstrap</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
                            <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
                            <li class="nav-item"><a class="nav-link" href="pricing.html">Pricing</a></li>
                            <li class="nav-item"><a class="nav-link" href="faq.html">FAQ</a></li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                                    <li><a class="dropdown-item" href="blog-home.html">Blog Home</a></li>
                                    <li><a class="dropdown-item" href="blog-post.html">Blog Post</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                                    <li><a class="dropdown-item" href="portfolio-overview.html">Portfolio Overview</a></li>
                                    <li><a class="dropdown-item" href="portfolio-item.html">Portfolio Item</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
                {/* <!-- Header--> */}
                <header class="py-5">
                    <div class="container px-5">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 col-xxl-6">
                                <div class="text-center my-5">
                                    <h1 class="fw-bolder mb-3">Why LGBTees?</h1>
                                    <p class="lead fw-normal text-muted mb-4">LGBTees is a passion project built to show off my skills and teach myself new ones, all while highlighting some of my favorite things: queer-owned businesses and t-shirts!</p>
                                    {/* <a class="btn btn-primary btn-lg" href="#scroll-target">Read our story</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* <!-- About section one--> */}
                <section class="py-5 bg-light" id="scroll-target">
                    <div class="container px-5 my-5">
                        <div class="row gx-5 align-items-center">
                            <div class="col-lg-6 indv-icon tech-list">
                                <i class="devicon-javascript-plain"></i>
                                <i class="devicon-express-original colored"></i>
                                <i class="devicon-sequelize-plain-wordmark"></i>
                            </div>
                            <div class="col-lg-6">
                                <h2 class="fw-bolder">The Backend</h2>
                                <p class="lead fw-normal text-muted mb-0">Built with JavaScript, Express, and Sequelize</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- About section two--> */}
                <section class="py-5">
                    <div class="container px-5 my-5">
                        <div class="row gx-5 align-items-center">
                            <div class="col-lg-6 order-first order-lg-last indv-icon tech-list">
                            <i className="devicon-react-original-wordmark"></i>
                            <i class="devicon-redux-original"></i>
                            <i class="devicon-bootstrap-plain-wordmark"></i>
                            {/* <i class="devicon-html5-plain-wordmark"></i>
                            <i class="devicon-css3-plain-wordmark"></i> */}
                            </div>
                            <div class="col-lg-6">
                                <h2 class="fw-bolder">The Frontend</h2>
                                <p class="lead fw-normal text-muted mb-0">Built with React, Redux, and Bootstrap</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Team members section--> */}
                <section class="py-5 bg-light">
                    <div class="container px-5 my-5">
                        <div class="text-center">
                            <h2 class="fw-bolder">Meet the Dev</h2>
                            {/* <p class="lead fw-normal text-muted mb-5">Dedicated to quality and your success</p> */}
                        </div>
                        <div class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                            <div class="col mb-5 mb-5 mb-xl-0">
                                <div class="text-center">
                                    <img class="img-fluid rounded-circle mb-4 px-4" src={profcrop} alt="..." />
                                    <h5 class="fw-bolder">El Linzer</h5>
                                    <div class="fst-italic text-muted">Software Engineer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* <!-- Footer--> */}
            {/* <footer class="bg-dark py-4 mt-auto">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; LGBTees</div></div>
                    <div class="col-auto">
                        <a class="link-light small" href="#!">Privacy</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="#!">Terms</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="#!">Contact</a>
                    </div>
                </div>
            </div>
        </footer> */}
            {/* <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
            {/* <script src="js/scripts.js"></script> */}
        </body>
    )
}

export default About;
