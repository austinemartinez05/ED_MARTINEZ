import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Slot, Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync(); // Ensure the splash screen does not auto-hide

const MainLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-BlackItalic": require("../assets/fonts/Poppins-BlackItalic.ttf"),
  });

  const [loadingError, setLoadingError] = useState(false); // To handle font loading errors

  useEffect(() => {
    if (error) {
      setLoadingError(true); // If there's an error, update the state
    }

    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide splash screen when fonts are loaded
    }
  }, [fontsLoaded, error]);

  // Show loading screen if fonts are still loading
  if (!fontsLoaded && !loadingError) {
    return null;
  }

  // If there's an error, show an error screen
  if (loadingError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load fonts. Please try again.</Text>
      </View>
    );
  }

  return (
    <Stack>
      {/* Define the stack screens */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Slot /> {/* This renders the appropriate screen depending on the route */}
    </Stack>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default MainLayout;
