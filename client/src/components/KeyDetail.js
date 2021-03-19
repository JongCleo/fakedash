import React, { Fragment } from 'react';
import styles from '../modules/Detail.module.css';
import {HiClipboardCopy} from 'react-icons/hi';

const KeyDetail = ({data}) => {

  const copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    e.target.focus();
  }

  return (
    <Fragment>
      <div className = {`${styles.row} ${styles.keyGroup}`}>

        <label> Access Key </label>
        <div className = {styles.copyField}>
          <input
            readOnly
            value = "MJ-c1w8Iv_X48gc9JF7sD_mGfuu07RjSNv4X7VVGAz4"
            onFocus = {(event) => event.target.select()}
          />
          <a
            href="#"
            data-clipboard-text="SsfQGUhyhj8r7Nd3SaFBaZ4QkRBXB9WG5tHUKlTxDo0"
          >
            <span>
              <HiClipboardCopy />
            </span>
          </a>
        </div>

      </div>
      <div className = {`${styles.row} ${styles.keyGroup}`}>

        <label> Secret Key </label>
        <div className = {styles.copyField}>
          <input
            readOnly
            value = "MJ-c1w8Iv_X48gc9JF7sD_mGfuu07RjSNv4X7VVGAz4"
            onFocus = {(event) => event.target.select()}
          />
          <a
            href="#"
            data-clipboard-text="SsfQGUhyhj8r7Nd3SaFBaZ4QkRBXB9WG5tHUKlTxDo0"
          >
            <span>
              <HiClipboardCopy />
            </span>
          </a>
        </div>

      </div>

    </Fragment>
  )

}

export default KeyDetail;
