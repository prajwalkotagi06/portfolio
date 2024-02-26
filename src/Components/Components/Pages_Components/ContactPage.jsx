import React from 'react'

const ContactPage = () => {
  return (
    <div style={{marginTop: '60px', marginLeft: '150px', marginRight: '150px'}}>
      <h3 style={{fontSize: '40px', color: 'whitesmoke'}}>Contact.</h3>
      <p style={{fontSize: '20px', color: 'whitesmoke'}}>Get in touch or shoot me an email directly on prajwalkotagi06@gmail.com</p>
      <input type='text' placeholder='Enter name' style={{width: '600px', height: '40px', borderRadius: '5px',}}/><br /><br />
      <input type='email' placeholder='Enter email' style={{width: '600px', height: '40px', borderRadius: '5px'}}/><br /><br />
      <textarea placeholder='Enter Message'style={{width: '600px', height: '200px', borderRadius: '5px'}}></textarea><br /><br />
      <button style={{width: '250px', height: '40px', borderRadius: '5px', backgroundColor: 'solver', border: 'none'}}>Submit</button>
    </div>
  )
}

export default ContactPage
