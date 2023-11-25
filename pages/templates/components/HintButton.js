import React, { useState } from 'react';
import { Text, View, Modal, Pressable, StyleSheet } from 'react-native';
import BigButton from './BigButton'

/*
    - HintButton Component -

    props:
    - colors: color palette of page
    - text: text which will appear in the modal
    - (optional) alt: boolean, colour as red instead of green
*/

export default function HintButton(props) {

    const [modalVisible, setModalVisible] = useState(false);

    function getColor() {

        return props.alt == true ? props.colors[5] : props.colors[3];
    }

    return (

        <View style={{

            padding: 4,
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
                    }}
                >
                    <View

                        style={{

                            borderWidth: 3,
                            borderColor: getColor(),
                            borderRadius: 4,

                            width: 300,
                            margin: 20,
                            backgroundColor: props.colors[1],
                            padding: 10,
                            alignItems: 'center',

                            shadowOffset: {

                                width: 0,
                                height: 2,
                            },

                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5,
                        }}
                    >
                        <View style={[{

                            marginTop: 16,
                            backgroundColor: getColor(),
                        },
                            styles.questionBorder
                        ]}>

                            <Text
                                selectable={false}

                                style={[
                                    { color: props.colors[1] },
                                    styles.questionText
                                ]}
                            >
                                ?
                            </Text>
                        </View>

                        <Text

                            style={{

                                color: props.colors[2],
                                fontSize: 24,
                                margin: 16,
                                marginTop: 32,
                                marginBottom: 32,
                            }}
                        >
                            {props.text}
                        </Text>

                        <BigButton

                            colors={props.colors}
                            title="Okay"
                            onPress={() => {

                                setModalVisible(!modalVisible)
                            }}

                            alt={props.alt}
                        />
                    </View>
                </View>
            </Modal>

            <Pressable

                unstable_pressDelay={1}
                onPress={() => setModalVisible(true)}
                color={getColor()}

                style={[
                    { backgroundColor: getColor() },
                    styles.questionBorder
                ]}

                hitSlop={8}
            >
                <Text

                    selectable={false}

                    style={[
                        { color: props.colors[1] },
                        styles.questionText
                    ]}
                >
                    ?
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({

    questionText: {

        marginLeft: 6,
        marginRight: 6,
        fontWeight: 'bold',
        fontSize: 14,
    },

    questionBorder: {

        borderRadius: 999,
        alignItems: 'center'
    }
});
