import { Dimensions, StyleSheet } from "react-native";
import type { Theme } from "./store/ThemeProvider";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export const createMemoryStyles = (theme: Theme) =>
	StyleSheet.create({
		container: {
			height: 100,
			flex: 1,
			backgroundColor: theme.background,
			position: "relative",
		},
		loginContainer: {
			padding: 28,
		},
		title: {
			fontSize: 24,
			fontWeight: "bold",
			color: theme.text,
			marginBottom: 20,
			textAlign: "center",
		},
		warning: {
			backgroundColor: theme.warning,
			padding: 12,
			borderRadius: 8,
			marginBottom: 20,
			alignItems: "center",
		},
		warningText: {
			color: theme.background,
			fontSize: 14,
			fontWeight: "500",
		},
		setting: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			backgroundColor: theme.surface,
			padding: 16,
			borderRadius: 12,
			marginBottom: 20,
		},
		settingText: {
			fontSize: 16,
			color: theme.text,
			fontWeight: "500",
		},
		buttonContainer: {
			flexDirection: "row",
			marginBottom: 30,
			borderRadius: 12,
			backgroundColor: theme.surface,
			padding: 4,
		},
		cardImage: {
			width: "100%",
			height: 150,
			borderRadius: 8,
			marginBottom: 12,
		},
		button: {
			flex: 1,
			padding: 12,
			alignItems: "center",
			borderRadius: 8,
		},
		activeButton: {
			backgroundColor: theme.primary,
		},
		buttonText: {
			fontSize: 14,
			fontWeight: "600",
			color: theme.textSecondary,
		},
		activeButtonText: {
			color: theme.background,
		},
		playlist: {
			backgroundColor: theme.surface,
			padding: 20,
			borderRadius: 16,
			borderWidth: 1,
			borderColor: theme.border,
			width: 165,
			height: "auto",
		},
		generatedPlaylist: {
			width: "auto",
		},
		playlistTitle: {
			fontSize: 18,
			fontWeight: "600",
			color: theme.text,
			marginBottom: 8,
		},
		playlistDescription: {
			fontSize: 14,
			color: theme.textSecondary,
			lineHeight: 20,
		},
		icon: {
			color: theme.textSecondary,
		},
		// ✅ Input styles
		label: {
			fontSize: 14,
			color: theme.text,
			marginBottom: 6,
		},
		overlay: {
			position: "absolute",
			top: 0,
			left: 0,
			padding: 8,
			width: SCREEN_WIDTH,
			height: SCREEN_HEIGHT,
			zIndex: 100,
			backgroundColor: theme.background,
			borderColor: theme.border,
		},
		menu: {
			position: "absolute",
			top: 0,
			width: SCREEN_WIDTH * 0.8,
			height: "100%",
			backgroundColor: "#ffff",

			shadowColor: "#0000",
			shadowOpacity: 0.25,
			shadowOffset: { width: -2, height: 0 },
			shadowRadius: 8,
			elevation: 5,
		},
		menuItem: {
			fontSize: 24,
			marginVertical: 10,
			color: theme.text,
		},
		close: {
			marginTop: 30,
			color: "#e53935",
			fontSize: 16,
		},
		input: {
			backgroundColor: theme.surface,
			borderWidth: 1,
			borderColor: theme.border,
			borderRadius: 8,
			paddingVertical: 10,
			paddingHorizontal: 12,
			fontSize: 16,
			color: theme.text,
		},
		inputFocused: {
			borderColor: theme.primary,
		},
		inputError: {
			borderColor: theme.error,
		},
		inputMultiline: {
			minHeight: 80,
			textAlignVertical: "top",
		},
		errorText: {
			color: theme.error,
			fontSize: 12,
			marginTop: 4,
		},
		centeredView: {
			justifyContent: "center",
			alignItems: "center",
		},
		modalView: {
			position: "relative",
			backgroundColor: theme.background,
			borderRadius: 20,
			padding: 0,
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.25,
			shadowRadius: 4,
			elevation: 5,
		},

		textStyle: {
			color: theme.text,
			fontWeight: "bold",
			textAlign: "center",
		},
		modalText: {
			marginBottom: 15,
			textAlign: "center",
		},
		buttonOpenModal: {
			backgroundColor: theme.primary,
		},
		buttonCloseModal: {
			color: theme.secondary,
			position: "absolute",
			top: 65,
			left: 16,
			zIndex: 10,
		},
		modalHeader: {
			padding: 80,
			alignItems: "center",
		},
		userInfo: {
			padding: 12,
			margin: 16,
			gap: 14,
		},
		usersPlaylists: {
			flexDirection: "row",
			flexWrap: "wrap",
			gap: 12,
			padding: 16,
			alignContent: "center",
			height: "100%",
		},
		songItem: {
			paddingVertical: 10,
		},
		songTitle: {
			fontSize: 16,
			fontWeight: "600",
			color: theme.text,
		},
		songArtist: {
			fontSize: 14,
			color: theme.textSecondary,
		},
		separator: {
			height: 1,
			backgroundColor: "#ddd",
			marginVertical: 8,
		},
	});
