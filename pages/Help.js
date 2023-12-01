import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function HelpPage({ route }) {
  const { colors } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16, backgroundColor: colors[7], }}>
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
          {/* Short Description Section */}
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 18, color: colors[2] }}>
              <Text style={{ fontWeight: 'bold' }}>How do I take part in the Big Garden Birdwatch?</Text>
              {' '}
              {"\n"}
              {"\n"}
              It's easy - you simply watch the birds in your garden or local park for one hour, and record what you see. 
              {"\n"}
              {"\n"}
              1. Count the birds you see in your garden, from your balcony or in your local park for one hour over the Big Garden Birdwatch weekend. It doesn't matter what time of day you do your Birdwatch, but you’ll see more birds if you do it first thing in the morning. 
              {"\n"}
              {"\n"}
              2. Only include birds that land, not those flying over. Count the highest number of each species you see at any one time. For example, if you saw four Starlings together, then two Starlings later, your final count will be four (not six). 
              {"\n"}
              {"\n"}
              3. Go online and tell us what you've seen! Even if you didn't see anything at all in your hour, please let us know. It's all really useful information. 
            </Text>
          </View>

          {/* Frequently Asked Questions Section */}
          <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors[2], marginBottom: 12 }}>
              Frequently Asked Questions
            </Text>

            {/* FAQ 1 */}
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 18, color: colors[2] }}>
                <Text style={{ fontWeight: 'bold' }}>Q:</Text>
                {' '}
                What is the purpose of this app?
              </Text>
              <Text style={{ fontSize: 16, color: colors[2] }}>
                A: This app is designed to help you count birds within an hour.
              </Text>
            </View>

            {/* FAQ 2 */}
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 18, color: colors[2] }}>
                <Text style={{ fontWeight: 'bold' }}>Q:</Text>
                {' '}
                How do I get started?
              </Text>
              <Text style={{ fontSize: 16, color: colors[2] }}>
                A: To get started, You would press 'Start session' on the pre-session dashboard.
              </Text>
            </View>

            {/* FAQ 3 */}
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 18, color: colors[2] }}>
                <Text style={{ fontWeight: 'bold' }}>Q:</Text>
                {' '}
                How do I add a bird I saw to the list?
              </Text>
              <Text style={{ fontSize: 16, color: colors[2] }}>
                A: once you have started a session, press the 'add new bird' button to select a new bird to add. alternatively,  
                If you want to add to a bird already on the list, press on the + next to the bird on your list.
              </Text>
            </View>

            {/* FAQ 4 */}
            <View style={{ marginBottom: 16 }}>
              <Text style={{ fontSize: 18, color: colors[2] }}>
                <Text style={{ fontWeight: 'bold' }}>Q:</Text>
                {' '}
                How do I find out more about a bird?
              </Text>
              <Text style={{ fontSize: 16, color: colors[2] }}>
                A: Go to the Bird Guide page by pressing on the bird guide icon and the press on the
                see info link next to the bird you want to know more about.
              </Text>
            </View>


            {/*more FAQs*/}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
