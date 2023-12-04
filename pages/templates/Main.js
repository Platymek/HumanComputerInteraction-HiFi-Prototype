import { View } from "react-native";
import Header from "./components/Header";
import { ScrollView } from "react-native";

/*

	- Main Template -

	props:
    - colors: color palette of page
    - navigate: navigation class
	- children: takes in children

*/

export default function Main(props) {

	// solution from https://stackoverflow.com/questions/55942600/how-to-get-previous-route-name-from-react-navigation
	// `navigation` const is passed to the screen component or from useNavigation()
	var routes = props.navigation.getState()?.routes;
	var prevRoute = routes[routes.length - 2]; // -2 because -1 is the current route
	var showNavButtons = prevRoute == undefined
		? false
		: prevRoute.name == "Home"
			? false
			: true;


	return (

		<View style={{

			flex: 1
		}}>

			<Header

				colors={props.colors}
				navigation={props.navigation}

				hideBack={showNavButtons}
				hideHome={showNavButtons}
			/>

			<ScrollView style={{

				maxWidth: 500,
				width: '100%',
			}}>
				<View style={{

					padding:16,
				}}>
					{props.children}

				</View>
			</ScrollView>

		</View>
	)
}
