import React, { useEffect, useState } from 'react'
import { AiOutlineCopy } from 'react-icons/ai'
import { GrFormCheckmark } from 'react-icons/gr'
import Tooltip from '../Tooltip/Tooltip'

import sharedStyles from '../../shared/shared.module.scss'
import styles from './Contact.module.scss'

const Label = ({ children }: { children: React.ReactNode }) => (
  <div className={styles.label}>{children}</div>
)

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyContactInfo = (value: string) => {
    navigator.clipboard.writeText(value)
    setIsCopied(!isCopied)
  }

  // Reset 'Copy Checkmark' Icon after 2s timeout:
  useEffect(() => {
    let timeoutId: number
    if (isCopied) {
      timeoutId = setTimeout(() => {
        setIsCopied(false)
      }, 2000)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [isCopied])

  return (
    <section className={styles.contact}>
      <h2 id='contact' className={sharedStyles.title}>
        Contact
      </h2>
      <div className={styles.card}>
        <ul>
          <li>
            <Label>Name:</Label> <div> Dmitri Sirjajev </div>
          </li>
          <li>
            <Label>Email:</Label> <div> DmitriSirjajev@gmail.com </div>
            <div className={styles.buttonContainer}>
              <button
                aria-label='copy email'
                onClick={() => handleCopyContactInfo('DmitriSirjajev@gmail.com')}
              >
                {!isCopied ? <AiOutlineCopy /> : <GrFormCheckmark />}
              </button>
              <Tooltip title={!isCopied ? 'Copy Email' : 'Copied'} active={isCopied} />
            </div>
          </li>
          <li>
            <Label>Phone:</Label>
            <div>
              <span>{`+372 `}</span>
              5194 3069
            </div>
          </li>
          <li>
            <Label>Location:</Label>
            <div>Estonia, Tallinn</div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
