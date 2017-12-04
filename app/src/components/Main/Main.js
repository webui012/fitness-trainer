import React, { Component } from 'react'

import styles from './Main.scss'

const Main = props => {
  return (
    <main className={styles.main}>
      {props.children}
    </main>
  )
}
export default Main
