CREATE DATABASE Locadora
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE Locadora;

CREATE TABLE Funcionarios(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Nome VARCHAR(150) NOT NULL,
    Matricula CHAR(25) NOT NULL UNIQUE,
    Endereco VARCHAR(255),
    Telefone CHAR(15) NOT NULL,
    Salario DECIMAL(9, 2) NOT NULL,
    
    CONSTRAINT PK_Funcionarios PRIMARY KEY (Id)
);

CREATE TABLE Atendentes(
	Id INT NOT NULL AUTO_INCREMENT, 
    
    Funcionario INT NOT NULL,
    
    CONSTRAINT PK_Atendentes PRIMARY KEY (Id),
    CONSTRAINT FK_Atendentes_Funcionario FOREIGN KEY (Funcionario) REFERENCES Funcionarios(Id)
);

CREATE TABLE Administradores(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Codigo INT NULL UNIQUE,
    Funcionario INT NOT NULL,
    
    CONSTRAINT PK_Administradores PRIMARY KEY (Id),
    CONSTRAINT FK_Administradores_Funcionario FOREIGN KEY (Funcionario) REFERENCES Funcionarios(Id)
);

CREATE TABLE Clientes(
	Id INT NOT NULL AUTO_INCREMENT,
    
    NumeroAssiciado CHAR(15) NOT NULL UNIQUE,
    Nome VARCHAR(150) NOT NULL,
    Telefone CHAR(15) NOT NULL,
    Endereco VARCHAR(255),
    
    CONSTRAINT PK_Clientes PRIMARY KEY (Id)
);

CREATE TABLE Atores(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Nome VARCHAR(150) NOT NULL,
    PaisNascimento CHAR(20) NOT NULL,
    DataNascimento DATE NOT NULL,
    
    CONSTRAINT PK_Atores PRIMARY KEY (Id)
);

CREATE TABLE Filmes(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Identificador CHAR(15) NOT NULL UNIQUE,
    Titulo VARCHAR(150) NOT NULL,
    Genero CHAR(25) NOT NULL,
    Estudio CHAR(20),
    AnoProducao CHAR(4) NOT NULL,
    PaisOrigem CHAR(20),
    Idioma CHAR(80) NOT NULL,
    Duracao DATETIME NOT NULL,
    
    CONSTRAINT PK_Filmes PRIMARY KEY (Id)
);

CREATE TABLE FilmesAtores(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Papel VARCHAR(50) NOT NULL,
    EhEstrela BOOLEAN,
    
    Ator INT NOT NULL,
    Filme INT NOT NULL, 
    
    CONSTRAINT PK_FilmesAtores PRIMARY KEY (Id),
    CONSTRAINT FK_FilmesAtores_Ator FOREIGN KEY (Ator) REFERENCES Atores(Id),
    CONSTRAINT FK_FilmesAtores_Filme FOREIGN KEY (Filme) REFERENCES Filmes(Id)
);

CREATE TABLE Fitas(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Numero INT NOT NULL,
    DataCompra DATE NOT NULL,
    
    Filme INT NOT NULL,
    
    CONSTRAINT PK_Fitas PRIMARY KEY (Id),
    CONSTRAINT FK_Fitas_Filme FOREIGN KEY (Filme) REFERENCES Filmes(Id)
);

CREATE TABLE Alugueis(
	Id INT NOT NULL AUTO_INCREMENT,
    
    DataAluguel INT NOT NULL UNIQUE,
    
	Ator INT NOT NULL,
    Filme INT NOT NULL,
    Fita INT NOT NULL,
    
    CONSTRAINT PK_Alugueis PRIMARY KEY (Id),
    CONSTRAINT FK_Alugueis_Ator FOREIGN KEY (Ator) REFERENCES Atores(Id),
    CONSTRAINT FK_Alugueis_Filme FOREIGN KEY (Filme) REFERENCES Filmes(Id),
    CONSTRAINT FK_Alugueis_Fita FOREIGN KEY (Fita) REFERENCES Fitas(Id)
);

-- funcionario( id, gerente -> fk_funcionario );