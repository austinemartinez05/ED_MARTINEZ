import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';  // Import LinearGradient
import { images } from '../constants';

export default function Index() {
  return (
    <LinearGradient
    colors={['#B0E0E6', '#FFABAB']}
      style={styles.background}  // Apply to background
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.contentContainer}>
            {/* Logo */}
            <Image
              source={images.logo7}
              style={styles.logo}
              resizeMode="contain"
            />
            {/* Main Image */}
            <Image
              source={images.imagelogo}
              style={styles.imagelogo}
              resizeMode="cover"
            />
            {/* Main Description */}
            <View style={styles.textContainer}>
              <Text style={styles.mainText}>
                A social media app designed to help you connect with your different social circles effortlessly.
              </Text>
            </View>
            {/* Subtitle */}
            <Text style={styles.subtitle}>
              Where Connections Come Full Circle
            </Text>
            {/* Action Button */}
            <View style={styles.buttonWrapper}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push('../(auth)/sign-in')}
              >
                <Text style={styles.buttonText}>Continue To Circles</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#4F46E5" style="light" />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = {
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',  // Set to transparent to show gradient
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
  },
  logo: {
    width: 300,
    height: 80,
    marginTop: 30,
  },
  imagelogo: {
    width: 170,
    height: 170,
    borderRadius: 80,
    marginTop: 20,
    borderWidth: 5,
    borderColor: '#FF6F61',
  },
  textContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
  },
  mainText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
    lineHeight: 28,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6B7280',
    marginTop: 16,
    textAlign: 'center',
  },
  buttonWrapper: {
    marginTop: 35,
    width: '80%',
    alignItems: 'center',
    marginBottom: 15
  },
  button: {
    backgroundColor: '#FF6F61',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
};
