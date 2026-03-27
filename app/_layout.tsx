import React, { useTransition } from "react";
import {
  View,
  Text,
  // Button,
  StyleSheet,
  // ActivityIndicator,
} from "react-native";
// import { useRouter } from "expo-router";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { palette } from "@/helpers/palette";
import { IconSymbol } from "@/components/ui/icon-symbol";

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

      <View style={styles.logo}>
        <IconSymbol size={180} name="cart" color="#fff" />
      </View>

      <PrimaryButton
        title="Login"
        iconName="log-in"
        style={{ width: "100%", height: 60, marginTop: 50 }}
        onPress={() => console.log("Button pressed!")}
      />
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
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: 20,
    color: palette.primary,
  },
  description: { fontSize: 25, fontWeight: "400", opacity: 0.5 },
  logo: {
    backgroundColor: palette.primary,
    borderRadius: 20,
    padding: 20,
    marginTop: 60,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
});
