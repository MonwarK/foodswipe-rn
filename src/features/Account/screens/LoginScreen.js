import AnimatedLottieView from 'lottie-react-native'
import React, { useContext, useState } from 'react'
import { View, KeyboardAvoidingView, Platform } from 'react-native'
import { ActivityIndicator, Button, Colors } from 'react-native-paper'
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext'
import { AuthBackground, AuthButton, AuthContainer, AuthInput, AuthTitle, AuthError, AnimationContainer } from '../components/AccountStyles'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const { error, onLogin, isLoading } = useContext(AuthenticationContext);

  return (
    <AuthBackground>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <AuthTitle>LOGIN</AuthTitle>
        <AuthContainer>
          <AuthInput 
            label="Email" 
            keyboardType="email-address" 
            onChangeText={(e) => setEmail(e)}
          />
          <AuthInput 
            label="Password" 
            secureTextEntry 
            onChangeText={(p) => setPassword(p)}
          />
          {error && <AuthError>{error}</AuthError>}
          {isLoading ? (
            <ActivityIndicator color={Colors.green300} />
          ) : (
            <AuthButton 
              color="green" 
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          )}
          <Button color="green" onPress={() => navigation.navigate("Register")}>Register</Button>
        </AuthContainer>
      </KeyboardAvoidingView>
    </AuthBackground>
  )
}

export default LoginScreen
