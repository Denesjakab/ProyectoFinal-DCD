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
    age = db.Column(db.Integer)
    height = db.Column(db.Numeric(5,2))
    goal = db.Column(db.Enum('gain', 'lose', name='goal_enum'))
    goal_kg = db.Column(db.Numeric(5,2))
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)
    is_active = db.Column(db.Boolean(), nullable=False, default=True)

    progress = db.relationship('Progress', back_populates='user', cascade="all, delete", passive_deletes=True)
    plans = db.relationship('Plan', back_populates='user', cascade="all, delete", passive_deletes=True)

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
            "goal_kg": self.goal_kg,
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
    photo_url = db.Column(db.String(500))
    progress_percentage = db.Column(db.Integer)
    notes = db.Column(db.String(255))

    user_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete="CASCADE"), nullable=False)
    user = db.relationship(User, back_populates='progress')

    def calculate_progress_percentage(self):
        if not self.user:
            raise ValueError('No hay un usuario asociado al progreso')
        
        user = self.user
        if not user.goal or not user.goal_kg:
            return 0

        initial_progress = Progress.query.filter_by(user_id=user.id).order_by(Progress.date.asc()).first()
        if not initial_progress:
            return 0

        

        initial_weight = float(initial_progress.weight)
        current_weight = float(self.weight)
        goal_kg = float(user.goal_kg)



        if user.goal == 'gain':
            if current_weight < initial_weight:
                return 0
            percentage = ((current_weight - initial_weight) / (goal_kg - initial_weight)) * 100
        elif user.goal == 'lose':
            if current_weight > initial_weight:
                return 0
            percentage = ((initial_weight - current_weight) / (initial_weight - goal_kg)) * 100
        else:
            raise ValueError('Objetivo no válido')

        return max(0, min(percentage, 100))

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

    user_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete="CASCADE"), nullable=False)
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
