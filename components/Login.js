import React from 'react';
import Image from 'next/image' 
import Link from 'next/link' 
import styles from '../styles/Login.module.scss'

import userIcon from '../assets/img/auth/user.png'

const Login = () => {

    function myFunction() {
        var x = document.getElementById("myInput");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

    return (
        <>
            <div className={styles.login__wrapper}>
                <div className={styles.login__header}>
                    <div className={styles.l_img}>
                        <Image src={userIcon}  alt="imgb" />
                    </div>                    
                    <span>Welcome Back</span>
                    <p>Sign to continue</p>
                </div>
                <div className={styles.login__main}>
                    <div className={styles.l_email}>
                        <div className={styles.l_email_content}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M93 19H7c-1.1 0-2 .9-2 2V79.5c0 .1 0 .1.1.2 0 .1 0 .1.1.2 0 .1.1.1.1.2s.1.1.1.2v.1l.1.1.1.1.1.1s.1.1.2.1.1.1.2.1.1.1.2.1.1 0 .2.1h87c.1 0 .2-.1.3-.1l.1-.1c.1 0 .2-.1.2-.2l.1-.1.2-.2.1-.1v-.1c0-.1.1-.1.1-.2 0 0 .1-.1.1-.2s0-.1.1-.2 0-.1.1-.2v-.2-.2-58c.1-1.1-.8-2-1.9-2zM9 32.1l27 21.4L9 74.9V32.1zM12.8 77l26.5-21 9.5 7.5c.4.3.8.4 1.2.4s.9-.1 1.2-.4l9.5-7.5 26.5 21H12.8zM91 74.9L64 53.5l27-21.4v42.8zM91 27l-1.2 1L50 59.5 10.2 28 9 27v-4h82v4z"/></svg>

                            <input type="email" name="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className={styles.l_email}> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203.096 203.096"><path d="M153.976 73.236h-3.308V49.115C150.669 22.033 128.634 0 101.549 0 74.465 0 52.43 22.033 52.43 49.115v24.121h-3.31c-9.649 0-17.5 7.851-17.5 17.5v94.859c0 9.649 7.851 17.5 17.5 17.5h104.856c9.649 0 17.5-7.851 17.5-17.5V90.736c0-9.649-7.85-17.5-17.5-17.5zM67.43 49.115C67.43 30.304 82.736 15 101.549 15c18.813 0 34.119 15.304 34.119 34.115v24.121H67.43V49.115zm89.046 136.481c0 1.355-1.145 2.5-2.5 2.5H49.12c-1.355 0-2.5-1.145-2.5-2.5v-94.86c0-1.355 1.145-2.5 2.5-2.5h104.856c1.355 0 2.5 1.145 2.5 2.5v94.86z"/><path d="M101.547 116.309a7.5 7.5 0 00-7.5 7.5v28.715a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5v-28.715a7.5 7.5 0 00-7.5-7.5z"/></svg>
                        <input type="password" name="password" placeholder="Password" />
                        <svg  className={styles.eyes} fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M61 34.73c-3.994-4.87-8.814-9-14.24-12.2l2.4-2.41a1.246 1.246 0 00-1.356-2.03 1.244 1.244 0 00-.404.27l-3 2.95a29.32 29.32 0 00-11.17-3V12.5a1.25 1.25 0 10-2.5 0v5.79a29.32 29.32 0 00-11.17 3l-3-2.95a1.245 1.245 0 00-1.76 1.76l2.4 2.41A53.66 53.66 0 003 34.73a1.23 1.23 0 000 1.54c.52.67 13.09 16.48 29 16.48s28.46-15.81 29-16.48a1.23 1.23 0 000-1.54zM32 50.25c-12.75 0-23.66-11.61-26.37-14.75C8.34 32.36 19.25 20.75 32 20.75c12.75 0 23.66 11.61 26.37 14.75C55.66 38.64 44.75 50.25 32 50.25z" fill="#000"/><path d="M32 26.25a9.25 9.25 0 109.25 9.25A9.26 9.26 0 0032 26.25zm0 16a6.75 6.75 0 116.75-6.75A6.76 6.76 0 0132 42.25z" fill="#000"/></svg>
                    </div>                    
                    <p className="l_forgot">Forgot Password</p>
                    <div className="">
                    <button>
                        Login
                    </button>
                    </div>
                </div>
                <div className={styles.login__footer}>
                    <p>Don&rsquo;t have account?</p>
                    <span>
                        <Link href="#">
                            create new account
                        </Link>
                    </span>
                </div>
            </div>
        </>
    );
}

export default Login;
