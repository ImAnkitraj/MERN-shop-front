import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

function ProtectedRoute({ component: C, ...props } ) {
    return (
        <Route
			{...props}
			render={() => {
				return localStorage.getItem('user') ? (
					<C />
				) : (
					<Switch>
						<Redirect to="/login" exact/>
					</Switch>
				);
			}}
		/>
    )
}

export default ProtectedRoute