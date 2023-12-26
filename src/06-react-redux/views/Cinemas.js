import React, { useEffect, useState } from 'react'
import getList from '../redux/actionCreator/CinemaList'
import { connect } from 'react-redux'

function Cinemas(props) {
  const { city, list, getList } = props

  useEffect(() => {
    if (list.length === 0) {
      getList()
    }
  }, [list, getList])
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <p
          onClick={() => {
            props.history.push('/city')
          }}
        >
          {city}
        </p>

        <p
          onClick={() => {
            props.history.push('/cinemas/search')
          }}
        >
          搜索
        </p>
      </div>

      <ul>
        {list.map((item, index) => {
          return <li key={index}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    city: state.CityReducer.city,
    list: state.CinemaListReducer.list
  }
}

const mapDispatchToProps = {
  getList
}
export default connect(mapStateToProps, mapDispatchToProps)(Cinemas)
