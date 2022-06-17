CREATE DATABASE SailorClub;
USE SailorClub;

CREATE TABLE usuario (
idUsuario int primary key auto_increment,
nome varchar (45),
nickname varchar (45),
nascimento date, 
email varchar (80),
celular char (11),
senha varchar (12)
);

CREATE TABLE quiz (
idQuiz int primary key auto_increment, 
dtHora datetime default current_timestamp,
ptsSailorMoon int,
ptsSailorMercury int,
ptsSailorMars int,
ptsSailorJupiter int,
ptsSailorVenus int,
fkUsuario int,
foreign key (fkUsuario) references usuario (idUsuario) 
);

CREATE TABLE aviso (
	idAviso int primary key auto_increment,
	titulo varchar(100),
    descricao varchar(150),
	fkUsuario int auto_increment,
	foreign key (fkUsuario) references usuario (idUsuario)
); 

   SELECT 
            a.idAviso AS idAviso,
            a.titulo,
            a.descricao,
            a.fkUsuario,
            u.idUsuario AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM aviso as a
            INNER JOIN usuario u
                ON a.fkUsuario = u.idUsuario;

select * from quiz;

select * from usuario;

select * from aviso;

SET foreign_key_checks = 0;
-- Delete o que tiver que deletar

SET foreign_key_checks = 1;  
-- // Ative a checagem novamente

SET foreign_key_checks = 0;  
-- // Delete o que tiver que deletar

SET foreign_key_checks = 1;  
-- // Ative a checagem novamente



