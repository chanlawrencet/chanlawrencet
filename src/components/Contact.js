import React from "react";
import ListLink from "./ListLink"

const Contact = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 30,
      flexWrap: 'wrap',
    }}
  >
    <div
      style={{fontSize: 20, fontWeight: 'bold'}}
    >
      Contact
    </div>
    <div
      style={{width: 300}}
    >
      <ListLink
        link='mailto:chanlawrencet@gmail.com'
        linkText='Email'
        description='chanlawrencet@gmail.com'
      />
      <ListLink
        link='tel:908-367-0702'
        linkText='Phone'
        description='908-367-0702'
      />
    </div>
  </div>
)

export default Contact;