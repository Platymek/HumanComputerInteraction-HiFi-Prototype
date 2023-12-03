import { Modal, View, Text, TextInput } from "react-native";
import { useState } from "react";
import BigButton from "./BigButton";
import Container from "./Container";

/*
    - AddButton Component -

    props:
    - colors: color palette of page
    - birds: bird list
    - log: log list
    - setLog: set log list function
    - birdIndex: index of bird list
    - navigation: navigate class for navigating back home
    - (optional) full: boolean, displays 'Add to log +', not 'Add +'
*/

export default function AddButton(props) {

    const [modalVisible, setModalVisible] = useState(false);

    const [count, setCount] = useState("1");

    function getTitle(full) {

        if (full){  

            return 'Add to log +'
        }

        return 'Add +'
    }

    return (
        
        <View style={{ width: '100%' }}>

            {/* Modal for adding bird */}
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

                            maxWidth: 350,
                        }}
                    >

                        <Text style={{

                            fontSize: 32,
                            textAlign: 'center',
                            color: props.colors[2]
                        }}>
                            How many {'\n'}

                            <Text style={{ fontWeight: "bold" }}>
                                {props.birds[props.birdIndex].name}
                                s{'\n'}
                            </Text>

                            do you see?
                        </Text>

                        <View style={{

                            width:'100%',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            margin: 24,
                        }}>

                            <BigButton 

                                colors={props.colors}
                                title={"-"}
                                lite={true}
                                compact={true}

                                onPress={() => {

                                    var newInt = parseInt(count);
                                    newInt--;

                                    if (newInt < 1){

                                        newInt = 1;
                                    }

                                    if (count == ""){
                                                
                                        setCount("1");
                                    }
                                    else
                                    {
                                        setCount('' + newInt);
                                    }
                                }}
                            />

                            <Container
                            
                                colors={props.colors}
                                grey={true}
                                style={{

                                    padding: 0,
                                    maxWidth: 100,
                                    justifyContent: 'center',
                                    borderRadius: 20,
                                }}
                            >
                                <TextInput

                                    style={{
                                        
                                        width: '100%',
                                        color: props.colors[3],
                                        fontSize: 32,
                                        textAlign: 'center',
                                    }}

                                    value={count}
                                    inputMode={'numeric'}

                                    onChangeText={(text) => {
                                        
                                        if (!isNaN(text)) { 
                                            
                                            setCount(text); 
                                        }
                                    }}
                                />

                            </Container>

                            <BigButton 

                                colors={props.colors}
                                title={"+"}
                                lite={true}
                                compact={true}

                                onPress={() => {

                                    var newInt = parseInt(count);
                                    newInt++;

                                    if (count == ""){
                                                
                                        setCount("1");
                                    }
                                    else
                                    {
                                        setCount('' + newInt);
                                    }
                                }}
                            />
                        </View>

                        <BigButton

                            colors={props.colors}
                            title={"Add to Log"}

                            onPress={() => {
                                
                                setModalVisible(!modalVisible);
                                
                                var newLog = props.log;
                                newLog[props.birdIndex] 
                                    = parseInt(count)

                                props.setLog(newLog)

                                console.log(props.log)

                                props.navigation.navigate('Home');
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

            {/* Add Button */}
            <BigButton
            
                colors={props.colors}
                title={getTitle(props.full)}

                onPress={() => {
                    
                    setCount("1")
                    setModalVisible(!modalVisible)
                }}
            />
        </View>
    )
}