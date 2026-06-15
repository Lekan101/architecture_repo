import Image from "next/image";
import styles from "./page.module.css"

export default function homePage() {
    return (
        <div className={styles.wrapper}>
            {/* Header Container */}
            <header className={styles.headerContainer}>
                <div className={styles.headerInner}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#page">Pages</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#shop">Shop</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#landing">Landing</a></li>
                    </ul>
                    <div>
                        <Image
                            className="dark:invert"
                            src="/logo.png"
                            alt="Next.js logo"
                            width={213}
                            height={20}
                            priority
                        />
                    </div>
                </div>
                <div className={styles.headerInner2}>
                    <h6>Willie house in Bergen</h6>
                    <p>Architecture <b>heritade</b></p>
                </div>
            </header>
            {/* Elementor1 */}
            <section className={styles.home} id="home">
                <ul>
                    <li>Architect studio</li>
                </ul>
                <div className={styles.elementor1Top}>
                    <p>Architects excited about beauty, affordability sustainability materialsfor every project and person</p>
                    <div>
                        <Image
                            className="dark:invert"
                            src="/h1-img-01.jpg"
                            alt="Next.js logo"
                            width={708}
                            height={354}
                            priority
                        />
                    </div>
                </div>
                <div className={styles.elementor1Bottom}>
                    <div className={styles.elementor1BottomP}>
                        <p>Lorem, ipsum dolor in.</p>
                        <p>Lorem ipsum dolor siting</p>
                        <p>Lorem ipsum dolor sit, amet consecte</p>
                    </div>
                    <div>
                        <h6>Urban Exteriors</h6>
                        <p>Purus sit amet vol utpat con sequat mauris nunc congue. Sed id s emper risus in hend rerit. Facilisi etiam dig nissim diam quis enim. Quis auctor.</p>
                    </div>
                    <div>
                        <h6>Cityscapes Buildings</h6>
                        <p>Purus sit amet vol utpat con sequat mauris nunc congue. Sed id s emper risus in hend rerit. Facilisi etiam dig nissim diam quis enim. Quis auctor.</p>
                    </div>
                </div>
            </section>
            {/* Elementor2 */}
            <section className={styles.page} id="page">
                <div className={styles.elementor2Element}>
                    <div className={styles.elementor2btm}>
                        <ul>
                            <li>Our Work</li>
                        </ul>
                        <div>
                            <h5>Nomus Art House</h5>
                            <p>Wellness</p>
                        </div>
                    </div>
                    <div className={styles.elementor2Img}>
                        <Image
                            className="dark:invert"
                            src="/h1-port-img-02.jpg"
                            alt="Next.js logo"
                            width={708}
                            height={354}
                            priority
                        />

                        <Image
                            className="dark:invert"
                            src="/h1-port-img-03-1.jpg"
                            alt="Next.js logo"
                            width={708}
                            height={354}
                            priority
                        />
                    </div>
                </div>
            </section>
            {/* Elementor3 */}
            <section className={styles.portfolio} id="portfolio">
                <div className={styles.elementor3Inner}>
                    <div className={styles.elementor3Inners}>

                        <div className={styles.elementorInner}>

                        </div>
                        <div className={styles.elementorInner}>

                        </div>
                        <div className={styles.elementorInner}>

                        </div>
                        <div className={styles.elementorInner}>

                        </div>
                    </div>
                    <div className={styles.elementorInnerImg}>
                        <div>
                            <Image
                                className="dark:invert"
                                src="/h1-img-07.jpg"
                                alt="Next.js logo"
                                width={608}
                                height={204}
                                priority
                            />
                        </div>
                        <p>Lorem ipsum dolor sit amet, cons ectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                    </div>
                </div>
            </section>
            {/* Elementor4 */}
            <section className={styles.shop} id="shop">
                {/* <div>
                    <Image
                        className="dark:invert"
                        src="/section.elementor-section.jpg"
                        alt="Next.js logo"
                        width={608}
                        height={204}
                        priority
                    />
                </div> */}
                <p>The whimsical feel of Villa Esther begins <br /> with the Neo-Modern gateway in the <br />style of Le Corbuser  Villa Savoye.</p>
            </section>
            {/* Elementor5 */}
            <section className={styles.blog} id="blog">
                <div className={styles.elementor5content}>

                </div>
                <div className={styles.elementor5Team}>
                    <div>
                        <Image
                            className="dark:invert"
                            src="/h1-team-img-01.jpg"
                            alt="Next.js logo"
                            width={250}
                            height={250}
                            priority
                        />
                    </div>
                    <div className={styles.elementor5TeamName}>
                        <h5>Robert Jhonson</h5>
                        <p>CEO/ ARCHITECT</p>
                    </div>
                    <div>
                        <Image
                            className="dark:invert"
                            src="/h1-team-img-02.jpg"
                            alt="Next.js logo"
                            width={250}
                            height={250}
                            priority
                        />
                    </div>
                    <div className={styles.elementor5TeamName}>
                        <h5>Aida Betul</h5>
                        <p>MAIN CONTRACTOR</p>
                    </div>
                    <div className={styles.elementor5Team3}>
                        <p>black color</p>
                    </div>
                    <div className={styles.elementor5Team4}>

                    </div>
                    <div>
                        <Image
                            className="dark:invert"
                            src="/h1-team-img-03.jpg"
                            alt="Next.js logo"
                            width={250}
                            height={250}
                            priority
                        />
                    </div>
                    <div className={styles.elementor5TeamName}>
                        <h5>Rebecca Wales</h5>
                        <p>ARCHITECT</p>
                    </div>
                    <div>
                        <Image
                            className="dark:invert"
                            src="/h1-team-img-04.jpg"
                            alt="Next.js logo"
                            width={250}
                            height={250}
                            priority
                        />
                    </div>
                    <div className={styles.elementor5TeamName}>
                        <h5>Guillermo Medici</h5>
                        <p>PRODUCT DESIGNER</p>
                    </div>
                </div>
                <div className={styles.elementor5content}></div>
            </section>
            {/* Elementor6 */}
            <section className={styles.elementor6}>
                <h6>Lorem ipsum justo eget magna. Qui varius quam quisque id. Amet justo donec enim diam vulputate ut pharetra sit. Nunc eget lorem nus sed mas.</h6>
                <p>Anna Johnson, Architect / green projects</p>
                <h5>___ <b>_____</b> ___</h5>
            </section>
            {/* Elementor7 */}
            <section className={styles.landing} id="landing">
                <div className={styles.elementor7content}>
                    <Image
                        className="dark:invert"
                        src="/blog-4.jpg"
                        alt="Next.js logo"
                        width={433}
                        height={302}
                        priority
                    />
                    <h6>Studio Hiroshi Cuisine And Bar Innovative Interior Design</h6>
                    <p>interviews <b>December 14, 2022</b></p>
                </div>
                <div className={styles.elementor7content}>
                    <Image
                        className="dark:invert"
                        src="/blog-3.jpg"
                        alt="Next.js logo"
                        width={433}
                        height={522}
                        priority
                    />
                    <h6>Zara Madid Speaking About Her Influence And Creative Vision</h6>
                    <p>interviews <b>December 14, 2022</b></p>
                </div>
                <div className={styles.elementor7content}>
                    <Image
                        className="dark:invert"
                        src="/blog-2.jpg"
                        alt="Next.js logo"
                        width={433}
                        height={302}
                        priority
                    />
                    <h6>Glass Wall Facade And How To Design It With AluProfiles</h6>
                    <p>interviews <b>December 14, 2022</b></p>
                </div>
                <div className={styles.elementor7content}>
                    <Image
                        className="dark:invert"
                        src="/blog-1.jpg"
                        alt="Next.js logo"
                        width={433}
                        height={522}
                        priority
                    />
                    <h6>Coexisting With The Landscape Is The Main Rule</h6>
                    <p>interviews <b>December 14, 2022</b></p>
                </div>
            </section>
            {/* Elementor8 */}
            <section className={styles.elementor8}>
                <p>Lets make something beautiful together</p>
                <button>black</button>
            </section><hr />
            {/* Elementor9 */}
            <footer className={styles.elementor9}>
                <div className={styles.elementor9top}>
                    <div>
                        <Image
                            className="dark:invert"
                            src="/hiroshi-logo-big-2.png"
                            alt="Next.js logo"
                            width={100}
                            height={20}
                            priority
                        />
                    </div>
                    <div></div>
                    <div>
                        <h1>Social</h1>
                        <p>Lorem, ipsum dolor.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem.</p>
                    </div>
                    <div>
                        <h1>Info</h1>
                        <p>Lorem.</p>
                        <p>Lorem ipsum dolor sit intro.</p>
                        <p>Lorem, ipsum dolor.</p>
                    </div>
                    <div>
                        <h1>Contact</h1>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem, ipsum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div className={styles.elementor9bottom}>
                    <div>
                        <h1>© 2023 <b>qodeinteractive</b></h1>
                    </div>
                </div>
            </footer>
            {/* End of Wrapper */}
        </div>
    )
}