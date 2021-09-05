import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { List } from 'react-native-paper'
import SafeArea from '../../../components/SafeArea'
import { AuthenticationContext } from '../../../services/authentication/AuthenticationContext'
import { MaterialCommunityIcons, Ionicons  } from '@expo/vector-icons';

const SettingsScreen = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext)

  return (
    <SafeArea>
      <List.Section>
        <List.Subheader>Settings</List.Subheader>
          <List.Item 
            title="Saved foods" 
            onPress={() => navigation.navigate("SavedNavigation")}
            left={(props) => <List.Icon {...props} icon="food-drumstick" color="black" />}
          />
          <List.Item 
            title="Logout" 
            onPress={onLogout}
            left={(props) => <List.Icon {...props} icon="exit-to-app" color="black" />}
          />
      </List.Section>
    </SafeArea>
  )
}

export default SettingsScreen
