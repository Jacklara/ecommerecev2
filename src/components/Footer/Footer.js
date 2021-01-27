import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <footer>
                <div className="copyright-text">
                    Copyright &copy; 2020 All Rights Reserved by JLX Training.
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        Follow Us on Social Media
                        <ul class="social-icons">
                            <li><a className="facebook" href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
                            <li><a className="twitter" href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                            <li><a className="instagram" href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></li>   
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer