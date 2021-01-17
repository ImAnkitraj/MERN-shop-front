import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { userState } from '../../store/atoms/user';

function LoggedoutRoute({ component: C, ...props } ) {

    const [user, setUser] = useRecoilState(userState);
    
    return (
        <Route
			{...props}
			render={() => {
				return localStorage.getItem('user') ? (
                    <Switch>
                        <Redirect to="/home" exact/>
                    </Switch>
				) : (
                    <C/>
				);
			}}
		/>
    )
}

export default LoggedoutRoute