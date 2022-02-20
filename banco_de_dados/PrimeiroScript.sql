CREATE DATABASE Aula
DEFAULT CHARACTER SET utf8 
-- Ler os caracteres especiais esse utf8 Portugês brasil
DEFAULT COLLATE utf8_general_ci;

USE Aula;
CREATE TABLE Alunos(
	Id INT NOT NULL,
    
    Nome VARCHAR(255) NOT NULL,
    CPF CHAR(14) NOT NULL,
    Telefone CHAR(15),
    
    CONSTRAINT PK_Alunos PRIMARY KEY (Id)
);

CREATE TABLE TurmaAlunos (
	Id INT NOT NULL,
    
    Aluno INT NOT NULL,
    
    CONSTRAINT PK_TurmaAlunos PRIMARY KEY (Id),
    CONSTRAINT FK_TurmaAlunos_Aluno FOREIGN KEY (Aluno) REFERENCES Alunos(Id)
);

ALTER TABLE Alunos MODIFY CPF INTEGER;
ALTER TABLE TurmaAlunos ADD Nota DECIMAL (4, 2) NOT NULL;

CREATE TABLE Turmas (
	Id INT NOT NULL,
    
    CONSTRAINT PK_Turmas PRIMARY KEY (Id)
);

ALTER TABLE TurmaAlunos
	ADD Turma INT NOT NULL,
    ADD CONSTRAINT FK_TurmaAlunos_Turma FOREIGN KEY (Turma) REFERENCES Turmas(Id);
    