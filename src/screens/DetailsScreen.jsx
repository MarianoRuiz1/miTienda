import { Button, StyleSheet, Text, View } from "react-native"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { addItem } from "../store/actions/cart.action"

const DetailsScreen = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const unit = useSelector((state) => state.products.selected)
  useEffect(() => {
    console.log(route.params)
  }, [])
  const handleAddItem = () => {
    dispatch(addItem(unit))
  }

  return (
    <View style={styles.container}>
      <Text>{ unit.name }</Text>
      <Text>{ unit.description }</Text>
      <Text>{ unit.price }</Text>
      <Button title="Add to cart" onPress={handleAddItem}/>
    </View>
  )
}

export default DetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
