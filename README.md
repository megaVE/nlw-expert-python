# NLW Expert Python
EN: Development of a back-end application in Python, using Flask as the framework, environment setup and project best practices with Virtualenv, Pylint, and code versioning using pre-commit, barcode generation with python-barcode, and testing with Pytest.

PT: Desenvolvimento de uma aplicação back-end em Python, utilizando Flask como framework, preparação de ambiente e boas práticas de projeto com Virtualenv, Pylint e versionamento de código usando pre-commit, criação de código de barras com python-barcode e testes com Pytest.

## Description (Descrição)

The project consists in a Flask server capable of generating barcodes through a string input using the following JSON request in a POST request:

(O projeto consiste em um servidor Flask capaz de gerar códigos de barra por meio de uma entrada de texto usando a seguinte requisição JSON com uma requisição POST:)

{
  "product_code": [code]
}

There is also a Frontend page availabe made with React, which can be executed to make the experience better.

(Também possui uma página Frontend feita em React, que pode ser executada para deixar a experiência melhor.)

## Installing (Instalação)

### Python (Flask Backend)

Requirements:

(Requisitos:)

- Python3
- PIP3
- Virtualenv

Enter the command:

(Digite o comando:)

### py -m venv .venv (Windows)
### python3 -m venv .venv (Linux)

to configure the virtual environment and then

(para configurar o ambiente virtual e então)

### .venv/Scripts/activate (Windows)
### . .venv/bin/activate (Linux)

to initialize it. Afterwards, use

(para inicializá-lo. Depois utilize)
  
### pip install -r requirements.txt

to install the Backend dependencies, and then

(para instalar as dependências do Backend, e então)

## python run.py

to run the Backend server on the port 3000.

(para rodar o servidor Backend, na porta 3000.)

### React (Frontend)

Requirements:

(Requisitos:)

- Node JS
- NPM

Inside the folder "/frontend", enter the command:

(Dentro da pasta "/frontend", digite o comando:)

#### npm install

to install the required dependencies via NPM. Then enter

(para instalar as dependências necessárias pelo NPM. Então digite)

### npm run dev

to run the Frontend interface.

(para rodar a interface Frontend.)

![1707404141070](https://github.com/user-attachments/assets/1d277959-f101-4ead-a638-e7e213d92360)

![1707404141052](https://github.com/user-attachments/assets/ba889f98-fea1-4a22-9410-ea7b26bc4e95)

![1707404141171](https://github.com/user-attachments/assets/f4b439cf-9049-46d8-9d04-28f009b4ed6b)
