const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if(message.content.charAt(0) !== "+") return;
  if(message.author.id !== "373872608027869184") return;
  var server = bot.guilds.get("481902964710309908");
  var role = server.roles.get("563337112204738570");
  message.delete();
    //let sicon = bot.roles.get(563337112204738570).toString
  
  //Информация о сервере КАРТИНКА
  
  let infoimage = new Discord.RichEmbed()
    .setColor("#704c84")
    .setImage("https://media.discordapp.net/attachments/482848904786739210/605816963230597140/welcome.png"); 
    message.channel.send(infoimage);
  
  //Информация о сервере
  
  let info = new Discord.RichEmbed()
    .setColor("#704c84")
    .setAuthor("Добро Пожаловать!", "https://media.discordapp.net/attachments/482848904786739210/605531963599618072/images-boring.jpg?width=683&height=674")
    .setTitle("Приветствуем тебя в нашем уютном уголке.")
    .addField("Мы всегда **рады приветствовать** новых участников! ", "Наша главная **цель** - обеспечить ваш уют и комфортное времяпрепровождение. \n \n Первым делом - ознакомься с правилами нашего сервера <#605820399627927552> .")
    .addField("А сейчас, небольшая навигация по серверу, чтобы ты знал, где стоит побывать:", "<#605532414189633547> - **Основная** информация о сервере. Сейчас ты находишься здесь. \n <#599218489479397386> - **Правила** сервера. \n <#481902965142192146> - **Текстовой** канал для адекватного общения между пользователями. \n <#604694855549190145> - **Текстовой** канал для спама, флуда и команд бота.")
    message.channel.send(info);
    
    //магазин КАРТИНКА
  
  let shopimage = new Discord.RichEmbed()
    .setColor("#704c84")
    .setImage("https://media.discordapp.net/attachments/482848904786739210/605794466887893002/rules.png"); 
    message.channel.send(shopimage);
  
   //Обзор ролей
  
    let rolesembed = new Discord.RichEmbed()
    .setColor("#704c84")
    .setAuthor("💠 Роли сервера")
    .setTitle("Здесь подробно описана информация о ролях сервера.")
    .setDescription(" ￼ \n <@&481909193222127617> - Главный админ сервера. По важным вопросам и предложениям. \n \n <@&481908791693148160> - Старшая модерация сервера. \n \n <@&560206255579201588> - Младшая модерация сервера. \n \n <@&605797747882196999> - Пользователи поддержавшие сервер при помощи Nitro Server Boost. \n \n <@&605798128276471845> - Пользователи имеющие активный ютуб канал. Выдаётся по усмотрению <@&481909193222127617>. \n \n <@&605798606531723307> - Пользователи поддержавшие проект материально. \n \n ") //
    message.channel.send(rolesembed);
  
  //Магазин ролей
  
    let shopembed = new Discord.RichEmbed()
    .setColor("#704c84")
    .setAuthor("💠 Кастомные роли")
    .setTitle("Прописав команду +shop, вы можете просмотреть цены доступных ролей.")
    .addField("На нашем сервере существуют кастомные роли. Вы можете купить их за валюту сервера.", "Список всех доступных ролей: ")
    .setDescription(" ￼ \n <@&563337112204738570> \n \n <@&556456167552057355> \n \n <@&481909656210505738> \n \n <@&482899314822086657> \n \n <@&482174981426380820> \n \n <@&482174885377081346> \n \n <@&481913227941380107> \n \n <@&481908057295552544>") //
    .addField("Чтобы приобрести одну из ролей, пропишите команду +buy и номер желаемой роли.", "Например: +buy 3.")
    message.channel.send(shopembed);
  
  //работа КАРТИНКА
  
  let workimage = new Discord.RichEmbed()
    .setColor("#704c84")
    .setImage("https://media.discordapp.net/attachments/482848904786739210/605802788060135434/work.png"); 
    message.channel.send(workimage);
  
  //работа
  
  //let works = ["Безработный","Дворник","Строитель","Уборщик","Официант","Бизнесмен",]
  
    let workembed = new Discord.RichEmbed()
    .setColor("#704c84")
    .setAuthor("💠 Работа | Work")
    .setTitle("Прописав команду +work, вы можете работать! Чем больше вы работаете - тем выше ваша должность, и зарплата. \n Список всех должностей:")
    .addField("Работать можно каждые 10 минут!", " ￼ ")
    .setDescription(" ￼ \n  <@&605804243449806850> - Получает 50 долларов. \n \n <@&605804817146970120> - Получает 100 долларов. \n \n <@&605804908687523840>  - Получает 450 долларов. \n \n <@&605805028472651796>  - Получает 550 долларов. \n \n <@&605805098450288650> - Получает 600 долларов.  \n \n") //
    .addField("Также на нашем сервере есть команда +box. Её можно прописывать каждые 30 минут. Что-бы открыть box, пропишите команду +unbox!", "Например: +unbox 3.")
    .addField("Но на этом список не заканчивается! Также на нашем сервере есть команда +daily, и +weekly.", "Команду +daily можно использовать каждый день. А команду +weekly каждую неделю!")
    message.channel.send(workembed);
}

module.exports.help = {
  name:"info"
}