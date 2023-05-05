import React from 'react'

export default function Productitem(props) {
  return (
    <div className="card" style={{width: "18rem",height:"20rem", backgroundColor:props.mag}}>
  <img src={props.imageUrl} style={{height:"12rem"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{/*Description*/}</p>
    <a href={props.url} className="btn btn-dark">Read More</a>
  </div>
</div>
  )
}
