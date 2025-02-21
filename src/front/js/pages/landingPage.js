import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import homeImg from "../../img/training-828726_1920.jpg"
import { Card } from "../component/card.jsx";
import { Link, useParams } from "react-router-dom";
import { Home } from "./home.js";

export const LandingPage = () => {
    const { store, actions } = useContext(Context);
    const [isloggedin, setisLoggedIn] = useState(false)

    return (



        <div className="home-body ">

            {!isloggedin ? (<>

                <div className="jumbotron-home" style={{ backgroundImage: `url(${homeImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>

                    <div className="jumbotron-text text-light px-5 pt-5">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="display-4 pt-5 py-5 ">Transform your body,<br />
                                    transform your life.
                                </h1>
                                <p className="lead">Achieve your fitness goals with expert coaching tailored to your needs. Start your journey toward a healthier, stronger you today</p>
                                <hr className="my-4"></hr>
                                <p>Fitness is a personal journey that requires dedication and the right mindset. As your trainer, I work with you to understand your unique goals and challenges, creating a plan that supports both your immediate needs and long-term success. Whether you're starting out or refining your skills, every session is designed to push you further, building strength, confidence, and resilience that extend beyond the gym.</p>
                                <Link to="/register">
                                    <p className="lead py-5">
                                        <button className="btn bg-warning btn-lg" href="#" role="button">Join Now!</button>
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>


                <div className="d-flex justify-content-around p-5">

                    <Card
                        title="Stay on Track with Real Results"
                        description="With personalized progress tracking, you’ll see exactly how far you’ve come. Regular assessments and updates ensure that you’re always moving toward your goals with clear, measurable results."
                        imageUrl="https://cdn.pixabay.com/photo/2016/11/22/22/24/adult-1850925_1280.jpg"
                        text="Achieve your goals. Sign up today!"
                    />
                    <Card
                        title="Workouts Designed for You"
                        description="No two fitness journeys are the same. That’s why I create personalized workout plans based on your specific goals and fitness level, ensuring every exercise maximizes your results and keeps you challenged."
                        imageUrl="https://cdn.pixabay.com/photo/2021/11/10/06/23/workout-6783020_1280.jpg"
                        text="Train with us. Start now!"
                    />
                    <Card
                        title="Fuel Your Body for Success"
                        description="Achieve optimal results with a nutrition plan that’s tailored just for you. Whether you're looking to lose weight, build muscle, or simply feel better, I provide nutrition guidance that aligns with your goals and lifestyle."
                        imageUrl="https://cdn.pixabay.com/photo/2019/08/13/11/37/extra-virgin-olive-oil-4403217_1280.jpg"
                        text="Transform your life! Join now"
                    />


                </div> </>) : (<Home />)

                // a ? b : (c ? d : e)


            }






        </div>
    );
};
