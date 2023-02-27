import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import OrderItem from "../components/OrderItem"
import { deleteOrder, getOrders } from "../store/actions/order.action"

const OrdersScreen = () => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.orders.list)
  useEffect(() => {
    dispatch(getOrders())
  }, [])
  
  const handleDeleteItem = (id) => {
    dispatch(deleteOrder(id))
  }
  const renderOrderItem = ({item}) => (
    <OrderItem item={item} onDelete={() => handleDeleteItem(item.id)}/>
  )
  return (
    <FlatList
    data={orders}
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