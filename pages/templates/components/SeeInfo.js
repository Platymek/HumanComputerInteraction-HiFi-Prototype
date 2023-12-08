import BigButton from "./BigButton";

/*
    - SeeInfo Component -

    props:
    - colors: color palette of page
    - navigation: navigate class for navigating back home
    - birdIndex: index of bird list
    - (optional) smallText: boolean, small text
    - (optional) compact: boolean, compact button
    - (optional) full: boolean, displays 'Add to log +', not 'Add +'
*/

export default function SeeInfo(props) {

    function getTitle(full) {

        if (full) {

            return 'see info'
        }

        return 'info'
    }

    return (

        <BigButton

            colors={props.colors}
            title={getTitle(props.full)}
            lite={true}
            smallText={props.smallText == true}
            compact={props.compact == true}

            onPress={() => {

                props.navigation.navigate("Info", { infoIndex: props.birdIndex })
            }}
        />
    )
}
