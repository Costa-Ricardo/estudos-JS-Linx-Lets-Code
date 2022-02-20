-- INNER JOIN
-- Listagem de tecnicos que não possuem CNH
SELECT * FROM FUNCIONARIOS WHERE ID IN (SELECT FUNCIONARIO FROM TECNICOS WHERE CNH IS NULL); -- proposto no exercicio_ERP

select t.id, f.nome, f.cpf, f.ctps 
from funcionarios f 
	join tecnicos t on t.Funcionario = f.id 
where t.cnh is null;

-- Listar atendentes que já realizaram atendimento online a um cliente em novembro
SELECT * FROM FUNCIONARIOS WHERE ID IN (
	SELECT FUNCIONARIO FROM ATENDENTESONLINE WHERE ID IN ( 
		SELECT ATENDENTEONLINE FROM SUPORTEONLINE WHERE MONTH(DATA) = 11
        )
	); -- SEM INNER JOIN

SELECT DISTINCT AO.ID, F.NOME, F.CPF, F.CTPS FROM FUNCIONARIOS F 
	JOIN ATENDENTESONLINE AO ON AO.FUNCIONARIO = F.ID 
	JOIN SUPORTEONLINE SO ON SO.ATENDENTEONLINE = AO.ID 
    WHERE MONTH(SO.DATA) = 11;

-- LEFT 
select c.id, c.nome, c.cpf, pm.id, pm.descricao, pm.valor 
from clientes c 
left join pedidosmanutencoes pm on pm.cliente = c.id;

-- RIGHT
select c.id, c.nome, c.cpf, pm.id, pm.descricao, pm.valor 
from  pedidosmanutencoes pm 
right join clientes c on pm.cliente = c.id;

-- FULL / UNION
select c.id, c.nome, c.cpf, pm.id, pm.descricao, pm.valor 
from  pedidosmanutencoes pm 
right join clientes c on pm.cliente = c.id

UNION

select c.id, c.nome, c.cpf, pm.id, pm.descricao, pm.valor 
from clientes c 
left join pedidosmanutencoes pm on pm.cliente = c.id;

-- GROUP BY
-- Listagem de atendentes online e a quantidade de chamados atendidos ordernar pela quantidade de forma decrescente
SELECT AO.ID, F.NOME, F.CPF, COUNT(AO.ID) AS QUANTIDADE_ATENDIMENTO
FROM FUNCIONARIOS f
	JOIN ATENDENTESONLINE AO ON AO.FUNCIONARIO = F.ID
    JOIN SUPORTEONLINE SO ON SO.ATENDENTEONLINE = AO.ID
GROUP BY AO.ID, F.NOME, F.CPF 
ORDER BY COUNT(AO.ID) DESC;

-- HAVING
-- Listagem de atendentes online que atenderam mais de 3 chamados e a quantidade de chamados atendidos ordernar pela quantidade de forma decrescente
SELECT AO.ID, F.NOME, F.CPF, COUNT(AO.ID) AS QTDE_ATENDIMENTO
FROM FUNCIONARIOS f
	JOIN ATENDENTESONLINE AO ON AO.FUNCIONARIO = F.ID
    JOIN SUPORTEONLINE SO ON SO.ATENDENTEONLINE = AO.ID
GROUP BY AO.ID, F.NOME, F.CPF 
HAVING COUNT(AO.ID) > 3
ORDER BY COUNT(AO.ID) DESC;

-- COPIAR OS DADOS DE UMA TABELA PARA UMA NOVA TABELA, insere o resultado de um select
INSERT INTO NovaTabela 
select Nome from clientes;


