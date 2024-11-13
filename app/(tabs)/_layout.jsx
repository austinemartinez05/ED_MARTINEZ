import { Image, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import icons from '../../constants/icons'; // Ensure the path is correct

const TabIcon = ({ icon, color }) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 24, height: 24, tintColor: color }}
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="Circle"
        options={{
          title: 'Circle',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon icon={icons.circle} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
  name="Feed"
  options={{
    title: 'Feed',
    headerShown: false,
    tabBarIcon: ({ color }) => (
      <TabIcon icon={icons.feed} color={color} /> // Add your feed icon here
    ),
  }}
/>
<Tabs.Screen
        name="Friends"
        options={{
          title: 'Friends',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon icon={icons.friend} color={color} />
          ),
        }}
      />

<Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabIcon icon={icons.profile} color={color} />
          ),
        }}
      />

    </Tabs>
  );
};

export default TabsLayout;
