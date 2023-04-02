import React, { useState , useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
// import text from './datas.js';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
const News=(props)=> {
   
    const capitalize=(text)=>{
    return text= text[0].toUpperCase() + text.slice(1);
   }
   const [articles, setarticles] = useState([]);
   const [page, setPage] = useState(1);
   const [loading, setLoading] = useState(true);
   const [totalResults, setTotalResults] = useState(0);
    
    
    
    const updateNews= async()=>{
    //  const url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=77058caf0f534962b4b6a56711d8a8fe&page=1&pageSize=${this.props.Pagesize}`;
    props.setProgress(10);
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(0);
      let data =  await fetch(url);
      props.setProgress(30);
      let jsondata =  await data.json();
      props.setProgress(70);
      setarticles(jsondata.articles);
      setTotalResults(jsondata.totalResults);
      setLoading(false);
      props.setProgress(100);
    }
    useEffect(() => {
      document.title = `${capitalize(props.category)} - News `;
      updateNews();
     // eslint-disable-next-line
    },[])
    
      
  

//   prevfnc =async()=>{
//      this.updateNews();
//      this.setState({ page : this.state.page -1});
//   }

//   nextfnc = async()=>{
//     this.updateNews();
//     this.setState({ page : this.state.page +1});
  
// }
const fetchMoreData= async()=>{
 
  const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page+1);
    
      let data =  await fetch(url);
      let jsondata =  await data.json();
      setarticles( articles.concat(jsondata.articles));
      setTotalResults(jsondata.totalResults);
      
}

 
    return (
      <div>
        
         <div className="text-center" style={{margin: '63px 3px 5px'}}  ><h1>  Top {capitalize(props.category)} Headlines</h1></div>
         {/* {this.state.loading && <Spinner />} */}

         <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container my-3">
        <div className="row my-4" >
          {loading && <Spinner/>}
          {!loading && articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={!element.title?"title":element.title} description={!element.description?"Description not available" : element.description}  imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date ={element.publishedAt} source={element.source.name}
             />
            </div>
          })}
          </div>
          
        </div>
        </InfiniteScroll>

        {/* <div className="container my-4 d-flex justify-content-between">
        <button type="button"  disabled={this.state.page===1}onClick={this.prevfnc} className="btn btn-danger"> &larr; Previous</button>
       <button type="button"  disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.Pagesize)} onClick={this.nextfnc} className="btn btn-warning">Next &rarr;</button>
        </div> */}
        </div>
      
    )
  }

News.defaultProps= {
  country : 'in',
  paeSize : 9,
  category :'general',
  
 };

News.propTypes = {
     country : PropTypes.string,
     pageSize: PropTypes.string,
     category : PropTypes.string
 };


export default News