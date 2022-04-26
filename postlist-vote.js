const fs = require("fs");
const steem = require('steem');
//let accounts = fs.readFileSync('spisok.txt').toString().split(" ");
//console.log(accounts);
accounts = 0;
var settings = require('./config.js');

let body3R = '';
let num_day = settings.num_day;
let bd_name = settings.bd_name;
let hive_name = settings.hive_name;
let url_post = settings.url_post;
let password_mysql = settings.password_mysql;
let user_mysql = settings.user_mysql;

config = {
  host: "localhost",
  user: user_mysql,
  database: bd_name,
  password: password_mysql
}


	var d = new Date(); // Today!
	d.setDate(d.getDate()-num_day); // Yesterday!
	d = d.toJSON().split("T")[0];
	d = d.replace(/-/gi, '');
	console.log(d);   

let mytable_p = 'p'+d;
let mytable_c = 'c'+d;
let mytable = 'a'+d;


//accounts.forEach(function (element,i,array){
	
	  const mysql = require("mysql2");

const connection = mysql.createConnection(config);

let fullbase = "vote";
let table = "vote";

  const sql = `SELECT * FROM `+table;
    //const sql = `SELECT * FROM p0111 ORDER BY length DESC`;
       //  console.log(sql);   

  connection.query(sql,  function(err, results) {
	  
	  //         console.log(results);   


        if(err) console.log(err);
             console.log(results[1]['account']);   

        users = results;
		accounts = users;
//console.log(accounts);


len = accounts.length;
// for (yyy = 0; yyy < len; yyy++) 
 for (yyy = 0; yyy < 20; yyy++) 

{
      console.log('yyy');
    //  console.log(yyy);
      console.log(accounts[yyy]);
     // console.log(accounts[yyy]['ofme']);
   //   console.log(accounts[yyy]['ofme']);
    //  console.log(accounts[yyy]['ofme']);
      let mv = accounts[yyy]['mv'];
	  let weight=100;
	        console.log('mv');
	        console.log(mv);

	  if (mv > 1000000) { weight = 10000 }
	  else if (mv > 900000) { weight = 9500 } else if (mv > 800000) { weight = 9000 }   else if (mv > 700000) 
		{ 
			weight = 8500;
		} else if (mv > 600000) 
		{
			weight = 8000;
		};
		
	  if ((mv > 500000) && (mv < 600000)) weight = 7500;
	  if ((mv > 400000)&& (mv < 500000)) weight = 7000;
	  if ((mv > 300000)&& (mv < 400000)) weight = 6500;
	  if ((mv > 200000)&& (mv < 300000)) weight = 6000;
	  if ((mv > 100000)&& (mv < 200000)) weight = 5500;
	  if ((mv > 90000)&& (mv < 100000)) weight = 4900;
	  if ((mv > 80000)&& (mv < 90000)) weight = 4800;
	  if ((mv > 70000)&& (mv < 80000)) weight = 4700;
	  if ((mv > 60000)&& (mv < 70000)) weight = 4600;
	  if ((mv > 50	)&& (mv < 60000)) weight = 3500;
	  if ((mv > 40000)&& (mv < 50000)) weight = 3400;
	  if ((mv > 30000)&& (mv < 40000)) weight = 3300;
	  if ((mv > 20000)&& (mv < 30000)) weight = 3200;
	  if ((mv > 10000)&& (mv < 20000)) weight = 3100;
	  if ((mv > 9000)&& (mv < 10000)) weight = 1900;
	  if ((mv > 5000)&& (mv < 9000)) weight = 1500;
	  if ((mv > 1000)&& (mv < 5000)) weight = 1000;

	          console.log('weight');
	        console.log(weight);
     // let weight = accounts[yyy]['mv'];
	  
 //if (accounts[yyy]['ofme'] === 'no')
 {
    steem.api.getDiscussionsByAuthorBeforeDate(accounts[yyy]['account'],null, new Date().toISOString().split('.')[0],50 , function(err, result) {
     if (result)
	 {		// console.log(result);
       



        var i, len = result.length;
                    for (i = 0; i < len; i++) 
                    {
                                                    
                       var raw = result[i];
                       console.log('Автор');
                       console.log(raw.author);
                       console.log('Заголовок');
                       console.log(raw.author);
                     console.log('Сообщество');

                       console.log(raw.category);
                         console.log('Длина поста');
                       console.log(raw.body_length);
                         console.log('Количество ожидаемого вознаграждения');
                       console.log(raw.pending_payout_value);
     console.log('Количество комментариев');                     
                     console.log(raw.replies.length);
                         console.log('Количество upvote');
                        let upvote = raw.active_votes.length-1;
                       console.log(raw.active_votes.length-1);
     console.log('Дата создания');                   
                       console.log(raw.created);
    let input = raw.created;
    var d = new Date(); // Today!

                        d.setDate(d.getDate() - num_day); // Yesterday!
                        d = d.toJSON().split("T")[0];
            let title = raw.title;

    title = title.replace(/[^a-zа-яё0-9\s]/gi, ' ');
            
    if ((input.indexOf(d) !== -1))

    {
    body3R =  `| `+raw.author + `| <a href="`+raw.url+`">` + title + `</a>| `+ upvote + `| ` +  `????`  + `| ` + raw.children+`| ` + raw.body_length+ ' | \n';
    console.log(body3R);
    
            const mysql = require("mysql2");
  
const connection = mysql.createConnection(config);

connection.on('error', function() {});


let sql44 =  `create table if not exists ${table}post( id int primary key auto_increment, author varchar(255) not null, title varchar(255) not null, created varchar(255) not null, length int not null, url varchar(255) UNIQUE KEY, comments int not null, upvotes int not null, points float not null, lastsend varchar(255))`;
 
          

         connection.query(sql44, function(err, results) {
                    if(err) console.log(err);
                    console.log(results);
                    });     

                    const sql = `INSERT INTO ${table}post(author, title, created, length, url, comments, upvotes, points,lastsend) VALUES('${raw.author}','${title}', '${raw.created}', '${raw.body_length}', '${raw.url}', '${raw.children}', '${upvote}','0','')`;

                    connection.query(sql, function(err, results) {
                    if(err) console.log(err);
                    console.log(results);
                    });     

connection.end();

        console.log(raw.created);
            fs.appendFileSync("rank.txt",body3R);

    }
}
	 }


    });
 }
}

});

	let post_number=1;
		
	const sql8 = `UPDATE vote_number SET number='${post_number}' LIMIT 1000`;

	connection.query(sql8,function(err, results) {
	if(err) console.log(err);
	console.log(results);
		connection.end();
	});


