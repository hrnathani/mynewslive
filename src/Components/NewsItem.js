import React, { Component } from 'react';

export default class NewsItem extends Component {
    render() {

        let { title, description, imageUrl, url, author, publishat,name } = this.props
        return (
            <div className='container'>

                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}. . .  <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill text-bg-success" style={{left:"90%"}}>
                            {name}
                            </span></h5>
                        <p className="card-text">{description}. . .</p>
                        <p className='card-text'><small className="text-muted">By {author} on{publishat}</small></p>
                        <a href={url} target="_blank" className="btn btn-primary">Read More..</a>

                    </div>
                </div>


            </div>
        );
    }
}
