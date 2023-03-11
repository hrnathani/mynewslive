import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    static defaultProps = {
        category: 'health',
        country: 'in',
        pageSize: 6,
    }

    static propTypes = {
        category: PropTypes.string,
        country: PropTypes.string,
        pageSize: PropTypes.number,
    }

    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            page: 1,
            loding: true,
            totalResults: 0
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=114c07e5cb5a4ddbbd923ea0bf179e58&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loding: true })
        let urlData = await fetch(url);
        let data = await urlData.json();
        console.log(data)
        this.setState({
            articles: data.articles,
            totalArticles: data.totalResults,
            loding: false,

        })

    }

    handerPreviousClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=114c07e5cb5a4ddbbd923ea0bf179e58&${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        {
            this.setState({ loding: true })
            let urlData = await fetch(url);
            let data = await urlData.json();
            console.log(data)
            this.setState({
                articles: data.articles,
                page: this.state.page - 1,
                loding: false
            })
        }
    }
    handlerNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalArticles / 6))) {
            let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=114c07e5cb5a4ddbbd923ea0bf179e58&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loding: true })
            let urlData = await fetch(url);
            let data = await urlData.json();
            console.log(data)
            this.setState({
                articles: data.articles,
                page: this.state.page + 1,
                loding: false
            })
        }
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=114c07e5cb5a4ddbbd923ea0bf179e58&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let urlData = await fetch(url);
        let data = await urlData.json();
        console.log(data)
        this.setState({
            articles: this.state.articles.concat(data.articles),
            totalResults: data.totalResults,
        })
    }
    render() {
        return (
            <>
                <center>{<h2>Tops News Handlines of {this.props.category}</h2>}</center>
                {this.state.loding && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className='container my-3'>
                        <div className='row my-3'>
                            {this.state.articles.map((element) => {
                                return <div className='col-md-4 my-3' key={element.url}>
                                    <NewsItem name={element.source.name} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1461178064.jpg?resize=1200,852"} url={element.url} author={element.author} publishat={element.publishedAt ? element.publishedAt : "UnKnow"} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>

        );

    }
}