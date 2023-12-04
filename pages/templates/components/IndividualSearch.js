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
            <SeeInfo

                colors={props.colors}
                birdIndex={props.birdIndex}
                navigation={props.navigation}
                smallText={true}
                compact={true}
            />
            <AddButton

                colors={props.colors}
                birds={props.birds}
                log={props.log}
                setLog={props.setLog}
                birdIndex={props.birdIndex}
                navigation={props.navigation}
                smallText={true}
                compact={true}
            />
        </BirdContainer>
    )
}
