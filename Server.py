# requeriment
# flask-slqachemy
# flask
# flask_marshmallow
# flask_cors
from flask import Flask , request , jsonify
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy
import io, os
from base64 import b64encode
from datetime import datetime
from flask_cors import CORS



# initial
basedir = os.path.abspath(os.path.dirname(__file__))
app = Flask(__name__)
db =  SQLAlchemy(app)
ma = Marshmallow(app)
CORS(app)

# setting
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir,'spirit.sqlite')
app.config['DEBUG'] = True
app.config['SQLALCHEMY_ECHO'] = True
app.config['TESTING'] = True
app.config['SECRET_KEY'] = os.urandom(16)
app.config['CONSOLE_MODE'] = True

# routes
@app.route('/api/msg/receive',methods=['GET'])
def receive_msg():
    
    return Messages_schema.jsonify(Message.query.all())


@app.route('/')
def index():
    return "<h1>Que haces aqui?</h1>"

@app.route('/api/msg/send',methods=['POST'])
def send_msg():
    if( bool(request.get_json())):
        data = request.get_json()
        key = os.urandom(10)
        key =  b64encode(key).decode('utf-8')
        key = key.replace('=','')
        new_msg = Message(id =key ,
                            user = data['user'],
                            text = data['text'])
        
        db.session.add(new_msg)
        db.session.commit()
        return jsonify({"status":"200"})
    else:
        return jsonify({"status":"404"})



# models
class Message(db.Model):
    id = db.Column( db.String(10), primary_key = True )
    user = db.Column(db.String(28) , nullable = False)
    text = db.Column(db.String(250), nullable = False)
    timestamp = db.Column(db.DateTime, nullable = False,default = datetime.utcnow())




# schemas
class MessagesSchema(ma.Schema):
    class Meta:
        fields = ('id','user','text','timestamp')


Messages_schema = MessagesSchema(many=True)


# Server start
db.create_all()
app.run( host="0.0.0.0")

