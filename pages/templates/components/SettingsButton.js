import { Text, View } from "react-native";
import NavButton from "./NavButton";
import { Modal } from "react-native";
import { useState } from "react";
import Container from "./Container";
import { Image } from "react-native";
import BigButton from "./BigButton";

import lightColors from '../../../ColorsUpdated'
import darkColors from '../../../ColorsDark'
import contrastColors from '../../../ColorsContrast'
import NewToggle from "./NewToggle";

/*

    - SettingsButton Component -

    props:
    - colors: list of colors used in button
    - visible: boolean, is visible

*/

export default function SettingsButton(props) {

    const [modalVisible, setModalVisible] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [highContrast, setHighContrast] = useState(false);

    return (

        <View>

            <Modal

                visible={modalVisible}
                transparent={true}

                onRequestClose={() => {

                    setModalVisible(!modalVisible)
                }}
            >
                <View style={{

                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: props.colors[7] + '88',
                    flex: 1,
                }}>
                    <Container

                        colors={props.colors}

                        style={{

                            maxWidth: 300,
                            padding: 32,
                        }}
                    >
                        <Image

                            source={require("../../../assets/Settings.png")}

                            style={{

                                width: 50,
                                height: 50,
                                margin: 16,
                            }}

                            tintColor={props.colors[2]}
                        />

                        <Text style={{

                            fontSize: 32,
                            color: props.colors[2],
                            fontWeight: 'bold',
                        }}>
                            Settings
                        </Text>

                        <View style={{ paddingTop: 32 }} />

                        <View style={{

                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 16,
                        }}>
                            <Text style={{

                                color: props.colors[2],
                                fontSize: 22,
                            }}>
                                Dark Mode?

                            </Text>

                            <NewToggle

                                colors={props.colors}
                                toggled={darkMode}

                                onToggled={() => {

                                    if (darkMode) {

                                        props.setPageColors(lightColors);
                                    }
                                    else {

                                        props.setPageColors(darkColors);
                                    }

                                    setDarkMode(!darkMode);
                                }}
                            />
                        </View>

                        <View style={{

                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 16,
                        }}>
                            <Text style={{

                                color: props.colors[2],
                                fontSize: 22,
                            }}>
                                High Contrast Mode?

                            </Text>

                            <NewToggle

                                colors={props.colors}
                                toggled={highContrast}

                                onToggled={() => {

                                    setHighContrast(!highContrast);

                                    if (highContrast) {

                                        if (darkMode) {

                                            props.setPageColors(darkColors);
                                        }
                                        else {

                                            props.setPageColors(lightColors);
                                        }
                                    }
                                    else {

                                        props.setPageColors(contrastColors);
                                    }
                                }}
                            />
                        </View>

                        <View style={{

                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 16,
                        }}>
                            <Text style={{

                                color: props.colors[2],
                                fontSize: 22,
                            }}>
                                Large Text?

                            </Text>

                            <NewToggle

                                colors={props.colors}
                                toggled={darkMode}
                            />
                        </View>

                        <View style={{ paddingTop: 32 }} />

                        <BigButton

                            colors={props.colors}
                            title={"Done"}

                            onPress={() => {

                                setModalVisible(!modalVisible)
                            }}
                        />

                        <BigButton

                            colors={props.colors}
                            title={"Cancel"}
                            lite={true}

                            onPress={() => {

                                setModalVisible(!modalVisible)
                            }}
                        />

                    </Container>
                </View>
            </Modal>

            <NavButton

                source={require("../../../assets/Settings.png")}

                colors={props.colors}
                size={45}
                visible={props.visible}

                onPress={() => {

                    setModalVisible(!modalVisible)
                }}
            />
        </View>
    )
}
