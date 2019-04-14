import React from "react"

export default function PageList({ page, pages, onPageSubmit, term }) {
  const renderPageList = []

  for (let index = 1; index <= pages; index++) {
    let link
    if (page === index) {
      link = <span key={index}> {index} </span>
    } else {
      link = (
        <span key={index}>
          <a
            className="page-link"
            href="/"
            onClick={e => {
              e.preventDefault()
              onPageSubmit(term, index)
            }}>
            {" "}
            {index}{" "}
          </a>
        </span>
      )
    }
    renderPageList.push(link)
  }
  return <div>{renderPageList}</div>
}
