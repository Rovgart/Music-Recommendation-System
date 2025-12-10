import { ScrollView, Text, View } from "react-native";
import { Avatar, Card, TouchableRipple, useTheme } from "react-native-paper";

export default function ExploreRoute() {
	const theme = useTheme();

	const trendingPlaylists = [
		{
			name: "Indie Essentials",
			cover: "https://i.scdn.co/image/ab67706f00000002ac4a9432edc21f9ce12b1c06",
		},
		{
			name: "Rock Revival",
			cover: "https://i.scdn.co/image/ab67706f00000003258dfd2cf064ed29fda71f34",
		},
		{
			name: "Mood Booster",
			cover: "https://i.scdn.co/image/ab67706f00000003f568cea5c42a3a2b4131473a",
		},
	];

	const topArtists = [
		{
			name: "The Strokes",
			photo: "https://i.scdn.co/image/ab6761610000e5ebfddcd9a316bed36fb1d8e33c",
		},
		{
			name: "Arctic Monkeys",
			photo: "https://i.scdn.co/image/ab6761610000e5eb2d440b36d0f5bd8b7cbdeb18",
		},
		{
			name: "Tame Impala",
			photo: "https://i.scdn.co/image/ab6761610000e5eb1de8f2dbabdfa81857232e48",
		},
	];

	const suggestedForYou = [
		{
			title: "Late Night Vibes",
			cover: "https://i.scdn.co/image/ab67706f00000003bc992c91e8bd257a7b82d49f",
		},
		{
			title: "Fresh Indie",
			cover: "https://i.scdn.co/image/ab67706f000000033c750659ea104fd21d1b489a",
		},
	];

	return (
		<ScrollView
			style={{ flex: 1, backgroundColor: theme.colors.background }}
			contentContainerStyle={{ padding: 16, gap: 32 }}
		>
			<View style={{ gap: 12 }}>
				<Text style={{ fontWeight: "bold" }}>Trending Now</Text>

				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<View style={{ flexDirection: "row", gap: 16 }}>
						{trendingPlaylists.map((pl) => (
							<TouchableRipple
								key={pl.name}
								rippleColor={theme.colors.primaryContainer}
								onPress={() => console.log("open playlist", pl.name)}
								style={{ borderRadius: 16 }}
							>
								<Card mode="elevated" style={{ width: 160, borderRadius: 16 }}>
									<Card.Cover
										source={{ uri: pl.cover }}
										style={{ height: 160 }}
									/>
									<Card.Content style={{ paddingVertical: 12 }}>
										<Text style={{ fontWeight: "600" }}>{pl.name}</Text>
									</Card.Content>
								</Card>
							</TouchableRipple>
						))}
					</View>
				</ScrollView>
			</View>

			{/* Top Artists */}
			<View style={{ gap: 12 }}>
				<Text style={{ fontWeight: "bold" }}>Top Artists</Text>

				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					<View style={{ flexDirection: "row", gap: 20 }}>
						{topArtists.map((artist) => (
							<TouchableRipple
								key={artist.name}
								onPress={() => console.log("open artist", artist.name)}
								rippleColor={theme.colors.primaryContainer}
								style={{ alignItems: "center" }}
							>
								<View style={{ alignItems: "center", width: 80 }}>
									<Avatar.Image size={72} source={{ uri: artist.photo }} />
									<Text style={{ marginTop: 6, textAlign: "center" }}>
										{artist.name}
									</Text>
								</View>
							</TouchableRipple>
						))}
					</View>
				</ScrollView>
			</View>

			<View style={{ gap: 12 }}>
				<Text style={{ fontWeight: "bold" }}>Suggested For You</Text>

				<View style={{ gap: 16 }}>
					{suggestedForYou.map((item) => (
						<TouchableRipple
							key={item.title}
							rippleColor={theme.colors.primaryContainer}
						>
							<Card mode="elevated" style={{ borderRadius: 16 }}>
								<Card.Cover source={{ uri: item.cover }} />
								<Card.Content style={{ paddingVertical: 12 }}>
									<Text style={{ fontWeight: "600" }}>{item.title}</Text>
								</Card.Content>
							</Card>
						</TouchableRipple>
					))}
				</View>
			</View>
		</ScrollView>
	);
}
