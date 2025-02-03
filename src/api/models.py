from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    name = db.Colum(db.String(200))
    role = db.Colum(db.Enum('trainer', 'client', name='role_enum'), default='client')
    age = db.Colum(db.Integer())
    height = db.Colum(db.Numeric(5,2))
    goal = db.Colum(db.Enum('gain', 'lose', name='goal_enum'))
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)
    is_active = db.Column(db.Boolean(), nullable=False, default=True)

    progres = db.relationship('Progres', back_populates='user')
    plans = db.relationship('Plan', back_populates='user')

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }
    
class Progres(db.Model):
    __tablename__ = 'progress'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, default=datetime.now)
    weight = db.Colum(db.Numeric(5,2))
    waist = db.Colum(db.Numeric(5,2))
    abdomen = db.Colum(db.Numeric(5,2))
    arm = db.Colum(db.Numeric(5,2))
    leg = db.Colum(db.Numeric(5,2))
    photo_url = db.Column(db.String(255))
    progress_percentage = db.Column(db.Integer())
    notes = db.Column(db.String(255))

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = db.relationship(User, back_populates='progres')


class Plan(db.Model):
    __tablename__ = 'plans'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, default=datetime.now)
    file_url = db.Column(db.String(255))
    notes = db.Column(db.String(255))

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = db.relationship(User, back_populates='plans')
