import React, { useContext, useState } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { ActivityIndicator, Button, Colors } from 'react-native-paper'
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext'
import { AuthBackground, AuthButton, AuthContainer, AuthInput, AuthTitle, AuthError } from '../components/AccountStyles'

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AuthBackground>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <AuthTitle>REGISTER</AuthTitle>
        <AuthContainer>
          <AuthInput 
            label="Email" 
            keyboardType="email-address" 
            onChangeText={(u) => setEmail(u)}
          />
          <AuthInput 
            label="Password" 
            secureTextEntry 
            onChangeText={(p) => setPassword(p)}
          />
          <AuthInput 
            label="Confirm Password" 
            secureTextEntry 
            onChangeText={(p) => setConfirmPassword(p)}
          />
          {error && <AuthError>{error}</AuthError>}
          {isLoading ? (
            <ActivityIndicator color={Colors.green400} />
          ): (
            <AuthButton 
              color="green" 
              mode="contained" 
              onPress={() => onRegister(email, password, confirmPassword)}
            >
              Register
            </AuthButton>
          )}
          <Button color="green" onPress={() => navigation.goBack()}>Back</Button>
        </AuthContainer>
      </KeyboardAvoidingView>
    </AuthBackground>
  )
}

export default RegisterScreen
