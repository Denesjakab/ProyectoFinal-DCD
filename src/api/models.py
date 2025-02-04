from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    name = db.Column(db.String(200))
    role = db.Column(db.Enum('trainer', 'client', name='role_enum'), default='client')
    age = db.Column(db.Integer())
    height = db.Column(db.Numeric(5,2))
    goal = db.Column(db.Enum('gain', 'lose', name='goal_enum'))
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)
    is_active = db.Column(db.Boolean(), nullable=False, default=True)

    progress = db.relationship('Progress', back_populates='user')
    plans = db.relationship('Plan', back_populates='user')

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "role": self.role,
            "age": self.age,
            "height": str(self.height),
            "goal": self.goal,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "is_active": self.is_active
        }
    
class Progress(db.Model):
    __tablename__ = 'progress'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, default=datetime.now)
    weight = db.Column(db.Numeric(5,2))
    waist = db.Column(db.Numeric(5,2))
    abdomen = db.Column(db.Numeric(5,2))
    arm = db.Column(db.Numeric(5,2))
    leg = db.Column(db.Numeric(5,2))
    photo_url = db.Column(db.String(255))
    progress_percentage = db.Column(db.Integer)
    notes = db.Column(db.String(255))

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship(User, back_populates='progress')

    def __repr__(self):
        return f'<Progres {self.id} - {self.date} del usuario {self.user_id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "date": self.date,
            "weight": str(self.weight),
            "waist": str(self.waist),
            "abdomen": str(self.abdomen),
            "arm": str(self.arm),
            "leg": str(self.leg),
            "photo_url": self.photo_url,
            "progress_percentage": self.progress_percentage,
            "notes": self.notes
        }



class Plan(db.Model):
    __tablename__ = 'plan'
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, default=datetime.now)
    file_url = db.Column(db.String(255))
    notes = db.Column(db.String(255))

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship(User, back_populates='plans')

    def __repr__(self):
        return f'<Plan {self.id} - {self.date} del usuario {self.user_id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "date": self.date,
            "file_url": self.file_url,
            "notes": self.notes
        }
