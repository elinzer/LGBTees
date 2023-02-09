import PicCarousel from "./Carousel";
import "./Splash.css";

const Splash = () => {
    return (
        <div>
            <header class="bg-dark py-5">
                <div class="container px-5">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-white mb-2">Welcome to <span className="lgbt-splash">LGBTees!</span></h1>
                                <p class="lead fw-normal text-white-50 mb-4">Do you love T-shirts? Do you love the LGBTQ community? Find a shirt that speaks to you and rep the community in style!</p>
                                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a class="btn btn-primary btn-lg px-4 me-sm-3" href="/tees">Tee Time!</a>
                                    <a class="btn btn-outline-light btn-lg px-4" href="/about">About LGBTees</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><PicCarousel /></div>
                    </div>
                </div>
            </header>
            <section class="py-5 bg-light">
                <div class="container px-5">
                    <div class="row gx-5">
                        <div class="col-xl-8">
                            <h2 class="fs-4 mb-4">Don't need a shirt but still want to support your LGBTQ fam? Donate directly to one of these orgs doing critical work for the community!</h2>
                            <div class="mb-4">
                                <a class="link-dark" href="https://transgenderlawcenter.org/about" target={"_blank"}><h4>Transgender Law Center</h4></a>
                                <div class='fs-5'>The largest national trans-led organization advocating for a world in which all people are free to define themselves and their futures.</div>
                            </div>
                            <div class="mb-4">
                                <a class="link-dark" href="https://bravespacealliance.org/who-we-are/mission-values/" target={"_blank"}><h4>Brave Space Alliance</h4></a>
                                <div class='fs-5'>The first Black-led, trans-led LGBTQ+ center located on the South Side of Chicago.</div>
                            </div>
                            <div class="mb-4">
                                <a class="link-dark" href="https://www.thetrevorproject.org/explore/"><h4>The Trevor Project</h4></a>
                                <div class='fs-5'>The Trevor Project's mission is to end suicide among LGBTQ young people.</div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Splash;
