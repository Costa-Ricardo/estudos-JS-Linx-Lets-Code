-- criar uma procedure que liste os clientes com base em um filtro de id e nome
-- Esse proc tem que ter 2 parametros, id e nome

DELIMITER //
CREATE PROCEDURE ListarClientes(
	id int,
    nome varchar(250)
) 
BEGIN
	SELECT c.id, c.nome 
    FROM CLIENTES c 
    WHERE 
		(id is null or c.id = id)
        and 
        (nome is null or c.nome like CONCAT("%", nome, "%"));
END //

DELIMITER ; 

CALL ListarClientes(1, 'Ricardo');

--  Listagem dos Clientes e quantidade de pedidos de compras
-- Crie uma VIEW que retorne o vendedor que mais realizou atendimentos a clientes de manutenção e valor total
-- Listagem do gerente de cada departamento
-- Crie uma procedure que me permita realizar um filtro de nome no estoquista que atendeu mais solicitações
-- Qual foi o produto mais solicitado estoquistas e sua quantidade
-- Tecnico que solicitou mais produtos
-- Tecnicos que atenderam mais ordem de serviços
-- Tempo médio gasto dos tecnicos durante as ordens de serviço
-- Mês que teve maior ocorrencia de solicitações de suporte online
-- Atendente que realizou o maior número de atendimentos
-- Listagem dos tipos de suporte online e total de ocorrência