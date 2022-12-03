import React from 'react'
import { Link } from 'react-router-dom'

const Book = ({item}) => {

  const bookContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  };

  const bookInfoStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  return (
    <div style={bookContainerStyle} >
        <Link style={bookInfoStyle} to={`/view/${item.id}`}>
            <img src={item.cover} alt={item.title} width = "200" />
            <div>{item.title}</div>
        </Link>
    </div>
  )
}

export default Book