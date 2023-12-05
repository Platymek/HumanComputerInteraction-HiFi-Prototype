import BigButton from "./BigButton";

/*
    - SeeInfo Component -

    props:
    - colors: color palette of page
    - navigation: navigate class for navigating back home
    - birdIndex: index of bird list
    - (optional) smallText: boolean, small text
    - (optional) compact: boolean, compact button
*/

export default function SeeInfo(props) {

    return (

        <BigButton

            colors={props.colors}
            title={"see info"}
            lite={true}
            smallText={props.smallText == true}
            compact={props.compact == true}

            onPress={() => {

                props.navigation.navigate("Info", { infoIndex: props.birdIndex })
            }}
        />
    )
}
