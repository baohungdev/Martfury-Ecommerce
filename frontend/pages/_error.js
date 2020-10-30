import React from 'react';
import Link from 'next/link';

import FooterDefault from '../components/shared/footers/FooterDefault';
import HeaderDefault from '../components/shared/headers/HeaderDefault';

function Error({ statusCode }) {
    return (
        <div className="site-content">
            <HeaderDefault />
            <div className="ps-page--404">
                <div className="container">
                    <div className="ps-section__content">
                        {statusCode ? (
                            <figure>
                                <img src="/static/img/404.jpg" alt="" />
                                <h3>Ohh! Page not found</h3>
                                <p>
                                    It seems we can't find what you're looking for. Perhaps
                                    searching can help or go back to
                                    <Link href="/">
                                        <a> Homepage</a>
                                    </Link>
                                </p>
                            </figure>
                        ) : (
                            <figure>
                                <h3>An error occurred on client</h3>
                            </figure>
                        )}
                        <form className="ps-form--widget-search" action="do_action" method="get">
                            <input className="form-control" type="text" placeholder="Search..." />
                            <button>
                                <i className="icon-magnifier"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <FooterDefault />
        </div>
    );
}




export default Error;
