import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"

import { ORDERS } from "../data/order"
import OrderItem from "../components/OrderItem"
import React from "react"

const OrdersScreen = () => {

  const renderOrderItem = ({item}) => (
    <OrderItem item={item} onDelete={() => console.log("on delete")}/>
  )
  return (
    <FlatList
    data={ORDERS}
    keyExtractor= {item => item.id}
    renderItem={renderOrderItem}
    />
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