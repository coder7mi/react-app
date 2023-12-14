import React, { Component } from 'react'

// export default class Tabbar extends Component {
//   handleClick = (index) => {
//     this.props.myEvent(index)
//   }
//   render() {
//     return (
//       <div>
//         <ul>
//           {this.props.list.map((item, index) => (
//             <li
//               className={this.props.index === index ? 'active' : ''}
//               key={item.id}
//               onClick={() => this.handleClick(index)}
//             >
//               {item.text}
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

export default function Tabbar(props) {
  return (
    <div>
      <ul>
        {props.list.map((item, index) => (
          <li
            className={props.index === index ? 'active' : ''}
            key={item.id}
            onClick={() => props.myEvent(index)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
