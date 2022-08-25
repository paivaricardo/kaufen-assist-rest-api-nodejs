-- Scripts DML para a inserção de valores exemplo teste da base de dados db_kaufen
USE db_kaufen;

SHOW TABLES;

SELECT * FROM tb_compra;
SELECT * FROM tb_compra_produto;
SELECT * FROM tb_produto;
SELECT * FROM tb_status_compra_dom;
SELECT * FROM tb_tipo_pagamento_dom;

INSERT INTO
	tb_status_compra_dom(dsc_status_compra)
VALUES
	('Em análise'),
    ('Em autorização'),
    ('Efetivada');

INSERT INTO
	tb_tipo_pagamento_dom(dsc_tipo_pagamento)
VALUES
	('À vista'),
    ('A prazo com boleto'),
    ('A prazo com cartão');
    
INSERT INTO
	tb_produto(nome, descricao, preco)
VALUES
	('Monitor', 'Monitor para computadores', 1000.00),
    ('Gabinete para computador', 'Gabinete para computador da marca ORTY', 150.00);

INSERT INTO
	tb_compra(total, id_tipo_pagamento, id_status_compra)
VALUES
	(3000.00, 1, 3),
    (450.00, 1, 2);

INSERT INTO
	tb_compra_produto(id_produto, id_compra, qtd_compra)
VALUES
	(1, 1, 3),
    (2, 2, 3);

SELECT
	p.nome, c.id_compra
FROM
	tb_produto AS p
INNER JOIN
	tb_compra AS c;