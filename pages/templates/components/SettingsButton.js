import NavButton from "./NavButton";

/*

    - SettingsButton Component -

    props:
    - colors: list of colors used in button
    - visible: boolean, is visible

*/

export default function SettingsButton(props) {

    return (

        <NavButton

            source={require("../../../assets/Settings.png")}

            colors={props.colors}
            size={45}
            visible={props.visible}

            onPress={() => {

                props.navigation.navigate("Home");
            }}
        />
    )
}
