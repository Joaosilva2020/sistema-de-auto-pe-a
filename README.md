Sistema de Gestão de Auto Peças
Este é um projeto simples e basico Full Stack desenvolvido para o gerenciamento de inventário de uma loja de auto peças. O sistema permite cadastrar, listar, editar e remover itens do estoque, utilizando uma arquitetura moderna com comunicação via API.

🚀 Tecnologias Utilizadas
Front-end
HTML5 & CSS3: Estrutura e estilização da interface.

JavaScript (ES6+): Lógica de consumo de API e manipulação do DOM.

Fetch API: Comunicação assíncrona com o servidor.

 __________________________________________________________________________________-


Back-end
Python 3.12: Linguagem principal do servidor.

Flask: Micro-framework para criação da API REST.

Flask-CORS: Gerenciamento de permissões de acesso entre Front e Back.

Psycopg2: Driver de conexão com o banco de dados.

 __________________________________________________________________________________-


Banco de Dados
PostgreSQL: Banco de dados relacional para persistência dos dados.

📋 Funcionalidades (CRUD)
✅ Cadastrar Peças: Adiciona novos itens com nome, valor e quantidade.

✅ Listar Peças: Visualização em tempo real dos itens salvos no banco.

✅ Editar Peças: Atualização de informações de itens existentes.

✅ Excluir Peças: Remoção definitiva de itens do sistema.

🛠️ Como Configurar o Projeto
1. Pré-requisitos
Python instalado.

PostgreSQL instalado e rodando.

pgAdmin 4 (opcional, para visualização).

 __________________________________________________________________________________-


2. Configuração do Banco de Dados
No seu terminal do PostgreSQL ou via Query Tool no pgAdmin, execute:

SQL
CREATE TABLE pecas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    quantidade INTEGER NOT NULL
);

 __________________________________________________________________________________-


3. Configuração do Back-end
Navegue até a pasta back-end:

Bash
cd back-end
python3 -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate
pip install flask flask-cors psycopg2
No arquivo app.py, ajuste as credenciais de conexão:

Python
database="postgres",
user="postgres",
password="SUA_SENHA",
Inicie o servidor:

Bash
python3 app.py
4. Executando o Front-end
Basta abrir o arquivo front-end/index.html em qualquer navegador moderno.
 __________________________________________________________________________________-

    Estrutura de Pastas
Plaintext
SISTEMA DE AUTO PEÇA/
├── back-end/
│   ├── venv/          # Ambiente virtual Python
│   └── app.py         # Servidor Flask e rotas da API
└── front-end/
    ├── index.html     # Interface do usuário
    ├── script.js      # Lógica em JavaScript
    └── style.css      # Estilização (CSS)

    _________________________________________________________________________-
 Autor
Joao Gabriel da Silva Estudante de Análise e Desenvolvimento de Sistemas (ADS)
