/* Modules */
import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

/* Components */
import routerComponents from './routerComponent'

class MyRouter extends Component {
    state = {}

    render () {
        return (
            <Fragment>
                <Switch>
                    {routerComponents.map((router, index) => (
                        <Route exact key={index} path={router.route} component={router.component} />
                    ))}
                </Switch>
            </Fragment>
        )
    }
}

export default MyRouter;