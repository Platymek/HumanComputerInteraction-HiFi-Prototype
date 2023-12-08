import { Text, View, TextInput } from 'react-native';
import BirdContainer from './BirdContainer'
import AddButton from './AddButton';
import SeeInfo from './SeeInfo';
import colors from '../../../Colors';

/*

    - IndividualSearch Component -

    props:
    - colors: color palette of page
    - navigation: navigation class
    - birds: birds list
    - log: log list
    - setLog: set log list function
    - birdIndex: index of bird list
    - navigation: navigate class for navigating back home

*/

export default function IndividualSearch(props) {

    return (

        <BirdContainer

            colors={props.colors}
            bird={props.birds[props.birdIndex]}
        >
            <View style={{

                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                width: "100%",
            }}>
                <View

                    style={{

                        width: "50%",
                    }}
                >
                    <SeeInfo

                        colors={props.colors}
                        navigation={props.navigation}
                        birdIndex={props.birdIndex}
                    />
                </View>

                <View

                    style={{

                        width: "50%",
                    }}
                >
                    <AddButton

                        colors={props.colors}
                        birds={props.birds}
                        log={props.log}
                        birdIndex={props.birdIndex}
                        navigation={props.navigation}
                    />
                </View>

            </View>

        </BirdContainer>
    )
}
