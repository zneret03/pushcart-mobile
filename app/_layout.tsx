import React, { useTransition } from "react";
import {
  View,
  Text,
  // Button,
  StyleSheet,
  // ActivityIndicator,
} from "react-native";
// import { useRouter } from "expo-router";
import { palette } from "@/helpers/palette";

export default function LoginScreen() {
  const [isPending, startTransition] = useTransition();
  // const router = useRouter();

  const handleAnonymousLogin = async () => {
    startTransition(async () => {
      console.log("sample");
    });
    // router.replace("/shop");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to PushCart</Text>
      <Text style={styles.description}>
        Your automated grocery shopping experience
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    paddingTop: 100,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 20,
    color: palette.primary,
  },
  description: { fontSize: 20, fontWeight: "400", opacity: 0.5 },
});
