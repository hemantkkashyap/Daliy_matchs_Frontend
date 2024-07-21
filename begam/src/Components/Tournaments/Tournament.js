import React, { useEffect, useState } from 'react'
import Navbar from '../Home/Navbar'
import ScrollToTop from '../atoms/scrollTotop'
import Preloader from '../atoms/Preloader';
import Herosection from '../Home/Herosection';

export default function Tournament() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      window.scrollTo(0, 0);
    }, []);
  
    if (loading) {
      return <Preloader />;
    }
  return (
    <>
    <ScrollToTop/>
      <Navbar/>
      {/* <section id="banner-section" class="inner-banner tournaments">
        <div class="ani-img">
            <img class="img-1" src="images/banner-circle-1.png" alt="icon"/>
            <img class="img-2" src="images/banner-circle-2.png" alt="icon"/>
            <img class="img-3" src="images/banner-circle-2.png" alt="icon"/>
        </div>
        <div class="banner-content d-flex align-items-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="main-content">
                            <h1>Tournaments</h1>
                            <div class="breadcrumb-area">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb d-flex justify-content-center">
                                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Tournaments</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="headign-info">
                <div class="top-area">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4 d-flex justify-content-center">
                            <img src="images/character_01.png" alt="image"/>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 d-flex align-items-center justify-content-sm justify-content-center">
                            <div class="mid-area text-center">
                                <img src="images/text-img.png" alt="image"/>
                                <h5>Fortnite Weekly Nano</h5>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 zindex">
                            <img src="images/character_02.png" alt="image"/>
                        </div>
                    </div>
                </div>
                <div class="bottom-area">
                    <div class="bottom">
                        <div class="row d-flex justify-content-between">
                            <div class="col-lg-8 col-md-8 justify-content-sm-center d-grid">
                                <h3>Head 2 Head - Weekly - Nano</h3>
                                <div class="title-bottom d-flex">
                                    <div class="time-area bg">
                                        <img src="images/waitng-icon.png" alt="image"/>
                                        <span>Starts in</span>
                                        <span class="time">10d 2H 18M</span>
                                    </div>
                                    <div class="date-area bg">
                                        <span class="date">Apr 21, 5:00 AM EDT</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 text-center">
                                <h2 class="dollar">$739</h2>
                                <a href="registration.html" class="cmn-btn">Join Now!</a>
                            </div>
                        </div>
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="overview-tab" data-toggle="tab" href="#overview"
                                    role="tab" aria-controls="overview" aria-selected="true">overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="bracket-tab" data-toggle="tab" href="#bracket" role="tab"
                                    aria-controls="bracket" aria-selected="false">bracket</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="matches-tab" data-toggle="tab" href="#matches" role="tab"
                                    aria-controls="matches" aria-selected="false">matches</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="participants-tab" data-toggle="tab" href="#participants"
                                    role="tab" aria-controls="participants" aria-selected="false">participants</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="prizes-tab" data-toggle="tab" href="#prizes" role="tab"
                                    aria-controls="prizes" aria-selected="false">prizes</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </section> */}
    <Herosection/>
    </>
  )
}
