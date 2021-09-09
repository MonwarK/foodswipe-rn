import React, { useContext } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { List } from 'react-native-paper';
import styled from 'styled-components/native';
import SafeArea from '../../../components/SafeArea';
import { MealsContext } from '../../../services/meals/MealsContext'

const ListImage = styled(Image)`
  height: 50px;
  width: 50px;
  border-radius: 100px;
`

const SavedListScreen = ({ navigation }) => {
  const { savedList } = useContext(MealsContext);

  return (
    <SafeArea>
      <List.Section>
        <List.Subheader>Saved Foods</List.Subheader>
        <FlatList
          data={savedList}
          renderItem={({item}) => 
            <List.Item onPress={() => navigation.navigate("SavedDescriptionScreen", { saved: true, id: item.foodId })} title={item.name} left={() => <ListImage source={{ uri: item.imageUrl}} />} />
          }
          contentContainerStyle={{
            paddingBottom: 35
          }}
        />
      </List.Section>
    </SafeArea>
  )
}

export default SavedListScreen
