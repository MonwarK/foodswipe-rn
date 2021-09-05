import React, { useContext } from 'react'
import AppNavigation from "./AppNavigation"
import { NavigationContainer } from '@react-navigation/native';
import { AuthenticationContext } from "../../services/authentication/AuthenticationContext"
import AccountNavigation from './AccountNavigation';
import Loading from '../../components/Loading';

const index = () => {
  const { user, isAppLoading } = useContext(AuthenticationContext)

  if (isAppLoading) {
    return <Loading />
  }

  return (
    <NavigationContainer>
      {
        user ? (
          <AppNavigation />
        ) : (
          <AccountNavigation />
        )
      }
    </NavigationContainer>
  )
}

export default index
