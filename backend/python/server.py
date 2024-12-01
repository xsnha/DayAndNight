from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "欢迎来到洲叶游戏的后端！"

if __name__ == '__main__':
    app.run(debug=True) 