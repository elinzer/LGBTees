import PicCarousel from "./Carousel";

const Splash = () => {
    return (
        <div>
            <header class="bg-dark py-5">
                <div class="container px-5">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-white mb-2">For all your gay tee needs</h1>
                                <p class="lead fw-normal text-white-50 mb-4">Do you love T-shirts? Do you love the LGBTQ community? Find a shirt that speaks to you and rep the community in style!</p>
                                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a class="btn btn-primary btn-lg px-4 me-sm-3" href="/tees">Tee Time!</a>
                                    <a class="btn btn-outline-light btn-lg px-4" href="/about">What's this about?</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><PicCarousel /></div>
                    </div>
                </div>
            </header>

        </div>
    )

}

export default Splash;
