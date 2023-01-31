import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>CategoriesScreen</Text>
      <Button style={styles.button} title='Go to Products' onPress={() => navigation.navigate("Products")}/>
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
})