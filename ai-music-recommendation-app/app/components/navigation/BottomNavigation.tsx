import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const BottomNav = () => {
	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{
			key: "music",
			title: "Favorites",
			focusedIcon: "heart",
			unfocusedIcon: "heart",
		},
		{ key: "albums", title: "Albums", focusedIcon: "album" },
		{
			key: "recents",
			title: "Playlists",
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
			unfocusedIcon: "cog",
		},
	]);

	const renderScene = BottomNavigation.SceneMap({
		music: MusicRoute,
		albums: AlbumsRoute,
		recents: RecentsRoute,
		notifications: NotificationsRoute,
	});

	return (
		<BottomNavigation
			navigationState={{ index, routes }}
			onIndexChange={setIndex}
			renderScene={renderScene}
		/>
	);
};

export default BottomNav;
