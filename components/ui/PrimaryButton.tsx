import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Feather } from "@expo/vector-icons";

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  iconName?: keyof typeof Feather.glyphMap; // Strongly typed icon names
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const PrimaryButton = ({
  title,
  onPress,
  iconName,
  disabled = false,
  loading = false,
  style,
  textStyle,
}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color="#ffffff" />
      ) : (
        <>
          <Text style={[styles.text, textStyle]}>{title}</Text>
          {iconName && (
            <Feather
              name={iconName}
              size={20}
              color="#ffffff"
              style={styles.icon}
            />
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#005bb5", // Matches the deep blue from your image
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    // iOS Shadow
    shadowColor: "#005bb5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    // Android Shadow
    elevation: 5,
  },
  disabledButton: {
    backgroundColor: "#a0c4e8",
    shadowOpacity: 0,
    elevation: 0,
  },
  text: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.5,
  },
  icon: {
    marginLeft: 8, // Space between text and icon
  },
});
