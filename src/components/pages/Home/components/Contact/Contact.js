import React from 'react'

import { Anchor } from '../../../../Link/Link'
import pic from './me.jpg'
import styles from './Contact.css'

const Contact = () => (
  <div className={styles.contact}>
    <div className={styles.bg} style={{ backgroundImage: `url('${pic}')` }} />
    <div className={styles.info}>
      <h3>Hi, I&apos;m James</h3>
      <p>I&apos;m a software developer and I want to help you learn to create websites!</p>
      <p>
        I run a small code club in Melbourne&apos;s north-east
        for kids between the ages of 10-16 where the goal is to
        create, learn, and most importantly, have fun!
      </p>
      <p>
        If this sounds fun to you, your child, or someone you know,
        you can contact me at&nbsp;
        <Anchor href="mailto:james.formica@gmail.com">james.formica@gmail.com</Anchor>
        &nbsp;or on&nbsp;
        <Anchor href="tel:0404590613">0404590613</Anchor>.
      </p>
    </div>
  </div>
)

export default Contact
