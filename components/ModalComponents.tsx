import React, { useState } from "react";
import { View, Button, Modal, Text, StyleSheet } from "react-native";

export default function ModalComponents() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  
  return (
    <View style={{ paddingVertical: 50 }}>
      <Button title="Open Modal" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
        style={styles.modalContainer}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Modal Content</Text>
          <Button
            title="Close Modal"
            onPress={() => setModalVisible(!modalVisible)}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "auto",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
