import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import HelpButton from './templates/components/HelpButton';
import GuideButton from './templates/components/GuideButton';
import BigButton from './templates/components/BigButton';
import Help from './Help';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function Dashboard({ route, navigation }) {
  const { colors } = route.params;
  const Stack = createNativeStackNavigator();
  
  const goToHelpPage = () => {
    // Handle navigation logic here
    navigation.navigate("Help");
    console.log('Navigating to help page');
  };
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <ScrollView
      style={{ flex: 1, maxHeight: 614 }}
      contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16, }}
      >
        <View
          style={{
            flex: 1,
            width: '100%',
            maxWidth: 340,
            borderRadius: 20,
            padding: 16,
            backgroundColor: colors[1],
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 8,
            elevation: 8,
            overflow: 'hidden',
          }}
        >
          {/* Title and start session section */}
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 18, color: colors[2], textAlign: 'center'}}>
              <br />
              <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Your 1 hour session timer will start when the button is pressed.</Text><br />
              <br />
              Make sure to check the guides
              <br />
              below before starting your session
            </Text>
            <br />
            <BigButton
                colors={colors}
                title={"Start Session"}
                onPress={() => {
                     navigation.navigate("Help") // the page it would go to is not there yet
                     console.log("Starting session")
                }}
            />
            <br />
          </View>

          {/* Bottom buttons */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: -8, flex: 1, marginLeft: 1 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors[2], marginBottom: 12 }}>
            </Text>

            {/* Guide button*/}
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 18, color: colors[2] }}>
                <br />
                <br />
                Want to<br />
                learn your birds?
              </Text>
              <br />
              <GuideButton/>
            </View>

            {/* Help button */}
            <View style={{ marginBottom: 25, flex: 1, marginLeft: 19 }}>
              <Text style={{ fontSize: 18, color: colors[2] }}>
                Don't know how the count works? Or have any other questions?
              </Text>
              <br />
              <HelpButton
              onPress={goToHelpPage}
              />
            </View>
            <Stack.Screen

                    name="Help"
                    component={Help}

                    options={{ headerShown: false }}

                    initialParams={{

                        colors: colors
                    }}
                />

          </View>
        </View>
      </ScrollView>
    </View>
  );
}