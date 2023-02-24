import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react'
import { useNavigate } from 'react-router';

function AuthWithHistory({children}) {

    const navigate = useNavigate()

    const onRedirectCallback = (appState) => {
      navigate(appState?.returnTo || window.location.pathname)
    }

  return (
    <Auth0Provider
    domain='https://test-www.tax.service.gov.uk/oauth'
    clientId='Qy0XZE3lO7889IOMjck096raNA3u'
    redirectUri="http://localhost:3000/profile"
    onRedirectCallback={onRedirectCallback}
    >
    {children}
      </Auth0Provider>
  )
}

export default AuthWithHistory;