import { View } from "react-native";
import TextBox from "./TextBox";
import IndividualResult from "./IndividualResult";
import Container from "./Container";
import { Image } from "react-native";
import IndividualSearch from "./IndividualSearch";
import ScrollingBox from "./ScrollBox";
import { Text } from "react-native";

/*

    - SearchBirds component -

    props:
    - colors: color palette of page
    - birds: bird list
    - results: boolean, birds will be displayed as results

*/

export default function SearchBirds(props) {

    function Birds(result, birds, colors) {

        var birdComponents = [];

        if (result) {

            for (var i = 0; i < birds.length; i++) {

                birdComponents.push(

                    <IndividualResult

                        colors={colors}
                        bird={birds[i]}
                        place={i + 1}
                        key={'bird' + i}
                    />
                )
            }
        }
        else {

            for (var i = 0; i < birds.length; i++) {

                birdComponents.push(

                    <IndividualSearch

                        colors={colors}
                        birds={birds}
                        navigation={props.navigation}
                        log={props.log}
                        setLog={props.setLog}
                        birdIndex={i}
                        key={'bird' + i}
                    />
                )
            }
        }

        return birdComponents;
    }

    return (

        <View style={{

            width: '100%',
        }}>
            <View style={{

                width: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: -12,
            }}>

                <Image

                    style={{

                        width: 50,
                        height: 50,
                        tintColor: props.colors[2],
                        marginTop: 20,
                        marginLeft: 8,
                    }}

                    source={require("../../../assets/search.png")}
                />

                <View style={{

                    flex:1,
                }}>
                    <TextBox

                        colors={props.colors}
                        title={"Search for Birds"}
                        placeholder={"Enter search here..."}
                        hintText={"Enter text here to filter out birds by their name"}
                    />
                </View>
            </View>

            <ScrollingBox

                colors={props.colors}
                grey={true}
                maxHeight={props.maxHeight}
            >
                {Birds(props.results, props.birds, props.colors)}

            </ScrollingBox>

            <Text style={{

                marginTop: 8,
                fontSize: 14,
                fontWeight: 'bold',
                color: props.colors[2],
                alignSelf: 'center'
            }}>

                Scroll Down for More
                
            </Text>
        </View>
    )
}
