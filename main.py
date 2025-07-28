from flask import Flask, render_template,request,jsonify
app = Flask(__name__)
@app.route('/')
def main():
    return render_template('main.html')

@app.route('/produto_venda/1')
def parametro():
    return render_template('produtos.html')
@app.route('/produto_venda/2')
def parametro2():
    return render_template('produtos.html')
@app.route('/produto_venda/3')
def parametro3():
    return render_template('produtos.html')

@app.route('/comprar', methods=['POST'])
def comprar():
    if not request.is_json:
        return jsonify({"erro": "Conteúdo inválido. Esperado JSON."}), 400

    data = request.get_json()
    print("🔍 Dados recebidos:", data)
    if not data:
        return jsonify({"erro": "JSON vazio ou malformado"}), 400

    nome = data.get('nome')
    valor = data.get('valor')

    # Aqui: checagem mais segura
    if not nome or valor is None:
        return jsonify({"erro": "Dados do produto incompletos."}), 400

    return jsonify({
        "mensagem": "Compra recebida com sucesso!",
        "nome": nome,
        "valor": valor
    })

if __name__ == '__main__':
    app.run(debug=True)