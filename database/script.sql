create database IF not exists db_produtos_fornecedores;
use db_produtos_fornecedores;

create table if not exists fornecedor (
    id_fornecedor int auto_increment primary key,
    nome varchar(150) not null,
    cnpj varchar(14) not null unique
);

CREATE TABLE IF NOT EXISTS produto (
    id_produto int auto_increment primary key,
    descricao varchar(200) not null,
    preco decimal(10, 2) not null,
    peso decimal(10, 2) not null,
    fk_id_fornecedor int default null,
    constraint fk_produto_fornecedor 
        foreign key (fk_id_fornecedor) 
        references fornecedor(id_fornecedor) 
        on delete set null
       on update cascade
);

insert into fornecedor (nome, cnpj) 

values ('Tech Distribuidora Ltda', '12345678000199'),
('Global Parts S.A.', '98765432000188'),
('Industrial Supplies', '45678912000177');

insert into produto (descricao, preco, peso, fk_id_fornecedor) 

values ('Mouse Gamer RGB', 150.00, 0.30, 1),
('Teclado Mecânico', 350.00, 0.90, 1),
('Monitor 24 Polegadas', 1200.00, 4.50, 2),
('Cabo HDMI 2m', 45.00, 0.15, null),
('Suporte Articulado para Monitor', 220.00, 2.10, 3);