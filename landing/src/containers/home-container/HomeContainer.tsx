import React from "react";


function HomeContainer({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div>
            {children}
        </div>
    )
}

export default HomeContainer;