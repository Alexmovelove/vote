exports.num_day = 2;
exports.wifkey = "ыы";
exports.account = "чч.witness";

	var d = new Date(); // Today!
	d.setDate(d.getDate()-exports.num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi, '');
	
exports.bd_name = "witness";
exports.password_mysql = "root";
exports.user_mysql = "root";
exports.hive_name = "hive-153018";
exports.image_list = `![`+d+`.png](https://cdn.steemitimages.com/DQmbXSrdwm2MntCHrKSyfhAgNtQhMXNdUXK7zv8ztYAHzCV/`+d+`.png)`;
exports.title_name = "SteemFamily";
exports.url_post = `
![Checking The Uniqueness SteemFamily (1).png](https://cdn.steemitimages.com/DQmVKcXUyc38bw7P9cCfARZwZbtVXwUhjYF2K1bNnK6BXHF/Checking%20The%20Uniqueness%20SteemFamily%20(1).png)
`;


