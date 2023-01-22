import React from 'react'

const VedioPlayer = ({vedio}) => {
  return (
    <>
    <video  autoPlay muted loop>

<source src={vedio}
        type="video/webm"/>

<source src={vedio}
        type="video/mp4"/>

</video>
    </>
  )
}

export default VedioPlayer