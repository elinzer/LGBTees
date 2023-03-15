import './Footer.css'


const Footer = () => {
    return (
        <footer class="bg-dark py-4 footer">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"><div class="small m-0 text-white">All t-shirt images are property of their respective retailers. No copyright infringement intended.</div></div>
                    <div class="col-auto">
                        <a class="link-light small" href="/about">About</a>
                        {/* <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="#!">Terms</a> */}
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="mailto:elinzerconnects@gmail.com">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
