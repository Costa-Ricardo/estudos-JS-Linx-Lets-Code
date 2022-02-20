CREATE DATABASE ERP_Project
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE ERP_Project;

CREATE TABLE Funcionarios(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Nome VARCHAR(150) NOT NULL,
    CPF INT NOT NULL UNIQUE,
    CTPS INT NOT NULL UNIQUE,
    
    Gerente INT NOT NULL,
    
    CONSTRAINT PK_Funcionarios PRIMARY KEY (Id),
    CONSTRAINT FK_Funcionarios_Gerente FOREIGN KEY (Gerente) REFERENCES Funcionarios(Id)
    
    -- NÃO CONSEGUI FAZER A RECURSIVIDADE, POIS NÃO ENTENDI COMO ELA FUNCIONA
);

CREATE TABLE Estoquistas(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Funcionario INT NOT NULL,
    
	CONSTRAINT PK_Estoquista PRIMARY KEY (Id),
    CONSTRAINT FK_Estoquistas_Funcionario FOREIGN KEY (Funcionario) REFERENCES Funcionarios(Id)
);

CREATE TABLE AtendentesOnline(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Funcionario INT NOT NULL,
    
	CONSTRAINT PK_AtendenteOnline PRIMARY KEY (Id),
    CONSTRAINT FK_AtendentesOnline_Funcionario FOREIGN KEY (Funcionario) REFERENCES Funcionarios(Id)
);

CREATE TABLE Tecnicos(
	Id INT NOT NULL AUTO_INCREMENT,
    
    CNH INT NOT NULL UNIQUE,
    
    Funcionario INT NOT NULL,
    
	CONSTRAINT PK_Tecnico PRIMARY KEY (Id),
    CONSTRAINT FK_Tecnicos_Funcionario FOREIGN KEY (Funcionario) REFERENCES Funcionarios(Id)
);

CREATE TABLE Logistas(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Funcionario INT NOT NULL,
    
	CONSTRAINT PK_Logista PRIMARY KEY (Id),
    CONSTRAINT FK_Logistas_Funcionario FOREIGN KEY (Funcionario) REFERENCES Funcionarios(Id)
);

CREATE TABLE Clientes(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Nome VARCHAR(150) NOT NULL,
    CPF INT NOT NULL UNIQUE,
    Telefone INT NOT NULL,
    
    CONSTRAINT PK_Funcionarios PRIMARY KEY (Id)
);

CREATE TABLE Fornecedores(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Nome VARCHAR(250) NOT NULL,
    
    CONSTRAINT PK_Fornecedor PRIMARY KEY (Id)
);

CREATE TABLE Requisicoes(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Produto VARCHAR(100) NOT NULL, -- O QUE SERIA PRODUTO? O CÓDIGO? 
    Quantidade INT NOT NULL,
    
    Estoquista INT NOT NULL,
    Fornecedor INT NOT NULL,
    
    CONSTRAINT PK_Requisicoes PRIMARY KEY (Id),
    CONSTRAINT FK_Requisicoes_Estoquista FOREIGN KEY (Estoquista) REFERENCES Estoquistas(Id),
    CONSTRAINT FK_Requisicoes_Fornecedor FOREIGN KEY (Fornecedor) REFERENCES Fornecedores(Id)
);

CREATE TABLE SolicitacoesEstoque(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Descricao VARCHAR(200) NOT NULL,
    Produto INT NOT NULL,
    Quantidade INT NOT NULL,
    
    Estoquista INT NOT NULL,
    Tecnico INT NOT NULL,
    
    CONSTRAINT PK_SolicitacoesEstoque PRIMARY KEY (Id),
    CONSTRAINT FK_SolicitacoesEstoque_Estoquista FOREIGN KEY (Estoquista) REFERENCES Estoquistas(Id),
    CONSTRAINT FK_SolicitacoesEstoque_Tecnico FOREIGN KEY (Tecnico) REFERENCES Tecnicos(Id)
);

CREATE TABLE OrdemServicos(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Valor Decimal(9, 2) NOT NULL,
    Descricao VARCHAR(300) NOT NULL,
    Tempo DATE NOT NULL,
    
    Tecnico INT NOT NULL,
    Logista INT NOT NULL,
    
    CONSTRAINT PK_OrdemServicos PRIMARY KEY (Id),
    CONSTRAINT FK_OrdemServicos_Tecnico FOREIGN KEY (Tecnico) REFERENCES Tecnicos(Id),
    CONSTRAINT FK_OrdemServicos_Logista FOREIGN KEY (Logista) REFERENCES Logistas(Id)
);

CREATE TABLE PedidosManutencoes(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Descricao VARCHAR(300) NOT NULL,
    Valor Decimal(9, 2) NOT NULL,
        
    Cliente INT NOT NULL,
    Logista INT NOT NULL,
    
    CONSTRAINT PK_PedidosManutencoes PRIMARY KEY (Id),
    CONSTRAINT FK_PedidosManutencoes_Cliente FOREIGN KEY (Cliente) REFERENCES Clientes(Id),
    CONSTRAINT FK_PedidosManutencoes_Logista FOREIGN KEY (Logista) REFERENCES Logistas(Id)
);

CREATE TABLE PedidosCompras(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Produto VARCHAR(100) NOT NULL,
    Valor DECIMAL(9, 2) NOT NULL,
    Desconto DECIMAL(5, 2),
        
    Cliente INT NOT NULL,
    Logista INT NOT NULL,
    
    CONSTRAINT PK_PedidosCompras PRIMARY KEY (Id),
    CONSTRAINT FK_PedidosCompras_Cliente FOREIGN KEY (Cliente) REFERENCES Clientes(Id),
    CONSTRAINT FK_PedidosCompras_Logista FOREIGN KEY (Logista) REFERENCES Logistas(Id)
);

CREATE TABLE SuporteOnline(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Descricao VARCHAR(300) NOT NULL,
    DataAbertura DATE NOT NULL,
    Tipo INT NOT NULL,   -- O QUE SERIA ESSE TIPO?
        
    Cliente INT NOT NULL,
    AtendenteOnline INT NOT NULL,
    
    CONSTRAINT PK_SuporteOnline PRIMARY KEY (Id),
    CONSTRAINT FK_SuporteOnline_Cliente FOREIGN KEY (Cliente) REFERENCES Clientes(Id),
    CONSTRAINT FK_SuporteOnline_AtendenteOnline FOREIGN KEY (AtendenteOnline) REFERENCES AtendentesOnline(Id)
);