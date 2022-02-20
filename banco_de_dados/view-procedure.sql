-- VIEW
-- Listagem de todos os CLientes e quantidade de pedidos de manutenção realizado por eles
CREATE OR REPLACE VIEW ListarClientesPedidos AS 
SELECT DISTINCT PM.CLIENTE, C.NOME, COUNT(PM.ID) 
	FROM CLIENTES C 
		LEFT JOIN PEDIDOSMANUTENCOES PM ON PM.CLIENTE = C.ID       
GROUP BY C.ID;

SELECT * FROM ListarClientesPedidos;

-- PROCEDURES 
DELIMITER //

CREATE PROCEDURE Teste( 
	id int,
    nome varchar(250)
)
BEGIN
	select id, nome;
END //

DELIMITER // ; 

call Teste(1, "Oi");