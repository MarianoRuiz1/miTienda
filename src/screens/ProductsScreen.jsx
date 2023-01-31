import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const ProductsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>ProductsScreen</Text>
      <Button style={styles.button} title='Go back to Categories' onPress={() => navigation.goBack()}/>
      <Button style={styles.button} title='Go to Details' onPress={() => navigation.navigate("Details")}/>
    </View>
  )
}

export default ProductsScreen

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