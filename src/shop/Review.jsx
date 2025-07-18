import React, { useState } from 'react'
import Ratting from "../components/Ratting"

const reviwtitle = "Add a Review";

let ReviewList = [
    {
        imgUrl: "/src/assets/images/instructor/01.jpg",
        imgAlt: "Client thumb",
        name: "Ganelon Boileau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/02.jpg",
        imgAlt: "Client thumb",
        name: "Morgana Cailot",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/03.jpg",
        imgAlt: "Client thumb",
        name: "Telford Bois",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/04.jpg",
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
];

const Review = () => {
    const [reviewShow, setReviewShow] = useState(true)
    return (
        <>
            <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
                <li className='desc' onClick={() => setReviewShow(!reviewShow)}>Description</li>
                <li className='rev' onClick={() => setReviewShow(!reviewShow)}>Reviews 4</li>
            </ul>
            <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
                <div className="review-showing">
                    <ul className='content lab-ul'>
                        {
                            ReviewList.map((review, i) => (
                                <li key={i}>
                                    <div className="post-thumb">
                                        <img src={review.imgUrl} alt="" />
                                    </div>
                                    <div className="post-content">
                                        <div className="entry-meta">
                                            <div className="posted-on">
                                                <a href="#">{review.name}</a>
                                                <p>{review.date}</p>
                                            </div>
                                        </div>
                                        <div className="entry-content">
                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="client-review">
                        <div className="review-form">
                            <div className="review-title">
                                <h5>{reviwtitle}</h5>
                            </div>
                            <form action="action" className='row'>
                                <div className="col-md-4 col-12"><input type="text" name='name' id='name' placeholder='Full Name' /></div>
                                <div className="col-md-4 col-12"><input type="email" name='email' id='name' placeholder='Your Email' /></div>
                                <div className="col-md-4 col-12">
                                    <div className="rating">
                                        <span className='me-2'>Your Rating</span>
                                        <Ratting />
                                    </div>
                                </div>
                                <div className="col-md-12 col-12">
                                    <textarea name="message" id="message" rows="8" placeholder='Type Here Message'></textarea>
                                </div>
                                <div className="col-12">
                                    <button className='dafault-button' type='submit'><span>Submit Review</span></button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                <div className="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ut vitae. Eligendi, nisi odit ut quaerat totam consectetur, voluptatem laborum odio quae quam aspernatur dicta. Facere quasi ab ratione vel quidem numquam illum, laboriosam recusandae aspernatur quam impedit? Asperiores sit repudiandae officiis, dolor dignissimos hic. Vel quia provident earum a officiis voluptate atque architecto amet porro molestias asperiores et quaerat omnis velit eaque alias non odio, repellendus nostrum, debitis in! Tenetur adipisci enim quisquam numquam.</p>
                    <div className="post-item">
                        <div className="post-thumb">
                            <img src="/src/assets/images/shop/01.jpg" alt="" />
                        </div>
                        <div className="post-content">
                            <ul className='lab-ul'>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                <li>Lorem ipsum dolor sit consectetur adipisicing.</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                                <li>Lorem ipsum dolor sit amet adipisicing.</li>
                                <li>Lorem ipsum dolor amet consectetur adipisicing.</li>
                                <li>Lorem dolor sit amet consectetur adipisicing.</li>
                            </ul>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil quasi maxime placeat voluptatem accusamus? Neque, labore non vel impedit quia minus consequatur, reiciendis porro, quibusdam officiis nesciunt cum consequuntur totam quisquam dolores. Accusamus at repellendus rem sit culpa architecto doloribus vero, facere, iste eveniet obcaecati fugit deserunt maiores, fugiat qui asperiores nobis voluptatem provident eum? Officiis temporibus velit amet, eius consequuntur rem iusto assumenda sequi nobis! Magnam minima officiis unde fuga, modi facere ex recusandae?</p>
                </div>
            </div>
        </>
    )
}

export default Review