import Home from "@/app/routes/Home";
import * as React from "react";
import { BottomNavigation } from "react-native-paper";

const BottomNav = () => {
	const [index, setCurrentRoute] = React.useState(0);
	const [routes] = React.useState([
		{
			key: "home",
			title: "Generate",
			focusedIcon: "robot-excited",
			unfocusedIcon: "robot-excited-outline",
		},
		{ key: "albums", title: "Albums", focusedIcon: "album" },
		{
			key: "playlists",
			title: "Playlists",
			unfocusedIcon: "playlist-music",
			focusedIcon: "playlist-music-outline",
		},
		{
			key: "notifications",
			title: "Notifications",
			focusedIcon: "bell",
			unfocusedIcon: "bell-outline",
		},
		{
			key: "notifications",
			title: "Settings",
			focusedIcon: "cog",
			unfocusedIcon: "cog-outline",
		},
	]);

	const renderScene = BottomNavigation.SceneMap({
		home: Home,
	});

	return (
		<BottomNavigation
			navigationState={{ index, routes }}
			onIndexChange={setCurrentRoute}
			renderScene={renderScene}
		/>
	);
};

export default BottomNav;
