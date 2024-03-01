import React from 'react'
import FacebookOutlined from '@ant-design/icons/FacebookOutlined'
import InstagramOutlined from '@ant-design/icons/InstagramOutlined'
import LinkedinOutlined from '@ant-design/icons/LinkedinOutlined'

const Footer = () => {
  return (
    <div>
      <div style={{ color: 'whitesmoke', display: 'flex',margin: '20px'}}>
        {/* <p>Copyright@2024 designed By <a href='/' style={{color: 'white'}}>Prajwal Kotagi</a></p> */}
        <FacebookOutlined  style={{fontSize:'30px', cursor: 'pointer',margin: '5px'}}/>
        <InstagramOutlined style={{fontSize:'30px', cursor: 'pointer',margin: '5px'}} />
        <LinkedinOutlined  style={{fontSize:'30px', cursor: 'pointer',margin: '5px'}}/>
      </div>
    </div>
  )
}

export default Footer
