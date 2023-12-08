import { Text, View } from "react-native";
import NavButton from "./NavButton";
import { Modal } from "react-native";
import { useState } from "react";
import Container from "./Container";
import { Image } from "react-native";
import BigButton from "./BigButton";

/*

    - SettingsButton Component -

    props:
    - colors: list of colors used in button
    - visible: boolean, is visible

*/

export default function SettingsButton(props) {

    const [modalVisible, setModalVisible] = useState(false);

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
                    flex: 1,
                }}>
                    <Container

                        colors={props.colors}

                        style={{

                            maxWidth: 300,
                        }}
                    >
                        <Image

                            source={require("../../../assets/Settings.png")}

                            style={{

                                width: 50,
                                height: 50,
                                margin: 16,
                                marginBottom: 32,
                            }}

                            tintColor={props.colors[2]}
                        />

                        <Text style={{

                            fontSize: 32,
                            color: props.colors[2],
                        }}>
                            Settings
                        </Text>

                        <View style={{ paddingTop: 32 }} />

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
