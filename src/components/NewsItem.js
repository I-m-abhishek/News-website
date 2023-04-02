import React from 'react'

const NewsItem = (props)=>{
  
    let {title ,description, newsUrl , imgUrl , author , date ,source} = props;
    return (
      <div>
       <div className="card"  >
        <div>
       <span className=" badge rounded-pill bg-danger"  
style = {{
    display:" flex",
    justifyContent : "flex-end",
    position: "absolute",
    right: 0
}
}>
  {source} </span>
          </div> 
  <img src={imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()} </small></p>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" rel="noopener noreferrer"  className="btn btn-primary" >Read More</a>
    
  </div>
  
</div>
      </div>
    )
  }


export default NewsItem