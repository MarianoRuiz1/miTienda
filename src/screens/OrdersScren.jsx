import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"

import { ORDER } from "../data/order"
import OrderItem from "../components/OrderItem"
import React from "react"

const OrdersScreen = () => {
  const total = 6600

  const handleConfirmOrders = () => {
    console.log("Confirmar Ordenes")
  }

  const handleDeleteItem = () => {
    console.log("borrar elemento")
  }

  const renderOrderItem = ({ item }) => (
    <OrderItem item={item} onDelete={handleDeleteItem} />
  )

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={ORDER}
          keyExtractor={item => item.id}
          renderItem={renderOrderItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirmOrders}>
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrdersScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  total: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    padding: 8,
  },
})