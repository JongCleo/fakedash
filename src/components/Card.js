import React, {Wrapper} from 'react';
import styles from '../modules/Card.module.css'
import { BsGraphUp } from 'react-icons/bs';

//this.props.

//icon
// headername
// text for top right
// array of components generic blob
// footer

const Card = ({requestLimit, children, footer}) => {
  const renderChildren = () => {
    return(
      <React.Fragment>
      {
        React.Children.map(children || null, (child, i) => {
          return (
            <div className = {styles.row}>
              <child.type {...child.props} key={i} />
            </div>
          )
        })
      }
      </React.Fragment>
    )

  }
  return(
    <div className = {styles.cardStyle}>
      <div>
        {/*Header*/}
        <div className = {styles.row}>
          <div className = {styles.header}>
            <span>
              <BsGraphUp />
            </span>
            Requests and Usage
          </div>
          <span>
            {requestLimit}/{requestLimit} requests remaining this hour
          </span>
        </div>

        {/*Whatever the fuck you want*/}
        {renderChildren()}

        {/*Footer*/}
        <div className = {`${styles.footer} ${styles.row}`}>
          Note: {footer}
        </div>
      </div>
    </div>
  )
}

export default Card;
