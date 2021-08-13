import React from 'react';
import blog1 from '../../../images/blog1.jpg';
import blog2 from '../../../images/blog2.jpg';
import blog3 from '../../../images/blog3.jpg';
import blog4 from '../../../images/blog4.png';
import blog5 from '../../../images/blog5.png';
import Blog from '../../Blog/Blog';


const AllBolgs = () => {

    const blogin = [
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
        {
            id: 3,
            title: "আদর্শ ব্যাকলিঙ্ক এর নিয়ম ",
            someDis: "আপনার একটা ওয়েবসাইট আছে কিন্তু ওয়েবসাইটে তেমন কোন ভিজিটর নাই বা কোন পারফমেন্স নেই। তাহলে কি করবেন বা আপনার করনিও কি।এত ভাবতে হবে না আপনি যদি আমার এই পোস্ট মনোযোগ দিয়ে পরেন তাহলে আপনার প্রব্লেম সল্ভ হয়ে যাবে। ",
            img: blog3,
            link: 'https://developmentlife24.blogspot.com/2020/10/blog-post_11.html'
        },
        {
            id: 4,
            title: "ওয়েব  ডিজাইন  রোডম্যাপ  ",
            someDis: "আপনি কি একজন দক্ষ ওয়েব ডেভেলোপার হতে চান? আপনি কি একজন ওয়েব দেভেলোপমেন্ট শিখে ক্যারিয়ার করতে চান?  কিন্তু কেমন করে শুরু করবেন কিংবা কথায় থেকে শিখবেন এই নিয়ে চিন্তিত । আপনি যদি সিরিয়াস ভাবে ওয়েব ডেভেলোপার হতে জান তাহলে এই পোস্ট মনোযোগ দিয়ে শেষ পর্যন্ত পরুন",
            img: blog4,
            link: 'https://banglateachal.blogspot.com/2021/08/--%20.html'
        },
        {
            id: 5,
            title: "ছাত্র জীবনে ইনকমের ১০টি রাস্তা ",
            someDis: "বর্তমান বিশ্বের যে আবস্থা এক মহামারি ভাইরাস করোনার জন্য । এই করোনার জন্য বিদভান্তি ও দুশচিন্তা  যেন পিছুই ছারছে না প্রতিটি মানুষের । এতে বেশি খারাপ অবস্থ যে পরেছে ছত্র জীবন । ১ মাস পর পর জেন বারছে শিক্ষা প্রতিষ্ঠানের বন্ধের দিন। ",
            img: blog5,
            link: 'https://banglateachal.blogspot.com/2021/04/%20%20%20%20%20%20.html'
        },
    ]
    console.log(blogin)
    return (
        <section className="mt-5 mb-5 p-5">
            <div className="project">

                <div> <h2 className="text-light"><span className="text-warning">Some of</span> Bloge</h2></div>


            </div>

            <div className="row ">


                {

                    blogin.map(blog => <Blog blogs={blog}></Blog>)
                }
            </div>

        </section>
    );
};

export default AllBolgs;