import React from 'react'

const ListAllOwners = ({owners}) => {
  return (
    <div>
      <ul>
        {{owners}.map((item, i) => {
          return <li key={i}>{item.firstName}+ " " + {item.lastName}</li>
        })}
      </ul>
    </div>
  )
}

export default ListAllOwners
