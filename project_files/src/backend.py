from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain_community.llms import Ollama

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
llm = Ollama(model="tinyllama")

def update_load_time(new_load_time):
    with open('loadtime.json', 'w') as file:
        file.write(str(new_load_time))

@app.route('/invoke-ollama', methods=['POST'])
def invoke_ollama():
    try:
        data = request.get_json()
        prompt = data['prompt']
        response = llm.invoke(prompt)
        return jsonify({'response': response}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/update-load-time', methods=['POST'])
def update_load_time_endpoint():
    try:
        new_load_time = request.json['load_time']
        update_load_time(new_load_time)
        return jsonify({'message': 'Load time updated successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
