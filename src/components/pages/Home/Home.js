import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Home.css'
export default function Home() {
    return (
        <main className="main_wrapper">
            <header className="header">
                <h5 className="header_title">ডিজিটাল লেনদেন</h5>

                <div title="Notifications" className="header_bell">
                    <button title="Notifications">
                        <i className="fa fa-bell"></i>
                    </button>
                    <span className="header_notifications_count">23</span>
                </div>
            </header>

            <section className="options_sec">
                <div className="options_title_wrapper">
                    <h6 className="options_title">সার্ভিস সমূহ</h6>

                    <button title="ব্যালেন্স দেখুন" className="tap_balance_btn">
                        ব্যালেন্স দেখুন
                    </button>
                </div>

                <div className="boxes">
                    <Link to='adMoney' className="box">
                        <div className="img">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3687/3687106.png"
                                alt=""
                            />
                        </div>

                        <span> অ্যাড মানি </span>
                    </Link>
                    <Link  to="transferMoney" className="box">
                        <div className="img">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/7401/7401215.png"
                                alt=""
                            />
                        </div>

                        <span> ট্রান্সফার মানি </span>
                    </Link>
                    <Link to="cashOut" className="box">
                        <div className="img">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/8818/8818337.png"
                                alt=""
                            />
                        </div>

                        <span> ক্যাশ আউট </span>
                    </Link>
                    <Link to="fraxload" className="box">
                        <div className="img">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2005/2005851.png"
                                alt=""
                            />
                        </div>

                        <span> ফ্রেক্সিলোড </span>
                    </Link>
                    <Link to="specialOffer" className="box">
                        <div className="img">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/8829/8829209.png"
                                alt=""
                            />
                        </div>

                        <span> স্পেশাল অফার </span>
                    </Link>
                    <Link to="transactionHistory" className="box">
                        <div className="img">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/7052/7052015.png"
                                alt=""
                            />
                        </div>

                        <span> লেনদেন ইতিহাস </span>
                    </Link>
                </div>
            </section>
            <br />
            <section className="options_sec">
                <h6 className="options_title">অন্যান্য</h6>

                <div className="boxes">
                    <a href="#" className="box">
                        <div className="img">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1384/1384055.png"
                                alt=""
                            />
                        </div>

                        <span> হোয়াটসঅ্যাপ গ্রুপ </span>
                    </a>
                    <a href="#" className="box">
                        <div className="img">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1603/1603076.png"
                                alt=""
                            />
                        </div>

                        <span> টেলিগ্রাম গ্রুপ </span>
                    </a>
                    <a href="#" className="box">
                        <div className="img">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3730/3730052.png"
                                alt=""
                            />
                        </div>

                        <span> কিভাবে কাজ করে? </span>
                    </a>
                    <a href="#" className="box">
                        <div className="img">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/5617/5617976.png"
                                alt=""
                            />
                        </div>

                        <span> পাসওয়ার্ড পরিবর্তন </span>
                    </a>

                    <a href="#" className="box">
                        <div className="img">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
                                alt=""
                            />
                        </div>

                        <span> প্রোফাইল </span>
                    </a>

                    <a href="#" className="box">
                        <div className="img">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4436/4436954.png"
                                alt=""
                            />
                        </div>

                        <span> লগআউট </span>
                    </a>
                </div>
            </section>
            <div className="loading_wrapper">
                <div className="loading">
                    {/* <img src="./assets/images/loading.gif" alt="" /> */}
                    <img src={require('../../assets/images/loading.gif')}/>
                </div>
            </div>
        </main>
    )
}
