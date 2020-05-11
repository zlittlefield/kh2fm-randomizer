import { Rewards } from "../rewards";
import { RewardType } from "../rewards/Reward";
import { RewardLocation, RewardLocationType } from "./RewardLocation";

export const disneyCastleRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.CHEST,
		description: "Disney Castle (Courtyard)",
		value: "11CDF9B2",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Disney Castle (Courtyard)",
		value: "11CDF9BE",
		reward: Rewards.STAR_RECIPE,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Disney Castle (Courtyard)",
		value: "11CDF9CA",
		reward: Rewards.AP_BOOST,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Disney Castle (Courtyard)",
		value: "11CDF9D6",
		reward: Rewards.MYTHRIL_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Disney Castle (Courtyard)",
		value: "11CDF9E2",
		reward: Rewards.BLAZING_STONE,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Disney Castle (Courtyard)",
		value: "11CDF9EE",
		reward: Rewards.BLAZING_SHARD,
	},
	{
		type: RewardLocationType.CHEST,
		description: "Disney Castle (Courtyard)",
		value: "11CDF9FA",
		reward: Rewards.MYTHRIL_SHARD,
	},
	{
		type: RewardLocationType.BIGCHEST,
		description: "Disney Castle (Library)",
		value: "11CDFA06",
		reward: Rewards.TORN_PAGE,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Disney Castle Map",
		value: "11CE0756",
		reward: Rewards.DISNEY_CASTLE_MAP,
	},
	{
		type: RewardLocationType.POPUP,
		description: "Proof of Connection",
		value: "11CE0B16",
		reward: Rewards.PROOF_OF_CONNECTION,
		exclude: [RewardType.FORM, RewardType.TORNPAGE, RewardType.SPELL],
	},
	{
		type: RewardLocationType.POPUP,
		description: "Manifest Illusion (Lingering Will)",
		value: "11CE0B22",
		reward: Rewards.MANIFEST_ILLUSION,
		exclude: [RewardType.FORM, RewardType.TORNPAGE, RewardType.SPELL],
	},
];