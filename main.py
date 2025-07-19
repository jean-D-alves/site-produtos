from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def main():
    return render_template('main.html'
                           )

@app.route('/produto_venda/1')
def parametro():
    return render_template('produtos.html')
@app.route('/produto_venda/2')
def parametro2():
    return render_template('produtos.html')
@app.route('/produto_venda/3')
def parametro3():
    return render_template('produtos.html')

if __name__ == '__main__':
    app.run(debug=True)