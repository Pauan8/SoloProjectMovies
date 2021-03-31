import React from 'react'

import BackLink from 'components/BackLink'

const FailedToLoad = () => {
    return (<div className="failed-to-load__wrapper">
        <BackLink />
        <div className="failed-to-load__text">FAILED TO LOAD PAGE</div>
        </div>
    )
}

export default FailedToLoad;