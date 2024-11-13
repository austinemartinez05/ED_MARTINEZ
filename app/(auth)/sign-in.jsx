import React, { useState } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { images, icons } from '../../constants'; // Import your icons from the constants
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true); // State for password visibility
  const router = useRouter();

  const submit = () => {
    if (!form.email || !form.password) {
      alert('Please fill in all fields');
      return;
    }
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/Circle');
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#FFFFFF', '#ADD8E6']} // Define gradient colors here
        start={{ x: 0, y: 0 }} // Start at the top
        end={{ x: 0, y: 1 }} // End at the bottom
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.innerContainer}>
            <Image source={images.logo7} resizeMode="contain" style={styles.logo} />
            <Text style={styles.title}>Sign In to KinSocial</Text>

            {/* Email Input */}
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={form.email}
              onChangeText={(text) => setForm({ ...form, email: text })}
              keyboardType="email-address"
            />

            {/* Password Input with Show/Hide functionality inside the box */}
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                value={form.password}
                onChangeText={(text) => setForm({ ...form, password: text })}
                secureTextEntry={!passwordVisible} // Toggle the visibility based on the state
              />
              <TouchableOpacity
                style={styles.toggleButton}
                onPress={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility
              >
                <Image
                  source={passwordVisible ? icons.eye : icons.hide_eye} // Conditionally render the eye icon
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            </View>

            {/* Sign In Button */}
            <TouchableOpacity
              style={styles.signInButton}
              onPress={submit}
              disabled={isSubmitting}
            >
              <Text style={styles.signInButtonText}>
                {isSubmitting ? 'Signing In...' : 'Sign In'}
              </Text>
            </TouchableOpacity>

            {/* Sign Up Link */}
            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => router.push('/sign-up')}>
                <Text style={styles.signUpLink}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  innerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  logo: {
    width: 200,
    height: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#BDC3C7',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  passwordContainer: {
    position: 'relative', // This will allow us to position the icon inside the input
    width: '100%',
  },
  passwordInput: {
    height: 50,
    width: '100%',
    borderColor: '#BDC3C7',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
  },
  toggleButton: {
    position: 'absolute',
    right: 15,
    top: 15,
    zIndex: 1, // Ensures the icon is above the text input
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#4F46E5', // Set color for the icon
  },
  signInButton: {
    backgroundColor: '#4F46E5',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  signInButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  signUpText: {
    fontSize: 16,
    color: '#7F8C8D',
  },
  signUpLink: {
    fontSize: 16,
    color: '#4F46E5',
    fontWeight: 'bold',
  },
  gradient: {
    flex: 1, // Make the gradient fill the entire screen
    justifyContent: 'center', // Center the content
    paddingHorizontal: 20, // Optional: to add padding to the sides if needed
  },
});

export default SignIn;
