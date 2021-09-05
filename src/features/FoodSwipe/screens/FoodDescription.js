import React, { useContext } from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native'
import { Card, Colors, List } from 'react-native-paper'
import styled from 'styled-components'
import { MealsContext } from "../../../services/meals/MealsContext"

const Container = styled(View)`
  background-color: white;
  flex: 1;
`;

const FoodDescription = ({ route }) => {
  const { meals } = useContext(MealsContext)
  const id = route.params.id;
  const item = meals.find((item) => item.id === id);
  const { name, description, imageUrl, ingredients, methods } = item;

  return (
    <Container>
      <Card>
        <Card.Title title={name} />
        <Card.Cover source={{ uri : imageUrl}} resizeMode="contain"  />
      </Card>

      <ScrollView>
        <List.Section>
          <List.Accordion 
            title="Description" 
            style={Styles.white}
            expanded={true}
            right={() => null}
          >
            <List.Item title={description} titleNumberOfLines={5}/>
          </List.Accordion>

          <List.Accordion 
            title="Ingredients" 
            style={Styles.white}
          >
            {ingredients.map((ingredient, i) =>
              <List.Item key={i} title={ingredient} />
            )}
          </List.Accordion>

          {route.params.saved && (
            <List.Accordion 
              title="Methods" 
              style={Styles.white}
            >
              {methods.map((method, i) =>
                <List.Item key={i} title={`${i + 1}) ${method}`} />
              )}
            </List.Accordion>
          )}
        </List.Section>
      </ScrollView>
    </Container>
  )
}

export default FoodDescription

const Styles = StyleSheet.create({
  white: {
    backgroundColor: "white",
    color: Colors.green400
  }
})