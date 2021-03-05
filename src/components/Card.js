import React from 'react';
import styles from '../modules/Card.module.css'


const Card = ({headerText, headerIcon, cornerText, middle, footerText}) => {

  return(
    <div className = {styles.cardStyle}>
        {/*Header*/}
        <div className = {styles.row}>
          <div className = {styles.header}>
            <span> {headerIcon} </span>
            {headerText}
          </div>
          <span> {cornerText} </span>
        </div>

        {middle}

        <div className = {`${styles.footer} ${styles.row}`}>
          Note: {footerText}
        </div>
    </div>
  )
}

export default Card;
