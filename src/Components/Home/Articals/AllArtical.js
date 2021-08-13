import React from 'react';
import blog1 from '../../../images/blog1.jpg';
import blog2 from '../../../images/blog2.jpg';
import Articals from './Articals';

const AllArtical = () => {


    const artic = [
        {
            id: 1,
            title: "ওয়েব ডিজাইন & ডেভেলপমেন্ট শিখে ক্যারিয়ার। ",
            someDis: "আপনি করোনার মধ্যে বসে বসে শুধু সমায় পার করছেন, তাহলে এই পোস্ট তা আপনার জন্য। হয়ত আপনি ভাবছেন বসে থেকে কি করব।যদি কিছু করে টাকা  ইনকাম করা যেত।  ",
            img: blog1,
            link: 'https://developmentlife24.blogspot.com/2020/10/webdesign-development.html'
        },
        {
            id: 2,
            title: "কীভাবে ওয়ার্ডপ্রেস ইনস্টল করবেন লোকাল কম্পিউটারে  ",
            someDis: " সর্বাধিক জনপ্রিয় ওয়েব প্ল্যাটফর্ম হিসাবে, ওয়ার্ডপ্রেস ইতিমধ্যে উপরে শক্তি প্রয়োগ করছে এক তৃতীয়াংশের পুরো ওয়েবসাইটগুলির ।",
            img: blog2,
            link: 'https://developmentlife24.blogspot.com/2020/11/blog-post.html'
        },


    ]
    return (
        <section className="mt-5 mb-5 p-5">
            <div className="project">

                <div> <h2 className="text-light"><span className="text-warning">Some of</span> Bloge</h2></div>


            </div>

            <div className="row ">


                {

                    artic.map(blog => <Articals blogs={blog}></Articals>)
                }
            </div>

        </section>
    );
};

export default AllArtical;