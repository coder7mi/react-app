import React, { useEffect } from 'react'

function NotFound(props) {
  useEffect(() => {
    console.log(props)
  }, [props])
  return <div>404 Not Found</div>
}

function connect(callback, obj) {
  const value = callback()
  return (MyComponet) => {
    return (props) => {
      return (
        <div style={{ color: 'red' }}>
          <MyComponet {...value} {...props} {...obj} />
        </div>
      )
    }
  }
}

export default connect(
  () => {
    return {
      a: 1,
      b: 2
    }
  },
  {
    aa() {},
    bb() {}
  }
)(NotFound)
