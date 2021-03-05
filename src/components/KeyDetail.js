import React, { Fragment } from 'react';
import styles from '../modules/Detail.module.css';
import {HiClipboardCopy} from 'react-icons/hi';

const KeyDetail = ({data}) => {

  return (
    <Fragment>
      <div className = {`${styles.row} ${styles.keyGroup}`}>

        <label> Access Key </label>
        <div className = {styles.copyField}>
          <input
            readOnly
            value = "MJ-c1w8Iv_X48gc9JF7sD_mGfuu07RjSNv4X7VVGAz4"
          />
          <a href="#">
           <HiClipboardCopy />
          </a>
        </div>

      </div>

    </Fragment>
  )

}

export default KeyDetail;
