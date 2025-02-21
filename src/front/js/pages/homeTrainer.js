import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";

import homeImgTwo from "../../img/training-828741_1280.jpg"
import { Card } from "../component/card.jsx";
import { Link, useParams } from "react-router-dom";

export const HomeTrainer = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="home-body ">


            <div className="jumbotron-home" style={{ backgroundImage: `url(${homeImgTwo})`, backgroundSize: "cover", backgroundPosition: "center" }}>

                <div className="jumbotron-text text-light px-5 pt-5">
                    <div className="row">
                        <div classname="col-12">
                            <h1 className="display-4 pt-5 py-5 ">Welcome!
                            </h1>
                            <p className="lead">Achieve your fitness goals with expert coaching tailored to your needs. Start your journey toward a healthier, stronger you today</p>
                            <hr className="my-4"></hr>
                            <p>Fitness is a personal journey that requires dedication and the right mindset. As your trainer, I work with you to understand your unique goals and challenges, creating a plan that supports both your immediate needs and long-term success. Whether you're starting out or refining your skills, every session is designed to push you further, building strength, confidence, and resilience that extend beyond the gym.</p>
                            <Link to="/register">
                                <p className="lead py-5">
                                    <a className="btn bg-warning btn-lg" href="#" role="button">Your Area</a>
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>


            <div className="d-flex justify-content-around p-5">

                <Card
                    title="Why Tracking Your Progress is Key to Success"
                    description="Tracking your progress is essential for staying motivated and ensuring you're on the right path. Learn how tracking can boost your fitness journey and keep you accountable."
                    imageUrl="https://cdn.pixabay.com/photo/2021/01/03/03/43/man-5883500_1280.jpg"
                    link="https://www.example.com/nutrition-for-fitness-article"
                    linkName="Explore Nutrition Tips for Fitness"
                />
                <Card
                    title="The Power of Personalized Workouts"
                    description="Personalized workouts are designed to push you in the right direction based on your fitness level and goals. Discover why tailored plans are more effective than generic ones."
                    imageUrl="https://cdn.pixabay.com/photo/2021/01/04/06/21/man-5886574_1280.jpg"
                    link="https://www.example.com/personalized-workouts-article"
                    linkName="Learn About Custom Workouts"
                />
                <Card
                    title=" How Personalized Nutrition Fuels Your Goals"
                    description="Nutrition plays a critical role in reaching your fitness goals. Learn how a personalized diet plan can enhance your performance and overall well-being."
                    imageUrl="https://cdn.pixabay.com/photo/2019/09/05/11/20/fruit-4453801_960_720.jpg"
                    link="https://www.example.com/nutrition-for-fitness-article"
                    linkName="Explore Nutrition Tips for Fitness"
                />


            </div>




        </div>
    );
};
