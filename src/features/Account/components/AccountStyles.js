import { ImageBackground, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import styled from "styled-components/native";

export const AuthBackground = styled(ImageBackground).attrs({
  source: require("../../../../assets/accounts-background.jpg")
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AuthTitle = styled(Text)`
  color: white;
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
  font-family: Lato_700Bold;
`;

export const AuthError = styled(Text)`
  font-size: 12px;
  font-family: Lato_400Regular;
  color: red;
  width: 250px;
`;

export const AuthContainer = styled(View)`
  background-color: white;
  padding: 32px;
  border-radius: 4px;
`;

export const AuthInput = styled(TextInput)`
  width: 250px;
  margin: 10px 0;
`;

export const AuthButton = styled(Button)`
  margin: 10px 0;
  padding: 10px;
`;