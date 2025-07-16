import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';

const socialList = [
    {
        link: "#",
        iconName: "icofont-facebook",
        className: "facebook",
    },
    {
        link: "#",
        iconName: "icofont-twitter",
        className: "twitter",
    },
    {
        link: "#",
        iconName: "icofont-linkedin",
        className: "linkedin",
    },
    {
        link: "#",
        iconName: "icofont-instagram",
        className: "instagram",
    },
    {
        link: "#",
        iconName: "icofont-pinterest",
        className: "pinterest",
    },
];


const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList)
    const { id } = useParams()
    const result = blog.filter((b) => b.id === Number(id))
    // console.log(result[0]);
    return (
        <div>
            <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />
            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.id}>
                                                                <div className="post-thumb">
                                                                    <img src={item.imgUrl} alt="" className='w-100' />
                                                                </div>
                                                                <div className="post-content">
                                                                    <h3>{item.title}</h3>
                                                                    <div className="meta-post">
                                                                        <ul className='lab-ul'>
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sunt, sapiente ut corporis consequatur similique molestias dolorum et veniam consequuntur quasi deleniti eius commodi alias ipsa incidunt at laborum possimus autem ipsam doloremque atque quam ratione! Quia praesentium illum eius nemo iusto sunt quo saepe ipsum sint! Eius hic, voluptatibus quia fuga, rerum in deserunt animi doloribus exercitationem delectus consequuntur consequatur tenetur expedita nostrum laboriosam asperiores reiciendis. Optio modi repudiandae quia iste, commodi provident praesentium, quis dicta, animi voluptates numquam. Aliquid autem quam atque earum illum pariatur eligendi adipisci molestias ullam vero ratione dignissimos, quisquam consequatur omnis vel quidem asperiores!</p>
                                                                    <blockquote>
                                                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo facilis voluptas rerum. Reprehenderit odit cumque quia laudantium, harum eius saepe alias, recusandae enim nostrum voluptates quod possimus magni, facere veritatis! Sunt nesciunt quibusdam consequatur sapiente, expedita rerum necessitatibus ut architecto quod, odio quisquam. Voluptatum quisquam dignissimos molestiae nam quos numquam!</p>
                                                                        <cite><a href="#">...Melisa Hunter</a></cite>
                                                                    </blockquote>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsum quo explicabo corrupti tempore dolore magnam quis hic quasi a rem modi illo, necessitatibus ad maiores temporibus neque magni vel delectus! Illo laboriosam provident ratione non, consequatur alias neque iure modi mollitia natus aliquid eligendi qui excepturi nulla sapiente laborum ut eaque! Aperiam accusantium nobis omnis expedita consequatur illo doloribus ex enim dolore ea debitis, asperiores nisi deserunt ipsum iure at pariatur, in ipsa, explicabo et maxime hic. Consectetur aliquid nemo fuga delectus. Aperiam, dignissimos itaque quod id incidunt molestias earum, vero, expedita laudantium temporibus nihil minus fuga cupiditate provident!</p>
                                                                    <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum perspiciatis placeat soluta id asperiores neque nobis quidem eius veniam minus qui veritatis sint eveniet atque amet eaque molestiae quo aliquam quam, iusto nostrum, totam adipisci assumenda? Facere hic temporibus odio eum vitae! Illo vel maxime illum architecto fuga tenetur delectus mollitia nisi cum similique? Quis aperiam eos placeat ipsum. Laboriosam accusamus non deserunt nihil consequatur quae? Reprehenderit, esse labore! Eveniet quo reiciendis harum temporibus accusantium iusto. Nesciunt odit cum illo voluptas corporis eveniet atque assumenda cupiditate rerum mollitia, voluptatem omnis quia error, asperiores doloremque nemo molestias ad labore, animi beatae.</p>
                                                                    <div className="video-thumb">
                                                                        <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                        <a href="https://youtu.be/Kkht2mwSL_I?si=zw7_3ZTpLNawWek9" className='video-button popup'><i className='icofont-ui-play'></i></a>
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur expedita aperiam tempora est! Sapiente nulla consectetur, ipsam veniam asperiores doloribus quam commodi, laborum porro saepe quod ratione rerum voluptatem nisi magnam. Ad, perferendis cupiditate amet aliquam aperiam vero alias ipsum nobis cumque est maxime debitis tempora commodi tempore illo? Animi.</p>
                                                                    <div className="tags-section">
                                                                        <ul className='lab-ul tags'>
                                                                            <li><a href="#">Agency</a></li>
                                                                            <li><a href="#">Business</a></li>
                                                                            <li><a href="#">Personal</a></li>
                                                                        </ul>
                                                                        <ul className='lab-ul social-icons'>
                                                                            {
                                                                                socialList.map((val, i) => (
                                                                                    <li key={i}><a href="#" className={val.className}><i className={val.iconName}></i></a></li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="navigations-part">
                                                <div className="left">
                                                    <a href="#" className='prev'>
                                                        <i className='icofont-double-left'>Previous Article</i>
                                                    </a>
                                                    <a href="#" className='title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
                                                </div>
                                                <div className="right">
                                                    <a href="#" className='prev'>
                                                        <i className='icofont-double-right'>Next Article</i>
                                                    </a>
                                                    <a href="#" className='title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Tags />
                                <PopularPost />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog