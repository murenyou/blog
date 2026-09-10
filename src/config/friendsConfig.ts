import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: true,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "萧小晓",
		imgurl:
			"https://blog.lxlovo.top/assets/friends/png.png",
		desc: "飞一个爱写文的菜鸡。",
		siteurl: "https://blog.lxlovo.top",
		tags: ["神"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用true
	},
		{
		title: "年华",
		imgurl:
			"https://blog.amamo.top/favicon/favicon2.png",
		desc: "分享生活和技术。",
		siteurl: "https://blog.520781.xyz",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用true
	},
		{
		title: "董健颖的个人博客",
		imgurl:
			"https://dongjianying.xyz/_astro/2.g0rWXCmt_ZRPm2Q.webp",
		desc: "这是我的个人博客，记录我的学习和生活点滴，分享我的学习经验和见解。希望在这里能与志同道合的朋友们交流和成长！",
		siteurl: "https://dongjianying.xyz",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用true
	},
	

	{
		title: "Zero - 浮生",
		imgurl:
			"https://vtdd.vip/_astro/avatar.ryzKiMN3_19g6Gw.webp",
		desc: "浮生一刹万般皆舍.",
		siteurl: "https://vtdd.vip",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用true
	},


	{
		title: "Olinl Blog",
		imgurl:
			"https://blog.olinl.com/assets/images/avatar.webp",
		desc: "分享、实践、学习",
		siteurl: "https://blog.olinl.com",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用true
	},


	{
		title: "番茄主理人",
		imgurl:
			"https://q1.qlogo.cn/g?b=qq&nk=20447289&s=640",
		desc: "坐而言不如起而行.",
		siteurl: "https://fqzlr.com/",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用true
	},

	{
		title: "Hzの小站",
		imgurl:
			"https://img.mikufans520.top/file/1770113724723_1000780877.webp",
		desc: "关于自己碎碎念念和分享个人建站以来的经验和教训以及相关技术分享类型的个人博客",
		siteurl: "https://blog.yumeacg.com",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用true
	},

	{
		title: "二次元论坛",
		imgurl:
			"https://p.qlogo.cn/gh/892876555/892876555/0",
		desc: "按下F逃离世界！",
		siteurl: "https://www.ecylt.top/",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用true
	},
		{
		title: "Xixmu",
		imgurl:
			"https://xixmu.top/_astro/head_ima.rsW3s28l_1KtIxl.avif",
		desc: "在记忆干枯前描绘",
		siteurl: "https://xixmu.top",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用true
	},
		{
		title: "西尔维尔的博客",
		imgurl:
			"https://wsrv.nl/?url=avatars.githubusercontent.com/u/184231508?s=400&u=0a370792ba6bbb95a04d309171b562bcd7283a0f&v=3",
		desc: "Per Aspera Ad Astra",
		siteurl: "https://silvaire.top/",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用true
	},
	{
		title: "临渊羡鱼",
		imgurl:
			"https://x1anyu.cn/assets/images/avatar.png",
		desc: "久有羡鱼意，不甘空望川. 躬身耕岁月，步步赴清澜",
		siteurl: "https://x1anyu.cn",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用true
	},
		{
		title: "左沐の手册",
		imgurl:
			"https://tu.mstzuomu.space/file/头像/1786942479049_azumahead.jpg",
		desc: "热爱是拯救无趣人生的唯一途径a",
		siteurl: "https://azuma.mstzuomu.space",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用true
	},
	{
		title: "星宇安全实验室",
		imgurl:
			"https://bk.zhaozhiqiang.pw/wp-content/uploads/2026/07/1784847314130_148x148.png",
		desc: "星宇安全实验室，专注网络安全技术分享，记录团队实战经历、安全研究与编程成长笔记，致力于分享网安学习干货。",
		siteurl: "https://bk.zhaozhiqiang.pw",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用true
	},

	
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};