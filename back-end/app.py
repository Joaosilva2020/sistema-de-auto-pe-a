import psycopg2
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def get_db_connection():
    return psycopg2.connect(
        host="localhost",
        database="postgres", # Nome do banco do meu pgAdmin
        user="postgres",      # meu nome de usuario padrao
        password="1234", # senha do pgAdmin 
        port="5432"
    )

@app.route('/pecas', methods=['GET'])
def listar_pecas():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM pecas;')
    pecas = cur.fetchall()
    cur.close()
    conn.close()
    # Transforma em formato que o JavaScript entende
    return jsonify([{"id": p[0], "nome": p[1], "valor": float(p[2]), "quantidade": p[3]} for p in pecas])

# Rota para SALVAR
@app.route('/pecas', methods=['POST'])
def salvar_peca():
    dados = request.get_json()
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('INSERT INTO pecas (nome, valor, quantidade) VALUES (%s, %s, %s)',
                (dados['nome'], dados['valor'], dados['quantidade']))
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({"mensagem": "Salvo com sucesso!"}), 201

if __name__ == '__main__':
    app.run(debug=True, port=5000)