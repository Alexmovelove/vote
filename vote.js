const dsteem = require("dsteem");
const mysql = require("mysql2");
const steem = require('steem');
const fs = require("fs");            
 
var settings = require('./config.js');

let num_day = settings.num_day;
let bd_name = settings.bd_name;
let hive_name = settings.hive_name;
let url_post = settings.url_post;
let password_mysql = settings.password_mysql;
let user_mysql = settings.user_mysql;
let title_name = settings.title_name;
let image_list = settings.image_list;
let wifkey = settings.wifkey;

let votey = settings.account;
let post_number; 
	
config = {
  host: "localhost",
  user: user_mysql,
  database: bd_name,
  password: password_mysql
}

const connection = mysql.createConnection(config);

	let sql = `SELECT * FROM vote_number WHERE id='1'`   ;
	connection.query(sql,  function(err, results) 
	{
		if(err) console.log(err);
		const users2 = results;

		post_number = users2[0].number;
	});


	var d = new Date(); // Today!
	d.setDate(d.getDate()-num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi,d '');
	console.log(d);   

let mytable_p = 'votebasepost';
let mytable_c = 'c'+d;
let mytable = 'a'+d;

let fullbase = "test";

//var wif = steem.auth.toWif(username, password, 'posting');

sql = `SELECT * FROM ${mytable_p}`;
console.log(sql);

connection.query(sql,  function(err, results) {
    if(err) console.log(err);
	
    const users = results;
   // console.log(users);
 //  console.log(users.length);

console.log(post_number);
console.log(post_number);
console.log(post_number);
console.log(post_number);
console.log(post_number);
console.log(post_number);
		post_number++;
		
						const sql8 = `UPDATE vote_number SET number='${post_number}' WHERE id='1' LIMIT 1000`;
		  
						connection.query(sql8,function(err, results) {
						if(err) console.log(err);
						console.log(results);
				});
				
   for(let i=0; i < post_number; i++)
	{
		if (users[i].points == "0")
		{
			let author = users[i].author;
			let lastsend = users[i].lastsend;
			console.log(author);
			console.log(author);
			console.log(author);
			console.log(lastsend);
			console.log(users[i].lastsend);

		if (lastsend == d) 
			
			{
	
			    console.log('d');
			    console.log('d');
			    console.log('d');
			    console.log('d');
			}
			let mv_coint = users[i].mv;
			let permlink = users[i].url;
			let weight = users[i].weight;
	let url = users[i].url;
	permlink = permlink.split("/")
    //console.log(permlink[3]);

	permlink = permlink[3];

		//	mv_coint = mv_coint.replace(/,/gi, '.');

			lastsend = users[i].lastsend;
			let mypermlink = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();

  	steem.broadcast.vote(wifkey, votey, author, permlink, 1000,function(err, result) 
			{
				
					  				if(err) 
				{ 
					console.log(err)
				} else {
					
	  					console.log(err, result);
					
					const sql12 = `UPDATE ${mytable_p} SET points="1" WHERE url='${url}'`;
					
					connection.query(sql12,	function(err, results) {
					if(err) console.log(err);
					//console.log(results);
					});
					
			}	
		
			});
			
/*

steem.broadcast.comment(votey, wifkey, 
 author, 
 permlink,
 votey, 
 mypermlink, 
 'hi', 
 'supertext', 
 {tags: ['steemjs', 'alexmovewitness']}, 
 function(err, result) {
    console.log(err, result);
});

*/
	}
		else 
		console.log("Already voted");
	}
});
 
 