import React, {useRef, useEffect} from "react";
import { useHistory } from 'react-router-dom'
import { mount } from 'auth/AuthApp'

export default () => {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({ pathname: nextPathname }) => {
                if (history.location.pathname === nextPathname) return

                history.push(nextPathname)
            },
            initialPath: history.location.pathname
        })

        history.listen(onParentNavigate)
    }, []);

    return <div ref={ref}/>
}
