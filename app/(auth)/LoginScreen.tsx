import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

export const LoginScreen = ({ navigation }: any) => {
  const [loading, setLoading] = useState(false);

  const handleAnonymousLogin = async () => {
    setLoading(true);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to QuickPOS</Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title="Start Shopping (Guest)" onPress={handleAnonymousLogin} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});
