import { Button, View } from "react-native";
import Header from "./components/Header";
import { ScrollView } from "react-native";
import colors from "../../Colors";
import BigButton from "./components/BigButton";
import { useRef, useState } from "react"

/*

	- Main Template -

	props:
    - colors: color palette of page
    - navigate: navigation class
	- children: takes in children
	- admin: admin results page

	solution for scroll to top button from https://spin.atomicobject.com/2021/04/20/react-native-building-scroll-top-button/
*/

export default function Main(props) {

	// solution from https://stackoverflow.com/questions/55942600/how-to-get-previous-route-name-from-react-navigation
	// `navigation` const is passed to the screen component or from useNavigation()
	var routes = props.navigation.getState()?.routes;
	var prevRoute = routes[routes.length - 2]; // -2 because -1 is the current route
	var showNavButtons = prevRoute == undefined
		? false
		: prevRoute.name == "Dashboard"
			? false
			: true;

	const listReference = useRef(null);
	const [showTop, setShowTop] = useState(false);

	function ScrollToTopButton(show) {

		if (show) {

			return (

				<View

					visible={showTop}

					style={{

						width: 200,
					}}
				>
					<BigButton

						colors={props.colors}
						title={"Scroll to top"}
						smallText={true}

						onPress={() => {

							listReference.current.scrollTo({ y: 0, animated: true });
						}}
					/>
				</View>
			)
		}
	}

	return (

		<View style={{

			backgroundColor: props.colors[7],
			flex: 1,
		}}>

			<Header

				colors={props.colors}
				navigation={props.navigation}

				hideBack={!showNavButtons}
				hideHome={!showNavButtons}

				admin={props.admin}

				setPageColors={props.setPageColors}
			/>

			<ScrollView

				style={{

					width: '100%',
				}}

				contentContainerStyle={{

					justifyContent: 'center',
					alignItems: 'center',
				}}

				ref={listReference}

				onScroll={event => {

					setShowTop(event.nativeEvent.contentOffset.y > 0)
				}}
			>
				<View style={{

					maxWidth: 750,
					padding: 16,
					width: '100%',
					justifyContent: 'center',
					alignItems: 'center',
					marginBottom: 64,
				}}>
					{props.children}

				</View>

			</ScrollView>

			<View style={{

				width: '100%',
				position: 'absolute',
				bottom: 12,
				alignItems: 'center',
			}}>
				{ScrollToTopButton(showTop)}

			</View>

		</View>
	)
}
