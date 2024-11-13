import React, { useState } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { images, icons } from '../../constants'; // Import your icons from constants
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '', // State for confirm password
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true); // State for confirm password visibility
  const [error, setError] = useState(null); // Error state for password mismatch
  const router = useRouter();

  const submit = () => {
    // Check if the passwords match
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!form.username || !form.email || !form.password || !form.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    // Simulate successful sign-up (you can replace with actual signup logic)
    setTimeout(() => {
      setIsSubmitting(false);
      // Directly navigate to sign-in page after sign-up
      router.push('/sign-in');
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
          <Text style={styles.title}>Sign Up for KinSocial</Text>

          {/* Username Input */}
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={form.username}
            onChangeText={(text) => setForm({ ...form, username: text })}
          />

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
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              style={styles.toggleButton}
              onPress={() => setPasswordVisible(!passwordVisible)}
            >
              <Image
                source={passwordVisible ? icons.eye : icons.hide_eye}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Confirm Password Input */}
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChangeText={(text) => setForm({ ...form, confirmPassword: text })}
              secureTextEntry={!confirmPasswordVisible}
            />
            <TouchableOpacity
              style={styles.toggleButton}
              onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            >
              <Image
                source={confirmPasswordVisible ? icons.eye : icons.hide_eye}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>

          {/* Display error message */}
          {error && <Text style={styles.errorText}>{error}</Text>}

          {/* Sign Up Button */}
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={submit}
            disabled={isSubmitting}
          >
            <Text style={styles.signUpButtonText}>
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </Text>
          </TouchableOpacity>

          {/* Sign In Link */}
          <View style={styles.signInContainer}>
            <Text style={styles.signInText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push('/sign-in')}>
              <Text style={styles.signInLink}>Sign In</Text>
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
    position: 'relative',
    width: '100%',
    marginBottom: 20, // Increased margin to space out the inputs
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
    zIndex: 1,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#4F46E5',
  },
  signUpButton: {
    backgroundColor: '#4F46E5',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  errorText: {
    color: '#FF0000',
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  signInText: {
    fontSize: 16,
    color: '#7F8C8D',
  },
  signInLink: {
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

export default SignUp;
