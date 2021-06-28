import React, {Suspense} from "react";


const SuspenseContainer = (Container) =>{
    const SuspenseXXX = () => {
        return <Suspense fallback={<div className="progress"><div className="indeterminate"></div></div>}>
            <Container/>
        </Suspense>
    }
    return SuspenseXXX
}

export default SuspenseContainer