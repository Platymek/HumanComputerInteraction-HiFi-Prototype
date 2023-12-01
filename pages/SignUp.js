import React, { useState } from 'react';
import { View, Text, Modal } from 'react-native';

import Account from './templates/Account';
import TextBox from './templates/components/TextBox';
import BigButton from './templates/components/BigButton';

export default function SignUp({ navigation, route }) {

    var { colors } = route.params

    const [modalVisible, setModalVisible] = useState(false);

    return (

        <View
            style={{

                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors[7],
            }}>

            <Modal

                visible={modalVisible}
                transparent={true}

                onRequestClose={() => {

                    setModalVisible(!modalVisible)
                }}
            >
                <View

                    style={{

                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: colors[7] + '88',
                    }}
                >
                    <View

                        style={{

                            borderRadius: 50,

                            width: 300,
                            margin: 20,
                            backgroundColor: colors[1],
                            padding: 10,
                            alignItems: 'center',

                            shadowOffset: {

                                width: 0,
                                height: 2,
                            },

                            shadowOpacity: 0.25,
                            shadowRadius: 8,
                            elevation: 8,
                        }}
                    >
                        <Text

                            style={{

                                color: colors[2],
                                fontSize: 24,
                                margin: 16,
                                marginTop: 32,
                                marginBottom: 32,
                            }}
                        >
                            <Text style={{ fontWeight: "bold" }}>We have sent an email to your inbox! </Text>
                            Verify your email using the mail we just sent to your inbox. Your 1 hour session will not start immediately.
                        </Text>

                        <BigButton

                            colors={colors}
                            title={"I have verified my email"}

                            onPress={() => {

                                setModalVisible(!modalVisible)
                                navigation.navigate("Dashboard")
                            }}
                        />

                        <BigButton

                            colors={colors}
                            title={"Cancel"}
                            alt={true}

                            onPress={() => {

                                setModalVisible(!modalVisible)
                            }}
                        />

                        <View style={{

                            padding: 12,
                        }} />
                    </View>
                </View>
            </Modal>

            <Account

                colors={colors}

                buttonTitle={"Sign Up"}
                navigation={navigation}
                alt={false}

                hyperText={"Looking for the admin page?"}
                linkText={"Login as admin."}
                hyperPage={"Admin"}

                onButtonPress={() => {

                    setModalVisible(!modalVisible)
                }}
            >
                <Text style={{

                    padding: 4,
                    fontSize: 18,

                    color: colors[2],
                }}>
                    <Text style={{ fontWeight: "bold" }}>Enter your details to sign up for the Big Garden Birdwatch! </Text>
                    <Text>Entering your details does not start your 1 hour session.</Text>
                </Text>

                <View style={{

                    padding: 4,
                }} />

                <TextBox

                    colors={colors}
                    title={"Email"}
                    placeholder={"example@mail.com"}
                    alt={false}
                />

                <TextBox

                    colors={colors}
                    title={"Postcode"}
                    placeholder={"AB1 2CD"}
                    alt={false}
                />

                <TextBox

                    colors={colors}
                    title={"Address"}
                    placeholder={"House Name, Street, City"}
                    hintText={"Only one session can be started for every household"}
                    alt={false}
                />

            </Account>
        </View>
    );
}
